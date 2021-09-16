import React, { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";

const login = () => {
    const { toggleNav, loginUser, isLoggedIn } = useContext(AuthContext);

    const initialState = {
        userInfo: {
            email: "",
            password: "",
        },
        errorMsg: "",
        successMsg: "",
    };

    const [state, setState] = useState(initialState);

    // on change input value email & password
    const onChangeValue = (e) => {
        setState({
            ...state,
            userInfo: {
                ...state.userInfo,
                [e.target.name]: e.target.value,
            },
        });
    };

    //on submit login form
    const submitForm = async (event) => {
        event.preventDefault();
        const data = await loginUser(state.userInfo);
        if (data.success && data.toker) {
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

    // show message on error or success
    let successMsg = "";
    let errorMsg = "";
    if (state.errorMsg) {
        errorMsg = <div>{state.errorMsg}</div>;
    }
    if (state.successMsg) {
        successMsg = <div>{state.successMsg}</div>;
    }

    return (
        <div className="_loginRegister">
            <h1>Login</h1>
            <form onSubmit={submitForm} noValidate>
                <div className="form-control">
                    <label>Email</label>
                    <input
                        name="email"
                        type="email"
                        required
                        placeholder="Enter your email"
                        value={state.userInfo.email}
                        onChange={onChangeValue}
                    />
                </div>
                <div className="form-control">
                    <label>PassWord</label>
                    <input
                        name="password"
                        type="password"
                        required
                        placeholder="Enter your password"
                        value={state.userInfo.password}
                        onChange={onChangeValue}
                    />
                </div>
                {errorMsg}
                {successMsg}
                <div className="form-control">
                    <button type="submit">Login</button>
                </div>
            </form>
            <div className="_navBtn">
                <button onClick={toggleNav}>Register</button>
            </div>
        </div>
    );
};

export default Login;
