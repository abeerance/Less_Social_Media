import React from "react";
import classes from './LoggedInUser.module.css'

const LoggedInUser = ({user}) => {
    return(
        <div>
            <h2 className={classes.username}>{user}</h2>
        </div>
    )
}

export default LoggedInUser