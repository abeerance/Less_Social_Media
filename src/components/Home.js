import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Switch, Route } from "react-router-dom";
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
            <header>
                <Switch>
                    <Route exact path="/" component={Feed} />
                    <Route path="/newpost" component={NewPost} />
                    <Route path="/discover" component={Discover} />
                    <Route path="/messages" component={Messages} />
                    <Route path="/personalfeed" component={PersonalFeed} />
                </Switch>
                <HeaderBottom />
            </header>
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
