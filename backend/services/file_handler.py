import aiofiles
import uuid
import os

UPLOAD_TMP_DIR = "temp_uploads"
os.makedirs(UPLOAD_TMP_DIR, exist_ok=True)

# Save uploaded file to a temp path
async def save_upload_temp(upload_file):
    extension = os.path.splitext(upload_file.filename)[1]
    temp_name = f"{uuid.uuid4()}{extension}"
    destination_path = os.path.join(UPLOAD_TMP_DIR, temp_name)

    async with aiofiles.open(destination_path, "wb") as f:
        content = await upload_file.read()
        await f.write(content)

    return destination_path

# Remove a temporary file if exists
def remove_file(path):
    try:
        if os.path.exists(path):
            os.remove(path)
    except Exception as e:
        print(f"Warning: failed to delete temp file {path}: {e}")