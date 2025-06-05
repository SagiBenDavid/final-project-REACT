import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  const [newTitle, setNewTitle] = useState("");
  const [newDesc, setNewDesc] = useState("");
  const [uploadedFiles, setUploadedFiles] = useState(() => {
    const saved = localStorage.getItem("uploads");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    localStorage.setItem("uploads", JSON.stringify(uploadedFiles));
  }, [uploadedFiles]);

  const addTask = () => {
    if (!newTitle || !newDesc) return;

    const newTask = {
      id: Date.now(),
      title: newTitle,
      description: newDesc,
    };

    setTasks([...tasks, newTask]);
    setNewTitle("");
    setNewDesc("");
  };

  const handleFileUpload = (e) => {
    const files = Array.from(e.target.files);
    const newUploads = files.map((file) => ({
      id: Date.now() + Math.random(),
      name: file.name
    }));
    setUploadedFiles((prev) => [...prev, ...newUploads]);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-blue-700">Your Tasks</h1>
      </div>

      {/* Add Task Form */}
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
        <button
          onClick={addTask}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          + Add Task
        </button>
      </div>

      {/* Task List */}
      {tasks.length > 0 ? (
        <ul className="space-y-4 mb-8">
          {tasks.map((task) => (
            <li key={task.id} className="bg-white rounded-lg shadow-md p-6">
              <Link
                to={`/task/${task.id}`}
                className="text-xl font-semibold text-blue-600 hover:underline block mb-2"
              >
                {task.title}
              </Link>
              <p className="text-gray-700">{task.description}</p>
            </li>
          ))}
        </ul>
      ) : (
        <div className="text-center text-gray-500 italic mt-12">
          No tasks yet. Start by adding your first one!
        </div>
      )}

      {/* Upload Summaries */}
      <div className="bg-white p-4 rounded shadow">
        <h2 className="text-xl font-bold mb-2">Upload Summaries</h2>
        <input
          type="file"
          multiple
          onChange={handleFileUpload}
          className="block w-full p-2 border rounded mb-4"
        />

        {uploadedFiles.length > 0 ? (
          <ul className="list-disc list-inside space-y-1">
            {uploadedFiles.map((file) => (
              <li key={file.id}>{file.name}</li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500 italic">No files uploaded yet.</p>
        )}
      </div>
    </div>
  );
}