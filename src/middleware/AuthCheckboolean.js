import { useHistory } from "react-router-dom";

const AuthCheckboolean =()=>{
   
    const history = useHistory();

    let loggedIn = false;

    if(localStorage.getItem("loggedIn"))
{
    loggedIn = true
}

return loggedIn;
};

export default AuthCheckboolean;