import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function TodoList(){

    let [toDo, setToDo] = useState([{task:"Sample Task" , id: uuidv4() }]);
    let [newToDo, setNewToDo] = useState("");

    let addNewTask = () =>{
        setToDo((prevTodo) => {
            return [...prevTodo, {task: newToDo, id: uuidv4() }];
        });
        setNewToDo("");  //To reseting the value of input field
    }

    let handleChange = (event) =>{
        setNewToDo(event.target.value);
        console.log(event.target.value);
    }
    return(
        <div>
            <h1>ToDo List (React)</h1>
            <input placeholder="add a task" value={newToDo} onChange={handleChange}></input>
            <button onClick={addNewTask}>Add</button>
            <br /><br /> <br />
            <hr></hr>
            <h3>Tasks:</h3>
            <br />
            <ul>
                {toDo.map((todo)=>(
                    <li key={toDo.id}>{todo.task}</li>
                ))}
            </ul>
        </div>
    )
}