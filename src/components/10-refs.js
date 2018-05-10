import React, { Component } from 'react';

class CustomTextInput extends React.Component {
    constructor(props) {
      super(props);
      this.focus = this.focus.bind(this);
      this.handleGetValue = this.handleGetValue.bind(this);
    }
  
    focus() {
      // 直接使用原生 API 使 text 输入框获得焦点
      this.textInput.focus();
    }

    handleGetValue() {
        console.log(this.textInput.value);
    }
  
    render() {
      // 使用 `ref` 的回调将 text 输入框的 DOM 节点存储到 React
      // 实例上（比如 this.textInput）
      return (
        <div>
          <input
            type="text"
            ref={(input) => { 
                this.textInput = input; 
                // console.log(input);
                // console.log(this.textInput.value);
            }}
            // value="abc"
            />
  
          <input
            type="button"
            value="Focus the text input"
            onClick={this.focus}
          />



          &nbsp;&nbsp;
          <input 
            type="button"
            value="get Value"
            onClick={this.handleGetValue}
            />
        </div>
      );
    }
  }

export default CustomTextInput;
