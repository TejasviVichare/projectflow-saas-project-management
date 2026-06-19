"use client";
import DashboardLayout from "@/components/layout/DashboardLayout";
import AddTaskModal from "@/components/tasks/AddTaskModal";
import TaskCard from "@/components/tasks/TaskCard";
// import { tasks } from '@/data/tasks';
import React, { useState } from "react";
import { use } from "react";
import {
  useTaskStore,
} from "@/store/taskStore";
type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default function ProjectDetailsPage({ params }: Props) {
  const {
  tasks,
  addTask,
  deleteTask,
  moveTask,
} = useTaskStore();

  const { id } = use(params);
  const [openModal, setOpenModal] = useState(false);
 
  const todoTasks = tasks.filter((task) => task.status === "todo");

  const progressTasks = tasks.filter((task) => task.status === "progress");

  const doneTasks = tasks.filter((task) => task.status === "done");


  return (
    <DashboardLayout>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Project #{id}</h1>

        <button
          onClick={() => setOpenModal(true)}
          className="bg-indigo-600 text-white px-4 py-2 rounded-lg"
        >
          + Add Task
        </button>
      </div>

      <div className="grid grid-cols-3 gap-6">
        <div>
          <h2 className="font-semibold text-xl mb-4">Todo</h2>

          <div className="space-y-3">
            {todoTasks.map((task) => (
              <TaskCard
                key={task.id}
                id={task.id}
                title={task.title}
                 status={task.status}
                onDelete={deleteTask}
                onMove={moveTask }
              />
            ))}
          </div>
        </div>
        <div>
          <h2 className="font-semibold text-xl mb-4">Progress</h2>
          <div className="space-y-3">
            {progressTasks.map((task) => (
              <TaskCard
                key={task.id}
                id={task.id}
                title={task.title}
                 status={task.status}
                onDelete={deleteTask}
                 onMove={moveTask }
              />
            ))}
          </div>
        </div>

        <div>
          <h2 className="font-semibold text-xl mb-4">Done</h2>
          <div className="space-y-3">
            {doneTasks.map((task) => (
              <TaskCard
                key={task.id}
                id={task.id}
                title={task.title}
                 status={task.status}
                onDelete={deleteTask}
                 onMove={moveTask }
              />
            ))}
          </div>
        </div>

        <AddTaskModal
          open={openModal}
          onClose={() => setOpenModal(false)}
          onCreate={addTask}
        />
      </div>
    </DashboardLayout>
  );
}
