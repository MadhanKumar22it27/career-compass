# 🚀 **Career Compass — AI Resume Evaluator**

### *AI-powered Resume Analyzer with ATS Scoring, Skill Matching, and Job Fit Evaluation*

Career Compass is a full-stack AI web application that evaluates your resume against any Job Description (JD).
It uses a RAG pipeline + LLM inference (Groq/OpenAI) to generate:

* 🎯 Job-fit score
* 🧩 Matched + missing skills
* 📊 ATS optimization report
* 💡 Actionable improvement tips
* ⚡ Confidence score
* 📁 PDF parsing & extraction

Frontend built using **React + Tailwind**
Backend built using **FastAPI + Python**
AI engine powered by **career_compass_rag** module.

---

# ✨ Features

### 🔍 **AI Resume Evaluation**

* Extracts text from PDF resumes
* Compares resume against JD
* Generates a professional evaluation report

### 🧠 **LLM-Powered Analysis**

* Uses RAG + custom evaluator
* Scores resume on:

  * Skills Match
  * Experience Relevance
  * Project Alignment
  * ATS Compatibility

### 🎯 **ATS Optimization**

* Extracts high-priority ATS keywords
* Highlights missing skills
* Gives actionable rewrite tips

### 🎨 **Responsive Frontend**

* Fully animated UI
* Drag-and-drop resume upload
* Dark/Light theme
* Premium navbar
* Beautiful result dashboard

### ⚡ **Backend**

* FastAPI REST API
* PDF parsing using PyPDF2
* Clean modular services
* Temp file auto cleanup

---

# 🏗️ Project Structure

```
career-compass/
│
├── backend/                  # FastAPI server
│   ├── routes/
│   ├── services/
│   ├── main.py
│   └── requirements.txt
│
├── career_compass_rag/       # AI evaluator engine
│   ├── evaluator.py
│   ├── utils.py
│   ├── model_loader.py
│   └── __init__.py
│
├── career-compass-frontend/  # React + Tailwind UI
│   ├── src/
│   ├── public/
│   └── package.json
│
├── .gitignore
└── README.md
```

---

# 🧪 Tech Stack

### **Frontend**

* React (Vite)
* TailwindCSS
* Dark/Light mode
* Drag & Drop file upload

### **Backend**

* FastAPI
* PyPDF2
* Uvicorn
* Python 3.x

### **AI / RAG**

* custom evaluator logic
* Groq/OpenAI API (your choice)
* Text extraction + model prompt engineering

---

# 🚀 Getting Started

## 1️⃣ Clone the Repo

```
git clone https://github.com/<your-username>/career-compass.git
cd career-compass
```

---

# 🖥️ Backend Setup (FastAPI)

## 2️⃣ Create Python Environment

```
python -m venv venv
```

Activate:

### Windows:

```
venv\Scripts\activate
```

### Mac/Linux:

```
source venv/bin/activate
```

---

## 3️⃣ Install Backend Dependencies

```
cd backend
pip install -r requirements.txt
```

---

## 4️⃣ Run the Backend

```
uvicorn backend.main:app --reload --port 8000
```

Backend available at:

```
http://127.0.0.1:8000
```

---

# 🎨 Frontend Setup (React + Tailwind)

## 5️⃣ Install Frontend Dependencies

```
cd career-compass-frontend
npm install
```

---

## 6️⃣ Start Frontend

```
npm run dev
```

Frontend available at:

```
http://localhost:5173
```

---

# 🔐 Environment Variables

Create a `.env` file inside backend root:

```
OPENAI_API_KEY=your_key
GROQ_API_KEY=your_key
MODEL_NAME=llama3
```

(Adjust based on your setup.)

---

# 📡 API Endpoint

### **POST** `/rag/evaluate`

Uploads PDF + JD and returns structured AI evaluation.

### Form-Data:

```
jd_text: <string>
resume: <PDF file>
```

---

# 🛡️ .gitignore

Your repo should ignore:

```
.env
__pycache__/
node_modules/
uploads/
*.log
*.pdf
```
