# ingest.py
from career_compass_rag.chunker import chunk_text
from career_compass_rag.redactor import redact_pii

def ingest_resume_text(raw_text):
    redacted = redact_pii(raw_text)
    chunks = chunk_text(redacted)
    return chunks
