import { useEffect, useState } from 'react';
import { Input } from './components/Input.tsx';
import { List } from './components/List.tsx';
import { type Task } from './types.ts';
import './App.css';

function loadTasks(): Task[] {
  const storedTasks = localStorage.getItem('tasks');
  return storedTasks ? JSON.parse(storedTasks) : [];
}

function saveTasks(tasks: Task[]): void {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function App() {
  const [tasks, setTasks] = useState<Task[]>(loadTasks());
  const [taskInput, setTaskInput] = useState('');

  const addTask = (taskInput: string): void => {
    if (!taskInput) {
      alert('Please enter a task.');
      return;
    }

    setTasks([
      ...tasks,
      {
        id: Date.now().toString(),
        description: taskInput,
        isCompleted: false,
      },
    ]);

    setTaskInput('');
  };

  useEffect(() => {
    saveTasks(tasks);
  }, [tasks]);

  /* TODO: add functionality to take input from anywhere in the page
      when '/' or 'Ctrl + K' is pressed
   */

  return (
    <>
      <Input
        taskInput={taskInput}
        setTaskInput={setTaskInput}
        addTask={addTask}
      />
      <List tasks={tasks} setTasks={setTasks} />
    </>
  );
}

export default App;
