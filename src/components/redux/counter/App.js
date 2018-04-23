import React, { Component } from 'react'

import Counter from './Counter'

import { createStore } from 'redux'

// 引用 reducer
import reducers from './reducers'

const store = createStore(reducers)

class App extends Component {
    constructor(props) {
        super(props)

        // 如果 store 之中的内容发生改变， 那么让该组件的DOM重新渲染。
        store.subscribe(() => {
            // this.setState({})
            this.forceUpdate()
        })
    }

    render() {
        return (
            <Counter
                count={store.getState()}
                onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
                onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
            />
        )
    }
}

export default App
