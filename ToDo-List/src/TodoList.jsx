import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';

export default function TodoList(){

    let [toDo, setToDo] = useState([{task:"Sample Task" , id: uuidv4(), isDone: false }]);
    let [newToDo, setNewToDo] = useState("");

    let addNewTask = () =>{
        setToDo((prevTodo) => {
            return [...prevTodo, {task: newToDo, id: uuidv4(), isDone: false }];
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
    
    let allUppercase = () => {    
        setToDo( (preValue) => 
            preValue.map((todo) => {
                return {
                    ...todo,
                    task: todo.task.toUpperCase(),
                }
            })
         )
    }

    let oneUppercase = (id) => {    
        setToDo((prevValue) => 
            prevValue.map((todo) => {
                if(todo.id === id){
                    return {
                        ...todo,
                        task: todo.task.toUpperCase(),
                    }
                }else{
                    return todo;
                }
            })
        )
    }

    let oneDone = (id) => {    
        setToDo((prevValue) => 
            prevValue.map((todo) => {
                if(todo.id === id){
                    return {
                        ...todo,
                        isDone: true,
                    }
                }else{
                    return todo;
                }
            })
        )
    }

    let alldone = () => {    
        setToDo( (preValue) => 
            preValue.map((todo) => {
                return {
                    ...todo,
                    isDone: true,
                }
            })
         )
    }

    return(
        <div>
            <h1>ToDo List (React)</h1>
            <input placeholder="add a task" value={newToDo} onChange={handleChange}></input> &nbsp; &nbsp;
            <Button variant="contained" onClick={addNewTask}>Add</Button>
            <br /><br /> <br />
            <hr></hr>
            <h3>Tasks:</h3>
            <br />
            <ul>
                {toDo.map((todo)=>(
                    <li key={todo.id}>
                        <span style={todo.isDone ? {textDecorationLine: "line-through"} : {}}>{todo.task}</span> 
                        &nbsp; &nbsp;
                        <IconButton aria-label="delete" color="error" onClick={() => deleteToDo(todo.id)} >
                            <DeleteIcon />
                        </IconButton>
                        &nbsp; &nbsp;
                        <Button variant="contained" onClick={() => oneUppercase(todo.id)} >Uppercase</Button>
                        &nbsp; &nbsp;
                        <Button variant="contained" color="success" onClick={() => oneDone(todo.id)}>Mark as done</Button>
                        
                    </li>
                    
                ))}
            </ul>
            <Button variant="contained" onClick={allUppercase}>UpperCase all</Button>
            &nbsp; &nbsp;
            <Button variant="contained" color="error"  onClick={alldone}>Mark as Done</Button>
        </div>
    )
}