import React, {Component} from 'react'

class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      message: 'aaa'
    }
  }

  handleChange(e) {
    this.setState({
      message: e.target.value
    })
  }

  componentDidMount() {
    setTimeout(() => {
      console.log(this.refs.aaa.innerHTML);
    }, 4000)
  }

  render() {
    return (
      <div ref="aaa">
        <input type="text" value={this.state.message} onChange={this.handleChange.bind(this)} />
        <input type="text" ref='test' />
        <div>{this.state.message}</div>
      </div>
    )
  }
}

export default Form
