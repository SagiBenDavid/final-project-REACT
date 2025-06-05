import { useEffect, useState } from "react";

export default function TasksPage() {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });

  const [newTitle, setNewTitle] = useState("");
  const [newDesc, setNewDesc] = useState("");
  const [newTag, setNewTag] = useState("");
  const [newDueDate, setNewDueDate] = useState("");
  const [filterTag, setFilterTag] = useState("");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (!newTitle || !newDesc) return;
    const newTask = {
      id: Date.now(),
      title: newTitle,
      description: newDesc,
      tag: newTag,
      dueDate: newDueDate,
    };
    setTasks([...tasks, newTask]);
    setNewTitle("");
    setNewDesc("");
    setNewTag("");
    setNewDueDate("");
  };

  const filteredTasks = filterTag
    ? tasks.filter(task => task.tag.toLowerCase().includes(filterTag.toLowerCase()))
    : tasks;

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-blue-700 mb-6">Manage Tasks</h1>

      <div className="bg-white p-4 rounded shadow mb-6">
        <input
          type="text"
          placeholder="Task Title"
          className="w-full p-2 border mb-2 rounded"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
        />
        <textarea
          placeholder="Task Description"
          className="w-full p-2 border mb-2 rounded"
          value={newDesc}
          onChange={(e) => setNewDesc(e.target.value)}
        ></textarea>
        <input
          type="text"
          placeholder="Tag (e.g. math, urgent)"
          className="w-full p-2 border mb-2 rounded"
          value={newTag}
          onChange={(e) => setNewTag(e.target.value)}
        />
        <input
          type="date"
          className="w-full p-2 border mb-2 rounded"
          value={newDueDate}
          onChange={(e) => setNewDueDate(e.target.value)}
        />
        <button
          onClick={addTask}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          + Add Task
        </button>
      </div>

      <div className="mb-4">
        <input
          type="text"
          placeholder="Filter by tag..."
          className="w-full p-2 border rounded"
          value={filterTag}
          onChange={(e) => setFilterTag(e.target.value)}
        />
      </div>

      <ul className="space-y-4">
        {filteredTasks.map(task => (
          <li key={task.id} className="bg-white p-4 rounded shadow">
            <h3 className="text-xl font-bold text-blue-700">{task.title}</h3>
            <p>{task.description}</p>
            {task.tag && <p className="text-sm text-gray-500">Tag: {task.tag}</p>}
            {task.dueDate && <p className="text-sm text-gray-500">Due: {task.dueDate}</p>}
          </li>
        ))}
      </ul>
    </div>
  );
}