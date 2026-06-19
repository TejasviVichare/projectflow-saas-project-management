const tasks = [
  "Design Dashboard",
  "Create API",
  "Fix Navbar",
  "Deploy Project",
];

export default function RecentTasks() {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm">
      <h2 className="font-semibold text-lg mb-4">
        Recent Tasks
      </h2>

      <div className="space-y-3">
        {tasks.map((task) => (
          <div
            key={task}
            className="border rounded-lg p-3"
          >
            {task}
          </div>
        ))}
      </div>
    </div>
  );
}