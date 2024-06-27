'use client'
import React, { useMemo, useState } from 'react'

const RenderA = ({ count }: { count: number }) => {
  const handleExpensiveValue = (num: number) => {
    console.log('One match need expensive value... ', num)
    return num
  }

  const expensiveValue = useMemo(() => handleExpensiveValue(count), [count])
  // const expensiveValue = handleExpensiveValue(count)

  return (
    <>
      <div>Render A | Count: {expensiveValue}</div>
    </>
  )
}

const UseMemo = () => {
  const [count, setCount] = useState(0)
  const [count2, setCount2] = useState(0)
  const [text, setText] = useState('')

  return (
    <>
      <div className='flex flex-col items-baseline space-y-2'>
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
      </div>
    </>
  )
}

export default UseMemo
