import { MicrophoneIcon, SearchIcon } from '@heroicons/react/solid';
import { XIcon } from '@heroicons/react/solid';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useRef } from 'react';
import Avatar from './Avatar';
import HeaderOptions from './HeaderOptions';

function Header() {
    const router = useRouter();
    const SearchInputRef = useRef(null);
    const search = e =>{
        e.preventDefault();
        const term = SearchInputRef.current.value;
        if(!term) return;
        router.push(`/search?term=${term}`)
    }
    return (
        <header className="sticky top-0 bg-white">
            <div className="flex w-full p-2 items-center">
                <Image 
                className="cursor-pointer"
                src="/google-logo-500x333.jpg"
                height={80}
                width={110}
                onClick={() => router.push("/")}
            />
            <form className="flex flex-grow px-5 py-3 max-w-xl ml-10 mr-4 border border-gray-200 rounded-full shadow-lg">
                <input ref={SearchInputRef} type="text" className="flex-grow w-full focus:outline-none" />
                <XIcon className="h-5 sm:mr-3 text-gray-500 cursor-pointer transition duration-100 transform hover:scale-125" 
                    onClick={() => (SearchInputRef.current.value= "")}
                />
                <MicrophoneIcon className="mr-3 pl-4 h-5 hidden sm:inline-flex text-blue-500 border-l-2  border-gray-300 cursor-pointer "/>
                <SearchIcon className="h-5 text-blue-500 hidden sm:inline-flex cursor-pointer" />
                <button hidden type="submit" onClick={search}>Search</button>
            </form>
            <Avatar className="ml-auto" url="https://yt3.ggpht.com/yti/ANoDKi5qXVFAvLCXnozk-MyoFS_6RAybuQ43xCC5KOMT=s88-c-k-c0x00ffffff-no-rj-mo" /> 
            </div>
            <HeaderOptions />
        </header>  
    )
}

export default Header
