import React from 'react';
import List from './List';
import '../App.css';
const Input = () => 
{
  /* I should add a new state variable with the user input  */
    const [newTask, setNewTask] = React.useState("");
    const [tasks, setTasks] = React.useState([]);
      function deleteTasks(taskIndex, tasks){
        tasks.splice(taskIndex,1);
      }
    
    function updateTask(event){
      /* Instead of using a normal variable i will use the input variable here to modify the input */
      setNewTask(event.target.value);
    }

    

      function inputKeyEvent(event){
        if(event.key === "Enter"){
          addTask();
        }
      }

      function isChecked(index, status){
      }

      function deleteDone(){
        let todoTasks=[];
        tasks.map((task) => {
          if(task.completed === false){
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
                  id: tasks.length,
                  complete: false
                }, 
              ]);
          setNewTask("");
            }


      }
    
    return(
      <div className="input-div">
        <div>
          <input className="input" onKeyPress={inputKeyEvent} onChange={updateTask} value={newTask} />
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