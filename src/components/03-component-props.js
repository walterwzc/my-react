import React from 'react'

function FunComponent(props) {
    return <div>hello, {props.title}</div>
}

class Button extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return <button>{this.props.text}</button>
    }
}

class ClassComponent extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return <div>hello, {this.props.title}</div>
    }
}

export default Button
