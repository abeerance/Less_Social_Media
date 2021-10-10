import React from "react";
import classes from './User.module.css'

const User = ({user}) => {
    if(!undefined){
        return(<p className={classes.username}>{user}</p>)
    }
} 

export default User