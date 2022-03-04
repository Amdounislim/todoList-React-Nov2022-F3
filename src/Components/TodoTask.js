import React from 'react'

const TodoTask = ({ task, deleteTask, complete }) => {
    return (
        <div>
            <span style={{ textDecoration: task.isDone ? "line-through" : "none" }}>{task.text}</span>
            <button onClick={() => deleteTask(task.id)} >Delete</button>
            <button onClick={() => complete(task.id)}>{task.isDone ? "unDone" : "Done"}</button>
        </div>
    )
}

export default TodoTask