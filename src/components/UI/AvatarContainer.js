import React from "react";
import classes from './AvatarContainer.module.css'

const AvatarContainer = props => {
    return (
        <div className={classes.avatarContainer}>
            <div className={classes.avatarImage}/>
            <p className={classes.username}>Abeerance</p>
        </div>
    )
}

export default AvatarContainer