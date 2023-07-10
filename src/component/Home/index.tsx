import React, { FunctionComponent } from "react";
import { Link } from 'react-router-dom'
import store from "../../store";
import './Home.css';

const Home: FunctionComponent = () => {
    const { loginState, userName } = store.getState()
    return (
        <div className="bgc">
            {loginState && <header className="Home-bar">
                userName:{userName}
            </header>}
            <div className="Home">
                <header className="Home-header">
                    Welcome to Parking System
                </header>
                <div className="HomeNav">
                    <Link to={'/login'}>Login</Link >
                    <Link to={loginState ? '/parking' : '/login'}>Parking</Link >
                    <Link to={loginState ? '/payment' : '/login'}>Payment</Link >
                </div>
            </div>
        </div>
    );
}

export default Home