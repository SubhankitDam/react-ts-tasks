import './Task.css';

export function Task() {
  return (
    <>
      <li className="task">
        <p>Wash the Dishes</p>
        <input
          type="checkbox"
          name="wash-the-dishes"
          id="task-checkbox"
          className="task-checkbox"
        />
      </li>
      <li className="task">
        <p>Clean the Room</p>
        <input
          type="checkbox"
          name="clean-the-room"
          id="task-checkbox"
          className="task-checkbox"
          checked={true}
        />
      </li>
      <li className="task">
        <p>Eat Dinner</p>
        <input
          type="checkbox"
          name="eat-dinner"
          id="task-checkbox"
          className="task-checkbox"
        />
      </li>
    </>
  );
}
