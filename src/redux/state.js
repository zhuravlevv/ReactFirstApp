let store = {
    _state : {

        newPostText: 'it-vlad',

        postsData : [
            {id: 1, message: 'Hi, how are you', likesCount: 0},
            {id: 2, message: 'It\'s my fp', likesCount: 23}
        ],

        dialogsData : [
            {id: 1, name: 'Vlad'},
            {id: 2, name: 'Andrey'},
            {id: 3, name: 'Vasily'}
        ],

        messagesData : [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'Hello'},
            {id: 3, message: 'Greeting'}
        ]
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
        if(action.type === 'ADD-POST'){
            let newPost = {
                id: 5,
                message: this._state.newPostText,
                likesCount: 0
            };
            this._state.postsData.push(newPost);
            this._state.newPostText = '';
            this._callSubscriber(this._state);
        }
        else if(action.type === 'UPDATE-NEW-POST-TEXT'){
            this._state.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
    }

};

export default store;