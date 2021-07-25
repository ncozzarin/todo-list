import React from 'react';

function List(props) { 
    const tasks = props.tasks
    return(
        tasks && tasks.map((task, index) => 
            <li key={index}>{task}</li>
        )
    );
}

export default List;