import React from "react";
import classes from './FeedPhotos.module.css'
import Photos from "./Photos";

const FeedPhotos = ({allImages}) => {
    return(
        <div className={classes.imagesGrid}>
            <Photos images={allImages}/>
        </div>
    )
}

export default FeedPhotos