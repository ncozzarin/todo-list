import React from 'react';
import List from '../List/List';
import shortid from 'shortid';
import './Input.css';
const Input = () => 
{
  const [tasks, setTasks] = React.useState([]);
  const [newTask, setNewTask] = React.useState("");


    function deleteTasks(id){
      let tasksCopy = tasks;
      let taskIndex = tasksCopy.findIndex(x => x.id === id);
      tasksCopy.splice(taskIndex,1);
      setTasks(tasksCopy);
    }
    
    function updateTask(event){
      setNewTask(event.target.value);
    }

    function inputKeyEvent(event){
      if(event.key === "Enter"){
        addTask();
      }
    }

    function isChecked(id){
      let tasksCopy = tasks;
      let index = tasksCopy.findIndex(x => x.id === id);
      if(tasksCopy[index].complete === false){
        tasksCopy[index].complete = true;
      } else {
        tasksCopy[index].complete = false;
      }
      setTasks(tasksCopy);
    }

    function deleteDone(){
      let todoTasks=[];
      tasks.map((task) => {
        if(task.complete === false){
          todoTasks.push(task);
        }
      });
      setTasks(todoTasks);
    }
      
    function addTask(){
      if(newTask !== ""){
        setTasks((tasks) => [...tasks, 
              {
                task: newTask,
                id: shortid.generate(),
                complete: false
              }, 
            ]);
        setNewTask("");
        }

    }
    
    return(
      <div className="input-div">
        <div>
          <input className="input" onKeyPress={inputKeyEvent} maxLength="25" onChange={updateTask} value={newTask} />
          <button className="addButton" onClick={addTask} >+</button>
        </div>
        <ul>
          <List tasks={tasks} deleteTask={deleteTasks} isChecked={isChecked}></List>
        </ul>
        
        <button className="delete-done" onClick={deleteDone}>Delete done</button>
      </div>
    );
}

export default Input;