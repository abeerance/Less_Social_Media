import React, { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import classes from "./Login.module.css";
import lessLogo from "../assets/login-landing.svg";

function Login() {
    const { toggleNav, loginUser, isLoggedIn } = useContext(AuthContext);

    const initialState = {
        userInfo: {
            username: "",
            password: "",
        },
        errorMsg: "",
        successMsg: "",
    };

    const [state, setState] = useState(initialState);

    // On change input value (username & password)
    const onChangeValue = (e) => {
        setState({
            ...state,
            userInfo: {
                ...state.userInfo,
                [e.target.name]: e.target.value,
            },
        });
    };

    // On Submit Login From
    const submitForm = async (event) => {
        event.preventDefault();
        const data = await loginUser(state.userInfo);
        if (data.success && data.token) {
            setState({
                ...initialState,
            });
            localStorage.setItem("loginToken", data.token);
            await isLoggedIn();
        } else {
            setState({
                ...state,
                successMsg: "",
                errorMsg: data.message,
            });
        }
    };

    // Show Message on Error or Success
    let successMsg = "";
    let errorMsg = "";
    if (state.errorMsg) {
        errorMsg = <div className="error-msg">{state.errorMsg}</div>;
    }
    if (state.successMsg) {
        successMsg = <div className="success-msg">{state.successMsg}</div>;
    }

    return (
        <div className={classes.landingwrapper}>
            <div className={classes._loginRegister}>
                <img
                    src={lessLogo}
                    alt="less logo"
                    className={classes["img"]}
                />
                <form onSubmit={submitForm} noValidate>
                    <div className={classes["form-control"]}>
                        <input
                            name="username"
                            type="text"
                            required
                            placeholder="Username"
                            value={state.userInfo.username}
                            onChange={onChangeValue}
                        />
                    </div>
                    <div className={classes["form-control"]}>
                        <input
                            name="password"
                            type="password"
                            required
                            placeholder="Password"
                            value={state.userInfo.password}
                            onChange={onChangeValue}
                        />
                    </div>
                    {errorMsg}
                    {successMsg}
                    <div className={classes["form-control"]}>
                        <button
                            className={classes["login-button"]}
                            type="submit"
                        >
                            Login
                        </button>
                    </div>
                </form>
                <div className={classes["register"]}>
                    <p className={classes["_signup"]}>
                        Don't have an account yet?
                    </p>
                    <button
                        onClick={toggleNav}
                        className={classes["register-button"]}
                    >
                        Sign-Up
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Login;
