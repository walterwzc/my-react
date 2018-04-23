import React, {Component} from 'react'

import Button from './ButtonComponent'

class FormBoxComponent extends Component {

  constructor(props) {
    super(props)
    this.state = {
      comment: ''
    }
  }

  handleComment(e) {
    this.setState({
      comment: e.target.value
    })
  }

  handleSubmit() {
    this.props.onReceiveMessage(this.state.comment)
    this.setState({
      comment: ''
    })
  }

  render() {
    return (
      <div className="form">
        <textarea value={this.state.comment} onChange={(e) => this.handleComment(e)} name="" id="" cols="160" rows="10"></textarea>
        <br />
        <Button text="Send" onButttonClick={() => this.handleSubmit()} type="submit"></Button>
      </div>
    )
  }
}

export default FormBoxComponent
