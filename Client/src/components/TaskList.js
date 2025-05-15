import React, { useEffect, useState } from 'react';
import { fetchTasks, updateTask, deleteTask } from '../api/tasks';

export default function TaskList() {
    const [tasks, setTasks] = useState([]);

    const loadTasks = async () => {
        const res = await fetchTasks();
        setTasks(res.data);
    };

    useEffect(() => {
        loadTasks();
    }, []);

    const markCompleted = async (id) => {
        await updateTask(id, { status: 'Completed' });
        loadTasks();
    };

    const handleDelete = async (id) => {
        await deleteTask(id);
        loadTasks();
    };

    return (
        <div>
            {tasks.length === 0 ? <p>No tasks available</p> : (
                <ul>
                    {tasks.map(task => (
                        <li key={task._id}>
                            <h4>{task.title}</h4>
                            <p>{task.description}</p>
                            <p>Status: {task.status}</p>
                            {task.status !== 'Completed' && (
                                <button onClick={() => markCompleted(task._id)}>Mark Completed</button>
                            )}
                            <button onClick={() => handleDelete(task._id)}>Delete</button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
