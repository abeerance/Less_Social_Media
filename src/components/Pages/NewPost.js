import React, {useState} from "react";
import classes from './NewPost.module.css'
import Button from '@mui/material/Button'

const NewPost = () => {

    return (
        <div className={classes.newPostSection}>
            <div className={classes.imagePreview} />
        </div>
    )
}

export default NewPost;