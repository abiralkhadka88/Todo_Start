import { useHistory } from "react-router-dom";

const AuthCheck =()=>{
    const history = useHistory();
    
    if(localStorage.getItem("loggedIn")){

}
else{
  history.push('/login');
}
};

export default AuthCheck;