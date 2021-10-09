import React from "react";
import classes from "./LikeAndDesc.module.css"
import { RiHeartLine, RiChat3Line } from "react-icons/ri"

const LikeAndDesc = (props) => {
    return (
        <div className={classes.likeContainer}>
            <button className={classes.buttonPlacement}><RiHeartLine className={classes.likeCommentIcon}/></button>
            <button className={classes.buttonPlacement}><RiChat3Line className={classes.likeCommentIcon}/></button>
            <p className={classes.postDesc}>asdaodhasiodhoaishdoihasasdsadasdasdsd</p>
        </div>
    )
}

export default LikeAndDesc