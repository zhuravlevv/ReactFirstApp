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
    addPost (postMessage){
        let newPost = {
            id: 5,
            message: postMessage,
            likesCount: 0
        };
        this._state.postsData.push(newPost);
        this._callSubscriber(this.state);
    },

    changeNewPostText (newText) {
        this.state.newPostText = newText;
        this._callSubscriber(this.state);
    },

    subscribe (observer){
        this._callSubscriber = observer;
    }

};

export default store;