import React from 'react';
import classes from './Profile.module.css';
import Posts from "./Posts/Posts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) =>{
    return(
        <div>
            <ProfileInfo/>
            <Posts postsData={props.postsData} addPost={props.addPost} newPostText={props.newPostText}
                   changeNewPostText={props.changeNewPostText}/>
        </div>
    )
};

export default Profile