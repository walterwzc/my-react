import React, { Component } from 'react'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

const moviesReducer = (state = [], action) => {
    switch (action.type) {
        case 'LOADING':
            return [{ id: '001', title: 'loading...' }]
        case 'GOT':
            return [...action.payload]
        default:
            return state
    }
}

const store = createStore(moviesReducer, applyMiddleware(thunk))

class App extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <ul>
                {
                    store.getState().map(item => <li key={item.id}>{item.title}</li>)
                }
            </ul>
        )
    }

    actionCreator(type, payload) {
        switch (type) {
            case 'GOT':
                return dispatch => {
                    fetch('/api/v2/movie/top250')
                        .then(responese => responese.json())
                        .then(result => {
                            dispatch({
                                type: 'GOT',
                                payload: result.subjects
                            })
                        })
                }
            default:
                return {
                    type,
                    payload
                }
        }
    }

    componentDidMount() {
        store.subscribe(() => this.forceUpdate())
        store.dispatch(this.actionCreator('LOADING'))
        store.dispatch(this.actionCreator('GOT'))
    }
}

export default App
