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
        <Input
          value={inputValue}
          onChange={handleChange}
          onEnter={handleEnter}
        />
        <Button color='orange' isLoading={isLoadingSubmit}>
          Button
        </Button>
        <Button color='orange' variant='outline' isLoading={isLoadingSubmit}>
          Button
        </Button>
      </div>
    </>
  )
}

export default Home
