'use client'
import React, { useState } from 'react'
import { TodoContext } from './context'
import { ITodo } from '@/models'
import Todo from './Todo'
import TodoCompleted from './TodoCompleted'

const UserConText = () => {
  const [todos, setTodos] = useState<ITodo[]>([
    { id: 1, name: 'Todo 1', completed: false },
  ])
  const person = { name: 'Viet', age: 30 }

  const handleAddTodo = () => {
    setTodos(previousTodo => [
      ...previousTodo,
      {
        id: todos.length,
        name: `Todo ${todos.length + 1}`,
        completed: Math.floor(Math.random() * 10) % 2 > 0 ? true : false,
      },
    ])
  }

  return (
    <TodoContext.Provider value={{ todos, person }}>
      <div>UserConText</div>
      <button onClick={handleAddTodo}>Add</button>
      <div className='flex space-x-10'>
        <Todo />
        <TodoCompleted />
      </div>
    </TodoContext.Provider>
  )
}

export default UserConText
