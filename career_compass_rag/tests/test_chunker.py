# tests/test_chunker.py
from career_compass_rag.chunker import chunk_text

def test_chunking():
    s = " ".join([f"word{i}" for i in range(1000)])
    chunks = chunk_text(s, chunk_size=100, overlap=10)
    assert len(chunks) > 0
    assert chunks[0]["id"].startswith("chunk_")
