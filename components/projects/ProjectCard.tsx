import Link from "next/link";

type ProjectCardProps = {
    id:number;
    name: string;
    tasks: number;
    onDelete: (id:number) => void;
};


export default function ProjectCard({
  id,
    name,
  tasks,
  onDelete,
}: ProjectCardProps) {
  return (
        <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm hover:shadow-md transition">
      <div className="flex justify-between items-start">
        <div>
            <Link href={`/projects/${id}`}>
          <h2 className="text-lg font-semibold">
            {name}
          </h2></Link>

          <p className="text-gray-500 dark:text-gray-300 mt-2">
            {tasks} Tasks
          </p>
        </div>

        <button
          onClick={() => onDelete(id)}
          className="text-red-500 text-sm"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
