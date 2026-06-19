"use client";

import DashboardLayout from "@/components/layout/DashboardLayout";
import { useThemeStore } from "@/store/themeStore";

export default function SettingsPage() {
  const { darkMode, toggleTheme } = useThemeStore();

  return (
    <DashboardLayout>
      <h1 className="text-3xl font-bold mb-6">
        Settings
      </h1>

      <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm">
        <h2 className="text-xl font-semibold mb-4">
          Appearance
        </h2>

        <button
          onClick={toggleTheme}
          className="bg-indigo-600 text-white px-4 py-2 rounded-lg"
        >
          {darkMode ? "☀ Light Mode" : "🌙 Dark Mode"}
        </button>
      </div>
    </DashboardLayout>
  );
}