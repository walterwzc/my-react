import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Counter extends Component {
    static propTypes = {
        count: PropTypes.number,
        onIncrement: PropTypes.func,
        onDecrement: PropTypes.func
    }

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                被点击了 {this.props.count} 次
                <button onClick={this.props.onIncrement}>+</button>
                <button onClick={this.props.onDecrement}>-</button>
            </div>
        )
    }
}

export default Counter
