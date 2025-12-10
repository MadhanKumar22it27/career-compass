# chunker.py
import re
from typing import List, Dict

def simple_tokenizer(text: str):
    # naive tokenizer for chunk sizing; replace with tiktoken/HF tokenizer for production
    return text.split()

def chunk_text(text: str, chunk_size: int = 300, overlap: int = 50) -> List[Dict]:
    tokens = simple_tokenizer(text)
    chunks = []
    i = 0
    idx = 0
    while i < len(tokens):
        chunk_tokens = tokens[i:i+chunk_size]
        chunk_text = " ".join(chunk_tokens)
        chunks.append({
            "id": f"chunk_{idx}",
            "text": chunk_text
        })
        idx += 1
        i += chunk_size - overlap
    return chunks
