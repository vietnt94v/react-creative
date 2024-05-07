'use client'
import React, { useMemo, useState } from 'react'

const RenderA = ({ count }: { count: number }) => {
  const handleExpensiveValue = (num: number) => {
    console.log('RenderA... ', num)
    return num
  }

  const expensiveValue = useMemo(() => handleExpensiveValue(count), [count])
  // const expensiveValue = handleExpensiveValue(count)

  return (
    <>
      <div>Count: {expensiveValue}</div>
    </>
  )
}

const UseMemo = () => {
  const [count, setCount] = useState(0)
  const [count2, setCount2] = useState(0)
  const [text, setText] = useState('')

  return (
    <>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <button onClick={() => setCount2(count2 + 2)}>Increment Count 2</button>
      <input
        type='text'
        value={text}
        onChange={e => setText(e.target.value)}
        className='block text-black'
      />
      <RenderA count={count} />
      {count2}
    </>
  )
}

export default UseMemo
