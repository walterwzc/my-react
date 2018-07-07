import React, { Component } from 'react'
import axios from 'axios'

import CommentItemComponent from './CommentItemComponent'

class CommentListComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            commentList: []
        }
    }

    loadDataAndRender(pageCount, startPage) {
        console.log('loadData')
        axios({
            url: `/api/v2/movie/top250?count=${pageCount}&start=${startPage}`
        }).then(result => {
            console.log('movie result:')
            console.log(result)
            const list = result.data.subjects.map((value, index) => {
                return <CommentItemComponent message={value} key={value.id} />
            })
            this.setState({
                commentList: list,
            })
            this.props.setPageInfo({
                // 一页多少电影
                moviePageCount: result.data.count,
                // 总页数
                pageTotalCount: Math.ceil(result.data.total / result.data.count)
            })
        })
    }

    componentDidMount() {
        console.log('CommentListComponent -> componentDidMount')
        console.log(this.props.moviePageCount, this.props.movieCurrentPage)
        const moviePageCount = this.props.moviePageCount
        const movieCurrentPage = this.props.movieCurrentPage
        this.loadDataAndRender(this.props.moviePageCount, moviePageCount * movieCurrentPage)
    }

    componentWillReceiveProps(newProps) {
        console.log('CommentListComponent -> newProps: ')
        console.log(newProps.moviePageCount, newProps.movieCurrentPage)
        const moviePageCount = newProps.moviePageCount
        const movieCurrentPage = newProps.movieCurrentPage
        this.loadDataAndRender(newProps.moviePageCount, moviePageCount * movieCurrentPage)
    }

    render() {
        console.log('CommentListComponent -> render')
        console.log('moviePageCount: ')
        console.log(this.props.moviePageCount)
        return (
            <div className="list">
                <ul>{this.state.commentList}</ul>
            </div>
        )
    }
}

export default CommentListComponent
