import { create } from "zustand";
import { persist } from "zustand/middleware";
type Task = {
  id: number;
  title: string;
  status: string;
};

type TaskStore = {
  tasks: Task[];

  addTask: (
    title: string,
    status: string
  ) => void;

  deleteTask: (
    id: number
  ) => void;

  moveTask: (
    id: number,
    direction: "left" | "right"
  ) => void;
};

export const useTaskStore =
  create<TaskStore>()(
    persist(
    (set) => ({
    tasks: [
      {
        id: 1,
        title: "Setup Next.js Project",
        status: "done",
      },
      {
        id: 2,
        title: "Design Dashboard",
        status: "todo",
      },
      {
        id: 3,
        title: "Create Login Page",
        status: "todo",
      },
      {
        id: 4,
        title: "Build API",
        status: "progress",
      },
    ],

    addTask: (title, status) =>
      set((state) => ({
        tasks: [
          ...state.tasks,
          {
            id: Date.now(),
            title,
            status,
          },
        ],
      })),

    deleteTask: (id) =>
      set((state) => ({
        tasks: state.tasks.filter(
          (task) => task.id !== id
        ),
      })),

    moveTask: (
      id,
      direction
    ) =>
      set((state) => ({
        tasks: state.tasks.map(
          (task) => {
            if (
              task.id !== id
            )
              return task;

            if (
              direction ===
              "right"
            ) {
              if (
                task.status ===
                "todo"
              )
                return {
                  ...task,
                  status:
                    "progress",
                };

              if (
                task.status ===
                "progress"
              )
                return {
                  ...task,
                  status:
                    "done",
                };
            }

            if (
              direction ===
              "left"
            ) {
              if (
                task.status ===
                "done"
              )
                return {
                  ...task,
                  status:
                    "progress",
                };

              if (
                task.status ===
                "progress"
              )
                return {
                  ...task,
                  status:
                    "todo",
                };
            }

            return task;
          }
        ),
      })),
  }),
    {
        name: "task-storage",
      }
    )

);