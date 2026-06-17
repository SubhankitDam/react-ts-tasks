import { useEffect, useState } from 'react';
import { TaskItem } from './TaskItem.tsx';
import { type Task } from '../types.ts';
import './List.css';

interface TaskProps {
  readonly tasks: readonly Task[];
  readonly toggleTasks: ({ id }: { id: string }) => void;
}

export function List({ tasks, toggleTasks }: TaskProps) {
  const [remaining, setRemaining] = useState(0);

  useEffect(() => {
    (() => {
      setRemaining(tasks.filter((task) => !task.isCompleted).length);
    })();
  }, [tasks]);

  return (
    <div className="task-list-container">
      <p className="tasks-completed">Tasks Remaining: {remaining}</p>
      <ul className="task-list">
        {tasks.map((task) => {
          return (
            <TaskItem
              key={task.id}
              id={task.id}
              description={task.description}
              isCompleted={task.isCompleted}
              toggleTasks={toggleTasks}
            />
          );
        })}
      </ul>
    </div>
  );
}
