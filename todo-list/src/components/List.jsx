import React from 'react';
import '../App.css';


const List = ({tasks,deleteTask,isChecked}) => {
    return(
        tasks && tasks.map((task, index) => 
            <div key={index} className='list-div'>
                <input onChange={()=> isChecked(index,tasks)} type="checkbox"></input>
                <li >{task[0]}</li>
                <button onClick={() => deleteTask(index,tasks)}>X</button>
            </div>
        )
    );
}

export default List;