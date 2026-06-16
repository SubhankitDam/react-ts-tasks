import { TaskItem } from './TaskItem.tsx';
import { type Task } from '../types.ts';
import './List.css';

interface TaskProps {
  readonly tasks: readonly Task[];
}

export function List({ tasks }: TaskProps) {
  return (
    <div className="task-list-container">
      <p className="tasks-completed">Tasks Completed: 2</p>
      <ul className="task-list">
        {tasks.map((task) => {
          return (
            <TaskItem
              key={task.taskId}
              taskId={task.taskId}
              description={task.description}
              isCompleted={task.isCompleted}
            />
          );
        })}
      </ul>
    </div>
  );
}
