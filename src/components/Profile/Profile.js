import React from 'react';
import classes from './Profile.module.css';
import Posts from "./Posts/Posts";

const Profile = () =>{
    return(
        <div>
            <div>
                <img src='https://image.freepik.com/free-photo/image-human-brain_99433-298.jpg' alt='abc'/>
            </div>
            <div>
                ava+description
            </div>
        <Posts/>
        </div>
    )
};

export default Profile