import React from 'react'

import CommentListComponent from './CommentListComponent'
import PageCount from './PageCount'
import Pagination from './Pagination'


class CommentBoxComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            // 一页几部电影，由select来控制
            moviePageCount: 10,
            movieCurrentPage: 0,
            pageInfo: {
                // 一共有多少页
                pageTotalCount: 0
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
    shouldComponentUpdate(nextProp, nextState) {
        if (this.state.moviePageCount !== nextState.moviePageCount) {
            console.log('this.state.moviePageCount !== nextState.moviePageCount')
            console.log(this.state.moviePageCount, nextState.moviePageCount)
            return true
        }
        if (this.state.movieCurrentPage !== nextState.movieCurrentPage) {
            console.log('this.state.movieCurrentPage !== nextState.movieCurrentPage')
            console.log(this.state.movieCurrentPage, nextState.movieCurrentPage)
            return true
        }
        console.log(this.state, nextState)
        if (this.state.pageInfo.pageTotalCount === nextState.pageInfo.pageTotalCount) {
            console.log('return false3')
            return false
        }
        console.log('return true')
        return true
    }
    render() {
        console.log('CommentBoxComponent -> render')
        return (
            <div className="container">
                <h1>电影列表：</h1>
                <hr />
                <CommentListComponent 
                    moviePageCount = {this.state.moviePageCount}
                    movieCurrentPage = {this.state.movieCurrentPage}
                    setPageInfo = {this.setPageInfo}
                />
                <PageCount 
                    moviePageCount = {this.state.moviePageCount}
                    handleMoviePageCountChange = {this.handleMoviePageCountChange}
                />
                <Pagination
                    pageInfo = {this.state.pageInfo}
                    movieCurrentPage = {this.state.movieCurrentPage}
                    handleMovieCurrentPageChange = {this.handleMovieCurrentPageChange}
                />
            </div>
        )
    }
}

export default CommentBoxComponent
