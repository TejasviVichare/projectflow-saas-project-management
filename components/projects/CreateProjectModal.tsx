import { useState } from "react";

type CreateProjectModalProps = {
  open: boolean;
  onClose: () => void;
  onCreate : (projectName: string) => void;
};

export default function CreateProjectModal({
  open,
  onClose,
  onCreate
}: CreateProjectModalProps) {
  if (!open) return null;

  const [projectName, setProjectName] = useState("");

   const handleCreate = ()=>{
        if(!projectName.trim())  return;

         onCreate(projectName);
         setProjectName("");
         onClose();
   }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
      <div className="bg-white dark:bg-slate-800 w-125 rounded-xl p-6">
        <h2 className="text-2xl font-bold mb-4">Create Project</h2>

        <input
          type="text"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
          placeholder="Project Name"
          className="w-full border rounded-lg px-4 py-3"
        />

        <div className="flex justify-end gap-3 mt-6">
          <button onClick={onClose} className="border px-4 py-2 rounded-lg">
            Cancel
          </button>

          <button onClick={handleCreate} className="bg-indigo-600 text-white px-4 py-2 rounded-lg">
            Create
          </button>
        </div>
      </div>
    </div>
  );
}
