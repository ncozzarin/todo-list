import React from 'react';

function List(props) { 
    const tasks = props.tasks
    return(
        tasks && tasks.map((task) => 
            <li>{task}</li>
        )
    );
}

export default List;