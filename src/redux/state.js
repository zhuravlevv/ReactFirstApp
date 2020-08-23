let rerenderEntireTree = () => {
    console.log('heeloo')
}

let state = {

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
};

export let addPost = (postMessage) => {
    let newPost = {
        id: 5,
        message: postMessage,
        likesCount: 0
    };
    state.postsData.push(newPost);
    rerenderEntireTree(state);
};

export let changeNewPostText = (newText) => {
    state.newPostText = newText;
    rerenderEntireTree(state);
};

export const subscribe = (observer) => {
    rerenderEntireTree = observer;
};

export default state;