import React from 'react';
import '../App.css';


const List = ({tasks,deleteTask,isChecked,completed}) => {
    return(
        Object.keys(tasks).map((task, index) => 
            <div key={index} className='list-div'>
                <input onChange={()=> isChecked(index,completed)} value={completed} type="checkbox"></input>
                <li >{task}</li>
                <button onClick={() => deleteTask(index,tasks)}>X</button>
            </div>
        )
    );
}

export default List;