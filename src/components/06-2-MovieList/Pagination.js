import React, { Component } from 'react'

import './Pagination.css'

class Pagination extends Component {
    constructor(props) {
        super(props)
        this.state = {
            pageCurrent: 1,
            pageTotalCount: 3
        }
    }
    changePage = (currentPage) => {
        this.props.handleMovieCurrentPageChange(currentPage)
    }
    render() {
        console.log('Pagination -> render')
        let that = this
        console.log(that.props)
        return (
            <ul className="pagination">
                {(function() {
                    let pageLiArr = []
                    for (
                        let index = 0;
                        index < that.props.pageInfo.pageTotalCount;
                        index++
                    ) {
                        pageLiArr.push(
                            <li
                                className={
                                    index === that.props.movieCurrentPage
                                        ? 'activePage'
                                        : ''
                                }
                                key={index + 1}
                                onClick={() => {
                                    that.changePage(index)
                                }}
                            >
                                {index + 1}
                            </li>
                        )
                    }
                    return pageLiArr
                })()}
            </ul>
        )
    }
}

export default Pagination
