import React, { Component } from 'react'
import Counter from './Counter'

import { createStore } from 'redux'
import counterReducer from './reducers'

const store = createStore(counterReducer)

class App extends Component {
    constructor(props) {
        super(props)
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

    componentDidMount() {
        store.subscribe(() => this.forceUpdate())
    }
}

export default App
