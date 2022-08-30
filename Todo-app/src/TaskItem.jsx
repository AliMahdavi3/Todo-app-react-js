import React from "react";
import { taskContext } from "./TaskContext";
import { useContext } from "react";
import {
  BsFillTrashFill,
  BsFillXCircleFill,
  BsCheckCircle,
} from "react-icons/bs";
import "./App.css"

function TaskItem() {
  const { taskItems, setTaskItems } = useContext(taskContext);


  const handleSetDoneTask = (id) =>{
    const index = taskItems.findIndex(t=>t.id == id)
    let newTaskItems = [...taskItems]
    newTaskItems[index].done = !newTaskItems[index].done
    setTaskItems(newTaskItems)
  }



  const handleDeleteIask = (id) =>{
    let newTask = taskItems.filter(t=>t.id !== id)
    setTaskItems(newTask)
  }



  if (taskItems.length) {
    return (
      <>
        <ul className="list-wrapper">
          {taskItems.map((t) => (
            <li
              className="list"
              style={{ background: t.done ? "lightseagreen" : "" }}
            >
              {t.title}
              <span className="icons">
                {t.done ? (
                  <BsFillXCircleFill className="icon-2"  onClick={()=>handleSetDoneTask(t.id)}/>
                ) : (
                  <BsCheckCircle className="icon-3"  onClick={()=>handleSetDoneTask(t.id)}/>
                )}
                <BsFillTrashFill className="icon-1" onClick={()=>handleDeleteIask(t.id)}/>
              </span>
            </li>
          ))}
        </ul>
      </>
    );
  } else {
    return <h4 className="none-text">!...هیچ کاری ثبت نشده</h4>
  }
}

export default TaskItem;
