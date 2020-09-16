const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';


const dialogsReducer = (state, action) => {
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