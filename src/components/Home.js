import React, {useContext} from 'react'
import { AuthContext } from '../contexts/AuthContext';

// importing the Login & Register Componet
import Login from './Login'
import Register from './Register'

function Home(){

    const {rootState,logoutUser} = useContext(AuthContext);
    const {isAuth,theUser,showLogin} = rootState;

    // if user Logged in
    if(isAuth)
    {
        return(
            <div className="userInfo">
                <div className="_img"><span role="img" aria-label="User Image">👦</span></div>
                <h1>{theUser.username}</h1>
                <div className="_email"><span>{theUser.email}</span></div>
                <button onClick={logoutUser}>Logout</button>
            </div>
        )
    }
    // show Login Or Register Page according to the condition
    else if(showLogin){
        return <Login/>;
    }
    else{
        return <Register/>;
    }
    
}

export default Home;