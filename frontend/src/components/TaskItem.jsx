function TaskItem({
    task,
    onDelete,
    onToggle
}) {

    return (
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5 mt-4 shadow-lg">

            <div className="flex items-center justify-between">

                <div>

                    <h3
                        className={`text-xl font-semibold ${
                            task.completed
                                ? "line-through text-zinc-500"
                                : "text-white"
                        }`}
                    >
                        {task.title}
                    </h3>

                    <p className="text-zinc-400 mt-1">
                        {
                            task.completed
                                ? "Completed"
                                : "Active"
                        }
                    </p>

                </div>

                <div className="flex gap-2">

                    <button
                        onClick={() => onToggle(task)}
                        className="bg-blue-600 hover:bg-blue-500 transition px-4 py-2 rounded-xl"
                    >
                        Toggle
                    </button>

                    <button
                        onClick={() => onDelete(task.id)}
                        className="bg-red-600 hover:bg-red-500 transition px-4 py-2 rounded-xl"
                    >
                        Delete
                    </button>

                </div>

            </div>

        </div>
    );
}

export default TaskItem;