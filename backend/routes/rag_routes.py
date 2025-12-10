from fastapi import APIRouter, UploadFile, File, Form
from fastapi.responses import JSONResponse
from backend.services.rag_service import evaluate_resume
from backend.services.file_handler import save_upload_temp, remove_file
import traceback

router = APIRouter(prefix="/rag", tags=["Resume Evaluation"])

@router.post("/evaluate")
async def evaluate_resume_route(
    jd_text: str = Form(...),
    resume: UploadFile = File(...)
):
    """
    Endpoint:
    - Accepts JD as plain text
    - Accepts resume as uploaded PDF
    - Extracts text from PDF
    - Passes both to RAG evaluator
    """

    # 1. Save uploaded file temporarily
    temp_path = await save_upload_temp(resume)

    try:
        # 2. Extract PDF text
        from PyPDF2 import PdfReader
        reader = PdfReader(temp_path)
        resume_text = ""

        for page in reader.pages:
            resume_text += page.extract_text() or ""

        # 3. Run evaluation service
        result = evaluate_resume(jd_text, resume_text)

        # 4. Return clean JSON back to frontend
        return JSONResponse(content={
            "status": "success",
            "evaluation": result
        })

    except Exception as e:
        print("🔥 RAG ROUTE ERROR 🔥")
        traceback.print_exc()    # <= prints full error to terminal

        return JSONResponse(
            status_code=500,
            content={
                "status": "error",
                "message": str(e),
            }
        )


    finally:
        # 5. Remove temp file
        remove_file(temp_path)