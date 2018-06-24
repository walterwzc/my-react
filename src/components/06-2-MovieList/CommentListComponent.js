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

    loadData(pageCount) {
        console.log('loadData')
        return axios({
            url: `/api/v2/movie/top250?count=${pageCount}`
        })
    }

    componentDidMount() {
        console.log('CommentListComponent -> componentDidMount')
        this.loadData(this.props.moviePageCount)
            .then(result => {
                console.log('result')
                console.log(result)
                const list = result.data.subjects.map((value, index) => {
                    return <CommentItemComponent message={value} key={value.id} />
                })
                this.setState({
                    commentList: list,
                })
                this.props.setPageInfo({
                    moviePageCount: result.data.count,
                    moviePageStart: result.data.start,
                    movieTotalCount: Math.ceil(result.data.total / result.data.count)
                })
            })
    }

    componentWillReceiveProps(newProps) {
        console.log('newProps: ')
        console.log(newProps)
        // this.loadData(newProps.moviePageCount)
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
