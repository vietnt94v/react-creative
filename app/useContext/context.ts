import { createContext } from 'react'
import { ITodo } from '@/models'

export type TTodoContext = {
  todos: ITodo[]
  person?: {
    name: string
    age: number
  }
  handleAddTodo?: () => void
}

export const TodoContext = createContext<TTodoContext>({
  todos: [],
  person: {
    name: 'Viet Nguyen',
    age: 30,
  },
})
