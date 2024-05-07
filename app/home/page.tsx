'use client'
import { useState } from 'react'
import Popup from '@/components/Popup'

const Home = () => {
  const [isShowPopup, setIsShowPopup] = useState<boolean>(false)

  return (
    <div className='home-page'>
      <button onClick={() => setIsShowPopup(true)}>Open Popup</button>
      {isShowPopup && (
        <Popup
          title='Confirm Submit'
          message='Do you want to delete this record?'
          onSubmit={() => setIsShowPopup(false)}
          onCancel={() => setIsShowPopup(false)}
        >
          <p className='text-red-500'>Do you want to delete this record?</p>
        </Popup>
      )}
    </div>
  )
}

export default Home
