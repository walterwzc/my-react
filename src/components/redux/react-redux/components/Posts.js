// presitational components UI组件
// container components 容器组件

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import PostList from './postlist.js'


// 这个 state 是 combineReducer 的综合初始化的值， posts是其中的一个 reducer。
const mapStateToProps = state => {
    return {
        entities: state.posts
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onClickDeleteButton: id => {
            dispatch({
                type: 'DELETE_POST',
                id
            })
        }
    }
}

const Posts = connect(mapStateToProps, mapDispatchToProps)(PostList)

// class Posts extends Component {
//     static contextTypes = {
//         store: PropTypes.object
//     }

//     constructor(props, context) {

//         // 通过打印可以看出， context 之中， 只有store 属性。
//         // console.log(context);

//         super(props)
//         this.store = context.store
//         this.store.subscribe(() => this.forceUpdate())
//         this.onClickDeleteButton = this.onClickDeleteButton.bind(this)
//     }

//     onClickDeleteButton(id) {
//         this.store.dispatch({
//             type: 'DELETE_POST',
//             id
//         })
//     }

//     render() {
//         return (
//             <PostList
//                 onClickDeleteButton={this.onClickDeleteButton}
//                 entities={this.store.getState().posts}
//             />
//         )
//     }
// }


// Posts.contextTypes = {
//     store: PropTypes.object
// }

export default Posts
