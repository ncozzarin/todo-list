import React from 'react';
import List from './List';
import '../App.css';
const Input = () => 
{
    const [tasks, setTask] = React.useState([]);
      function deleteTasks(taskIndex, tasks){
        tasks.splice(taskIndex,1);
        setTask({
          ...tasks,
          tasks: tasks
        });
      }
    
      function updateTask(event){
      } 

      function inputKeyEvent(event){
        if(event.key === "Enter"){
          addTask();
        }
      }

      function isChecked(index, status){
        console.log(index);
        if (status[index] !== true){
          status[index] = true;
        } else {
          status[index] = false;
        }

      }

      function deleteDone(){
        
        let status = tasks.status;
        let deletedItems = 0;
        for(let i = tasks.taskCount - 1;i >= 0;i--){
            console.log(i);
            console.log(tasks.status[i]);
            if(tasks.status[i] === true){
              tasks.splice(i,1);
              status.splice(i,1);
              deletedItems++;
          }
        }

      
    }
      

      function addTask(){
        if(tasks.tasks.task !== ""){}


      }
    
    return(
      <div className="input-div">
        <div>
          <input className="input" onChange={updateTask} onKeyPress={inputKeyEvent} value={current} />
          <button className="addButton" onClick={addTask} >+</button>
        </div>
        <ul>
          <List tasks={tasks} deleteTask={deleteTasks} isChecked={isChecked}></List>
        </ul>
        
        <button onClick={deleteDone}>Delete checked X</button>
      </div>
    );
}

export default Input;