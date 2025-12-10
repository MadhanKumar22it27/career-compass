export default function HowItWorks() {
  return (
    <div className="min-h-screen pt-28 px-6 
      bg-gray-50 dark:bg-gray-900 
      text-gray-900 dark:text-white transition">

      <h1 className="text-4xl font-bold text-center mb-10">
        How <span className="text-indigo-600 dark:text-indigo-400">Career Compass</span> Works
      </h1>

      <div className="max-w-4xl mx-auto space-y-10">

        {/* Step 1 */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow border border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-semibold mb-3">1. Upload Resume</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            You upload a PDF resume. The backend extracts text using the PyPDF2 
            parser and prepares it for analysis. No data is stored permanently — 
            the file is processed in-memory and deleted immediately.
          </p>
        </div>

        {/* Step 2 */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow border border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-semibold mb-3">2. Paste Job Description</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            You paste any job description. We extract required skills, must-haves, 
            optional skills, and role expectations.
          </p>
        </div>

        {/* Step 3 */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow border border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-semibold mb-3">3. AI-Powered Scoring Engine</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            The system sends both your resume text and the JD into our AI evaluation 
            engine. Using LLaMA 3.1 via Groq, it generates:
          </p>

          <ul className="list-disc ml-6 mt-3 space-y-2 text-gray-700 dark:text-gray-300">
            <li>Overall job fit score</li>
            <li>Skill match %</li>
            <li>Project relevance & impact</li>
            <li>ATS keyword compatibility</li>
            <li>Missing skill list</li>
            <li>Personalized improvement tips</li>
          </ul>
        </div>

        {/* Step 4 */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow border border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-semibold mb-3">4. Results Dashboard</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            You instantly get a structured result page with colorful score sections, 
            keyword clouds, missing skills, and actionable suggestions.
          </p>
        </div>

        {/* Step 5 */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow border border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-semibold mb-3">5. No Data Storage</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Once the evaluation is complete, your resume is deleted for privacy. 
            We follow a strict no-storage policy.
          </p>
        </div>

      </div>

    </div>
  );
}
