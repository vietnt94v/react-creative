'use client'

import { Provider } from 'react-redux'
import store from '../redux/store'
import './globals.css'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <Provider store={store}>
        <body className='p-2'>{children}</body>
      </Provider>
    </html>
  )
}
