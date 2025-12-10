from career_compass_rag.evaluator import evaluate_resume_against_jd

def evaluate_resume(jd_text: str, resume_text: str):
    """
    Always returns a VALID structure.
    Even if evaluator returns garbage, strings, None, or broken JSON.
    """

    raw = evaluate_resume_against_jd(jd_text, resume_text)

    # If evaluator returned something completely invalid
    if not isinstance(raw, dict):
        raw = {}

    # Build final safe structure
    result = {
        "status": raw.get("status", "error"),
        "overall_score": raw.get("overall_score", 0),

        "score_breakdown": {
            "skills_match": raw.get("score_breakdown", {}).get("skills_match", 0)
                if isinstance(raw.get("score_breakdown"), dict) else 0,

            "experience_relevance": raw.get("score_breakdown", {}).get("experience_relevance", 0)
                if isinstance(raw.get("score_breakdown"), dict) else 0,

            "project_alignment": raw.get("score_breakdown", {}).get("project_alignment", 0)
                if isinstance(raw.get("score_breakdown"), dict) else 0,

            "ats_compatibility": raw.get("score_breakdown", {}).get("ats_compatibility", 0)
                if isinstance(raw.get("score_breakdown"), dict) else 0,
        },

        "matched_skills": raw.get("matched_skills", []) if isinstance(raw.get("matched_skills"), list) else [],
        "missing_skills": raw.get("missing_skills", []) if isinstance(raw.get("missing_skills"), list) else [],
        "actionable_tips": raw.get("actionable_tips", []) if isinstance(raw.get("actionable_tips"), list) else [],
        "ats_keywords": raw.get("ats_keywords", []) if isinstance(raw.get("ats_keywords"), list) else [],
        "skill_enhancements": raw.get("skill_enhancements", []) if isinstance(raw.get("skill_enhancements"), list) else [],
        "confidence": raw.get("confidence", 0.0),

        "_raw_model_output": raw.get("_raw_model_output", "")  # debug
    }

    return result
