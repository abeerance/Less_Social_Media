import React, { useState, useContext, useEffect } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import classes from "./PersonalFeed.module.css";
import axios from "axios";
import LoggedInUser from "../UI/LoggedInUser";
import AvatarPersonalPicture from "../UI/AvatarPersonalPicture";
import AvatarInfoContainer from "../UI/AvatarInfoContainer";
import EditProfileButton from "../UI/Buttons/EditProfileButton";
import PersonalFeedPhotos from "../UI/PersonalSection/PersonalFeedPhotos";

const PersonalFeed = () => {
    const { rootState } = useContext(AuthContext);
    const { isAuth, theUser } = rootState;
    const [user, setUser] = useState();

    useEffect(() => {
        const getUsername = () => {
            if (isAuth) {
                const username = theUser.username;

                let url =
                    "http://127.0.0.1/less_webapp/api/get-avatar-user.php";

                const formData = new FormData();
                formData.append("username", username);

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
    }, [rootState, isAuth, theUser]);

    return (
        <div className={classes.position}>
            <div className={classes.personalSection}>
                <div className={classes.userinfo}>
                    <AvatarPersonalPicture />
                    <div>
                        <LoggedInUser user={user} />
                        <AvatarInfoContainer />
                    </div>
                </div>
                <EditProfileButton user={user} />
                <div className={classes.profileLine} />
                <PersonalFeedPhotos user={user} />
            </div>
        </div>
    );
};

export default PersonalFeed;
