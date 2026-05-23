import { useState } from "react";

function AddTaskForm({ onAdd }) {

    const [title, setTitle] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!title.trim()) return;

        onAdd(title);

        setTitle("");
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="flex gap-3 mb-6"
        >

            <input
                type="text"
                placeholder="Enter task..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="flex-1 bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 outline-none focus:border-blue-500"
            />

            <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-500 transition px-6 rounded-xl"
            >
                Add
            </button>

        </form>
    );
}

export default AddTaskForm;