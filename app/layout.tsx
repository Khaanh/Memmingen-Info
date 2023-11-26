import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import HeaderPage from './components/HeaderPage'
import FooterPage from './components/FooterPage'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Memmingen-Info',
  description: 'Generated by create next app', //??
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white`}>
        <div className='flex flex-col justify-between min-h-screen'>
          <HeaderPage />
          <main className="container px-2 lg:px-4 flex-initial mx-auto mb-10">
            {children}
          </main>
          <FooterPage />
        </div>
      </body>
    </html>
  )
}
