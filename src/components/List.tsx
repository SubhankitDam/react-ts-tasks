import { Task } from './Task.tsx';
import './List.css';

export function List() {
  return (
    <div className="task-list-container">
      <p className="tasks-completed">Tasks Completed: 2</p>
      <ul className="task-list">
        <Task />
      </ul>
    </div>
  );
}
