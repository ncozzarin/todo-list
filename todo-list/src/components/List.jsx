import React from 'react';
import '../App.css';


const List = ({tasks,deleteTask,isChecked}) => {
    return(
        tasks && tasks.map((task) => 
            <div key={task.id} className='list-div'>
                <input onChange={()=> isChecked(task.id)} defaultChecked = {task.complete} type="checkbox"></input>
                <li >{task.task}</li>
                <button onClick={() => deleteTask(task.id,tasks)}>X</button>
            </div>
        )
    );
}

export default List;