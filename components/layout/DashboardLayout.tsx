"use client";

import { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { useThemeStore } from "@/store/themeStore";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { darkMode } = useThemeStore();

  const [sidebarOpen, setSidebarOpen] =
    useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Sidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
        />
      )}

      <div className="md:ml-64">
        <Navbar
          onMenuClick={() =>
            setSidebarOpen(true)
          }
        />

        <main className="min-h-screen bg-slate-100 dark:bg-slate-900 text-black dark:text-white p-4 md:p-8">
          {children}
        </main>
      </div>
    </div>
  );
}