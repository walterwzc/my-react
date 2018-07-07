import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import './styles/app.scss'


// import App from './components/redux/01-basic'

import App from './components/redux/02-combinReducer'

// import App from './components/06-comment/CommentBoxComponent'

// import App from './components/06-2-MovieList/CommentBoxComponent'

// import App from './components/07-form'

// import App from './components/08.children'

// import App from './components/10-refs'

// import App from './components/redux/counter/App'

// import App from './components/redux/middleware/App'

// import App from './components/redux/react-redux/components/App'

// import App from './components/router/03-nest';

import { createStore } from 'redux'

import postsRuducers from './components/redux/react-redux/redusers'

const store = createStore(postsRuducers)

const el = document.getElementById('app')

const render = () => {
    return ReactDOM.render(
        <Provider store={store}>
            <App headerText="header Text">
                <div>11</div>
                <div>22</div>
            </App>
        </Provider>,
        el
    )
}

render()

store.dispatch({
    type: 'ADD_POST',
    payload: { id: 1, title: 'hello' }
})

store.dispatch({
    type: 'ADD_POST',
    payload: { id: 2, title: 'world' }
})

store.dispatch({
    type: 'ADD_POST',
    payload: { id: 3, title: 'react' }
})
// setTimeout(() => {
//   ReactDOM.unmountComponentAtNode(el)
// }, 2000)
