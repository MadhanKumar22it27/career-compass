# tests/test_end_to_end.py
from career_compass_rag.evaluator import evaluate_resume_against_jd

def test_e2e_mock():
    # Use a very small sample PDF path. If running tests, ensure sample file exists.
    sample_pdf = "sample_data/sample_resume.pdf"
    jd = "Looking for Python, Django, REST API, AWS"
    out = evaluate_resume_against_jd(sample_pdf, jd)
    assert "overall_score" in out
    assert "actionable_tip" in out
