import { useState } from "react"

export default function TodoList(){

    let [toDo, setToDo] = useState([]);
    return(
        <div>
            <h1>ToDo List (React)</h1>
            <input placeholder="add a task"></input>
            <button>Add</button>
            <br /><br /> <br />
            <hr></hr>
            <h3>Tasks:</h3>
            <ul>
                
            </ul>
        </div>
    )
}