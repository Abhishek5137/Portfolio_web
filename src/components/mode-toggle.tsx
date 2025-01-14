
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/theme-provider";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="relative flex h-9 w-9 items-center justify-center rounded-md border border-gray-300 bg-white text-gray-700 shadow-sm hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-400 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700 dark:focus:ring-gray-500"
    >
      <Sun
        className={`absolute h-[1.2rem] w-[1.2rem] transition-all duration-300 ${
          theme === "dark" ? "opacity-100 scale-100" : "opacity-0 scale-0"
        }`}
      />
      <Moon
        className={`absolute h-[1.2rem] w-[1.2rem] transition-all duration-300 ${
          theme === "dark" ? "opacity-0 scale-0" : "opacity-100 scale-100"
        }`}
      />
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}

