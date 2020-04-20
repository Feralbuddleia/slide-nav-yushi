import React from "react";
import './nav.css';

const Nav = (props) => {
    const { city, curCity, buttonClick } = props;
    const active = curCity === city ? 'active' : '';
    return (
        <li className={`Tabs__tab ${active} Tab`} onClick={() => buttonClick(city)}>
            <a href='# '>{city}</a>
        </li>
    )
}

export default Nav;