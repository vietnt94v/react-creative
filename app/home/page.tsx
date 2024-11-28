'use client'
import React, { useState } from 'react'
import Input from '../components/input/Input'
import Button from '../components/button/Button'

const Home = () => {
  const [inputValue, setInputValue] = useState<string>('')
  const [isLoadingSubmit, setIsLoadingSubmit] = useState<boolean>(false)

  const handleChange = (value: string) => {
    setInputValue(value)
  }

  const handleEnter = () => {
    setIsLoadingSubmit(true)
    setTimeout(() => {
      setIsLoadingSubmit(false)
    }, 2000)
    setInputValue('')
  }

  return (
    <>
      <div className='container pt-3'>
        <div className='flex flex-col space-y-3'>
          <Input
            value={inputValue}
            onChange={handleChange}
            onEnter={handleEnter}
          />
          <Button variant='outline' color='orange'>
            Submit
          </Button>
          <Button color='orange'>Submit</Button>
        </div>
      </div>
    </>
  )
}

export default Home
