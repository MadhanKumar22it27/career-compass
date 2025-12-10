# retriever.py
from typing import List, Dict

class Retriever:
    def __init__(self, vector_index):
        self.index = vector_index

    def retrieve(self, query: str, top_k: int = 5) -> List[Dict]:
        return self.index.search(query, top_k=top_k)
