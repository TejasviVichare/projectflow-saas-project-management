import React, { useState } from 'react'

 type AddTaskModalProps = {
    open:boolean;
    onClose: () => void;
    onCreate:(
        title:string,
        status:string
    ) => void;
 }



export default function AddTaskModal({
  open,
  onClose,
  onCreate
}: AddTaskModalProps ){

    const [title, setTitle] = useState("");
    const [status, setStatus] = useState("todo");

    if (!open) return null;

    const handleCreate = ()=>{
        if(!title.trim()) return;
        onCreate(title, status);
        setTitle("");
        setStatus("");
        onClose();
    };

 return(
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
      <div className="bg-white dark:bg-slate-800 p-6 rounded-xl w-125">
        <h2 className="text-2xl font-bold mb-4">
          Add Task
        </h2>

        
       <input type="text" placeholder='Task Title' value={title}   className="w-full border p-3 rounded-lg mb-4"
        onChange={(e) => setTitle(e.target.value)}
       />

        <select value={status} onChange={(e) =>setStatus(e.target.value)}  className="w-full border p-3 rounded-lg">
            <option value="todo">Todo</option>
            <option value="progress">In Progress</option>
            <option value="done">Done</option>
        </select>

    
        <div className="flex justify-end gap-3 mt-6">
          <button
            onClick={onClose}
            className="border px-4 py-2 rounded-lg"
          >
            Cancel
          </button>

          <button
            onClick={handleCreate}
            className="bg-indigo-600 text-white px-4 py-2 rounded-lg"
          >
            Create
          </button>
        </div>
      </div>
    </div>

 )
}
