import React, { Component } from 'react'

class Add extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        console.log('-------------- Add -------------------');
        console.log(this);
        console.log('-------------- Add -------------------');
        return <button onClick={this.props.onAddPost}>添加</button>
    }
}

export default Add
