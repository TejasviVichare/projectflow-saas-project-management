"use client";

import DashboardLayout from "@/components/layout/DashboardLayout";
import { useTaskStore } from "@/store/taskStore";
import { useState } from "react";

export default function TasksPage() {
  const { tasks } = useTaskStore();

  const [search, setSearch] = useState("");

  const filteredTasks = tasks.filter((task) =>
    task.title
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <DashboardLayout>
      <h1 className="text-3xl font-bold mb-6">
        Tasks
      </h1>

      <input
        type="text"
        placeholder="Search tasks..."
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
        className="w-full mb-6 px-4 py-2 border rounded-lg outline-none"
      />

      <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="text-left p-4">
                Task
              </th>

              <th className="text-left p-4">
                Status
              </th>
            </tr>
          </thead>

          <tbody>
            {filteredTasks.map((task) => (
              <tr
                key={task.id}
                className="border-b"
              >
                <td className="p-4">
                  {task.title}
                </td>

                <td className="p-4">
                  <span
                    className={`
                      px-3 py-1 rounded-full text-sm

                      ${
                        task.status === "todo"
                          ? "bg-red-100 text-red-600"
                          : ""
                      }

                      ${
                        task.status === "progress"
                          ? "bg-yellow-100 text-yellow-600"
                          : ""
                      }

                      ${
                        task.status === "done"
                          ? "bg-green-100 text-green-600"
                          : ""
                      }
                    `}
                  >
                    {task.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </DashboardLayout>
  );
}