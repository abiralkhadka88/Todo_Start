import NavBar from "../mainPage/NavBar";
import { useHistory } from "react-router-dom/cjs/react-router-dom";

const ViewPage =()=>{

    const history = useHistory();
    
    return <>
    
    <NavBar />

    <div className="todo_container">

    <button onClick={()=>{
        history.push("/");
    }} style={{background:"#e7e7e7",color:"#666"}}  >  Go Back</button>

    </div>
    </>




};

export default ViewPage;