import React, {useContext,useState, useEffect} from "react";
import classes from './AvatarContainer.module.css'
import axios from "axios";
import { AuthContext } from "../../contexts/AuthContext";
import User from "../UI/User";
import AvatarAllPlaceholder from '../../assets/avatarPlaceholder8.webp'

const AvatarContainer = ({username}) => {
    const { rootState } = useContext(AuthContext);
    const { isAuth, theUser } = rootState;
    const [user, setUser] = useState()

    useEffect(() => {
        const getUsername = () => {
            if(isAuth){
                const userid = username.users_id
        
                let url = "http://127.0.0.1/less_webapp/api/get-username.php";
        
                const formData = new FormData()
                formData.append("id", userid)
        
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
        }
        getUsername()
    }, [rootState, isAuth, theUser])

    
    return (
        <div className={classes.avatarContainer}>
            <div className={classes.avatarImage}>
                <img src={AvatarAllPlaceholder} alt="Placeholder" className={classes.avatarResize}/>
            </div>
            <User user={user}/>
        </div>
    )
}

export default AvatarContainer