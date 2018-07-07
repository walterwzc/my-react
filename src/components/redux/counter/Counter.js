import React, {Component} from 'react'
import PropTypes from 'prop-types'

class Counter extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { count, onIncrement, onDecrement } = this.props
        return (
            <p>
                被点击了 { count } 次
                {' '}
                <button onClick={ () => onIncrement() }> + </button>
                {' '}
                <button onClick={ onDecrement }> - </button>
            </p>
        )
    }
}

// Counter.propTypes = {
//   count: PropTypes.number.isRequired,
//   onIncrement: PropTypes.fun,
//   onDecrement: PropTypes.fun
// }

export default Counter
