import React, { useState } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

function App() {
    const [refresh, setRefresh] = useState(false);

    return (
        <div className="App">
            <h1>Task Manager</h1>
            <TaskForm onTaskAdded={() => setRefresh(!refresh)} />
            <TaskList key={refresh} />
        </div>
    );
}

export default App;
