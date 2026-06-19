
type TaskCardProps={
  id:number;
  title: string;
  status:string;
  onDelete: (id:number) => void;
  onMove : (
    id:number,
    direction: "left" | "right"
  ) => void;
}


export default function TaskCard({
 id,
  title,
  status,
  onDelete,
  onMove
}:TaskCardProps){
  return (
     <div className="bg-white dark:bg-slate-800 rounded-lg p-4 shadow-sm border flex justify-between items-center">
      <span>{title}</span>
 

      <div className="flex gap-2">
 
        {status !== "todo" &&(
           <button
           onClick={() =>
            onMove(id, "left")
           }
           className="px-2 py-1 border rounded"
           >
           ←
        </button>
        ) }
      
        {status !== "done" && (
          <button   className="px-2 py-1 border rounded"
           onClick={() => onMove(id, "right")}
          >
             →
          </button>
        )
        }

      <button
        onClick={() => onDelete(id)}
        className="text-red-500 text-sm"
      >
        Delete
      </button>

      </div>






    </div>
  )
}

 