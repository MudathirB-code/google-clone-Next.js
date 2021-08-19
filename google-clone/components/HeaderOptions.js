import HeaderOption from './HeaderOption'
import {DotsVerticalIcon,MapIcon , NewspaperIcon , PhotographIcon , SearchIcon , PlayIcon} from "@heroicons/react/outline"
function HeaderOptions() {
    return (
        <div className="flex w-full text-gray-700 justify-evenly text-sm lg:text-base lg:justify-start lg:space-x-32 lg:pl-52 border-b">
            {/* left */}
            <div className="flex space-x-5">
                <HeaderOption Icon={SearchIcon} title="All" selected />
                <HeaderOption Icon={PhotographIcon} title="image"/>
                <HeaderOption Icon={PlayIcon} title="videos"/>
                <HeaderOption Icon={NewspaperIcon} title="News"/>
                <HeaderOption Icon={MapIcon} title="Maps"/>
                <HeaderOption Icon={DotsVerticalIcon} title="More"/>
            </div>
            {/* right */}
            <div className="flex space-x-4">
                <p className="link">Setting</p>
                <p className="link">Tools</p>
            </div>
        </div>
    )
}

export default HeaderOptions
