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
    render() {
        console.log('Pagination -> render')
        let that = this
        console.log(that.props.pageInfo)
        return (
            <ul className="pagination">
            {
                (function() {
                    let pageLiArr = []
                    for (let index = 0; index < that.props.pageInfo.movieTotalCount; index++) {
                        pageLiArr.push(<li className={index === that.props.pageInfo.moviePageStart ? "activePage" : ""} key={index + 1}>{index + 1}</li>)
                    }
                    return pageLiArr
                })()
            }
            </ul>
        )
    }
}

export default Pagination
