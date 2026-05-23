import TaskItem from "./TaskItem";

function TaskList({
    tasks,
    onDelete,
    onToggle
}) {

    return (
        <div>
            {
                tasks.map((task) => (
                    <TaskItem
                        key={task.id}
                        task={task}
                        onDelete={onDelete}
                        onToggle={onToggle}
                    />
                ))
            }
        </div>
    );
}

export default TaskList;