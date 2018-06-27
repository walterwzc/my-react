import React, { Component } from 'react'


// 拦截 store.dispatch 请求的中间件，使得中间件可以定义函数。
import thunk from 'redux-thunk'
import MovieList from './MovieList'

import { createStore, applyMiddleware } from 'redux'
import moiveReducer from './reducers'

const store = createStore(moiveReducer, applyMiddleware(thunk))

class App extends Component {
    constructor(props) {
        super(props)
        store.subscribe(() => this.forceUpdate())
    }

    showLoading(type) {
        return {
            type
        }
    }

    fetchData() {
        // 作为 被thunk 拦截的 function， thunk会向其中传递 dispatch、getState 参数，用于处理完函数的 dispatch。
        return (dispatch, getState) => {
            fetch('/api/v2/movie/top250')
                .then(response => response.json())
                .then(result => {

                    // 处理完逻辑之后，调用dispatch 给 reducer
                    dispatch({
                        type: 'GOT',
                        payload: result.subjects
                    })
                })

            // setTimeout(() => {
            //   dispatch({
            //     type: 'GOT',
            //     payload: [{id: '0002', title: 'aaa'}]
            //   })
            // }, 1500)
        }
    }

    componentDidMount() {
        // return type: loading
        store.dispatch(this.showLoading('LOADING'))
        store.dispatch(this.fetchData())
    }

    render() {
        return <MovieList movies={store.getState()} />
    }
}

export default App
