import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import classes from "./Home.module.css";
import HeaderBottom from "./Layout/HeaderBottom"

// importing the Login & Register Componet
import Login from "./Login";
import Register from "./Register";

function Home() {
    const { rootState} = useContext(AuthContext);
    const { isAuth, showLogin } = rootState;

    // if user Logged in
    if (isAuth) {
        return (
            <div className={classes.userinfo}>
                <HeaderBottom />
            </div>
        );
    }
    // show Login Or Register Page according to the condition
    else if (showLogin) {
        return <Login />;
    } else {
        return <Register />;
    }
}

export default Home;
