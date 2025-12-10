import React from "react";

export default function ResultPage({ result, onBack }) {
  if (!result) {
    return (
      <div className="
        min-h-screen flex items-center justify-center
        bg-gray-50 dark:bg-gray-900
        text-gray-900 dark:text-white
      ">
        <p className="text-xl">No result found. Go back and submit the form.</p>
      </div>
    );
  }

  return (
    <div className="
      min-h-screen p-6 pt-28
      bg-gray-50 dark:bg-gray-900
      text-gray-900 dark:text-white
      transition
    ">

      {/* Back Button */}
      <button
        onClick={onBack}
        className="
          mb-6 px-4 py-2 
          bg-indigo-600 dark:bg-indigo-500 
          text-white rounded shadow
          hover:bg-indigo-700 dark:hover:bg-indigo-600
          transition
        "
      >
        ⬅ Back
      </button>

      <h1 className="text-4xl font-bold mb-6">Evaluation Result</h1>

      {/* Helper class for all cards */}
      {/** small trick: this constant makes code readable */}
      <Card title="Overall Score">
        <p className="text-3xl font-extrabold text-indigo-500 dark:text-indigo-400">
          {result.overall_score}/100
        </p>
      </Card>

      <Card title="Score Breakdown">
        <ul className="space-y-2">
          {Object.entries(result.score_breakdown || {}).map(([key, value]) => (
            <li key={key} className="flex justify-between">
              <span className="capitalize">{key.replace("_", " ")}</span>
              <span className="font-bold">{value}/100</span>
            </li>
          ))}
        </ul>
      </Card>

      <Card title="Matched Skills">
        <div className="flex flex-wrap gap-2">
          {(result.matched_skills || []).map((skill, idx) => (
            <span
              key={idx}
              className="
                px-3 py-1 rounded-full
                bg-green-600 dark:bg-green-700
                text-white
              "
            >
              {skill}
            </span>
          ))}
        </div>
      </Card>

      <Card title="Missing Skills">
        <div className="flex flex-wrap gap-2">
          {(result.missing_skills || []).map((skill, idx) => (
            <span
              key={idx}
              className="
                px-3 py-1 rounded-full
                bg-red-600 dark:bg-red-700
                text-white
              "
            >
              {skill}
            </span>
          ))}
        </div>
      </Card>

      <Card title="Actionable Tips">
        <ul className="list-disc ml-5 space-y-2">
          {(result.actionable_tips || []).map((tip, idx) => (
            <li key={idx}>{tip}</li>
          ))}
        </ul>
      </Card>

      <Card title="ATS Keywords">
        <div className="flex flex-wrap gap-2">
          {(result.ats_keywords || []).map((keyword, idx) => (
            <span
              key={idx}
              className="
                px-3 py-1 rounded-full
                bg-blue-600 dark:bg-blue-700
                text-white
              "
            >
              {keyword}
            </span>
          ))}
        </div>
      </Card>

      <Card title="Skill Enhancements">
        <ul className="list-disc ml-5 space-y-2">
          {(result.skill_enhancements || []).map((enh, idx) => (
            <li key={idx}>{enh}</li>
          ))}
        </ul>
      </Card>

      <Card title="Confidence Level">
        <p className="text-xl font-bold">
          {(result.confidence * 100).toFixed(1)}%
        </p>
      </Card>
    </div>
  );
}

/* 🔥 Reusable UI Card Component (way cleaner code) */
function Card({ title, children }) {
  return (
    <div className="
      mb-6 p-5 rounded-lg shadow
      bg-white dark:bg-gray-800
      border border-gray-200 dark:border-gray-700
      transition
    ">
      <h2 className="text-2xl font-semibold mb-3">{title}</h2>
      {children}
    </div>
  );
}