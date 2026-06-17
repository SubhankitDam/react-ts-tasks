import { type Task } from '../types.ts';
import './Task.css';

interface TaskItemProps extends Task {
  readonly toggleTasks: ({ id }: { id: string }) => void;
}

export function TaskItem({
  id,
  description,
  isCompleted,
  toggleTasks,
}: TaskItemProps) {
  const handleCheckbox = () => {
    toggleTasks({ id });
  };

  return (
    <li className="task">
      <p>{description}</p>
      <input
        type="checkbox"
        name={description}
        id={id}
        className="task-checkbox"
        checked={isCompleted}
        onChange={handleCheckbox}
      />
    </li>
  );
}
