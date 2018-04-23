import React, { Component } from 'react'
import Counter from './Counter'

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { store } = this.props
    return <Counter
      count={ store.getState() }
      onIncrement={ () => store.dispatch({ type: 'INCREMENT' }) }
      onDecrement={ () => store.dispatch({ type: 'DECREMENT' }) }
    ></Counter>
  }
}

export default App
