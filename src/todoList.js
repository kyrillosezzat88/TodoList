import React from 'react';
const Todos = ({todos, Delete}) => {
    const TodoList = todos.length ? (
        todos.map(todo => {
            return(
                <div className="collection-item" key={todo.id}>
                    <span onClick={() => {Delete(todo.id)}}> {todo.Content} </span>
                </div>
            )
        })
    ) : (
        <p className="center red-text">you dont have any todo yay!</p>
    )
    return(
        <div className="todos collection">
            {TodoList}
        </div>
    )
}

export default Todos