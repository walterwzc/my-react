import { createStore, combineReducers } from 'redux'

// state
// {
//   posts: [
//     {id: 1, title: 'hello'}
//   ],
//   comments: [
//     {id: 1, postId: 1, content: 'nice ~'}
//   ]
// }

const postsReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_POST':
            return [...state, { ...action.payload }]
        default:
            return state
    }
}

const commentsReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_COMMENT':
            return [...state, { ...action.payload }]
        default:
            return state
    }
}

// 效果等同于 combineReducers
const mainReducer = (state = {}, action) => {
    return {
        posts: postsReducer(state.posts, action),
        comments: commentsReducer(state.comments, action)
    }
}

// const mainReducer = combineReducers({
//     posts: postsReducer,
//     comments: commentsReducer
// })

const store = createStore(mainReducer)

const log = () => {
    console.log(store.getState())
}

log()

store.subscribe(log)

store.dispatch({
    type: 'ADD_POST',
    payload: { id: 1, title: 'hello' }
})

store.dispatch({
    type: 'ADD_COMMENT',
    payload: { id: 1, postId: 1, content: 'nice ~' }
})

console.log('--------------------------------')

console.log(store.getState().posts)

console.log('================================')

console.log(store.getState().comments)

export default () => {
    return null
}
