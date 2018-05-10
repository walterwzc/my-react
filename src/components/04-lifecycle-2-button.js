import React, { Component } from 'react'

import LifyCycle from './04-lifecycle'

class Button extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: '001'
        }

        // this.handleClick = this.handleClick.bind(this)
    }

    handleClick(num, e) {
        // console.log(e.target.innerHTML);
        this.setState({
            id: num
        })
    }

    render() {
        return (
            <div>
                <LifyCycle id={this.state.id} />
                <button onClick={() => this.handleClick(0)}>
                    change {this.state.id}
                </button>
            </div>
        )
    }
}

export default Button
