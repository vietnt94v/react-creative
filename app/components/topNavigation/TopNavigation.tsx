'use client'
import Link from 'next/link'
import { useUser } from '../../contexts/UserContext'

const TopNavigation = () => {
  const userContext = useUser()

  if (!userContext) {
    return null
  }

  const { user } = userContext

  return (
    <>
      <nav className='bg-blue-dark-500 py-2 text-white'>
        <div className='container'>
          <div className='flex'>
            <div className='flex-1'>
              <div className=''>App</div>
            </div>
            <div className='flex-1 flex justify-end'>
              {user ? (
                <span>
                  Welcome{' '}
                  <span className='text-orange-500'>{user.username}</span>
                </span>
              ) : (
                <Link href='/login'>Login</Link>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default TopNavigation
