import React, { Component } from 'react'

class LifyCycle extends Component {
    constructor(props) {
        console.log('constructor')
        super(props)
        this.state = {
            title: '',
            message: 'bbb'
        }
    }

    componentWillMount() {
        console.log('componentWillMount')
    }

    componentDidMount() {
        console.log('componentDidMount')
        this.setState((prevState, prevProps) => {
            // console.log(prevState);
            return {
                title: prevState.title + 'aaa'
            }
        })
        // this.setState({
        //   title: this.state.title + 'aaa'
        // })
    }

    componentWillReceiveProps(nextProps) {
        console.log('componentWillReceiveProps')
    }

    shouldComponentUpdate() {
        console.log('shouldComponentUpdate')
        return true
    }

    componentWillUpdate() {
        console.log('componentWillUpdate')
    }

    componentDidUpdate() {
        console.log('componentDidUpdate')
    }

    render() {
        console.log('render')
        return (
            <div>
                {this.state.message},{this.state.title}
            </div>
        )
    }

    componentWillUnmount() {
        console.log('componentWillUnmount')
    }
}

export default LifyCycle
