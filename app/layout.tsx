'use client'

import { Provider } from 'react-redux'
import store from '../redux/store'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <Provider store={store}>
        <body className={inter.className}>{children}</body>
      </Provider>
    </html>
  )
}
