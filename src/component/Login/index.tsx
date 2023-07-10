import React, { FunctionComponent, useRef, useState } from "react";
import { Link } from "react-router-dom"
import store from "../../store";
import { loginUpdate, updateUserName } from "../../store/action";
import './Login.css';

const Login: FunctionComponent = () => {
    const [userName, setUserName] = useState('')
    const clickLogin = () => {
        console.log(userName)
        store.dispatch(loginUpdate())
        store.dispatch(updateUserName(userName))
    }
    return (
        <div className="Login">
            <header className="Login-header">
                Log in to parking system
            </header>
            <div className="Login-form">
                <form>
                    <p>userName:</p>
                    <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)}></input>
                    <p>password:</p>
                    <input type="password"></input>
                    <button type="submit" onClick={() => clickLogin()} className="Login-button"><Link to="/">log in</Link > </button>
                </form>

            </div>
        </div>
    );
}

export default Login