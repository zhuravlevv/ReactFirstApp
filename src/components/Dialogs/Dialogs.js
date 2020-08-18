import React from "react";
import classes from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let dialogsData = [
        {id: 1, name: 'Vlad'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Vasily'}
        ];

    let messagesData = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Hello'},
        {id: 3, message: 'Greeting'}
    ];

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
                {getDialogs(dialogsData)}
                {/*<Dialog name='Vlad' id = '1'/>
                <Dialog name='Andrey' id = '2'/>
                <Dialog name='Vasily' id = '3'/>*/}

            </div>
            <div className={classes.messages}>
                {getMessages(messagesData)}
            </div>
        </div>
    );
};

export default Dialogs;