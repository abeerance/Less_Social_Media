import React, { createContext, Component } from "react";
const axios = require("axios").default;

export const AuthContext = createContext();

// define baseURL
const Axios = axios.create({
    baseURL: "http://localhost/less_webapp/api/",
});

class AuthContextProvider extends Component {
    constructor() {
        super();
        this.isLoggedIn();
    }

    // Root State
    state = {
        showLogin: true,
        isAuth: false,
        theUser: null,
    };

    // Toggle between Login & Singup page
    toggleNav = () => {
        const showLogin = !this.state.showLogin;
        this.setState({
            ...this.state,
            showLogin,
        });
    };

    // logoutUser
    logoutUser = () => {
        localStorage.removeItem("loginToken");
        this.setState({
            ...this.state,
            isauth: false,
        });
        // refresh page due logout
        window.location.reload(false);
    };

    // registerUser
    registerUser = async (user) => {
        // Seingint user registration request:
        const register = await Axios.post("register.php", {
            username: user.username,
            email: user.email,
            password: user.password,
        });
        return register.data;
    };

    // loginUser
    loginUser = async (user) => {
        // sending user login request
        const login = await Axios.post("login.php", {
            username: user.username,
            password: user.password,
        });
        return login.data;
    };

    // check user logged in or not
    isLoggedIn = async () => {
        const loginToken = localStorage.getItem("loginToken");

        // if inside the localStorage has the Token
        if (loginToken) {
            // add token to axios default header
            Axios.defaults.headers.common["Authorization"] =
                "bearer " + loginToken;

            // fetch user information
            const { data } = await Axios.get("user-info.php");

            // if user information is successfull
            if (data.success && data.user) {
                this.setState({
                    ...this.state,
                    isAuth: true,
                    theUser: data.user,
                });
            }
        }
    };

    render() {
        const contextValue = {
            rootState: this.state,
            toggleNav: this.toggleNav,
            isLoggedIn: this.isLoggedIn,
            registerUser: this.registerUser,
            loginUser: this.loginUser,
            logoutUser: this.logoutUser,
        };
        return (
            <AuthContext.Provider value={contextValue}>
                {this.props.children}
            </AuthContext.Provider>
        );
    }
}

export default AuthContextProvider;
