import React, { Fragment } from "react";
import classes from './Header.module.css'
import { FiHome, FiMessageSquare, FiCompass, FiHeart } from "react-icons/fi";

import Profile from "./Profile";
import Search from "./Search";


const Header = () => {
    return (
        <Fragment>
            <header className={classes.header}>
                <Search />
                <nav>
                    <ul className={classes['nav ul']}>
                        <li className={classes['nav ul li']}><FiHome /></li>
                        <li className={classes['nav ul li']}><FiMessageSquare /></li>
                        <li className={classes['nav ul li']}><FiCompass /></li>
                        <li className={classes['nav ul li']}><FiHeart /></li>
                    </ul>
                </nav>
                <Profile />
            </header>
        </Fragment>
    );
};

export default Header;
