import './Input.css';

export function Input() {
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
      />
      <button className="btn">Add Task</button>
    </div>
  );
}
