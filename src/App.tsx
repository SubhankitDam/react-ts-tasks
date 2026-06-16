import { useState } from 'react';
import { Input } from './components/Input.tsx';
import { List } from './components/List.tsx';
import { type Task } from './types.ts';
import './App.css';

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [taskInput, setTaskInput] = useState('');

  const addTask = (taskInput: string): void => {
    if (!taskInput) {
      alert('Please enter a task.');
      return;
    }

    setTasks([
      ...tasks,
      {
        taskId: Date.now().toString(),
        description: taskInput,
        isCompleted: false,
      },
    ]);

    setTaskInput('');
  };

  return (
    <>
      <Input
        taskInput={taskInput}
        setTaskInput={setTaskInput}
        addTask={addTask}
      />
      <List tasks={tasks} />
    </>
  );
}

export default App;
