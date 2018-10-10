const initState = {
    posts: [
        {
            "userId": 1,
            "id": 1,
            "title": "delectus aut autem",
        },
        {
            "userId": 2,
            "id": 2,
            "title": "delectus aut autem 2",            
        },
        {
            "userId": 3,
            "id": 3,
            "title": "delectus aut autem 3",
        },
        {
            "userId": 4,
            "id": 4,
            "title": "delectus aut autem 4",
        },        
    ]
}

const rootReducer = (state = initState, action) => {
    if(action.type === 'Delete_Post'){
        let newPost = state.posts.filter(post => {
            return action.id !== post.id;
        })
        return{
            ...state,
            posts: newPost
        }
    }
    return state;
}

export default rootReducer;