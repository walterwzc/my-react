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

    loadDataAndRender(pageCount) {
        console.log('loadData')
        axios({
            url: `/api/v2/movie/top250?count=${pageCount}`
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
                // 当前页
                moviePageStart: result.data.start,
                // 总页数
                pageTotalCount: Math.ceil(result.data.total / result.data.count)
            })
        })
    }

    componentDidMount() {
        console.log('CommentListComponent -> componentDidMount')
        this.loadDataAndRender(this.props.moviePageCount)
            
    }

    componentWillReceiveProps(newProps) {
        console.log('CommentListComponent -> newProps: ')
        console.log(newProps)
        this.loadDataAndRender(newProps.moviePageCount)
    }

    // shouldComponentUpdate (nextProp, nextState) {
    //     console.log(this.props.moviePageCount, nextProp.moviePageCount)
    //     if (this.props.moviePageCount !== nextProp.moviePageCount) {
    //         console.log('shouldComponentUpdate return true')
    //         return true
    //     }
    //     console.log('shouldComponentUpdate return false')
    //     return false
    // }

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
