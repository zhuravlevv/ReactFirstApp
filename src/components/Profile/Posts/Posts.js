import React from "react";
import classes from "./Posts.module.css"
import Post from "./Post/Post";


const Posts = () => {
    return(
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add</button>
            </div>
            <div className={classes.posts}>
                <Post message = 'Hi, how are you?'/>
                <Post message = 'It is my first post'/>
                <Post/>
            </div>
        </div>
    );
};

export default Posts