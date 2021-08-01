import React from 'react';
import '../App.css';


const List = (props) => { 
    const tasks = props.tasks;
    const deleteTask = props.deleteTask;

    return(
        tasks.map((task, index) => 
            <div key={index} className='list-div'>
                <input type="checkbox"></input>
                <li >{task}</li>
                <button onClick={() => deleteTask(index,tasks)}>X</button>
            </div>
        )
    );
}

export default List;