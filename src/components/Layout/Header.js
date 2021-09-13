import React, { Fragment } from "react";
import classes from './Header.module.css'

import Profile from "./Profile";
import Search from "./Search";


const Header = () => {
    return (
        <Fragment>
            <header className={classes.header}>
                <Search />
                <nav>
                    <ul className={classes['nav ul']}>
                        <li>Home</li>
                        <li>Messages</li>
                        <li>Discover</li>
                        <li>Notifications</li>
                    </ul>
                </nav>
                <Profile />
            </header>
        </Fragment>
    );
};

export default Header;
