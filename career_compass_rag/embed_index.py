# embed_index.py
from sentence_transformers import SentenceTransformer
import numpy as np
import faiss

class VectorIndex:
    def __init__(self, model_name="all-MiniLM-L6-v2"):
        self.model = SentenceTransformer(model_name)
        self.index = None
        self.metadata = []  # list of dicts aligned with vectors

    def build(self, chunks):
        if not chunks:
            raise ValueError("No chunks provided to build index.")
        texts = [c["text"] for c in chunks]
        embs = self.model.encode(texts, convert_to_numpy=True, show_progress_bar=False)
        faiss.normalize_L2(embs)
        d = embs.shape[1]
        self.index = faiss.IndexFlatIP(d)
        self.index.add(embs)
        self.metadata = chunks.copy()

    def upsert(self, chunks):
        texts = [c["text"] for c in chunks]
        embs = self.model.encode(texts, convert_to_numpy=True, show_progress_bar=False)
        faiss.normalize_L2(embs)
        self.index.add(embs)
        self.metadata.extend(chunks)

    def search(self, query, top_k=5):
        if self.index is None:
            return []
        q_emb = self.model.encode([query], convert_to_numpy=True)
        faiss.normalize_L2(q_emb)
        D, I = self.index.search(q_emb, top_k)
        results = []
        for idx, score in zip(I[0], D[0]):
            if idx < len(self.metadata):
                m = self.metadata[idx].copy()
                m["score"] = float(score)
                results.append(m)
        return results
