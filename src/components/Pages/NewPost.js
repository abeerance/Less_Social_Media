import React, { useState, useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import classes from "./NewPost.module.css";
import { RiCloseFill } from "react-icons/ri";
import Modal from "@mui/material/Modal";
import axios from "axios";

const NewPost = () => {
    const { rootState } = useContext(AuthContext);
    const { isAuth, theUser } = rootState;
    const [selectedImage, setSelectedImage] = useState();
    const [open, setOpen] = React.useState(false);
    const [commentText, setCommentText] = useState("");
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    // function trigger on file field change
    const imageChangeHandler = (e) => {
        if (e.target.files && e.target.files.length > 0) {
            setSelectedImage(e.target.files[0]);
        }
    };

    // function to remove to remove selected image
    const removeSelectedImageHandler = () => {
        setSelectedImage();
    };

    // upload picture to DB
    const uploadHandler = async (event) => {
        event.preventDefault();

        if (isAuth) {
            const username = theUser.username;
            console.log(username);
            // php url
            let url = "http://127.0.0.1/less_webapp/api/add-post.php";

            // new formData
            const formData = new FormData();
            formData.append("file[]", selectedImage);
            formData.append("username", username);
            formData.append("comment", commentText);

            // sending upload request
            axios
                .post(url, formData, {
                    // receive two parameter endpoint url
                })
                .then((response) => {
                    // handle success
                    console.log(response);
                    setSelectedImage();
                    handleClose()
                })
                .catch((response) => {
                    //handle error
                    console.log(response);
                });
        }
    };

    return (
        <div className={classes.newPostSection}>
            <div className={classes.imagePreviewContainer}>
                {selectedImage && (
                    <div className={classes.preview}>
                        <div className={classes.imagePreviewContainerStyle}>
                            <img
                                src={URL.createObjectURL(selectedImage)}
                                className={classes.imagePreviewResize}
                                alt="Thumb"
                            />
                        </div>
                        <button
                            onClick={removeSelectedImageHandler}
                            className={classes.deleteButton}
                        >
                            <RiCloseFill className={classes.deleteButtonIcon} />
                        </button>
                        <button
                            onClick={handleOpen}
                            className={classes.uploadButton}
                        >
                            Upload
                        </button>
                        <Modal open={open} onClose={handleClose}>
                            <form
                                onSubmit={uploadHandler}
                                className={classes.newPostModal}
                            >
                                <img
                                    src={URL.createObjectURL(selectedImage)}
                                    className={classes.smallPreview}
                                    alt="Thumb"
                                />
                                <textarea
                                    id="imageComment"
                                    type="text"
                                    value={commentText}
                                    onChange={(e) =>
                                        setCommentText(e.target.value)
                                    }
                                    rows="5"
                                    className={classes.textareaStyle}
                                    placeholder="Share us your thoughts"
                                />
                                <button
                                    type="submit"
                                    className={classes.uploadToDBButton}
                                >
                                    Publish
                                </button>
                            </form>
                        </Modal>
                    </div>
                )}
            </div>
            <div>
                <div className={classes.shareText}>
                    <h2 className={classes.headline}>Share</h2>
                    <p className={classes.creativeMindText}>
                        Your creative mind with the world!
                    </p>
                    <label
                        htmlFor="imgUpload"
                        className={classes.selectImageButton}
                    >
                        Select image
                    </label>
                    <input
                        className={classes.hideInput}
                        id="imgUpload"
                        accept=".png, .jpg, .jpeg"
                        type="file"
                        name="file"
                        onChange={imageChangeHandler}
                    />
                </div>
            </div>
        </div>
    );
};

export default NewPost;
