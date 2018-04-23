import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import main from '../reducers'

import PostList from './PostList'
import Add from './Add'

const mapStateToProps = state => {
    return {
        entities: state.posts
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onDeletePost: id => {
            dispatch({
                type: 'DELETE_POST',
                id
            })
        },
        onAddPost: () => {
            dispatch({
                type: 'ADD_POST',
                post: { 
                    id: new Date().getTime().toString(), 
                    title: 'Hello' 
                }
            })
        }
    }
}

class Posts extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { entities, onDeletePost, onAddPost } = this.props
        return (
            <div>
                <Add onAddPost={onAddPost} />
                <PostList entities={entities} onDeletePost={onDeletePost} />
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts)
