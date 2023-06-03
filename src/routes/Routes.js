import { Route } from "react-router-dom/cjs/react-router-dom.min";
import MainPage from "../pages/mainPage/MainPage";
import AddToDo from "../pages/add-todo/AddToDo";

const Routes = ()=>{
    return <>

        <Route path="/" component = {MainPage} exact />
        <Route path="/add" component = {AddToDo} />
    
    </>
}

export default Routes;