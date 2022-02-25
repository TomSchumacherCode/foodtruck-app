import React from "react";
import { NavLink } from "react-router-dom";


function Menu() {

    return(
        <nav className="menu flex">
            <NavLink to="mapdisplay"> Map </NavLink>
            <NavLink to="about"> About </NavLink>
            <NavLink to="login"> Truck Login </NavLink>
        </nav>
    )
}

export default Menu;