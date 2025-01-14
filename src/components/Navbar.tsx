


import { ModeToggle } from "./mode-toggle";
import { MobileMenu } from "./MobileMenu";


export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between">
        {/* Logo and Home Link */}
        <div className="mr-4 flex items-center">
          <a href="/" className="font-bold text-xl">Portfolio</a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex flex-1 items-center justify-end space-x-6">
          <nav className="flex items-center space-x-6">
            <a href="#about" className="dark:text-primary transition dark:hover:text-orange-200 hover:text-gray-900">About</a>
            <a href="#experience" className="dark:text-primary transition dark:hover:text-orange-200 hover:text-gray-900">Experience</a>
            <a href="#skills" className="dark:text-primary transition dark:hover:text-orange-200 hover:text-gray-900">Skills</a>
            <a href="#projects" className="dark:text-primary transition dark:hover:text-orange-200 hover:text-gray-900">Projects</a>
            <a href="#education" className="dark:text-primary transition dark:hover:text-orange-200 hover:text-gray-900">Education</a>
            <a href="#contact" className="dark:text-primary transition dark:hover:text-orange-200 hover:text-gray-900">Contact</a>
            <ModeToggle />
          </nav>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center">
          <MobileMenu></MobileMenu>
        </div>
      </div>
    </header>
  );
}







// import { useState, useEffect } from "react";
// import { MobileMenu } from "./MobileMenu";
// import { Sun, Moon } from "lucide-react";

// export default function Navbar() {
//   const [isDarkMode, setIsDarkMode] = useState(false);

//   // Toggle the theme between dark and light modes
//   const toggleTheme = () => {
//     setIsDarkMode(!isDarkMode);
//     document.documentElement.classList.toggle("dark", !isDarkMode);
//   };

//   // Set initial theme based on system preference or user choice
//   useEffect(() => {
//     const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
//     setIsDarkMode(prefersDark);
//     document.documentElement.classList.toggle("dark", prefersDark);
//   }, []);

//   return (
//     <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
//       <div className="container flex h-14 items-center justify-between">
//         {/* Logo and Home Link */}
//         <div className="mr-4 flex items-center">
//           <a href="/" className="font-bold text-xl">Portfolio</a>
//         </div>

//         {/* Desktop Navigation */}
//         <div className="hidden md:flex flex-1 items-center justify-end space-x-6">
//           <nav className="flex items-center space-x-6">
//             <a href="#about" className="dark:text-primary transition dark:hover:text-orange-200 hover:text-gray-900">About</a>
//             <a href="#experience" className="dark:text-primary transition dark:hover:text-orange-200 hover:text-gray-900">Experience</a>
//             <a href="#skills" className="dark:text-primary transition dark:hover:text-orange-200 hover:text-gray-900">Skills</a>
//             <a href="#projects" className="dark:text-primary transition dark:hover:text-orange-200 hover:text-gray-900">Projects</a>
//             <a href="#education" className="dark:text-primary transition dark:hover:text-orange-200 hover:text-gray-900">Education</a>
//             <a href="#contact" className="dark:text-primary transition dark:hover:text-orange-200 hover:text-gray-900">Contact</a>
//             <button
//             onClick={toggleTheme}
//             className="p-2 rounded-full border dark:bg-gray-700 bg-gray-200 dark:text-white text-black"
//             aria-label="Toggle dark mode"
//           >
//             <Sun className={`h-[1.2rem] w-[1.2rem] transition-all ${isDarkMode ? "rotate-90 scale-0" : "rotate-0 scale-100"}`} />
//             <Moon className={`absolute h-[1.2rem] w-[1.2rem] transition-all ${isDarkMode ? "rotate-0 scale-100" : "-rotate-90 scale-0"}`} />
//             <span className="sr-only">Toggle theme</span>
//           </button>
//           </nav>
//         </div>

//         {/* Mobile Navigation and Theme Toggle */}
//         <div className="md:hidden flex items-center space-x-4">
//           <MobileMenu />
          
//         </div>
//       </div>
//     </header>
//   );
// }
