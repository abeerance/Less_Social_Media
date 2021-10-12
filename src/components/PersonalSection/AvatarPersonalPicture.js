import React from "react";
import classes from './AvatarPersonalPicture.module.css'
import avatarPlaceholder from '../../assets/avatarPlaceholder.webp'

const AvatarPersonalPicture = () => {
    return(
        <div className={classes.avatarPictureContainer}>
            <img src={avatarPlaceholder} alt="" className={classes.avatarPicture}/>
        </div>
    )
}

export default AvatarPersonalPicture