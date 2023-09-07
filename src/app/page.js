import { ThumbnailDownloader } from '@/components/ThumbnailDownloader/ThumbnailDownloader'
import { HeroFour } from '@/components/heroFour/HeroFour'
// import { Test } from '@/components/test/Test'
// import Image from 'next/image'

export default function Home() {
  return (
   <div>
   <ThumbnailDownloader/>
     {/* <Test/> */}
    <HeroFour/>
   </div>
  )
}
