import React from 'react';
import '../App.css';


function List(props) { 
    const tasks = props.tasks
    return(
        tasks && tasks.map((task, index) => 
            <span clssName="list-div">
                <input type="checkbox"></input>
                <li key={index}>{task}</li>
                <button>X</button>
            </span>
        )
    );
}

export default List;