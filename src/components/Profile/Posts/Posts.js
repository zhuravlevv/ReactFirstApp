import React from "react";
import classes from "./Posts.module.css"
import Post from "./Post/Post";


const Posts = () => {
    return(
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <button>Add</button>
            </div>
            <div className={classes.posts}>
                <Post message = 'Hi, how are you?' likesCount='0'/>
                <Post message = 'It is my first post' likesCount='23'/>
                <Post/>
            </div>
        </div>
    );
};

export default Posts