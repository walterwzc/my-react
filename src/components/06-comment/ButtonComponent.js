import React, { Component } from 'react'

class Button extends Component {
    constructor(props) {
        super(props)
    }

    // 在子组件之中调用 父组件的方法。
    handleClick() {
        if (this.props.type === 'submit') {
            this.props.onButttonClick()
        } else if (this.props.type === 'delete') {
            this.props.onDeleteClick()
        }
    }

    render() {
        return (
            <button onClick={() => this.handleClick()}>
                {this.props.text}
            </button>
        )
    }
}

export default Button
