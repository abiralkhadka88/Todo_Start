import { useRef } from "react";
import NavBar from "../mainPage/NavBar.js";
import { useHistory } from "react-router-dom/cjs/react-router-dom.js";

const AddToDo = () =>{
    
  const todoText = useRef();
  const history = useHistory();

  const AddToDo =(e)=>{
    e.preventDefault();
    
    const todoString = todoText.current.value;
    const initialTodo = localStorage.getItem("todo")?JSON.parse(localStorage.getItem("todo")):[];
    initialTodo.push(todoString);
    localStorage.setItem("todo",JSON.stringify(initialTodo));
    history.push('/')
    
  }
    
    return <> 
        <NavBar />
    
     <div className="todo_container">
       <h1>Add Todo:</h1> 
       <form onSubmit = {AddToDo}> 
            <input type="text" ref={todoText} ></input>
            <button>Add</button>

        </form>
    </div>


      </>
}

export default AddToDo;