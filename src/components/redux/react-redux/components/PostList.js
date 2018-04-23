import React from 'react'
import PostItem from './PostItem'

const PostList = ({ entities, onClickDeleteButton }) => {
    return (
        <div>
            {entities.map(item => (
                <PostItem
                    key={item.id}
                    entity={item}
                    onClickDeleteButton={onClickDeleteButton}
                />
            ))}
        </div>
    )
}

export default PostList
