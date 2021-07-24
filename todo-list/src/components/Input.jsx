import React from 'react';
import List from './List';

const Input = () => 
{
    let tasks = [];
    const [state, setState] = React.useState({
        taskCount: 0,
        task:""
      });
    
      function updateTask(event){
        setState({ 
          task : event.target.value
      });
      } 

      function addTask(){
        setState({
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