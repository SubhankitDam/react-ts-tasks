import { type AnimationEvent, useState } from 'react';
import { type Task } from '../types.ts';
import './TaskItem.css';

interface TaskItemProps extends Task {
  readonly toggleTask: ({ id }: { id: string }) => void;
  readonly removeTask: ({ id }: { id: string }) => void;
}

export function TaskItem({
  id,
  description,
  isCompleted,
  toggleTask,
  removeTask,
}: TaskItemProps) {
  const [isExiting, setIsExiting] = useState(false);

  const handleCheckbox = () => {
    toggleTask({ id });
    setIsExiting(true);
  };
  const handleTaskRemovalAnimation = (event: AnimationEvent<HTMLLIElement>) => {
    if (event.animationName === 'task-is-exiting') {
      removeTask({ id });
    }
  };

  return (
    <li
      className={`task ${isExiting ? 'is-exiting' : ''}`.trim()}
      onAnimationEnd={handleTaskRemovalAnimation}
    >
      <label className="task-description" htmlFor={id}>
        {description}
      </label>
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
