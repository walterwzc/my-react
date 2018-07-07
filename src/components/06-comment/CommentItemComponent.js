import React, { Component } from 'react'

import Button from './ButtonComponent'

class CommentItemComponent extends Component {
    constructor(props) {
        super(props)
        // 如果使用了箭头函数则不需要这样写，还能够简化操作？！
        // this.handleDelete.bind(this)
    }

    handleDelete = () => {
        // console.log(this.props.message)
        let { id } = this.props.message
        // console.log(id)
        this.props.deleteCommentItem(id)
    }

    render() {
        let { name, title } = this.props.message
        return (
            <li>
                <div>
                    <img src={'https://placehold.it/50x50'} width="50" heigth="50" alt="" />
                </div>
                <div>
                    <p>{name}</p>
                    <p>{title}</p>
                </div>
                <Button text="删除" type="delete" onDeleteClick={this.handleDelete}/>
            </li>
        )
    }
}

export default CommentItemComponent
