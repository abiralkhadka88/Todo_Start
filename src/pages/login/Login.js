import NavBar from "../mainPage/NavBar";
import { Route,Link,useHistory } from "react-router-dom/cjs/react-router-dom.min";


const Login =()=>{
    const history = useHistory();
    return <>
         <NavBar />

         <div className="todo_container">
            {localStorage.getItem("loggedIn")?
             ( <>You are already logged In <button onClick={()=>{
                localStorage.removeItem("loggedIn");
                history.replace("/login");
             }} style = {{background:"Red",cursor:"pointer"}} >Logout</button> </>  ) 
             :(<> <button onClick={()=>{
                    alert("You are successfully logged in");
                    history.replace("/")
                    localStorage.setItem("loggedIn",true);
                }} >Login</button>
    
                <Link to="/login/showInfo">Nested ROute | Show Info</Link>
                <Route path="/login/showInfo" >
                    <div>
                        This is dummy login and doesnot communicate with server
                    </div>
                </Route></>)
            
            }
           
         </div>
    
    </>
};

export default Login;