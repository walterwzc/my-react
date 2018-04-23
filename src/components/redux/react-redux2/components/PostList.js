import React from 'react'

export default (props) => {
    const { entities, onDeletePost } = props;
    console.log('-------------- PostList -------------------');
    console.log(props);
    console.log('-------------- PostList -------------------');
    return (
        <div>
            {entities.map(item => (
                <div key={item.id}>
                    {item.title}
                    {' '}
                    <button onClick={() => onDeletePost(item.id)}>
                        delete
                    </button>
                </div>
            ))}
        </div>
    )
}
