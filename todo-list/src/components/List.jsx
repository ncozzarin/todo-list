import React from 'react';
import '../App.css';


const List = (props) => { 
    const tasks = props.tasks;
/*     const [state, setState] = React.useState({
        tasks: tasks
      }); */
/*     console.log(state); */
    return(
        tasks.map((task, index) => 
            <div className='list-div'>
                <input type="checkbox"></input>
                <li key={index}>{task}</li>
                <button>X</button>
            </div>
        )
    );
}

export default List;