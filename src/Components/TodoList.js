import React from 'react'
import TodoTask from './TodoTask'

const TodoList = ({ todos, deleteTask, complete }) => {
    return (
        <div>
            {todos.map((el, i) => <TodoTask task={el} key={i} deleteTask={deleteTask} complete={complete} />)}
        </div>
    )
}

export default TodoList