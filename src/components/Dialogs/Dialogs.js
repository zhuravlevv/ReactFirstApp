import React from "react";
import classes from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";

const Dialogs = (props) => {

    function getDialogs(dialogsData){
        return dialogsData.map( (dialog) => {
            return <Dialog name={dialog.name} id={dialog.id}/>
        })
    }

    function getMessages(messagesData){
        return messagesData.map( (message) => {
            return <Message message={message.message} id={message.id}/>
        })
    }

    return (
        <div className={classes.dialogs}>

            <div className={classes.dialogsItems}>
                {getDialogs(props.dialogsData)}
            </div>

            <div className={classes.messages}>
                {getMessages(props.messagesData)}
            </div>

        </div>
    );
};

export default Dialogs;