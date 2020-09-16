import React from "react";
import classes from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import {sendMessageActionCreator, updateNewMessageBodyActionCreator} from "../../redux/dialogs-reducer";

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

    let newMessageBody = props.newMessageBody;

    let onSendMessageClick = () => {
        props.dispatch(sendMessageActionCreator());
    };

    let onNewMessageChange = (event) => {
        let body = event.target.value;
        props.dispatch(updateNewMessageBodyActionCreator(body));
    };

    return (
        <div className={classes.dialogs}>

            <div className={classes.dialogsItems}>
                {getDialogs(props.dialogsData)}
            </div>

            <div className={classes.messages}>
                {getMessages(props.messagesData)}
                <div>
                    <div><textarea value={newMessageBody}
                                   placeholder='Enter your message'
                                   onChange={onNewMessageChange}/></div>
                    <div><button onClick={onSendMessageClick}>Send</button></div>
                </div>
            </div>

        </div>
    );
};

export default Dialogs;