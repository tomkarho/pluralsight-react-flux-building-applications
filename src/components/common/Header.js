import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
    const activeStyle = {color: '#0fff38'};
    return (
        <nav>
            <NavLink activeStyle={activeStyle} to='/' exact className='btn btn-link'>Home</NavLink>
            <span> | </span>
            <NavLink activeStyle={activeStyle} to='about' className='btn btn-link'>About</NavLink>
            <span> | </span>
            <NavLink activeStyle={activeStyle} to='courses' className='btn btn-link'>Courses</NavLink>
            <span> | </span>
            <NavLink activeStyle={activeStyle} to='course' className='btn btn-link'>Add course</NavLink>
        </nav>
    )
}

export default Header;