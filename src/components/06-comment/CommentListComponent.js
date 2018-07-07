import React, { Component } from 'react'

import CommentItemComponent from './CommentItemComponent'

const dataSource = [
    {
        id: '001',
        name: 'Nate',
        title: 'this is a great article'
    },
    {
        id: '002',
        name: 'Jiazhi',
        title: 'this is a perfect article'
    }
]

class CommentListComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            commentList: []
        }
    }

    loadData() {
        return dataSource.map((item, index) => {
            return <CommentItemComponent 
                        message={item} 
                        key={item.id} 
                        deleteCommentItem={this.handleDeleteCommentItem} 
                    />
        })
    }

    handleDeleteCommentItem = (itemId) => {
        console.log('handleDeleteCommentItem')
        this.setState({
            commentList: this.state.commentList.filter((commentItem) => {
                return commentItem.key != itemId
            })
        }, () => {
            console.log('------')
            console.log(this.state.commentList)
        })
    }

    componentWillMount() {
        let initCommentList = this.loadData()
        this.setState({
            commentList: [...this.state.commentList, ...initCommentList]
        })
    }

    componentWillReceiveProps(newProps) {
        this.state.commentList.push(
            <CommentItemComponent
                message={{
                    id: new Date().getTime(),
                    name: 'zhichao',
                    title: newProps.message
                }}
                key={new Date().getTime()}
                deleteCommentItem={this.handleDeleteCommentItem}
            />
        )
    }

    render() {
        console.log('CommentListComponent  ->  render')
        return (
            <div className="list">
                <ul>{this.state.commentList}</ul>
            </div>
        )
    }
}

export default CommentListComponent
