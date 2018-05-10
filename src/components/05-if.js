import React, { Component } from 'react'

function Loading(props) {
    if (props.isLoading) {
        return <div>loading...</div>
    } else {
        return null
    }
}

class IfComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoading: false
        }
    }

    render() {
        // if (true) {
        //   return <div>a</div>
        // } else {
        //   return <div>b</div>
        // }
        return (
            <div>
                <Loading isLoading={this.state.isLoading} />
                <div>body</div>
            </div>
        )
    }
}

export default IfComponent

// if (true) {
//   var x = require('./05-if-1')
// } else {
//   var x = require('./05-if-2')
// }
//
// console.log(x)
