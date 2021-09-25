import React, { Fragment } from "react";
import classes from './HeaderBottom.module.css'
import { RiHome2Line, RiSearch2Line, RiCompassDiscoverLine, RiChatSmile2Line, RiAccountCircleLine } from "react-icons/ri";




const HeaderBottom = () => {
    return (
        <Fragment>
            <header className={classes.header}>
                <nav>
                    <ul className={classes['nav ul']}>
                        <li className={classes['nav ul li']}><RiHome2Line /></li>
                        <li className={classes['nav ul li']}><RiSearch2Line /></li>
                        <li className={classes['nav ul li']}><RiCompassDiscoverLine /></li>
                        <li className={classes['nav ul li']}><RiChatSmile2Line /></li>
                        <li className={classes['nav ul li']}><RiAccountCircleLine /></li>
                    </ul>
                </nav>
            </header>
        </Fragment>
    );
};

export default HeaderBottom;
