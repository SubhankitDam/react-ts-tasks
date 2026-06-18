import type { ChangeEvent, KeyboardEvent } from 'react';
import './Input.css';

type TaskInputProps = {
  readonly taskInput: string;
  readonly setTaskInput: (taskInput: string) => void;
  readonly addTask: (taskInput: string) => void;
};

export function Input({ taskInput, setTaskInput, addTask }: TaskInputProps) {
  const handleChange = (
    event: ChangeEvent<HTMLInputElement, HTMLInputElement>,
  ): void => {
    setTaskInput(event.target.value);
  };

  const handleClick = () => {
    addTask(taskInput);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>): void => {
    if (event.key === 'Enter') {
      handleClick();
    }
    if (event.key === 'Escape') {
      setTaskInput('');
    }
  };

  return (
    <div className="task-input-container">
      <h2 className="title">Tasks</h2>
      <label htmlFor="task" className="task-input-label">
        Enter your task:
      </label>
      <input
        type="text"
        placeholder="Wash the dishes at 19:00"
        className="task-input"
        id="task"
        value={taskInput}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <button className="btn" onClick={handleClick}>
        Add Task
      </button>
    </div>
  );
}
