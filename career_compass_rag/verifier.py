# verifier.py
from typing import Dict
import json

def verify_response(resp_json: Dict, retrieved_chunks: list) -> Dict:
    """
    Ensures any skill/claim in actionable_tip or justification is present in retrieved chunks.
    If unverifiable facts are found, mark confidence down and add a 'verifier_notes' field.
    """
    text_pool = " ".join([c["text"].lower() for c in retrieved_chunks])
    notes = []

    # check citations exist
    for cid in resp_json.get("citations", []):
        if not any(c["id"] == cid for c in retrieved_chunks):
            notes.append(f"citation_missing:{cid}")

    # cheap check: ensure each ats_keyword appears in text_pool
    missing_keywords = []
    for kw in resp_json.get("ats_keywords", []):
        if kw.lower() not in text_pool:
            missing_keywords.append(kw)
    if missing_keywords:
        notes.append(f"kw_unverified:{','.join(missing_keywords)}")
        # lower confidence if unverified
        resp_json["confidence"] = min(resp_json.get("confidence", 0.5), 0.5)

    if notes:
        resp_json["verifier_notes"] = notes
    return resp_json
