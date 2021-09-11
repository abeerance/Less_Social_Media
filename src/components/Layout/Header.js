import React, { Fragment } from "react";

const Header = (props) => {
    return (
        <Fragment>
            <header>
                <nav>
                    <ul>
                        <li>Home</li>
                        <li>Messages</li>
                        <li>Discover</li>
                        <li>Notifications</li>
                    </ul>
                </nav>
            </header>
        </Fragment>
    );
};

export default Header;
