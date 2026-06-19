"use client";

import { FiMoon, FiSun, FiMenu } from "react-icons/fi";
import { useThemeStore } from "@/store/themeStore";

type NavbarProps = {
  onMenuClick: () => void;
};

export default function Navbar({
  onMenuClick,
}: NavbarProps) {
  const { darkMode, toggleTheme } = useThemeStore();

  return (
    <header className="h-16 bg-white dark:bg-slate-800 dark:text-white border-b flex items-center justify-between px-4 md:px-8">
      <div className="flex items-center gap-4">
        <button
          onClick={onMenuClick}
          className="md:hidden"
        >
          <FiMenu size={24} />
        </button>

        <h2 className="text-xl font-semibold">
          Dashboard
        </h2>
      </div>

      <button
        onClick={toggleTheme}
        className="border rounded-lg p-2"
      >
        {darkMode ? <FiSun /> : <FiMoon />}
      </button>
    </header>
  );
}