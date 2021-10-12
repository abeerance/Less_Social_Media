import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import classes from './HeaderBottom.module.css'
import { RiHome2Line, RiAddCircleLine, RiCompassDiscoverLine, RiChatSmile2Line, RiAccountCircleLine } from "react-icons/ri";



const HeaderBottom = () => {    

    return (
        <Fragment>
            <footer className={classes.headerBottom}>
                <nav className={classes.navBottom}>
                    <ul className={classes.ulBottom}>
                        <li>
                            <NavLink exact to="/"><RiHome2Line className={classes.navigationIconBottom}/></NavLink>    
                        </li>
                        <li>
                            <NavLink to="/newpost"><RiAddCircleLine className={classes.navigationIconBottom}/></NavLink>    
                        </li>
                        <li>
                            <NavLink to="/messages"><RiChatSmile2Line className={classes.navigationIconBottom}/></NavLink>    
                        </li>
                        <li>
                            <NavLink to="/personalfeed"><RiAccountCircleLine className={classes.navigationIconBottom}/></NavLink>    
                        </li>
                    </ul>
                </nav>
            </footer>
        </Fragment>
    );
};

export default HeaderBottom;
