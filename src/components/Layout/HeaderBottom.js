import React, { Fragment,useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import classes from './HeaderBottom.module.css'
import { RiHome2Line, RiAddCircleLine, RiCompassDiscoverLine, RiChatSmile2Line, RiAccountCircleLine } from "react-icons/ri";



const HeaderBottom = () => {
    // get current path
    const {pathname} = useLocation()
    

    return (
        <Fragment>
            <header className={classes.header}>
                <nav>
                    <ul className={classes['nav ul']}>
                        <li className={classes['nav ul li']}>
                            <NavLink to="/"><RiHome2Line className={classes.navigationIcon}/></NavLink>    
                        </li>
                        <li className={classes['nav ul li']}>
                            <NavLink to="/newpost"><RiAddCircleLine className={classes.navigationIcon}/></NavLink>    
                        </li>
                        <li className={classes['nav ul li']}>
                            <NavLink to="/discover"><RiCompassDiscoverLine className={classes.navigationIcon}/></NavLink>    
                        </li>
                        <li className={classes['nav ul li']}>
                            <NavLink to="/messages"><RiChatSmile2Line className={classes.navigationIcon}/></NavLink>    
                        </li>
                        <li className={classes['nav ul li']}>
                            <NavLink to="/personalfeed"><RiAccountCircleLine className={classes.navigationIcon}/></NavLink>    
                        </li>
                    </ul>
                </nav>
            </header>
        </Fragment>
    );
};

export default HeaderBottom;
