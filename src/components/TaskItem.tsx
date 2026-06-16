import { type Task } from '../types.ts';
import './Task.css';

export function TaskItem({ taskId, description, isCompleted }: Task) {
  return (
    <li className="task">
      <p>{description}</p>
      <input
        type="checkbox"
        name={description}
        id={taskId}
        className="task-checkbox"
        checked={isCompleted}
      />
    </li>
  );
}
