import { create } from "zustand";
import { persist } from "zustand/middleware";


type Project = {
  id: number;
  name: string;
  tasks: number;
};

type ProjectStore = {
  projects: Project[];

  addProject: (
    name: string
  ) => void;

  deleteProject: (
    id: number
  ) => void;
};


export const useProjectStore =
  create<ProjectStore>()(
    persist(
      (set) => ({
        projects: [
          {
            id: 1,
            name: "E-Commerce Website",
            tasks: 25,
          },
          {
            id: 2,
            name: "Social Media App",
            tasks: 18,
          },
          {
            id: 3,
            name: "ProjectFlow SaaS",
            tasks: 12,
          },
        ],

        addProject: (name) =>
          set((state) => ({
            projects: [
              ...state.projects,
              {
                id: Date.now(),
                name,
                tasks: 0,
              },
            ],
          })),

        deleteProject: (id) =>
          set((state) => ({
            projects: state.projects.filter(
              (project) => project.id !== id
            ),
          })),
      }),
      {
        name: "project-storage",
      }
    )
  );