import React from 'react';
import './App.css';
import ReactDOM from 'react-dom';




function App() {

  const [state, setState] = React.useState({
    taskCount: 0,
    task:""
  });

  function Task(){
    
  }

  function renderTasks(){
    const tasks = [];
    for (let i = 0; i < state.taskCount; i ++){
      tasks.push(<Task key={i} number={i}/>);
    }
    return(
      <div>
        <input type="checkbox"/>
        <p>{state.task}</p>
      </div>
    );
  }

  function updateTask(event){
    setState({ 
      task : event.target.value
  });
  }  

  function addTask(){
    setState({
      taskCount: state.taskCount + 1
    })
  }
  return (
    <div className="todo-listnp">
      <div>
        <h1>
          Todo - List
        </h1>
        <input onChange={updateTask} value={state.task} />
        <button onClick={addTask}></button>    
      </div>
      <div id='list'>

      </div>
    </div>
  );
}

export default App;
