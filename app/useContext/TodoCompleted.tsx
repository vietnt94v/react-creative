import React, { useContext } from 'react'
import { TodoContext } from './context'

const TodoCompleted = () => {
  const { todos } = useContext(TodoContext)
  const todosCompleted = todos.filter(todo => todo.completed === true)

  return (
    <>
      <div>
        {todosCompleted.map(todo => (
          <div key={todo.id}>{todo.name}</div>
        ))}
      </div>
    </>
  )
}

export default TodoCompleted
