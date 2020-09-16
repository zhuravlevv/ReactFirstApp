import React from "react";
import classes from "./Posts.module.css"
import Post from "./Post/Post";

let addPostActionCreator = () => {
    return {
        type: 'ADD-POST'
    }
};

let updateNewPostTextActionCreator = (text) => {
    return {
        type: 'UPDATE-NEW-POST-TEXT',
        newText: text
    }
};

const Posts = (props) => {

    function getPosts(postsData){
        return (postsData.map( (post) => (<Post message={post.message} likesCount={post.likesCount}/>)))
    }

    const updateTextarea = () => {
        props.dispatch(updateNewPostTextActionCreator(newPostElement.current.value));
    };

    const newPostElement = React.createRef();

    const addPost = () => {

        props.dispatch(addPostActionCreator());
    };

    return(
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={updateTextarea} ref={newPostElement} value={props.newPostText}/>
                </div>
                <button onClick={addPost}>Add post</button>
            </div>
            <div className={classes.posts}>
                {getPosts(props.postsData)}
            </div>
        </div>
    );
};

export default Posts