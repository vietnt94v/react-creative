import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import TopNavigation from './components/topNavigation'
import { UserProvider } from './contexts/UserContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'App',
  description: '',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <UserProvider>
          <TopNavigation />
          <main>{children}</main>
        </UserProvider>
      </body>
    </html>
  )
}
