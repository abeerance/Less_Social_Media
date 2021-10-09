import React from "react";
import classes from "./PublicFeed.module.css";
import LikeAndDesc from "./LikeAndDesc";
import AvatarContainer from "./AvatarContainer";
import Modal from "@mui/material/Modal";

const FeedItem = ({ item }) => (
    <div className={classes.feedContainer}>
        <AvatarContainer>Abeerance</AvatarContainer>
        <div className={classes.imageContainer}>
            <h2>this is the image</h2>
        </div>
        <LikeAndDesc />
        <div className={classes.commentContainer}>
            <div className={classes.commentContent}>
                <p className={classes.fuckingP}>
                    <span className={classes.userName}>Abeerance</span>
                    {item.post_desc}
                </p>
            </div>
        </div>
    </div>
);

const PublicFeed = ({ feedback }) => {
    return feedback.map((f) => <FeedItem item={f} />);
};
export default PublicFeed;
