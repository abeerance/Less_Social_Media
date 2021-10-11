import React, { useState, useContext, useEffect } from "react";
import { AuthContext } from "../../../contexts/AuthContext";
import classes from "./PersonalFeedPhotos.module.css";
import Modal from "@mui/material/Modal";
import axios from "axios";
import testimage from '../../../assets/sample1.jpeg'
import testimage2 from '../../../assets/sample2.jpg'
import testimage3 from '../../../assets/sample3.jpg'
import testimage4 from '../../../assets/sample4.jpg'
import testimage5 from '../../../assets/sample5.jpg'
import testimage6 from '../../../assets/sample6.jpg'
import testimage7 from '../../../assets/sample7.jpg'
import testimage8 from '../../../assets/sample8.jpg'
import testimage9 from '../../../assets/sample9.jpg'
import testimage10 from '../../../assets/sample10.jpg'
import testimage11 from '../../../assets/sample11.jpg'
import testimage12 from '../../../assets/sample12.jpg'


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
                    <img src={testimage2} className={classes.imageContent} alt="" />
                </div>
                <div className={classes.imageContainer}>
                    <img src={testimage3} className={classes.imageContent} alt="" />
                </div>
                <div className={classes.imageContainer}>
                    <img src={testimage4} className={classes.imageContent} alt="" />
                </div>
                <div className={classes.imageContainer}>
                    <img src={testimage5} className={classes.imageContent} alt="" />
                </div>
                <div className={classes.imageContainer}>
                    <img src={testimage6} className={classes.imageContent} alt="" />
                </div>
                <div className={classes.imageContainer}>
                    <img src={testimage7} className={classes.imageContent} alt="" />
                </div>
                <div className={classes.imageContainer}>
                    <img src={testimage8} className={classes.imageContent} alt="" />
                </div>
                <div className={classes.imageContainer}>
                    <img src={testimage9} className={classes.imageContent} alt="" />
                </div>
                <div className={classes.imageContainer}>
                    <img src={testimage10} className={classes.imageContent} alt="" />
                </div>
                <div className={classes.imageContainer}>
                    <img src={testimage11} className={classes.imageContent} alt="" />
                </div>
                <div className={classes.imageContainer}>
                    <img src={testimage12} className={classes.imageContent} alt="" />
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
