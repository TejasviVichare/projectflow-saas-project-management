"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FiHome,
  FiFolder,
  FiCheckSquare,
  FiSettings,
} from "react-icons/fi";

type SidebarProps = {
  isOpen: boolean;
  onClose: () => void;
};

const menuItems = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: FiHome,
  },
  {
    title: "Projects",
    href: "/projects",
    icon: FiFolder,
  },
  {
    title: "Tasks",
    href: "/tasks",
    icon: FiCheckSquare,
  },
  {
    title: "Settings",
    href: "/settings",
    icon: FiSettings,
  },
];

export default function Sidebar({
  isOpen,
  onClose,
}: SidebarProps) {
  const pathname = usePathname();

  return (
    <aside
      className={`
        fixed left-0 top-0 h-screen w-64 bg-slate-900 text-white z-50
        transform transition-transform duration-300
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
        md:translate-x-0
      `}
    >
      <div className="border-b border-slate-700 p-6">
        <h1 className="text-2xl font-bold">
          ProjectFlow
        </h1>
      </div>

      <nav className="mt-6">
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.title}
              href={item.href}
              onClick={onClose}
              className={`flex items-center gap-3 px-6 py-4 transition ${
                pathname === item.href
                  ? "bg-slate-800"
                  : "hover:bg-slate-800"
              }`}
            >
              <Icon size={20} />
              {item.title}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}