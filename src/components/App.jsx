import React, { useState } from "react";
import Item from "./Item";

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  function handleChange(event) {
    const newValue = event.target.value;
    setNewTask(newValue);
  }

  function addTask() {
    setTasks((prevVersion) => {
      return [...prevVersion, newTask];
    });
    setNewTask("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={handleChange} value={newTask} />
        <button onClick={addTask}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {tasks.map((task, index) => {
            return <Item key={index} task={task} />;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
