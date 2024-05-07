'use client'
import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'

const About = () => {
  const counter = useSelector((state: RootState) => state.counter)

  return (
    <>
      <div>About me: Creative</div>
      <h1>Counter: {counter.count}</h1>
    </>
  )
}

export default About
