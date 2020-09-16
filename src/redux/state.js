import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let store = {
    _state : {

        profilePage:{
            newPostText: 'it-vlad',

            postsData : [
                {id: 1, message: 'Hi, how are you', likesCount: 0},
                {id: 2, message: 'It\'s my fp', likesCount: 23}
            ],
        },

        dialogsPage: {
            dialogsData: [
                {id: 1, name: 'Vlad'},
                {id: 2, name: 'Andrey'},
                {id: 3, name: 'Vasily'}
            ],

            messagesData: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'Hello'},
                {id: 3, message: 'Greeting'}
            ],

            newMessageBody: '',
        },

        sidebar: {},
    },
    getState(){
        return this._state;
    },
    _callSubscriber () {
        console.log('State changed')
    },
    subscribe (observer){
        this._callSubscriber = observer;
    },

    dispatch(action){

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    }

};

export const sendMessageActionCreator = () =>{
    return{
        type: SEND_MESSAGE,
    }
};

export const updateNewMessageBodyActionCreator = (body) => {
    return{
        type: UPDATE_NEW_MESSAGE_BODY,
        body: body
    }
};

export const updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    }
};

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
};

export default store;