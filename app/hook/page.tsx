'use client'
import React, { useCallback, useState } from 'react'

const ChildComponent = (({ onClick }: { onClick: () => void }) => {
  console.log('Child component re-rendered')
  return <button onClick={onClick}>Click me</button>
})

const Hook = () => {
  const [count, setCount] = useState<number>(0)

  const handleClick = useCallback(() => {
    console.log('Button clicked')
  }, []) // Empty dependency array means the function is only created once

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <ChildComponent onClick={handleClick} />
    </div>
  )
}

export default Hook
