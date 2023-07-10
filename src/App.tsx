import React, { FunctionComponent } from 'react';
import { Route, Routes } from 'react-router-dom'
import Home from './component/Home';
import Login from './component/Login';
import Parking from './component/Parking/ParkingHome';
import firstFloor from './component/Parking/FirstFloor'
import Payment from './component/Payment';

const App: FunctionComponent = () => {
  return (
    <Routes>
      <Route path="/" Component={Home} />
      <Route path="/login" Component={Login} />
      <Route path="/Parking" Component={Parking} />
      <Route path="/Parking/firstFloor" Component={firstFloor} />
      <Route path="/payment" Component={Payment} />
    </Routes>
  )
}

export default App;
