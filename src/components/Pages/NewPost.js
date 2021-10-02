import React, { useState } from "react";
import classes from "./NewPost.module.css";
import { RiCloseCircleFill, RiCloseFill } from "react-icons/ri";

const NewPost = () => {
    const [selectedImage, setSelectedImage] = useState();

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
                        accept="image/*"
                        type="file"
                        onChange={imageChangeHandler}
                    />
                </div>
            </div>
        </div>
    );
};

export default NewPost;
