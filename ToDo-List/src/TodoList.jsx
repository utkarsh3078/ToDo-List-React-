import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function TodoList(){

    let [toDo, setToDo] = useState([{task:"Sample Task" , id: uuidv4() }]);
    let [newToDo, setNewToDo] = useState("");
    let [isDone, setIsDone] = useState("false")

    let addNewTask = () =>{
        setToDo((prevTodo) => {
            return [...prevTodo, {task: newToDo, id: uuidv4(), done: isDone }];
        });
        setNewToDo("");  //To reseting the value of input field
    }

    let handleChange = (event) =>{
        setNewToDo(event.target.value);
        console.log(event.target.value);
    }

    let deleteToDo = (id) =>{
        let copy = toDo.filter((todo) => todo.id != id);
        setToDo(copy);
    }
    
    let allDone = () => {    
        setToDo( toDo.map((todo)=> {
            function random(text) {
                return(
                    <span style={{textDecoration: "line-through"}}>{text}</span>
                )
            }
            return {
                ...todo,
                task: todo.task.random(todo.task),
            }
        }))
    }

    return(
        <div>
            <h1>ToDo List (React)</h1>
            <input placeholder="add a task" value={newToDo} onChange={handleChange}></input> &nbsp; &nbsp;
            <button onClick={addNewTask}>Add</button>
            <br /><br /> <br />
            <hr></hr>
            <h3>Tasks:</h3>
            <br />
            <ul>
                {toDo.map((todo)=>(
                    <li key={todo.id}>
                        <span>{todo.task}</span> 
                        &nbsp; &nbsp;
                        <button onClick={() => deleteToDo(todo.id)}>Delete</button>
                        &nbsp; &nbsp;
                        <button onClick={allDone}>Mark as done</button>
                        
                    </li>
                    
                ))}
            </ul>
            <button onClick={allDone}>Mark as done all</button>
        </div>
    )
}