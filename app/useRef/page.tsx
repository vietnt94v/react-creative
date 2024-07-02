'use client'
import { useRef } from 'react'

const UseRef = () => {
  const buttonRef = useRef<HTMLButtonElement>(null)

  const handleClick = () => {
    const newButtonStyle = {
      backgroundColor: 'red',
    }
    buttonRef.current && Object.assign(buttonRef.current.style, newButtonStyle)
  }

  return (
    <>
      <button ref={buttonRef} onClick={handleClick}>
        Change My Color
      </button>
    </>
  )
}

export default UseRef
