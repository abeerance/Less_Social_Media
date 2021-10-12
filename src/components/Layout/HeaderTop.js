import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import classes from "./HeaderTop.module.css";
import lessLogoWhite from "../../assets/logo-white.svg";
import { RiSearchLine, RiHeartLine } from "react-icons/ri";

const HeaderTop = () => {
    return (
        <Fragment>
            <header className={classes.headerTop}>
                <img
                    src={lessLogoWhite}
                    alt="Less social media logo in white"
                    className={classes.lessLogoTop}
                />
                <nav className={classes.navTop}>
                    <ul className={classes.ulTop}>
                        <li>
                            <NavLink to="/notifications">
                                <RiHeartLine
                                    className={classes.navigationIcon}
                                />
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/search">
                                <RiSearchLine
                                    className={classes.navigationIcon}
                                />
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </header>

            <header className={classes.fixedTop}>
                <div className={classes.topPosition}>
                    <img
                        src={lessLogoWhite}
                        alt="Less social media logo in white"
                        className={classes.lessLogoTopBig}
                    />
                    <nav className={classes.navTopBig}>
                        <ul className={classes.ulTopBig}>
                            <li>
                                <NavLink to="/notifications">
                                    <RiHeartLine
                                        className={classes.navigationIconBig}
                                    />
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/search">
                                    <RiSearchLine
                                        className={classes.navigationIconBig}
                                    />
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        </Fragment>
    );
};

export default HeaderTop;
