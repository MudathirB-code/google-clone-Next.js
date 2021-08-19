import Head from 'next/head'
import Avatar from '../components/Avatar'
import {SearchIcon, ViewGridIcon } from '@heroicons/react/solid'
import { MicrophoneIcon } from '@heroicons/react/outline'
import Image from 'next/image';
import Footer from '../components/Footer';
import { useRef } from 'react';
import { useRouter } from 'next/router'

export default function Home() {  

  const router = useRouter(null);
  const inputSearchRef = useRef();
  const search = e =>{
    e.preventDefault();
    const term = inputSearchRef.current.value;
    if(!term) return;
    router.push(`/search?term=${term}`);
  }


  return (
    <div className="flex flex-col justify-center h-screen">
      <Head>
        <title>Google clone</title>
        <link rel="icon" href="/logo_1.png" />
      </Head>
      {/* Header */}
      <header className="flex space-x-4 w-full justify-between p-5 text-sm text-gray-500">
        {/* left */}
        <div className="flex space-x-4 items-center">
          <p className="link">About</p>
          <p className="link">Store</p>
        </div>
        {/* Right */}
        <div className="flex space-x-4 items-center">
          <p className="link">Gmail</p>
          <p className="link">Images</p>
          {/* icon */}
          <ViewGridIcon className="h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer" />
          {/* Avatar */}
          <Avatar url="https://yt3.ggpht.com/yti/ANoDKi5qXVFAvLCXnozk-MyoFS_6RAybuQ43xCC5KOMT=s88-c-k-c0x00ffffff-no-rj-mo" />
        </div>
      </header>
      {/* body */}
      <form className="flex flex-col items-center mt-33 flex-grow">
        <Image 
          src="/google-logo-500x333.jpg"
          height={150}
          width={250}
        />
        <div className="flex w-full hover:shadow-lg focus-within:shadow-lg max-w-md rounded-full
         border border-gray-200 px-3 py-2 items-center sm:max-w-xl lg:max-w-xl ">
          <SearchIcon className="h-5 text-gray-500 mr-3" />
          <input ref={inputSearchRef} type="search" className="flex-grow focus:outline-none" />
          <MicrophoneIcon className="h-5 text-blue-700"/>
        </div>
        <div>
          <button onClick={search} className="btn">Google Search</button>
          <button onClick={search} className="btn">I'm Feeling Lucky</button>
        </div>
        <div>
          <p className="text-gray-700 pt-5 text-sm">Google offered in:<span className="text-blue-600 text-sm cursor-pointer"> العربية</span></p>
        </div>
      </form>
      {/* Footer */}
       <Footer />
    </div>
  )
}
