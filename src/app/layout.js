import { Navbar } from '@/components/navbar/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import { Footer } from '@/components/footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'YouTube Video Thumbnail',
  description: 'YouTube Video Thumbnail Downloader | Instant Preview & Download.Easily preview and download YouTube video thumbnails with our user-friendly tool.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}
