import React from 'react'

import CommentListComponent from './CommentListComponent'
import PageCount from './PageCount'
import Pagination from './Pagination'


class CommentBoxComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            moviePageCount: 10,
            movieCurrentPage: 1,
            pageInfo: {
                moviePageStart: 0,
                movieTotalCount: 0
            }
        }
    }
    handleMoviePageCountChange = (pageCount) => {
        this.setState({
            moviePageCount: pageCount
        })
    }
    handleMovieCurrentPageChange = (currentPage) => {
        this.setState({
            movieCurrentPage: currentPage
        })
    }
    setPageInfo = (pageInfo) => {
        this.setState({
            pageInfo: Object.assign({}, this.state.pageInfo, pageInfo)
        })
    }
    render() {
        console.log('CommentBoxComponent -> render')
        return (
            <div className="container">
                <h1>电影列表：</h1>
                <hr />
                <CommentListComponent 
                    moviePageCount = {this.state.moviePageCount}
                    setPageInfo = {this.setPageInfo}
                />
                <PageCount 
                    moviePageCount = {this.state.moviePageCount}
                    handleMoviePageCountChange = {this.handleMoviePageCountChange}
                />
                <Pagination
                    pageInfo = {this.state.pageInfo}
                    handleMovieCurrentPageChange = {this.handleMovieCurrentPageChange}
                />
            </div>
        )
    }
}

export default CommentBoxComponent
