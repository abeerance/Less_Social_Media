import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import classes from './HeaderBottom.module.css'
import { RiHome2Line, RiAddCircleLine, RiCompassDiscoverLine, RiChatSmile2Line, RiAccountCircleLine } from "react-icons/ri";




const HeaderBottom = () => {
    return (
        <Fragment>
            <header className={classes.header}>
                <nav>
                    <ul className={classes['nav ul']}>
                        <li className={classes['nav ul li']}>
                            <Link to="/home"><RiHome2Line className={classes.navigationIcon}/></Link>    
                        </li>
                        <li className={classes['nav ul li']}>
                            <Link to="/newpost"><RiAddCircleLine className={classes.navigationIcon}/></Link>    
                        </li>
                        <li className={classes['nav ul li']}>
                            <Link to="/discover"><RiCompassDiscoverLine className={classes.navigationIcon}/></Link>    
                        </li>
                        <li className={classes['nav ul li']}>
                            <Link to="/messages"><RiChatSmile2Line className={classes.navigationIcon}/></Link>    
                        </li>
                        <li className={classes['nav ul li']}>
                            <Link to="/personalfeed"><RiAccountCircleLine className={classes.navigationIcon}/></Link>    
                        </li>
                    </ul>
                </nav>
            </header>
        </Fragment>
    );
};

export default HeaderBottom;
