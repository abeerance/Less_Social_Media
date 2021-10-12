import React from "react";
import classes from "./PublicFeed.module.css";
import LikeAndDesc from "./LikeAndDesc";
import AvatarContainer from "./AvatarContainer";
import Modal from "@mui/material/Modal";
import ImageContainer from "./ImageContainer";

const FeedItem = ({ item }) => (
    <div className={classes.feedContainer}>
        <AvatarContainer username= {item}/>
        <ImageContainer image = {item}/>
        <LikeAndDesc postDescription = {item} />
        <div className={classes.commentContainer}>
            <div className={classes.commentContent}>
                <p className={classes.fuckingP}>
                    <span className={classes.userName}>Abeerance</span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget magna fermentum iaculis eu non diam phasellus vestibulum lorem. Sit amet massa vitae tortor condimentum lacinia quis vel eros. Risus at ultrices mi tempus imperdiet nulla. Mi eget mauris pharetra et ultrices neque ornare.
                </p>
            </div>
        </div>
    </div>
);

const PublicFeed = ({ feedback }) => {
    return feedback.map((f) => <FeedItem item={f} />);
};
export default PublicFeed;
