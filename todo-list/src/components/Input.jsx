import React from 'react';
import List from './List';

const Input = () => 
{
    const tasks = [];
    const [state, setState] = React.useState({
        task:"",
        taskCount: 0,
        
      });
    
      function updateTask(event){
        setState({ 
          task : event.target.value
      });
      } 

      function addTask(){
        setState({
          task: state.task,
          taskCount: state.taskCount + 1
        })
      
        for (let i = 0; i < state.taskCount; i ++){
          tasks.push(state.task);
        }
        console.log(tasks);
    }
    

    return(
      <div>
        <div>
          <input onChange={updateTask} value={state.task} />
          <button onClick={addTask}>+</button>
        </div>
        <ul>
          <List tasks={tasks}></List>
        </ul>
      </div>
    );
}

export default Input;