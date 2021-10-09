import React from "react";
import classes from './Feed.module.css'
import PublicFeed from "../UI/PublicFeed";

const Feed = () => {
    return (
        <div className={classes.feedSection}>
            <PublicFeed />
        </div>
    )
}

export default Feed