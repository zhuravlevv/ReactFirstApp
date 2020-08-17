import React from "react";
import classes from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import Dialog from "./Dialog/Dialog";

const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <Dialog name='Vlad' id = '1'/>
                <Dialog name='Andrey' id = '2'/>
                <Dialog name='Vasily' id = '3'/>

            </div>
            <div className={classes.messages}>
                <div className={classes.message}>Hi</div>
                <div className={classes.message}>Hi</div>
                <div className={classes.message}>Hi</div>
            </div>
        </div>
    );
};

export default Dialogs;