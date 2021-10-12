import React, { useState, useContext, useEffect, createRef } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import classes from "./PersonalFeedPhotos.module.css";
import Modal from "@mui/material/Modal";
import axios from "axios";
import testimage from "../../assets/sample1.webp"
import testimage2 from "../../assets/sample2.webp";
import testimage3 from "../../assets/sample3.webp";
import testimage4 from "../../assets/sample4.webp";
import testimage5 from "../../assets/sample5.webp";
import testimage6 from "../../assets/sample6.webp";
import testimage7 from "../../assets/sample7.webp";
import testimage8 from "../../assets/sample8.webp";
import testimage9 from "../../assets/sample9.webp";
import testimage10 from "../../assets/sample10.webp";
import testimage11 from "../../assets/sample11.webp";
import testimage12 from "../../assets/sample12.webp";

const PersonalFeedPhotos = ({ user }) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const { rootState } = useContext(AuthContext);
    const { isAuth, theUser } = rootState;
    const [allImages, setAllImages] = useState([]);
    const [loaded, setLoaded] = useState(false);

    const openImage = (e) => {
        console.log(e.target)
        // future implementation of opening the selected div 
    };

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
                        setLoaded(true);
                    })
                    .catch((response) => {
                        //handle error
                        console.log(response);
                    });
            }
        };
        getAllUserImages();
    }, [loaded]);

    if (!undefined) {
        return (
            <div className={classes.imagesGrid}>
                <div className={classes.imageContainer} onClick={openImage}>
                    <img
                        src={testimage}
                        className={classes.imageContent}
                        alt=""
                    />
                </div>
                <div className={classes.imageContainer} onClick={openImage}>
                    <img
                        src={testimage2}
                        className={classes.imageContent}
                        alt=""
                    />
                </div>
                <div className={classes.imageContainer} onClick={openImage}>
                    <img
                        src={testimage3}
                        className={classes.imageContent}
                        alt=""
                    />
                </div>
                <div className={classes.imageContainer} onClick={openImage}>
                    <img
                        src={testimage4}
                        className={classes.imageContent}
                        alt=""
                    />
                </div>
                <div className={classes.imageContainer} onClick={openImage}>
                    <img
                        src={testimage5}
                        className={classes.imageContent}
                        alt=""
                    />
                </div>
                <div className={classes.imageContainer} onClick={openImage}>
                    <img
                        src={testimage6}
                        className={classes.imageContent}
                        alt=""
                    />
                </div>
                <div className={classes.imageContainer} onClick={openImage}>
                    <img
                        src={testimage7}
                        className={classes.imageContent}
                        alt=""
                    />
                </div>
                <div className={classes.imageContainer} onClick={openImage}>
                    <img
                        src={testimage8}
                        className={classes.imageContent}
                        alt=""
                    />
                </div>
                <div className={classes.imageContainer} onClick={openImage}>
                    <img
                        src={testimage9}
                        className={classes.imageContent}
                        alt=""
                    />
                </div>
                <div className={classes.imageContainer} onClick={openImage}>
                    <img
                        src={testimage10}
                        className={classes.imageContent}
                        alt=""
                    />
                </div>
                <div className={classes.imageContainer} onClick={openImage}>
                    <img
                        src={testimage11}
                        className={classes.imageContent}
                        alt=""
                    />
                </div>
                <div className={classes.imageContainer} onClick={openImage}>
                    <img
                        src={testimage12}
                        className={classes.imageContent}
                        alt=""
                    />
                </div>
                <Modal open={open} onClose={handleClose}></Modal>
            </div>
        );

        /*return(
            <div className={classes.imagesGrid}>
                {allImages.map(images=>(i) => <div>hehehehe</div>)}
            </div>
        )*/
        //return allImages.map((i) => <FeedPhotos images={i} />);
    }
};

export default PersonalFeedPhotos;
