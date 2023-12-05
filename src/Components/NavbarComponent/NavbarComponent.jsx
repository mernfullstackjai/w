import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import LoginComponent from '../routes/LoginComponent/LoginComponent'
import SignupComponent from '../routes/SignupComponent/SignupComponent'
import './NavbarComponent.css'

const NavbarComponent = () => {
    return(
    <BrowserRouter>
    <div className='main'>
        <ol>
            <li>
                <Link to='/'>WEATHERAPP</Link>
            </li>
            <li>
                <Link to='/signup'>RIDERS ZONE</Link>
            </li>
        </ol>
    </div>
    <Routes>
        <Route exact path='/' element={<LoginComponent/>}></Route>
        <Route exact path='/signup' element={<SignupComponent/>}></Route>
    </Routes>
</BrowserRouter>

    )
}

export default NavbarComponent