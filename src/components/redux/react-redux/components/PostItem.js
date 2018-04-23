import React from 'react'


// 函数式构建 react 的方法， 在函数的形参可以直接获取父级传递的props ， 可以直接在形参处，进行解构赋值！
export default ({ entity, onClickDeleteButton }) => {
    return (
        <div>
            <div>{entity.title}</div>
            <button onClick={() => onClickDeleteButton(entity.id)}>
                delete
            </button>
        </div>
    )
}
