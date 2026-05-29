import { useEffect, useState } from "react";

import {
    getTasks,
    createTask,
    deleteTask,
    updateTask
} from "./api/tasks";

import TaskList from "./components/TaskList";
import AddTaskForm from "./components/AddTaskForm";

function App() {

    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        loadTasks();
    }, []);

    const loadTasks = async () => {
        const data = await getTasks();
        setTasks(data);
    };

    const handleAddTask = async (title) => {
        await createTask(title);
        loadTasks();
    };

    const handleDeleteTask = async (id) => {
        await deleteTask(id);
        loadTasks();
    };

    const handleToggleTask = async (task) => {
    const updatedTask = {
        ...task,
        completed: !task.completed,
    };

    const result = await updateTask(updatedTask);

    setTasks(
        tasks.map((t) =>
            t.id === result.id ? result : t
        )
    );
    };

  return (
      <div className="min-h-screen bg-black text-white">

          <div className="max-w-3xl mx-auto px-6 py-12">

              <h1 className="text-5xl font-bold mb-10">
                  Simple Tasks
              </h1>

              <AddTaskForm onAdd={handleAddTask} />

              <TaskList
                  tasks={tasks}
                  onDelete={handleDeleteTask}
                  onToggle={handleToggleTask}
              />

          </div>

      </div>
  );
}

export default App;