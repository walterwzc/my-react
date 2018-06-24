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
                <h1>Comments Form Box</h1>
                <hr />
                {/* 
                    因为FommBoxComponent 要向 CommentListComponent 之中传递参数 所以让 
                    CommentBoxComponent作为中间组件， 采用 子传父， 父传子进行参数传递
                */}
                <CommentListComponent message={this.state.message} />
                <FormBoxComponent
                    onReceiveMessage={msg => this.handleReceiveMessage(msg)}
                />
            </div>
        )
    }
}

export default CommentBoxComponent
