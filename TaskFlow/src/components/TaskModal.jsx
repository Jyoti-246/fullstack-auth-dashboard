import { useEffect, useState } from "react";

export default function TaskModal({ isOpen, onClose, onSave, task }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  // 🔥 Auto-fill when editing
  useEffect(() => {
    const updateState = () => {
      if (task) {
        setTitle(task.title);
        setDescription(task.description || "");
      } else {
        setTitle("");
        setDescription("");
      }
    };

    updateState();
  }, [task, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ title, description });
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-md p-6 rounded-lg">
        <div className="flex justify-between mb-4">
          <h2 className="text-lg font-semibold">
            {task ? "Edit Task" : "Add Task"}
          </h2>
          <button onClick={onClose}>✕</button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Title"
            value={title}
            required
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border p-2 rounded"
          />

          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full border p-2 rounded"
          />

          <div className="flex justify-end gap-2">
            <button type="button" onClick={onClose}>
              Cancel
            </button>
            <button
              type="submit"
              className="bg-[#3C89DD] text-white px-4 py-2 rounded"
            >
              {task ? "Update" : "Create"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
