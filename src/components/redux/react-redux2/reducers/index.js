import { combineReducers } from 'redux'

const posts = (state = [], action) => {
    switch (action.type) {
        case 'ADD_POST':
            return [...state, action.post]
        case 'DELETE_POST':
            return state.filter(item => item.id !== action.id)
        default:
            return state
    }
}

const comments = (state = [], action) => {
    switch (action.type) {
        case 'ADD_COMMENT':
            return [...state, action.comment]
        default:
            return state
    }
}

export default combineReducers({
    posts,
    comments
})
