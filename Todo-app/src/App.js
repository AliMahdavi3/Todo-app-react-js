import React, { useState } from "react";
import "./App.css";
import TopForm from "./TopForm";
import TaskItem from "./TaskItem";
import { taskContext } from "./TaskContext"

function App() {
  const [taskItems, setTaskItems] = useState([]);

  return (
    <div>
      <div className="container">
        <taskContext.Provider value={{
          taskItems,
          setTaskItems
        }}>
          <TopForm />
          <TaskItem />
        </taskContext.Provider>
      </div>
    </div>
  );
}

export default App;
