import React from "react";
import classes from "./Posts.module.css"
import Post from "./Post/Post";


const Posts = () => {

    let postsData = [
        {id: 1, message: 'Hi, how are you', likesCount: 0},
        {id: 2, message: 'It\'s my fp', likesCount: 23}
    ];


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