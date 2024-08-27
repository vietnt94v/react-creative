import React from 'react'

const Loading = () => {
  return (
    <>
      <div className='bg-blue-dark-500 h-screen w-screen fixed flex justify-center items-center z-50'>
        <div className='border-4 border-t-blue-100 border-blue-500 size-40 rounded-full animate-spin'></div>
      </div>
    </>
  )
}

export default Loading
