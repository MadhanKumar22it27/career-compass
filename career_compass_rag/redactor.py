# redactor.py
import re

PII_PATTERNS = [
    (re.compile(r"\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b", re.I), "<EMAIL>"),
    (re.compile(r"\b(?:\+?\d{1,3}[-.\s]?)?(?:\(?\d{2,4}\)?[-.\s]?)?\d{6,10}\b"), "<PHONE>"),
    (re.compile(r"\b\d{12}\b"), "<ID>")  # simple long numeric id example
]

def redact_pii(text: str) -> str:
    out = text
    for patt, token in PII_PATTERNS:
        out = patt.sub(token, out)
    return out
