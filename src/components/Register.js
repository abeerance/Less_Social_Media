import React, { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import classes from "./Register.module.css";
import lessLogo from "../assets/login-landing.svg";

function Register() {
    const { toggleNav, registerUser } = useContext(AuthContext);

    const initialState = {
        userInfo: {
            username: "",
            email: "",
            password: "",
        },
        errorMsg: "",
        successMsg: "",
    };
    const [state, setState] = useState(initialState);

    // On Submit the Registration Form
    const submitForm = async (event) => {
        event.preventDefault();
        const data = await registerUser(state.userInfo);
        if (data.success) {
            setState({
                ...initialState,
                successMsg: data.message,
            });
        } else {
            setState({
                ...state,
                successMsg: "",
                errorMsg: data.message,
            });
        }
    };

    // On change the Input Value (username, email, password)
    const onChangeValue = (e) => {
        setState({
            ...state,
            userInfo: {
                ...state.userInfo,
                [e.target.name]: e.target.value,
            },
        });
    };

    // Show Message on Success or Error
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
            <div className={classes._signUpRegister}>
                <img src={lessLogo} alt="Less logo" />
                <form onSubmit={submitForm} noValidate>
                    <div className={classes["form-control"]}>
                        <input
                            name="username"
                            required
                            type="text"
                            value={state.userInfo.username}
                            onChange={onChangeValue}
                            placeholder="Username"
                        />
                    </div>
                    <div className={classes["form-control"]}>
                        <input
                            name="email"
                            required
                            type="email"
                            value={state.userInfo.email}
                            onChange={onChangeValue}
                            placeholder="Email"
                        />
                    </div>
                    <div className={classes["form-control"]}>
                        <input
                            name="password"
                            required
                            type="password"
                            value={state.userInfo.password}
                            onChange={onChangeValue}
                            placeholder="Password"
                        />
                    </div>
                    {errorMsg}
                    {successMsg}
                    <div className={classes["form-control"]}>
                        <button
                            className={classes["signup-button"]}
                            type="submit"
                        >
                            Sign Up
                        </button>
                    </div>
                </form>
                <div className={classes["backToLogin"]}>
                    <p className={classes["_login"]}>
                        Already have an account?
                    </p>
                    <button
                        className={classes["backToLogin-button"]}
                        onClick={toggleNav}
                    >
                        Login
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Register;
