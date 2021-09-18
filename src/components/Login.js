import React, {useContext, useState} from 'react'
import { AuthContext } from '../contexts/AuthContext';

function Login(){

    const {toggleNav,loginUser,isLoggedIn} = useContext(AuthContext);

    const initialState = {
        userInfo:{
            username:'',
            password:'',
        },
        errorMsg:'',
        successMsg:'',
    }

    const [state,setState] = useState(initialState);

    // On change input value (username & password)
    const onChangeValue = (e) => {
        setState({
            ...state,
            userInfo:{
                ...state.userInfo,
                [e.target.name]:e.target.value
            }
        });
    }

    // On Submit Login From
    const submitForm = async (event) => {
        event.preventDefault();
        const data = await loginUser(state.userInfo);
        if(data.success && data.token){
            setState({
                ...initialState,
            });
            localStorage.setItem('loginToken', data.token);
            await isLoggedIn();
        }
        else{
            setState({
                ...state,
                successMsg:'',
                errorMsg:data.message
            });
        }
    }

    // Show Message on Error or Success
    let successMsg = '';
    let errorMsg = '';
    if(state.errorMsg){
        errorMsg = <div className="error-msg">{state.errorMsg}</div>;
    }
    if(state.successMsg){
        successMsg = <div className="success-msg">{state.successMsg}</div>;
    }



    return(
        <div className="_loginRegister">
            <h1>Login</h1>
            <form  onSubmit={submitForm} noValidate>
                <div className="form-control">
                    <label>Username</label>
                    <input name="username" type="text" required placeholder="Enter your username" value={state.userInfo.username} onChange={onChangeValue} />
                </div>
                <div className="form-control">
                    <label>PassWord</label>
                    <input name="password" type="password" required placeholder="Enter your password" value={state.userInfo.password} onChange={onChangeValue} />
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
}

export default Login;