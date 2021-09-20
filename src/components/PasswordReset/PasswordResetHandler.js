import React, { useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";

import classes from "./PasswordResetHandler.module.css";
import lessLogo from '../assets/login-landing.svg'

function resetPassword() {
    const { toggleNav, passwordReset } = useContext(AudioContext);

    const initialState = {
        userInfo: {
            email: "",
        },
        errorMsg: "",
        successMsg: "",
    };
    const [state, setState] = useState(initialState);

    const submitForm = async (event) => {
        event.preventDefault();
        const data = await passwordReset(state.userInfo);
        if(data.success){
            setState({
                ...initialState,
                successMsg:data.message,
            });
        }
        else{
            setState({
                ...state,
                successMsg:'',
                errorMsg:data.message
            });
        }
    }

    // on change input value (email)
    const onChangeValue = (e) => {
        setState({
            ...state,
            userInfo:{
                ...state.userInfo,
                [e.target.name]:e.target.value
            }
        });
    }

    // show message on success or error
    let successMsg = '';
    let errorMsg = '';
    if(state.errorMsg){
        errorMsg = <div className="error-msg">{state.errorMsg}</div>;
    }
    if(state.successMsg){
        successMsg = <div className="success-msg">{state.successMsg}</div>;
    }

    return(
        <div className={classes._pwResetRegister}>
            <img src={lessLogo} alt="less Logo" />
            <form onSubmit={submitForm} noValidate>
                
            </form>
        </div>
    )

}
