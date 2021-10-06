import React, { useState } from "react";
import classes from "./NewPost.module.css";
import { RiCloseFill } from "react-icons/ri";
import Modal from '@mui/material/Modal';


const NewPost = () => {
    const [selectedImage, setSelectedImage] = useState();
    const [open, setOpen] = React.useState(false)
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)

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
    const uploadToDB = () => {
        console.log({selectedImage})
    }

    return (
        <div className={classes.newPostSection}>
            <div className={classes.imagePreviewContainer}>
                {selectedImage && (
                    <div className={classes.preview}>
                        <img
                            src={URL.createObjectURL(selectedImage)}
                            className={classes.imagePreviewResize}
                            alt="Thumb"
                        />
                        <button
                            onClick={removeSelectedImageHandler}
                            className={classes.deleteButton}
                        >
                            <RiCloseFill className={classes.deleteButtonIcon} />
                        </button>
                        <button onClick={handleOpen} className={classes.uploadButton}>Upload</button>
                        <Modal open={open}
                        onClose={handleClose}>
                            <div className={classes.newPostModal}>
                                <img src={URL.createObjectURL(selectedImage)}
                                    className={classes.smallPreview}
                                    alt="Thumb"/>
                                <textarea id="imageComment" rows="5" className={classes.textareaStyle} placeholder="Share us your thoughts" />
                                <button onClick={uploadToDB} className={classes.uploadToDBButton}>Publish</button>
                            </div>
                        </Modal>
                    </div>
                )}
            </div>
            <div>
                <div className={classes.shareText}>
                    <h2>Share</h2>
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
                        onChange={imageChangeHandler}
                    />
                </div>
            </div>
        </div>
    );
};

export default NewPost;
