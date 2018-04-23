import React, { Component } from 'react'
import PropTypes from 'prop-types'

class MovieList extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { movies } = this.props
        // console.log(movies);
        return (
            <ul>{movies.map(item => <li key={item.id}>{item.title}</li>)}</ul>
        )
    }
}

MovieList.propTypes = {
    movies: PropTypes.array.isRequired
}

export default MovieList
