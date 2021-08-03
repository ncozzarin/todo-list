import React from 'react';
import '../App.css';


const List = (props) => { 
    const tasks = props.tasks;
    const deleteTask = props.deleteTask;
    const isChecked = props.isChecked;
    const status = props.status;
    return(
        tasks.map((task, index) => 
            <div key={index} className='list-div'>
                <input onChange={()=> isChecked(index,status)} value={status} type="checkbox"></input>
                <li >{task}</li>
                <button onClick={() => deleteTask(index,tasks)}>X</button>
            </div>
        )
    );
}

export default List;