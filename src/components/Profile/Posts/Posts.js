import React from "react";
import classes from "./Posts.module.css"
import Post from "./Post/Post";


const Posts = () => {

    let postsData = [
        {id: 1, message: 'Hi, how are you', likesCount: 0},
        {id: 2, message: 'It\'s my fp', likesCount: 23}
    ];

    function getPosts(postsData){
        return (postsData.map( (post) => (<Post message={post.message} likesCount={post.likesCount}/>)))
    }


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
                {getPosts(postsData)}
            </div>
        </div>
    );
};

export default Posts