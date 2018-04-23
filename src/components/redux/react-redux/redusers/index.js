import { combineReducers } from 'redux'

const postsReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_POST':
            return [...state, { ...action.payload }]
        case 'DELETE_POST':

            // 删除 POST 的方法
            return state.filter(item => {
                return action.id != item.id
            })
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

const mainReducer = combineReducers({
    posts: postsReducer,
    comments: commentsReducer
})




export default mainReducer
