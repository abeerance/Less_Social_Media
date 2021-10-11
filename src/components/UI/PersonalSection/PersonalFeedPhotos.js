import React, { useState, useContext, useEffect } from "react";
import { AuthContext } from "../../../contexts/AuthContext";
import classes from "./PersonalFeedPhotos.module.css";
import Modal from "@mui/material/Modal";
import axios from "axios";
import testimage from '../../../user-assets/sample1.jpeg'

const FeedPhotos = ({ images }) => {
    <div className={classes.imageContent} />;
};

const PersonalFeedPhotos = ({ user }) => {
    const { rootState } = useContext(AuthContext);
    const { isAuth, theUser } = rootState;
    const [allImages, setAllImages] = useState([]);
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        const getAllUserImages = () => {
            if (isAuth) {
                const username = { user };
                console.log(username)

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
                        setLoaded(true)
                        console.log(allImages)
                    })
                    .catch((response) => {
                        //handle error
                        console.log(response);
                    });
            }
        };
        getAllUserImages();
    }, [loaded]);

    if(!undefined) {
        return(
            <div className={classes.imagesGrid}>
                <div className={classes.imageContainer}>
                    <img src={testimage} className={classes.imageContent} alt="" />
                </div>
                <div className={classes.imageContainer}>
                    <img src={testimage} className={classes.imageContent} alt="" />
                </div>
                <div className={classes.imageContainer}>
                    <img src={testimage} className={classes.imageContent} alt="" />
                </div>
                <div className={classes.imageContainer}>
                    <img src={testimage} className={classes.imageContent} alt="" />
                </div>
                <div className={classes.imageContainer}>
                    <img src={testimage} className={classes.imageContent} alt="" />
                </div>
                <div className={classes.imageContainer}>
                    <img src={testimage} className={classes.imageContent} alt="" />
                </div>
                <div className={classes.imageContainer}>
                    <img src={testimage} className={classes.imageContent} alt="" />
                </div>
                <div className={classes.imageContainer}>
                    <img src={testimage} className={classes.imageContent} alt="" />
                </div>
                <div className={classes.imageContainer}>
                    <img src={testimage} className={classes.imageContent} alt="" />
                </div>
                <div className={classes.imageContainer}>
                    <img src={testimage} className={classes.imageContent} alt="" />
                </div>
                <div className={classes.imageContainer}>
                    <img src={testimage} className={classes.imageContent} alt="" />
                </div>
                <div className={classes.imageContainer}>
                    <img src={testimage} className={classes.imageContent} alt="" />
                </div>
            </div>
        )

        /*return(
            <div className={classes.imagesGrid}>
                {allImages.map(images=>(i) => <div>hehehehe</div>)}
            </div>
        )*/
    //return allImages.map((i) => <FeedPhotos images={i} />);
    }
};

export default PersonalFeedPhotos;
