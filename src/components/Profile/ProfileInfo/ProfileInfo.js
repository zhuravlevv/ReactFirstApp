import React from 'react';
import classes from './ProfileInfo.module.css';

const ProfileInfo = () =>{
    return(
        <div>
            <div>
                <img src='https://image.freepik.com/free-photo/image-human-brain_99433-298.jpg' alt='abc'/>
            </div>
            <div className={classes.descriptionBlock}>
                ava+description
            </div>
        </div>
    )
};

export default ProfileInfo