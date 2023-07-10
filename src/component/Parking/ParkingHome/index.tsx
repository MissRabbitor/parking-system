import React, { FunctionComponent } from "react";
import {  Link } from 'react-router-dom'
import './ParkingHome.css';

const ParkingHome: FunctionComponent = () => {
    return (
        <div className="ParkingHome">
            <header className="ParkingHome-header">
                ParkingHome
            </header>
            <div><Link to={'/Parking/firstFloor'}>firstFloor</Link></div>

        </div>
    );
}

export default ParkingHome