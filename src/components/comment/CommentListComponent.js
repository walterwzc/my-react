import React, {Component} from 'react'
import axios from 'axios'

import CommentItemComponent from './CommentItemComponent'

class CommentListComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      commentList: []
    }
  }

  loadData() {
    return axios({
      url: '/api/v2/movie/top250'
    })
      .then((result) => {
        return result
      })
  }

  componentWillMount = async () => {
    const result = await this.loadData()
    const list = result.data.subjects.map((value, index) => {
      return <CommentItemComponent message={value} key={value.id} />
    })
    this.state.commentList.push(list)
    this.setState({})
    // this.setState({
    //   commentList: list
    // })
  }

  componentWillReceiveProps(newProps) {
    this.state.commentList.push(
      <CommentItemComponent message={{
        id: new Date().getTime(),
        year: 'zhichao',
        title: newProps.message,
      }} key={new Date().getTime()}></CommentItemComponent>
    )
  }

  render() {
    console.log(0);
    return (
      <div className="list">
        <ul>
          <CommentItemComponent message={value} key={value.id} />
        </ul>
      </div>
    )
  }
}

export default CommentListComponent
