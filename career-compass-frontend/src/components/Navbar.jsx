// export default function Navbar({ theme, toggleTheme }) {
//   return (
//     <nav
//       className="
//         w-full px-6 py-4
//         fixed top-0 left-0 z-50
//         bg-white/80 dark:bg-gray-900/80
//         backdrop-blur-md
//         border-b border-gray-200 dark:border-gray-700
//         shadow-sm flex justify-between items-center
//       "
//     >
//       {/* Logo */}
//       <h1 className="text-2xl font-bold tracking-wide select-none">
//         <span className="text-indigo-600 dark:text-indigo-400">Career</span>
//         <span className="text-gray-800 dark:text-gray-100">Compass</span>
//       </h1>

//       {/* Right Section */}
//       <div className="flex items-center gap-4">

//         {/* GitHub Link */}
//         <a
//           href="https://github.com"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="
//             text-gray-700 dark:text-gray-300
//             hover:text-indigo-600 dark:hover:text-indigo-400
//             transition font-medium
//           "
//         >
//           GitHub
//         </a>

//         {/* Dark Mode Toggle */}
//         <button
//           onClick={toggleTheme}
//           className="
//             w-10 h-10 flex items-center justify-center
//             rounded-full shadow-sm
//             bg-gray-200 dark:bg-gray-700
//             hover:scale-110 active:scale-95
//             transition-all duration-200
//           "
//         >
//           <span
//             className="
//               text-xl transform transition-transform duration-300
//             "
//             style={{ transform: theme === "light" ? "rotate(0deg)" : "rotate(180deg)" }}
//           >
//             {theme === "light" ? "🌙" : "☀️"}
//           </span>
//         </button>

//       </div>
//     </nav>
//   );
// }

// import { useState } from "react";

// export default function Navbar({ theme, toggleTheme }) {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [profileOpen, setProfileOpen] = useState(false);

//   return (
//     <div
//       className="
//         fixed top-0 left-0 w-full z-50
//         bg-white/70 dark:bg-gray-900/70
//         backdrop-blur-xl shadow-sm
//         border-b border-gray-200 dark:border-gray-700
//         transition-all
//       "
//     >
//       {/* ✨ Gradient Border */}
//       <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>

//       {/* Navbar Content */}
//       <nav className="px-6 py-4 flex justify-between items-center">
        
//         {/* Logo */}
//         <h1 className="text-2xl font-bold tracking-wide cursor-pointer">
//           <span className="text-indigo-600 dark:text-indigo-400">Career</span>
//           <span className="text-gray-900 dark:text-gray-100">Compass</span>
//         </h1>

//         {/* Desktop Menu */}
//         <div className="hidden md:flex items-center gap-8">
          
//           {/* Links */}
//           <a
//             href="#"
//             className="
//               text-gray-700 dark:text-gray-300 font-medium relative
//               group transition
//             "
//           >
//             Features
//             <span
//               className="
//                 absolute left-0 -bottom-1 w-0 h-[2px] bg-indigo-500
//                 group-hover:w-full transition-all duration-300
//               "
//             ></span>
//           </a>

//           <a
//             href="#"
//             className="
//               text-gray-700 dark:text-gray-300 font-medium relative
//               group transition
//             "
//           >
//             Pricing
//             <span
//               className="
//                 absolute left-0 -bottom-1 w-0 h-[2px] bg-indigo-500
//                 group-hover:w-full transition-all duration-300
//               "
//             ></span>
//           </a>

//           {/* GitHub */}
//           <a
//             href="https://github.com"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="
//               text-gray-700 dark:text-gray-300 font-medium relative
//               group transition
//             "
//           >
//             GitHub
//             <span
//               className="
//                 absolute left-0 -bottom-1 w-0 h-[2px] bg-indigo-500
//                 group-hover:w-full transition-all duration-300
//               "
//             ></span>
//           </a>

//           {/* Theme Toggle */}
//           <button
//             onClick={toggleTheme}
//             className="
//               w-10 h-10 flex items-center justify-center rounded-full
//               bg-gray-200 dark:bg-gray-700 shadow-sm
//               hover:scale-110 active:scale-95 transition-all duration-300
//             "
//           >
//             <span
//               className="
//                 text-xl transition-transform duration-300
//               "
//               style={{
//                 transform: theme === "light" ? "rotate(0deg)" : "rotate(180deg)",
//               }}
//             >
//               {theme === "light" ? "🌙" : "☀️"}
//             </span>
//           </button>

//           {/* Avatar */}
//           <div className="relative">
//             <img
//               src="https://i.pravatar.cc/40"
//               alt="avatar"
//               className="w-10 h-10 rounded-full cursor-pointer border-2 border-indigo-500"
//               onClick={() => setProfileOpen(!profileOpen)}
//             />

//             {/* Dropdown */}
//             {profileOpen && (
//               <div
//                 className="
//                   absolute right-0 mt-2 w-40 bg-white dark:bg-gray-800 shadow-lg
//                   rounded-lg py-2 border border-gray-200 dark:border-gray-700
//                 "
//               >
//                 <p className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">
//                   Profile
//                 </p>
//                 <p className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">
//                   Settings
//                 </p>
//                 <p className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer text-red-500">
//                   Logout
//                 </p>
//               </div>
//             )}
//           </div>
//         </div>

//         {/* Mobile Hamburger Menu */}
//         <button
//           className="md:hidden flex flex-col gap-1"
//           onClick={() => setMenuOpen(!menuOpen)}
//         >
//           <span className="w-6 h-[3px] bg-gray-800 dark:bg-gray-200"></span>
//           <span className="w-6 h-[3px] bg-gray-800 dark:bg-gray-200"></span>
//           <span className="w-6 h-[3px] bg-gray-800 dark:bg-gray-200"></span>
//         </button>
//       </nav>

//       {/* Mobile Menu Dropdown */}
//       {menuOpen && (
//         <div className="md:hidden bg-white dark:bg-gray-900 px-6 py-4 space-y-4 border-t border-gray-200 dark:border-gray-700">
//           <a className="block text-gray-700 dark:text-gray-300">Features</a>
//           <a className="block text-gray-700 dark:text-gray-300">Pricing</a>
//           <a className="block text-gray-700 dark:text-gray-300">GitHub</a>

//           {/* Mobile Theme Toggle */}
//           <button
//             onClick={toggleTheme}
//             className="
//               mt-2 px-4 py-2 rounded-lg
//               bg-gray-200 dark:bg-gray-700 
//             "
//           >
//             {theme === "light" ? "Switch to Dark 🌙" : "Switch to Light ☀️"}
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }

import { useState } from "react";

export default function Navbar({ theme, toggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  return (
    <div
      className="
        fixed top-0 left-0 w-full z-50
        bg-white/70 dark:bg-gray-900/70
        backdrop-blur-xl shadow-sm
        border-b border-gray-200 dark:border-gray-700
        transition-all
      "
    >
      {/* ✨ Gradient Border */}
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>

      <nav className="px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <h1 className="text-2xl font-bold tracking-wide cursor-pointer">
          <span className="text-indigo-600 dark:text-indigo-400">Career</span>
          <span className="text-gray-900 dark:text-gray-100">Compass</span>
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">

          {/* ⭐ How It Works */}
          <a
            href="#how-it-works"
            className="
              text-gray-700 dark:text-gray-300 font-medium relative
              group transition
            "
          >
            How it Works
            <span className="
                absolute left-0 -bottom-1 h-[2px] w-0 bg-indigo-500
                group-hover:w-full transition-all duration-300"></span>
          </a>

          {/* Features */}
          <a
            href="#"
            className="
              text-gray-700 dark:text-gray-300 font-medium relative
              group transition
            "
          >
            Features
            <span className="
                absolute left-0 -bottom-1 h-[2px] w-0 bg-indigo-500
                group-hover:w-full transition-all duration-300"></span>
          </a>

          {/* Pricing */}
          <a
            href="#"
            className="
              text-gray-700 dark:text-gray-300 font-medium relative
              group transition
            "
          >
            Pricing
            <span className="
                absolute left-0 -bottom-1 h-[2px] w-0 bg-indigo-500
                group-hover:w-full transition-all duration-300"></span>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com"
            target="_blank"
            className="
              text-gray-700 dark:text-gray-300 font-medium relative
              group transition
            "
          >
            GitHub
            <span className="
                absolute left-0 -bottom-1 h-[2px] w-0 bg-indigo-500
                group-hover:w-full transition-all duration-300"></span>
          </a>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="
              w-10 h-10 flex items-center justify-center rounded-full
              bg-gray-200 dark:bg-gray-700 shadow-sm
              hover:scale-110 transition
            "
          >
            {theme === "light" ? "🌙" : "☀️"}
          </button>

        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="w-6 h-[3px] bg-gray-800 dark:bg-gray-200"></span>
          <span className="w-6 h-[3px] bg-gray-800 dark:bg-gray-200"></span>
          <span className="w-6 h-[3px] bg-gray-800 dark:bg-gray-200"></span>
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 px-6 py-4 space-y-4 border-t border-gray-200 dark:border-gray-700">

          {/* ⭐ MOBILE — How it Works */}
          <a href="#how-it-works" className="block text-gray-700 dark:text-gray-300">
            How it Works
          </a>

          <a className="block text-gray-700 dark:text-gray-300">Features</a>
          <a className="block text-gray-700 dark:text-gray-300">Pricing</a>
          <a className="block text-gray-700 dark:text-gray-300">GitHub</a>

          {/* Mobile Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="mt-2 px-4 py-2 rounded-lg bg-gray-200 dark:bg-gray-700 w-full"
          >
            {theme === "light" ? "Switch to Dark 🌙" : "Switch to Light ☀️"}
          </button>
        </div>
      )}
    </div>
  );
}