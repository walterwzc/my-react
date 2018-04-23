import React from 'react'

function Button(props) {
  return (
    <div>
      <button>{props.text}</button>
    </div>
  )
}


export default function Buttons() {
  return (
    <div>
      <Button text="btn1" />
      <Button text="btn2" />
      <Button text="btn3" />
    </div>
  )
}
