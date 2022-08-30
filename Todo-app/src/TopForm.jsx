import React, { Fragment } from "react";
import { useContext } from "react";
import { useState } from "react";
import { taskContext } from "./TaskContext"

function TopForm() {

  const [task, setTask] = useState('')
  const {taskItems, setTaskItems} = useContext(taskContext)

  const handleSetTask = (event) =>{
    setTask(event.target.value)
  }

  const handleAddTask = (event) =>{
    event.preventDefault()
    setTaskItems([...taskItems, {id: Math.random(), title: task, done: false }])
    setTask('')
  }

  return (
    <Fragment>
      <h4 className="text">لیست کارها</h4>
      <div className="form-wrapper">
        <form onSubmit={handleAddTask}>
          <input type="text" className="input-todo" value={task} onChange={handleSetTask}/>
          <button type="submit" className="btn">
            ثبت
          </button>
        </form>
      </div>
    </Fragment>
  );
}

export default TopForm;
