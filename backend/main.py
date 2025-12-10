from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from backend.routes.rag_routes import router as rag_router

app = FastAPI(
    title="Career Compass - Backend",
    description="Resume Evaluation + RAG Engine",
    version="1.0.0"
)

# =========================
# 🔥 CORS (for Frontend Use)
# =========================
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],          # allow all frontends for now (MVP)
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# =========================
# 🔥 Health Check Route
# =========================
@app.get("/")
def root():
    return {
        "status": "ok",
        "service": "Career Compass - RAG Backend (MVP)"
    }

# =========================
# 🔥 Register Routers
# =========================
app.include_router(rag_router)