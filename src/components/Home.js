import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Switch, Route, useHistory } from "react-router-dom";
//import classes from "./Home.module.css";
import HeaderTop from "./Layout/HeaderTop";
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
    const history = useHistory()

    // if user Logged in
    if (isAuth) {
        // ERROR MELDUNG VORHANDEN
        history.push('/')
        return (
            <header>
                <HeaderTop />
                <Switch>
                    <Route exact path="/" component={Feed} />
                    <Route path="/newpost" component={NewPost} />
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
