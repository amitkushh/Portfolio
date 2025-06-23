"use client";
import { Moon, SunMedium } from "lucide-react";
import { useTheme } from "next-themes";

function DarkModeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      className="relative bg-gray-700 dark:bg-zinc-900 h-10 w-10 rounded-full m-4 cursor-pointer border-2 border-gray-500"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      <Moon className="rotate-0 scale-100 dark:rotate-90 dark:scale-0 transition-all duration-200 absolute left-1/2 top-1/2 -translate-1/2 h-[18px] w-[18px] text-gray-300"/>
      <SunMedium className="rotate-90 scale-0 dark:rotate-0 dark:scale-90 transition-all duration-200 absolute left-1/2 top-1/2 -translate-1/2 h-[18px] w-[18px] text-gray-300" />
    </button>
  );
}

export default DarkModeToggle;
