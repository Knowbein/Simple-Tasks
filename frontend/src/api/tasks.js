import axios from "axios";

const API_URL = "http://127.0.0.1:8000/tasks";

export const getTasks = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};

export const createTask = async (title) => {
    const response = await axios.post(API_URL, {
        title: title
    });

    return response.data;
};

export const deleteTask = async (id) => {
    await axios.delete(`${API_URL}/${id}`);
};

export const updateTask = async (task) => {
    const response = await axios.put(
        `${API_URL}/${task.id}`,
        {
            title: task.title,
            completed: task.completed
        }
    );

    return response.data;
};