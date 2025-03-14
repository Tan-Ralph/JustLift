import React from 'react';
import NavRoutes from '../components/NavRoutes';
const Navbar = () => {
    return(
        <div className = 'bt bb tc mw7 center mt4'>
            <NavRoutes page='Home'/>
            <NavRoutes page='Shop'/>
            <NavRoutes page='Contact Us'/>
            <NavRoutes page='Feedbacks'/>
        </div>
    )
}

export default Navbar;