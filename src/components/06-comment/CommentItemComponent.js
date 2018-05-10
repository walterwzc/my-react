import React, { Component } from 'react'

import Button from './ButtonComponent'

class CommentItemComponent extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        let { year, title, images } = this.props.message
        return (
            <li>
                <div>
                    <img src={images.large} width="50" heigth="50" alt="" />
                </div>
                <div>
                    <p>{year}</p>
                    <p>{title}</p>
                </div>
                <Button text="Reply" />
            </li>
        )
    }
}

export default CommentItemComponent
