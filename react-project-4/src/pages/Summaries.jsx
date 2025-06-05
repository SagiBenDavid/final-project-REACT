import { useEffect, useState } from "react";

export default function SummariesPage() {
  const [uploads, setUploads] = useState(() => {
    const saved = localStorage.getItem("uploads");
    return saved ? JSON.parse(saved) : [];
  });

  const handleUpload = (e) => {
    const files = Array.from(e.target.files);
    const newEntries = files.map(file => ({
      id: Date.now() + Math.random(),
      name: file.name,
      status: "Pending Review",
      course: "",
      uploader: "You",
      date: new Date().toLocaleDateString()
    }));
    setUploads([...uploads, ...newEntries]);
  };

  useEffect(() => {
    localStorage.setItem("uploads", JSON.stringify(uploads));
  }, [uploads]);

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-blue-700 mb-6">Summary Library</h1>
      <input
        type="file"
        multiple
        className="w-full p-2 border mb-4 rounded"
        onChange={handleUpload}
      />

      <ul className="space-y-4">
        {uploads.map(file => (
          <li key={file.id} className="bg-white p-4 rounded shadow">
            <p className="text-lg font-semibold">{file.name}</p>
            <p className="text-sm text-yellow-600">Status: {file.status}</p>
            <p className="text-sm text-gray-600">Uploader: {file.uploader}</p>
            <p className="text-sm text-gray-600">Upload Date: {file.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
