import { useState } from "react";

function ToDoListApp() {
    const [tasks, setTasks] = useState([]);
    const [currentTask, setCurrentTask] = useState("")
    function addTasks() {
        setTasks([...tasks, {"taskName" : currentTask, "status" : "toDo"}]);
    }
   

    const deleteTask = (index) => {
        setTasks(tasks.filter((_,i) => i !== index));
    }

    const statusChange = (index) => {

        setTasks(tasks.map((task, i) => {
            if (i === index) {
                return { ...task, status: "Completed" }; // Create a new task object

                
            }     
            return task  

        }));
        
    }
 
    
    return(
    <div>
        <input type = "text" id = "input" name="input" value = {currentTask} placeholder="Enter Tasks to Add" onInput={(e) =>setCurrentTask(e.target.value)}/>
        <button onClick = {addTasks}>ADD</button>

        <ul>
            {tasks.map((task , index) => 
                    <li key ={index}>
                      {index} {task.taskName}  {task.status}   
                      <button onClick = {() => deleteTask(index)}> DELETE </button>
                      <button onClick = {() => statusChange(index) }>COMPLETED</button>

                    </li>
                

           )   
           
        }

        </ul>
    </div>
       );
}
export default ToDoListApp