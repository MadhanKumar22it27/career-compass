import { useState } from "react";

export default function Home({ onEvaluate }) {
  const [resume, setResume] = useState(null);
  const [jd, setJd] = useState("");
  const [dragActive, setDragActive] = useState(false); // required

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!resume || !jd) return alert("Upload resume and enter JD!");

    console.log("📦 Home.jsx — sending data...");
    console.log("➡ JD:", jd);
    console.log("➡ Resume:", resume);

    onEvaluate(jd, resume); // send correctly
  };

  return (
    <div className="
      min-h-screen pt-28 px-4 
      flex flex-col items-center 
      bg-gray-50 dark:bg-gray-900 
      text-gray-900 dark:text-white 
      transition-all
    ">
      {/* Title */}
      <h1 className="text-4xl font-bold mb-6 text-center">
        Career <span className="text-indigo-600 dark:text-indigo-400">Compass</span>
      </h1>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="
          bg-white dark:bg-gray-800 
          shadow-xl rounded-xl 
          p-6 w-full max-w-lg space-y-5 
          border border-gray-200 dark:border-gray-700
          transition
        "
      >
        {/* ================================
            RESUME UPLOAD (Drag & Drop)
        ================================= */}
        <div>
          <label className="block mb-2 font-semibold">Resume (PDF)</label>

          <div
            className={`
              border-2 border-dashed rounded-lg p-6 
              text-center cursor-pointer transition
              ${
                dragActive
                  ? "border-indigo-500 bg-indigo-50 dark:bg-gray-700"
                  : "border-gray-300 dark:border-gray-600"
              }
            `}
            onDragEnter={(e) => {
              e.preventDefault();
              setDragActive(true);
            }}
            onDragLeave={(e) => {
              e.preventDefault();
              setDragActive(false);
            }}
            onDragOver={(e) => {
              e.preventDefault();
              setDragActive(true);
            }}
            onDrop={(e) => {
              e.preventDefault();
              setDragActive(false);
              const file = e.dataTransfer.files[0];
              if (file && file.type === "application/pdf") {
                setResume(file);
              } else {
                alert("Please upload a PDF file only.");
              }
            }}
            onClick={() => document.getElementById("resumeInput").click()}
          >
            <input
              id="resumeInput"
              type="file"
              accept="application/pdf"
              className="hidden"
              onChange={(e) => setResume(e.target.files[0])}
            />

            <p className="text-gray-600 dark:text-gray-300">
              {resume ? (
                <span className="font-semibold text-indigo-600 dark:text-indigo-400">
                  {resume.name}
                </span>
              ) : (
                "Drag & drop your resume here, or click to upload (PDF only)"
              )}
            </p>
          </div>
        </div>

        {/* ================================
            JOB DESCRIPTION
        ================================= */}
        <div>
          <label className="block mb-2 font-semibold">Job Description</label>
          <textarea
            rows={6}
            value={jd}
            onChange={(e) => setJd(e.target.value)}
            placeholder="Paste the JD here..."
            className="
              w-full border rounded p-3 
              bg-white dark:bg-gray-700 
              border-gray-300 dark:border-gray-600 
              text-gray-900 dark:text-white
              placeholder-gray-500 dark:placeholder-gray-400
              transition
            "
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="
            w-full bg-indigo-600 dark:bg-indigo-500 
            text-white py-3 rounded-lg font-semibold 
            hover:bg-indigo-700 dark:hover:bg-indigo-600 
            transition
          "
        >
          Evaluate Resume
        </button>
      </form>
      {/* ================================  
            ⭐ HOW IT WORKS SECTION  
      ================================ */} 
      <section
        id="how-it-works"
        className="
          w-full max-w-5xl mx-auto mt-20 mb-16
          px-4 py-12 
          bg-white dark:bg-gray-800 
          rounded-2xl shadow-lg border 
          border-gray-200 dark:border-gray-700
          transition
        "
      >

        <h2 className="text-3xl font-bold text-center mb-10">
          How It <span className="text-indigo-600 dark:text-indigo-400">Works</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-10">

          {/* Step 1 */}
          <div className="text-center group">
            <div className="
              w-20 h-20 mx-auto mb-4  
              flex items-center justify-center 
              bg-indigo-100 dark:bg-indigo-900 
              rounded-full shadow 
              group-hover:scale-110 transition-all
            ">
              <span className="text-3xl">📄</span>
            </div>

            <h3 className="text-xl font-semibold mb-2">1. Upload Resume</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Upload your PDF resume or drag & drop it into the box.
            </p>
          </div>

          {/* Step 2 */}
          <div className="text-center group">
            <div className="
              w-20 h-20 mx-auto mb-4  
              flex items-center justify-center 
              bg-purple-100 dark:bg-purple-900 
              rounded-full shadow 
              group-hover:scale-110 transition-all
            ">
              <span className="text-3xl">🧠</span>
            </div>

            <h3 className="text-xl font-semibold mb-2">2. Paste Job Description</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Add the JD of the role you want to evaluate your resume against.
            </p>
          </div>

          {/* Step 3 */}
          <div className="text-center group">
            <div className="
              w-20 h-20 mx-auto mb-4  
              flex items-center justify-center 
              bg-pink-100 dark:bg-pink-900
              rounded-full shadow 
              group-hover:scale-110 transition-all
            ">
              <span className="text-3xl">🚀</span>
            </div>

            <h3 className="text-xl font-semibold mb-2">3. Get ATS Insights</h3>
            <p className="text-gray-600 dark:text-gray-300">
              AI evaluates your resume and gives actionable suggestions instantly.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}
