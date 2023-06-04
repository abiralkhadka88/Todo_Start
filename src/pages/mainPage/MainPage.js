import {useHistory } from "react-router-dom/cjs/react-router-dom.min";
import NavBar from './NavBar.js';
import { useRef } from "react";
import { FaRegEye } from 'react-icons/fa';


const MainPage = () =>{

    const getTodo = localStorage.getItem("todo") ? JSON.parse(localStorage.getItem("todo")):[];



    
    return <> 
      
    <NavBar />

    <div className="todo_container">
      <h3>Your to-do      </h3>

      {getTodo.map(el=><>
      
      <div className="single_todo">{el}
      <FaRegEye size={"18px"} />
      </div>
      
      </>)
      
      
      
      }
      {/* <div className="single_todo">Todo</div>
      <div className="single_todo">Todo</div> */}
    </div>
    
      </>
}

export default MainPage;