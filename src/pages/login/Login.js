import NavBar from "../mainPage/NavBar";
import { Route,Link } from "react-router-dom/cjs/react-router-dom.min";


const Login =()=>{
    return <>
         <NavBar />

         <div className="todo_container">
            <button onClick={()=>{
                localStorage.setItem("loggedIn",true);
            }} >Login</button>

            <Link to="/login/showInfo">Show Info</Link>
            <Route path="/login/showInfo" >
                <div>
                    This is dummy login and doesnot communicate with server
                </div>
            </Route>
         </div>
    
    </>
};

export default Login;