import React from 'react';

const Input = () => 
{

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
        console.log(state);
      }

      
    return(
      <div>
        <input onChange={updateTask} value={state.task} />
        <button onClick={addTask}></button>    
      </div>
    );
}

export default Input;