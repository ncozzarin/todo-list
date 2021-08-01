import React from 'react';
import List from './List';
import '../App.css';
const Input = () => 
{
    /* const tasks = []; */
    const [state, setState] = React.useState({
        tasks:[],
        taskCount: 0,
        task: ""
        
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
          task : event.target.value
      });
      } 

      function inputKeyEvent(event){
        if(event.key === "Enter"){
          addTask();
        }
      }
      function addTask(){
        if(state.task !== ""){
        setState({
          ...state,
          tasks: [...state.tasks,  state.task],
          taskCount: state.taskCount + 1,
          task:""
        });
      }    
      


      }
    
    return(
      <div className="todo-list-div">
        <div>
          <input onChange={updateTask} onKeyPress={inputKeyEvent} value={state.task} />
          <button onClick={addTask} >+</button>
        </div>
        <ul>
          <List tasks={state.tasks} deleteTask={deleteTasks}></List>
        </ul>
      </div>
    );
}

export default Input;