'use client'
import React, { useContext } from 'react'
import { TodoContext } from './context'

const Todo = () => {
  const { todos } = useContext(TodoContext)

  return (
    <>
      <div>
        {todos.map(todo => (
          <div key={todo.id}>
            {todo.name}: {todo.completed ? 'true' : 'false'}
          </div>
        ))}
      </div>
    </>
  )
}

export default Todo
