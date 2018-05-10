import React, { Component } from 'react'
import axios from 'axios'

import CommentItemComponent from './CommentItemComponent'

// const dataSource = [
//   {
//     _id: '001',
//     name: 'Nate',
//     title: 'this is a great article'
//   },
//   {
//     _id: '002',
//     name: 'Jiazhi',
//     title: 'this is a perfect article'
//   }
// ]

class CommentListComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            commentList: []
        }
    }

    loadData() {
        // dataSource.map((value, index) => {
        //   return <CommentItemComponent message={value} key={value._id} />
        // })
        return axios({
            url: '/api/v2/movie/top250'
        })
    }

    componentWillMount() {
        this.loadData().then(result => {
            const list = result.data.subjects.map((value, index) => {
                return <CommentItemComponent message={value} key={value.id} />
            })
            this.state.commentList.push(list)
            this.setState({})
            // this.setState({
            //   commentList: list
            // })
        })
    }

    // componentDidMount() {
    //   this.setState({
    //     commentList: this.state.commentList
    //   })
    // }

    componentWillReceiveProps(newProps) {
        this.state.commentList.push(
            <CommentItemComponent
                message={{
                    id: new Date().getTime(),
                    year: 'zhichao',
                    title: newProps.message
                }}
                key={new Date().getTime()}
            />
        )
    }

    render() {
        console.log('CommentListComponent render()');
        return (
            <div className="list">
                <ul>{this.state.commentList}</ul>
            </div>
        )
    }
}

export default CommentListComponent
