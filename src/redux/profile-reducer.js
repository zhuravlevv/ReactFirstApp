const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
        newPostText: 'it-vlad',
        postsData : [
            {id: 1, message: 'Hi, how are you', likesCount: 0},
            {id: 2, message: 'It\'s my fp', likesCount: 23}
        ],
};

const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };
            state.postsData.push(newPost);
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
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

export default profileReducer;