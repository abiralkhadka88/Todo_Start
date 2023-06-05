import { BrowserRouter, Route, Switch,Redirect } from "react-router-dom/cjs/react-router-dom.min";
import MainPage from "../pages/mainPage/MainPage";
import AddToDo from "../pages/add-todo/AddToDo";
import ViewPage from "../pages/viewPage/ViewPage";
import Login from "../pages/login/Login";
import NotFound from "../pages/not_found/NotFound";

const Routes = ()=>{
    return <>
    <BrowserRouter>
      <Switch>
    <Route path="/" exact>
        <Redirect to="/home" />
    </Route>

        <Route path="/home" component = {MainPage} exact />
        {/* <Route path="/add" component = {AddToDo} /> */}

        <Route path="/add" component={AddToDo} exact />
           

        <Route path="/login" component = {Login} />
        
        <Route path="/view/:id" component = {ViewPage} exact />

        <Route path = "*" component={NotFound} ></Route>
        

        </Switch>
    </BrowserRouter>
    
    </>
}

export default Routes;