// src/services/evaluate.js

const API_URL = "http://127.0.0.1:8000/rag/evaluate";

export default async function evaluateResume(jd_text, resumeFile) {
  console.log("📌 evaluateResume() CALLED WITH:");
  console.log("   ➤ jd_text =", jd_text);
  console.log("   ➤ resume =", resumeFile);

  if (!jd_text || !resumeFile) {
    throw new Error("Missing JD text or resume file");
  }

  const formData = new FormData();
  formData.append("jd_text", jd_text);
  formData.append("resume", resumeFile);

  const response = await fetch(API_URL, {
    method: "POST",
    body: formData,
  });

  const raw = await response.text();
  console.log("📩 RAW BACKEND RESPONSE:", raw);

  if (!response.ok) {
    throw new Error("Failed to evaluate resume");
  }

  return JSON.parse(raw).evaluation;
}