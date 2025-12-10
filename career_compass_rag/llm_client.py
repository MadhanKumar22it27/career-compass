# llm_client.py
import os
import json
from career_compass_rag.prompt_templates import SYSTEM_PROMPT, USER_TEMPLATE

# Mock LLM for offline dev
def mock_llm_call(job_title, jd, resume_summary, retrieved_chunks):
    citations = [c["id"] for c in retrieved_chunks[:2]]
    matched = []
    missing = []
    # naive keyword set - tweak as needed
    keywords = ["python","django","aws","sql","git","rest","api","flask","postgres","react"]
    for tok in keywords:
        if tok in jd.lower():
            if tok in resume_summary.lower():
                matched.append(tok)
            else:
                missing.append(tok)
    overall_just = f"Matched {len(matched)} required skills; missing {len(missing)} (citations: {','.join(citations)})"
    if missing:
        tip = f"Highlight any project or bullet that demonstrates {missing[0]} — include stack, endpoints, and outcome."
    else:
        tip = "Add measurable outcomes (numbers, % improvements, latencies) to existing bullets to stand out."
    ats = matched + missing
    return {
        "overall_justification": overall_just,
        "actionable_tip": tip,
        "citations": citations,
        "ats_keywords": ats,
        "confidence": 0.9
    }

# Example: OpenAI wiring (use your key & model)
def openai_llm_call(openai_api_key, system_prompt, user_prompt, model="gpt-4o-mini"):
    import openai
    openai.api_key = openai_api_key
    resp = openai.ChatCompletion.create(
        model=model,
        messages=[
            {"role":"system","content":system_prompt},
            {"role":"user","content":user_prompt}
        ],
        max_tokens=400,
        temperature=0.0
    )
    return resp["choices"][0]["message"]["content"]
