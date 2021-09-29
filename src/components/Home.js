import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Route } from "react-router-dom";
import classes from "./Home.module.css";
import HeaderBottom from "./Layout/HeaderBottom";
import Feed from "./Pages/Feed";
import NewPost from "./Pages/NewPost";
import Discover from "./Pages/Discover";
import Messages from "./Pages/Messages";
import PersonalFeed from "./Pages/PersonalFeed";

// importing the Login & Register Componet
import Login from "./Login";
import Register from "./Register";

function Home() {
    const { rootState } = useContext(AuthContext);
    const { isAuth, showLogin } = rootState;

    // if user Logged in
    if (isAuth) {
        return (
            <div>
                <Route path="/home">
                    <Feed />
                </Route>
                <Route path="/newpost">
                    <NewPost />
                </Route>
                <Route path="/discover">
                    <Discover />
                </Route>
                <Route path="/messages">
                    <Messages />
                </Route>
                <Route path="/personalfeed">
                    <PersonalFeed />
                </Route>
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
