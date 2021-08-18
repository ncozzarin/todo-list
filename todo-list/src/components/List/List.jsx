import React from 'react';
import './List.css';

const List = ({tasks,deleteTask,isChecked}) => {
    const [tasks, setTasks] = React.useState([]);

    function deleteTasks(id){
        let tasksCopy = tasks;
        let taskIndex = tasksCopy.findIndex(x => x.id === id);
        tasksCopy.splice(taskIndex,1);
        setTasks(tasksCopy);
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


    return(
        tasks && tasks.map((task) => 
            <div>
            <div key={task.id} className='list-div'>
                <ul>
                    <li>
                        <input onChange={()=> isChecked(task.id)} defaultChecked = {task.complete} type="checkbox"></input>
                        <span className={task.complete ? "strike" : ""}>{task.task}</span>
                        <button onClick={() => deleteTask(task.id)}>X</button>
                    </li>
                </ul>
            </div>
            <div>
                <button onClick={deleteDone}>Delete checked X</button>
            </div>
            </div>

        )
    );
}

export default List;