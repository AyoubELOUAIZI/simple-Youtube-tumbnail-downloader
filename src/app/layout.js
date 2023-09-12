import { Navbar } from '@/components/navbar/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import { Footer } from '@/components/footer/Footer'
import GoogleAnalytics from '@/components/GoogleAnalytics/GoogleAnalytics'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'YouTube Video Thumbnail',
  description: 'YouTube Video Thumbnail Downloader | Instant Preview & Download.Easily preview and download YouTube video thumbnails with our user-friendly tool.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
          <GoogleAnalytics GA_MEASUREMENT_ID='G-QKJ264BEE0'/>

       {/* <head>
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-QKJ264BEE0"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments)}
    gtag('js', new Date());

    gtag('config', 'G-QKJ264BEE0');
  </script>    
  </head> */}
      <body className={inter.className}>
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}
