import { useState, useEffect } from "react";
import Loading from "./components/Loading";
import Home from "./pages/Home";
import ResultPage from "./pages/ResultPage";
import evaluateResume from "./services/evaluate";
import Navbar from "./components/Navbar";

function App() {
  // -----------------------
  // 🌙 THEME SWITCH
  // -----------------------
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    // Apply the theme class to <html>
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);

    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  // -----------------------
  // 🎯 EVALUATION LOGIC
  // -----------------------
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleEvaluate = async (jd_text, resumeFile) => {
    console.log("🔥 App.jsx — handleEvaluate()");
    console.log("JD:", jd_text);
    console.log("File:", resumeFile);

    setLoading(true);

    try {
      const response = await evaluateResume(jd_text, resumeFile);
      console.log("✅ Response from backend:", response);
      setResult(response);
    } catch (err) {
      console.error("❌ Error:", err);
    }

    setLoading(false);
  };

  // -----------------------
  // 🎨 RENDER UI
  // -----------------------
  return (
    <div className={theme === "dark" ? "dark min-h-screen" : "min-h-screen"}>
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      {loading && <Loading />}

      {!loading && result && (
        <ResultPage result={result} onBack={() => setResult(null)} />
      )}

      {!loading && !result && <Home onEvaluate={handleEvaluate} />}
    </div>
  );

}

export default App;