import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import AuthCheckboolean from "../../middleware/AuthCheckboolean";
import NavBar from "../mainPage/NavBar";

const ViewPage =()=>{


    const history = useHistory();

    const getParams = useParams();

    const getID = getParams.id;

    const getStorage = localStorage.getItem("todo")?JSON.parse(localStorage.getItem("todo")):[];

    const getData = getStorage[getID];
    
    
    //Query Parse...
    // const getLocation = useLocation();

    // const getURLParams =  new URLSearchParams(getLocation.search);
    // const getID = getURLParams.get("id");
    // console.log(getID);
    // const getData = getStorage[getID];

    const deleteTodo=()=>{
        history.replace("/");
        getStorage.splice(getID,1);
        localStorage.setItem("todo",JSON.stringify(getStorage));
    }
    return <>
    
    <NavBar />

    <div className="todo_container">

    <button onClick={()=>{
        history.push("/");
    }} style={{background:"#e7e7e7",color:"#666"}}  >  Go Back</button>

<div style = {{
    background:"#e7e7e7",
    padding:"20px",
    fontSize: "20px",
    margin:"20px"
}}>
    {getData}
    </div>
    {AuthCheckboolean()?
    <><button  onClick={deleteTodo} style={{background:"red"}}>Delete Todo</button>

</> :<> Login to see more options <Link to="/login" > Login Now! </Link>   </> }
    
    </div>

    
    </>




};

export default ViewPage;