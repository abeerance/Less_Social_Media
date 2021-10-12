import React from "react";
import classes from "./Messages.module.css";
import AvatarPlaceholderMsg1 from "../../assets/avatarPlaceholder1.webp";
import AvatarPlaceholderMsg2 from "../../assets/avatarPlaceholder2.webp";
import AvatarPlaceholderMsg3 from "../../assets/avatarPlaceholder3.webp";
import AvatarPlaceholderMsg4 from "../../assets/avatarPlaceholder4.webp";
import AvatarPlaceholderMsg5 from "../../assets/avatarPlaceholder5.webp";
import AvatarPlaceholderMsg6 from "../../assets/avatarPlaceholder6.webp";
import AvatarPlaceholderMsg7 from "../../assets/avatarPlaceholder7.webp";
import AvatarPlaceholderMsg8 from "../../assets/avatarPlaceholder8.webp";
import AvatarPlaceholderMsg9 from "../../assets/avatarPlaceholder9.webp";

const Messages = () => {
    return (
        <div className={classes.messagesSection}>
            <div className={classes.messageContainer}>
                <div className={classes.msgAvatar}>
                    <img
                        src={AvatarPlaceholderMsg1}
                        alt="Avatar placeholder image in msg"
                        className={classes.avatarPlaceholderStyle}
                    />
                </div>
                <div className={classes.msgInfo}>
                    <h4 className={classes.msgAvatarname}>Are you ready Martin?</h4>
                    <p className={classes.msg}>
                        Lorem
                        ipsumajdoiasjdioajsdiojasiodjioasjdoiasjdoiajdoijaiodjoiajdoijaoi
                    </p>
                </div>
            </div>
            <div className={classes.messageContainer}>
                <div className={classes.msgAvatar}>
                    <img
                        src={AvatarPlaceholderMsg2}
                        alt="Avatar placeholder image in msg"
                        className={classes.avatarPlaceholderStyle}
                    />
                </div>
                <div className={classes.msgInfo}>
                    <h4 className={classes.msgAvatarname}>Mäddethebest</h4>
                    <p className={classes.msg}>
                        Lorem
                        ipsumajdoiasjdioajsdiojasiodjioasjdoiasjdoiajdoijaiodjoiajdoijaoi
                    </p>
                </div>
            </div>
            <div className={classes.messageContainer}>
                <div className={classes.msgAvatar}>
                    <img
                        src={AvatarPlaceholderMsg3}
                        alt="Avatar placeholder image in msg"
                        className={classes.avatarPlaceholderStyle}
                    />
                </div>
                <div className={classes.msgInfo}>
                    <h4 className={classes.msgAvatarname}>Mädde goes helli</h4>
                    <p className={classes.msg}>
                        Lorem
                        ipsumajdoiasjdioajsdiojasiodjioasjdoiasjdoiajdoijaiodjoiajdoijaoi
                    </p>
                </div>
            </div>
            <div className={classes.messageContainer}>
                <div className={classes.msgAvatar}>
                    <img
                        src={AvatarPlaceholderMsg4}
                        alt="Avatar placeholder image in msg"
                        className={classes.avatarPlaceholderStyle}
                    />
                </div>
                <div className={classes.msgInfo}>
                    <h4 className={classes.msgAvatarname}>Mädde goes hehehehe</h4>
                    <p className={classes.msg}>
                        Lorem
                        ipsumajdoiasjdioajsdiojasiodjioasjdoiasjdoiajdoijaiodjoiajdoijaoi
                    </p>
                </div>
            </div>
            <div className={classes.messageContainer}>
                <div className={classes.msgAvatar}>
                    <img
                        src={AvatarPlaceholderMsg5}
                        alt="Avatar placeholder image in msg"
                        className={classes.avatarPlaceholderStyle}
                    />
                </div>
                <div className={classes.msgInfo}>
                    <h4 className={classes.msgAvatarname}>Martin say what</h4>
                    <p className={classes.msg}>
                        Lorem
                        ipsumajdoiasjdioajsdiojasiodjioasjdoiasjdoiajdoijaiodjoiajdoijaoi
                    </p>
                </div>
            </div>
            <div className={classes.messageContainer}>
                <div className={classes.msgAvatar}>
                    <img
                        src={AvatarPlaceholderMsg6}
                        alt="Avatar placeholder image in msg"
                        className={classes.avatarPlaceholderStyle}
                    />
                </div>
                <div className={classes.msgInfo}>
                    <h4 className={classes.msgAvatarname}>Party party martin</h4>
                    <p className={classes.msg}>
                        Lorem
                        ipsumajdoiasjdioajsdiojasiodjioasjdoiasjdoiajdoijaiodjoiajdoijaoi
                    </p>
                </div>
            </div>
            <div className={classes.messageContainer}>
                <div className={classes.msgAvatar}>
                    <img
                        src={AvatarPlaceholderMsg7}
                        alt="Avatar placeholder image in msg"
                        className={classes.avatarPlaceholderStyle}
                    />
                </div>
                <div className={classes.msgInfo}>
                    <h4 className={classes.msgAvatarname}>Mädde reeeeeee</h4>
                    <p className={classes.msg}>
                        Lorem
                        ipsumajdoiasjdioajsdiojasiodjioasjdoiasjdoiajdoijaiodjoiajdoijaoi
                    </p>
                </div>
            </div>
            <div className={classes.messageContainer}>
                <div className={classes.msgAvatar}>
                    <img
                        src={AvatarPlaceholderMsg8}
                        alt="Avatar placeholder image in msg"
                        className={classes.avatarPlaceholderStyle}
                    />
                </div>
                <div className={classes.msgInfo}>
                    <h4 className={classes.msgAvatarname}>Mädde easteregg</h4>
                    <p className={classes.msg}>
                        Lorem
                        ipsumajdoiasjdioajsdiojasiodjioasjdoiasjdoiajdoijaiodjoiajdoijaoi
                    </p>
                </div>
            </div>
            <div className={classes.messageContainer}>
                <div className={classes.msgAvatar}>
                    <img
                        src={AvatarPlaceholderMsg9}
                        alt="Avatar placeholder image in msg"
                        className={classes.avatarPlaceholderStyle}
                    />
                </div>
                <div className={classes.msgInfo}>
                    <h4 className={classes.msgAvatarname}>Martin likes</h4>
                    <p className={classes.msg}>
                        Lorem
                        ipsumajdoiasjdioajsdiojasiodjioasjdoiasjdoiajdoijaiodjoiajdoijaoi
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Messages;
