"use client";
import DashboardLayout from "@/components/layout/DashboardLayout";
import CreateProjectModal from "@/components/projects/CreateProjectModal";
import ProjectCard from "@/components/projects/ProjectCard";
import { useState } from "react";
import {
  useProjectStore,
} from "@/store/projectStore";

export default function ProjectsPage() {
  const [openModal, setOpenModal] = useState(false);
const [search, setSearch] = useState("");
    const {
    projects,
    addProject,
    deleteProject,
  } = useProjectStore();

const filteredProjects = projects.filter((project) => project.name.toLowerCase().includes(search.toLowerCase()))
 

  return (
    <DashboardLayout>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold">Projects</h1>

        <button
          className="bg-indigo-600 text-white px-4 py-2 rounded-lg"
          onClick={() => setOpenModal(true)}
        >
          + New Project
        </button>
      </div>

<input
  type="text"
  placeholder="Search projects..."
  value={search}
  onChange={(e) =>
    setSearch(e.target.value)
  }
  className="
    w-full
    mb-6
    px-4
    py-2
    border
    rounded-lg
    outline-none
  "
/>
     {filteredProjects.length === 0 ? (
  <div className="bg-white dark:bg-slate-800 rounded-xl p-8 text-center">
    <h2 className="text-xl font-semibold">
      No Projects Found
    </h2>

    <p className="text-gray-500 dark:text-gray-300 mt-2">
      Create a project or try a different search.
    </p>
  </div>
) : (
  <div className="grid md:grid-cols-3 grid-cols-1 gap-6">
    {filteredProjects.map((project) => (
      <ProjectCard
        key={project.id}
        id={project.id}
        name={project.name}
        tasks={project.tasks}
        onDelete={deleteProject}
      />
    ))}
  </div>
)}

      <CreateProjectModal
        open={openModal}
        onClose={() => setOpenModal(false)}
        onCreate={addProject}
      />
    </DashboardLayout>
  );
}
