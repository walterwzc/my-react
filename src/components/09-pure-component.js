import React, { Component, PureComponent } from 'react'

class Parent extends Component {
    constructor() {
        super()
        this.state = {
            title: 'title'
        }

        this.changeState = this.changeState.bind(this)
    }

    changeState() {
        this.setState({
            title: Math.random()
        });
    }

    render() {
        return (
            <div>
                <h3>Container</h3>
                <button type="button" onClick={this.changeState}>
                    change
                </button>
                <Child />
            </div>
        )
    }

    componentWillUpdate() {
        console.log('parent will update')
    }
}

// class Child extends Component {
class Child extends PureComponent {
    render() {
        return <div>child</div>
    }

    componentWillUpdate() {
        console.log('child will update')
    }
}

export default Parent
