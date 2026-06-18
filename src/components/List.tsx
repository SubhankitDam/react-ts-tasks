import { TaskItem } from './TaskItem.tsx';
import { type Task } from '../types.ts';
import './List.css';

interface TaskListProps {
  readonly tasks: readonly Task[];
  readonly setTasks: (tasks: Task[]) => void;
}

export function List({ tasks, setTasks }: TaskListProps) {
  const remaining = tasks.filter((task) => !task.isCompleted).length;

  const toggleTasks = ({ id }: { id: string }) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return { ...task, isCompleted: !task.isCompleted };
        }
        return task;
      }),
    );
  };

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
