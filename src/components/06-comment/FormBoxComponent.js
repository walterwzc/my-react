import React, { Component } from 'react'

import Button from './ButtonComponent'

class FormBoxComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            comment: ''
        }
    }

    handleComment(e) {
        this.setState({
            comment: e.target.value
        })
    }

    // 调用父组件 CommentBoxComponent 的 onReceiveMessage 方法，并且传递了 this.state.comment 参数。
    handleSubmit() {
        this.props.onReceiveMessage(this.state.comment)
        this.setState({
            comment: ''
        })
    }

    render() {
        return (
            <div className="form">
                <textarea
                    value={this.state.comment}
                    onChange={e => this.handleComment(e)}
                    name=""
                    id=""
                    cols="160"
                    rows="10"
                />
                <br />

                {/* 向子组件传递一个 type 为 submit 属性 */}
                <Button
                    text="提交"
                    onButttonClick={() => this.handleSubmit()}
                    type="submit"
                />
            </div>
        )
    }
}

export default FormBoxComponent
