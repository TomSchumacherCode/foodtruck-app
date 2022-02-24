import React from "react";
import { NavLink } from "react-router-dom";


function Menu() {

    return(
        <nav className="menu flex">
            <NavLink> Map </NavLink>
            <NavLink> About </NavLink>
            <NavLink> Truck Login </NavLink>
        </nav>
    )
}

export default Menu;