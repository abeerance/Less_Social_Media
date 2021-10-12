import React, { useState, useContext, useEffect } from "react";
import classes from './Feed.module.css'
import PublicFeed from "../PublicFeed/PublicFeed";
import axios from "axios";
import { AuthContext } from "../../contexts/AuthContext";

const Feed = () => {
    const { rootState } = useContext(AuthContext);
    const { isAuth, theUser } = rootState;
    const [feedback, setFeedback] = useState([]);

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
        <div className={classes.feedSection}>
            <PublicFeed feedback={feedback}/>
        </div>
    )
}

export default Feed