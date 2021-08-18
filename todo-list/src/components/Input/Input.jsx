import React from 'react';
import List from '../List/List';
import shortid from 'shortid';
import './Input.css';
const Input = () => 
{

  const [newTask, setNewTask] = React.useState("");

    
    function updateTask(event){
      setNewTask(event.target.value);
    }

    function inputKeyEvent(event){
      if(event.key === "Enter"){
        addTask();
      }
    }


    
    
    return(
      <div className="input-div">
        <div>
          <input className="input" onKeyPress={inputKeyEvent} onChange={updateTask} value={newTask} />
          <button className="addButton" onClick={addTask} >+</button>
        </div>
        <div className="whole">
        <List tasks={tasks} deleteTask={deleteTasks} isChecked={isChecked}></List>
        </div>
      </div>
    );
}

export default Input;