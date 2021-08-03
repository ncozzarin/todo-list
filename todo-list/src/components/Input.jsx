import React from 'react';
import List from './List';
import '../App.css';
const Input = () => 
{
    /* const tasks = []; */
    const [state, setState] = React.useState({
        tasks:[],
        taskCount: 0,
      });

      function deleteTasks(taskIndex, tasks){
        tasks.splice(taskIndex,1);
        setState({
          ...state,
          tasks: tasks
        });
      }
    
      function updateTask(event){
        setState({ 
          ...state,
          tasks : {task: event.target.value}
      });
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
        setState({
          ...state,
          status: status
        });
        console.log(state.status);
      }

      function deleteDone(){
        console.log(state.taskCount);
        console.log(state.status);
        console.log(state.tasks);
        let tasks = state.tasks;
        let status = state.status;
        let deletedItems = 0;
        for(let i = state.taskCount - 1;i >= 0;i--){
            console.log(i);
            console.log(state.status[i]);
            if(state.status[i] === true){
              tasks.splice(i,1);
              status.splice(i,1);
              deletedItems++;
          }
        }
        console.log(tasks);
        console.log(status);
        setState({
          ...state,
          tasks: tasks,
          status: status,
          taskCount: state.taskCount - deletedItems
        });
      
    }
      

      function addTask(){
        if(state.tasks.task !== ""){
        setState({
          ...state,
          tasks: [{...state.tasks},{task: state.tasks.task, id: state.taskCount, completed: false }],
          taskCount: state.taskCount + 1,
        });
      }    
      


      }
    
    return(
      <div className="input-div">
        <div>
          <input className="input" onChange={updateTask} onKeyPress={inputKeyEvent} value={state.tasks.task} />
          <button className="addButton" onClick={addTask} >+</button>
        </div>
        <ul>
          <List tasks={state.tasks} deleteTask={deleteTasks} isChecked={isChecked} completed={state.tasks.completed}></List>
        </ul>
        
        <button onClick={deleteDone}>Delete checked X</button>
      </div>
    );
}

export default Input;