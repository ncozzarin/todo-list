import React from 'react';
import List from './List';
import '../App.css';
const Input = () => 
{
    const [tasks, setTask] = React.useState([]);
      function deleteTasks(taskIndex, tasks){
        tasks.splice(taskIndex,1);
      }
    
      function updateTask(event){

        setTask([...tasks,{
          task: event.target.value,
        }]);
      } 

      function inputKeyEvent(event){
        if(event.key === "Enter"){
          addTask();
        }
      }

      function isChecked(index, status){
      }

      function deleteDone(){
    }
      
      function addTask(){
        let newTasks = tasks
        if(tasks[tasks.length] !== ""){
          setTask((tasks) => [...tasks, 
                {
                  task:tasks,
                  id: tasks.length,
                  complete:false
                }, 
              ]);
            }


      }
    
    return(
      <div className="input-div">
        <div>
          <input className="input" onChange={updateTask} onKeyPress={inputKeyEvent} value={tasks.task} />
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