import React, { useState } from 'react';
import { addTask } from '../api/tasks';

export default function TaskForm({ onTaskAdded }) {
    const [formData, setFormData] = useState({ title: '', description: '' });

    const handleSubmit = async (e) => {
        e.preventDefault();
        await addTask(formData);
        setFormData({ title: '', description: '' });
        onTaskAdded();
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                placeholder="Title"
                value={formData.title}
                onChange={e => setFormData({ ...formData, title: e.target.value })}
                required
            />
            <input
                placeholder="Description"
                value={formData.description}
                onChange={e => setFormData({ ...formData, description: e.target.value })}
            />
            <button type="submit">Add Task</button>
        </form>
    );
}
