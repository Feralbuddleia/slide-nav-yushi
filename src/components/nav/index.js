import React from "react";
import './nav.css';

const Nav = (props) => {
    const { city, curCity, buttonClick } = props;
    const active = curCity === city ? 'active' : '';
    return (
        <a 
            href="# "
            className={`nav ${active}`}
            onClick={() => buttonClick(city)}
        >{city}</a>
    )
}

export default Nav;