import React, { useState, useContext, useEffect } from "react";
import { AuthContext } from "../../../contexts/AuthContext";
import classes from "./PersonalFeedPhotos.module.css";
import FeedPhotos from "./FeedPhotos";
import Modal from "@mui/material/Modal";
import axios from "axios";

const PersonalFeedPhotos = ({ user }) => {
    const { rootState } = useContext(AuthContext);
    const { isAuth, theUser } = rootState;
    const [allImages, setAllImages] = useState([]);

    useEffect(() => {
        const getAllUserImages = () => {
            if (isAuth) {
                const username = { user };

                let url = "http://127.0.0.1/less_webapp/api/get-all-images.php";

                const formData = new FormData();
                formData.append("username", username.user);

                // post request
                axios
                    .post(url, formData, {
                        // receive two paramenter endpoint url
                    })
                    .then((response) => {
                        // handle success
                        setAllImages(response.data);
                    })
                    .catch((response) => {
                        //handle error
                        console.log(response);
                    });
            }
        };
        getAllUserImages();
    }, [rootState, isAuth, theUser]);

    return (
        <div className={classes.imageContainer}>
            <FeedPhotos allImages={allImages} />
        </div>
    );
};

export default PersonalFeedPhotos;
