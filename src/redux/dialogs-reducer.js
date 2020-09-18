const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        case SEND_MESSAGE:
            state.messagesData.push({
                id: 6,
                message: state.newMessageBody
            });
            state.newMessageBody = '';
            return state;
        default:
            return state;
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


export default dialogsReducer;