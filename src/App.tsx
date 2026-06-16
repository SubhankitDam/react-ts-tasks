import './App.css';

function App() {
  return (
    <>
      <div className="task-container">
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

      <div className="task-list-container">
        <p className="tasks-completed">Tasks Completed: 2</p>
        <ul className="task-list">
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
        </ul>
      </div>
    </>
  );
}

export default App;
