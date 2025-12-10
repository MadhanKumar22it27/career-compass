// src/components/Loading.jsx

export default function Loading() {
  return (
    <div className="
      min-h-screen flex flex-col items-center justify-center 
      bg-gray-50 dark:bg-gray-900
      text-gray-900 dark:text-white
      transition
    ">

      {/* Spinning Gradient Ring */}
      <div className="relative w-20 h-20 mb-6">
        <div className="
          absolute inset-0 
          rounded-full 
          border-4 border-transparent 
          border-t-indigo-500 border-l-indigo-400 
          animate-spin
        "></div>

        <div className="
          absolute inset-2 
          rounded-full 
          bg-white dark:bg-gray-800
        "></div>
      </div>

      {/* Text */}
      <p className="text-xl font-semibold animate-pulse tracking-wide">
        Analyzing resume...
      </p>
    </div>
  );
}