import React from "react";
import classes from './EditProfileButton.module.css'
import Modal from "@mui/material/Modal";
import AvatarPlaceholder from '../../../assets/avatarPlaceholder.jpeg'

const EditProfileButton = ({user}) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return(
        <div>
            <button className={classes.editProfileButton} onClick={handleOpen}>Edit profile</button>
            <Modal open={open} onClose={handleClose}>
                <div className={classes.userInfoContainer}>
                    <div className={classes.avatarContainer}>
                        <img src={AvatarPlaceholder} alt="" className={classes.avatarImage}/>
                    </div>
                    <h2 className={classes.usernameStyle}>{user}</h2>
                    <form className={classes.formStyle}>
                        <input type="text" className={classes.inputStyle} placeholder="username"/>
                        <input type="text" className={classes.inputStyle} placeholder="changeusername"/>
                        <input type="text" className={classes.inputStyle} placeholder="password"/>
                        <input type="text" className={classes.inputStyleBottom} placeholder="changepassword"/>
                        <button className={classes.submitChangeButton}>Submit changes</button>
                    </form>
                </div>
            </Modal>
        </div>
    )
}

export default EditProfileButton