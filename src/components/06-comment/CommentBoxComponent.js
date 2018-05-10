import React from 'react'

import CommentListComponent from './CommentListComponent'
import FormBoxComponent from './FormBoxComponent'

class CommentBoxComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            message: ''
        }
    }

    handleReceiveMessage(msg) {
        this.setState({
            message: msg
        })
    }

    render() {
        return (
            <div className="container">
                <h1>Comments</h1>
                <hr />
                <CommentListComponent message={this.state.message} />
                <FormBoxComponent
                    onReceiveMessage={msg => this.handleReceiveMessage(msg)}
                />
            </div>
        )
    }
}

export default CommentBoxComponent
