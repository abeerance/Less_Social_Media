import React, { useState, useEffect, useContext } from "react";
import classes from "./ImageContainer.module.css";
import axios from "axios";
import { AuthContext } from "../../contexts/AuthContext";

const ImageContainer = ({ image }) => {
    const { rootState } = useContext(AuthContext);
    const { isAuth } = rootState;
    const [user, setUser] = useState();

    useEffect(() => {
        const getUsername = () => {
            if (isAuth) {
                const userid = image.users_id;

                let url = "http://127.0.0.1/less_webapp/api/get-username.php";

                const formData = new FormData();
                formData.append("id", userid);

                // post request
                axios
                    .post(url, formData, {
                        // receive two paramenter endpoint url
                    })
                    .then((response) => {
                        // handle success
                        setUser(response.data);
                    })
                    .catch((response) => {
                        //handle error
                        console.log(response);
                    });
            }
        };
        getUsername();
    }, []);

    if (!undefined) {
        return (
            <div className={classes.imageContainer}>
                <img
                    src={`less_webapp/api/user-assets/${user}/${image.post_img}`}
                    className={classes.imagePost}
                />
            </div>
        );
    }
};

export default ImageContainer;
