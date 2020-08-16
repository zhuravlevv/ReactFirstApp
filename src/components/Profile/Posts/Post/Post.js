import React from "react";
import classes from "./Post.module.css";

const Post = (props) => {
    return (
        <div className={classes.item}>
            <img src = "https://wallpapershome.ru/images/wallpapers/poligon-1080x1920-4k-hd-3d-fon-241.jpg" alt='abc'/>
            <div>
                {props.message}
            </div>
            <div>
                <span>like</span>
            </div>
        </div>
    );
};

export default Post