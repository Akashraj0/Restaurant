import React from 'react'
import { Routes ,Route } from 'react-router-dom';
import Menu from '../Menu';
import Bookingform from '../Bookingform';
import Main from '../Main';
const Router = () => {
  return (
    <div>
        <Routes>
            <Route path="Restaurant" element={<Main/>} />
            {/* <Route path="/" element={<Hero/>} /> */}
            <Route path="/Reservetable" element={<Bookingform/>}/>
            <Route path="Menu" element={<Menu/>}/>
        </Routes>
    </div>
  )
}

export default Router