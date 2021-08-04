import React from 'react';
import '../App.css';


const List = ({tasks,deleteTask,isChecked,completed}) => {
    console.log(Object.keys(tasks).map(tasks));
    return(
        tasks.map((tasks, index) => 
            <div key={index} className='list-div'>
                <input onChange={()=> isChecked(index,completed)} value={completed} type="checkbox"></input>
                <li >{tasks.task}</li>
                <button onClick={() => deleteTask(index,tasks.task)}>X</button>
            </div>
        )
    );
}

export default List;