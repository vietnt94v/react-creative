'use client'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement } from '../../redux/counter/counterSlice'
import { RootState } from '../../redux/store'
import { useEffect } from 'react'

const Home = () => {
  const dispatch = useDispatch()
  const counter = useSelector((state: RootState) => state.counter)

  useEffect(() => {
    dispatch(increment())
  },[])

  return (
    <div>
      <h1>Counter: {counter.count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  )
}

export default Home
