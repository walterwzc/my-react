import React, {Component} from 'react'

class Button extends Component {
  constructor(props) {
    super(props)
  }

  handleClick() {
    if (this.props.type == 'submit') {
      this.props.onButttonClick()
    }
  }

  render() {
    return (
      <button onClick={() => this.handleClick()}>{this.props.text}</button>
    )
  }
}

export default Button
