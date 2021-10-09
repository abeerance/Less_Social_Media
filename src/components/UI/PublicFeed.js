import React, { useState, useContext, useEffect } from "react";
import classes from "./PublicFeed.module.css";
import LikeAndDesc from "./LikeAndDesc";
import AvatarContainer from "./AvatarContainer";
import Modal from "@mui/material/Modal";
import axios from "axios";
import { AuthContext } from "../../contexts/AuthContext";

const PublicFeed = () => {

    const { rootState } = useContext(AuthContext);
    const { isAuth, theUser } = rootState;
    const [feedback, setFeedback] = useState("");

    //window.addEventListener('load', this.onLoadHandler);

    

    useEffect(() => {
        const getFeedback = () => {
            if (isAuth) {
                const username = theUser.username;
                // php url
                let url = "http://127.0.0.1/less_webapp/api/get-posts-feed.php";
                // sending upload request
    
                // new formData
                const formData = new FormData();
                formData.append("username", username)
    
                // post request
                axios
                    .post(url, formData, {
                        // receive two paramenter endpoint url
                    })
                    .then((response) => {
                        // handle success
                        setFeedback(response.data);
                        
                    })
                    .catch((response) => {
                        //handle error
                        console.log(response);
                    });
            }
        };
        getFeedback();
    }, [rootState, isAuth, theUser]);

    return (
        <div className={classes.feedContainer}>
            <AvatarContainer />
            <div className={classes.imageContainer}>
                <h2>this is the image</h2>
            </div>
            <LikeAndDesc />
            <div className={classes.commentContainer}>
                <div className={classes.commentContent}>
                    <p className={classes.fuckingP}>
                        <span className={classes.userName}>Abeerance</span>{" "}
                        asdijasidojasiojdioajsidjasiodjoiajdoijiodiadiojsadoij
                    </p>
                </div>
            </div>
        </div>
    );
};
export default PublicFeed;
