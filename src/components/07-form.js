import React, { Component } from 'react'

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
            console.log(this.refs.fatherDiv.innerHTML)
        }, 3000)
    }

    refHandleChange() {
        console.log(this.refs.inputRef.value);
    }



    render() {

        return (
            <div ref="fatherDiv">
                {/* 受控组件 */}
                <input
                    type="text"
                    value={this.state.message}
                    onChange={this.handleChange.bind(this)}
                />

                {/* 非受控组件 */}
                <input type="text" ref="inputRef" onChange={this.refHandleChange.bind(this)}/>
                <div>{this.state.message}</div>
            </div>
        )
    }
}

export default Form
