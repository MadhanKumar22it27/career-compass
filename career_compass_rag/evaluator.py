# career_compass_rag/evaluator.py
import json
import os
import re
import pathlib
from dotenv import load_dotenv

# Groq client
from groq import Groq

from career_compass_rag.prompt_templates import SYSTEM_PROMPT, USER_TEMPLATE

# Load .env placed next to this file
env_path = pathlib.Path(__file__).parent / ".env"
load_dotenv(dotenv_path=env_path)

GROQ_API_KEY = os.getenv("GROQ_API_KEY")
GROQ_MODEL = os.getenv("GROQ_MODEL", "llama-3.1-8b-instant")

# Init Groq client
client = Groq(api_key=GROQ_API_KEY)

# -------------------------------
# JSON helpers (robust)
# -------------------------------
def extract_first_json_block(text: str):
    start = text.find("{")
    if start == -1:
        return None
    depth = 0
    for i in range(start, len(text)):
        if text[i] == "{":
            depth += 1
        elif text[i] == "}":
            depth -= 1
            if depth == 0:
                return text[start:i+1]
    return None

def clean_json(text: str):
    if text is None:
        return ""
    text = text.strip()
    text = re.sub(r"```json|```", "", text)
    text = text.replace('\\"', '"')
    text = re.sub(r",\s*}", "}", text)
    text = re.sub(r",\s*]", "]", text)
    return text

def safe_json_parse(raw_output: str):
    # 1. Direct parse
    try:
        parsed = json.loads(raw_output)
        if isinstance(parsed, dict):
            return parsed
    except:
        pass

    # 2. Extract JSON block and try again
    block = extract_first_json_block(raw_output)
    if block:
        try:
            parsed = json.loads(clean_json(block))
            if isinstance(parsed, dict):
                return parsed
        except:
            pass

    # 3. Aggressive cleanup & try
    cleaned = re.sub(r"[^\{\}\[\]\":,0-9a-zA-Z\.\-_\s]", "", raw_output or "")
    try:
        parsed = json.loads(cleaned)
        if isinstance(parsed, dict):
            return parsed
    except:
        pass

    # 4. Final safe fallback (always a dict)
    return {
        "status": "error",
        "message": "Model returned invalid JSON",
        "overall_score": 0,
        "score_breakdown": {
            "skills_match": 0,
            "experience_relevance": 0,
            "project_alignment": 0,
            "ats_compatibility": 0
        },
        "matched_skills": [],
        "missing_skills": [],
        "actionable_tips": [],
        "ats_keywords": [],
        "skill_enhancements": [],
        "confidence": 0.0,
        "_raw_model_output": raw_output
    }

# -------------------------------
# LLM call (Groq)
# -------------------------------
def call_llm(prompt: str):
    """
    Call Groq's chat completions. Returns text (string) or an error string.
    """
    try:
        # Groq's Python SDK exposes a chat.completions.create endpoint
        # Messages must be an array of {role, content}
        response = client.chat.completions.create(
            model=GROQ_MODEL,
            messages=[
                {"role": "system", "content": SYSTEM_PROMPT},
                {"role": "user", "content": prompt},
            ],
            temperature=0.2,
        )

        # Response shape is OpenAI-like; extract content safely
        # Many Groq SDK wrappers return response.choices[0].message["content"]
        try:
            # try the common structure
            return response.choices[0].message["content"]
        except Exception:
            try:
                # fallback: sometimes it's response.choices[0].message.content
                return response.choices[0].message.content
            except Exception:
                # last fallback: string conversion
                return str(response)

    except Exception as exc:
        return f"ERROR: {str(exc)}"

# -------------------------------
# Main entry
# -------------------------------
def evaluate_resume_against_jd(jd_text: str, resume_text: str):
    """
    Builds prompt, calls Groq, attempts to parse JSON, returns dict.
    """
    prompt = USER_TEMPLATE.format(jd_text=jd_text, resume_text=resume_text)
    raw_output = call_llm(prompt)

    # Keep raw for debugging
    parsed = safe_json_parse(raw_output)
    if parsed.get("status") != "error":
        parsed["status"] = "ok"

    parsed["_raw_model_output"] = raw_output
    return parsed
