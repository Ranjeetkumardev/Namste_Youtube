import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { AiFillHome, AiOutlineLike } from "react-icons/ai";
import {
  SiYoutubeshorts,
  SiYoutubegaming,
  SiApplepodcasts,
  SiYoutubestudio,
  SiYoutubemusic,
  SiYoutubekids,
} from "react-icons/si";
import {
  MdExplore,
  MdOutlineShoppingBag,
  MdWorkspacePremium,
} from "react-icons/md";
import { GiClothes } from "react-icons/gi";
import {
  MdSubscriptions,
  MdHistory,
  MdVideoLibrary,
  MdWatchLater,
} from "react-icons/md";
import { BiSolidUserAccount } from "react-icons/bi";
const Sidebar = () => { 
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  // early Return 
  //if (!isMenuOpen) return null
    return !isMenuOpen ? null : (
      <div className="p-4 w-52 bg-slate-100 sticky bottom-0 top-12  h-screen">
        <h1 className="font-bold pt-3">
          <Link to={"/"}>
            <span className="flex justify-center items-center -ml-16 hover:bg-gray-300 rounded-md p-2">
              <AiFillHome className="w-6 h-6" />
              <span className="text-center mx-2"> Home</span>
            </span>
          </Link>
        </h1>
        <ul className="font-normal pb-2">
          <li className="flex  mx-2 items-center hover:bg-gray-300 rounded-md p-2">
            <SiYoutubeshorts className="mx-2" />
            Shorts
          </li>
          <li className="flex mx-2 items-center hover:bg-gray-300 rounded-md p-2">
            <MdSubscriptions className="mx-2" />
            Subscriptions
          </li>
        </ul>
        <h1 className="font-bold pt-3 border-t border-gray-500 hover:bg-gray-300 rounded-md p-2">
          You
        </h1>
        <ul className="pb-2">
          <li className="flex hover:bg-gray-300 rounded-md p-2 mx-2 items-center ">
            <BiSolidUserAccount className="mx-2" />
            Your Channel
          </li>
          <li className="flex hover:bg-gray-300 rounded-md p-2 mx-2 items-center">
            <MdHistory className="mx-2" />
            History
          </li>
          <li className="flex hover:bg-gray-300 rounded-md p-2 mx-2 items-center">
            <MdVideoLibrary className="mx-2" />
            Your Video
          </li>
          <li className="flex hover:bg-gray-300 rounded-md p-2 mx-2 items-center">
            <MdWatchLater className="mx-2" />
            watch later
          </li>
          <li className="flex hover:bg-gray-300 rounded-md p-2 mx-2 items-center">
            <AiOutlineLike className="mx-2" />
            Liked Video
          </li>
        </ul>
        <h1 className="font-bold pt-3 border-t border-gray-500 hover:bg-gray-300 rounded-md p-2">
          Explore
        </h1>
        <ul className="pb-2">
          <li className="flex hover:bg-gray-300 rounded-md p-2 mx-2 items-center">
            <MdExplore className="mx-2" />
            Trending
          </li>
          <li className="flex hover:bg-gray-300 rounded-md p-2 mx-2 items-center">
            <MdOutlineShoppingBag className="mx-2" />
            Shopping
          </li>
          <li className="flex hover:bg-gray-300 rounded-md p-2 mx-2 items-center">
            <SiYoutubegaming className="mx-2" />
            Gaming
          </li>
          <li className="flex hover:bg-gray-300 rounded-md p-2 mx-2 items-center">
            <GiClothes className="mx-2" />
            Fashion & beauty
          </li>
          <li className="flex hover:bg-gray-300 rounded-md p-2 mx-2 items-center">
            <SiApplepodcasts className="mx-2" />
            Podcasts
          </li>
        </ul>
        <h1 className="font-bold pt-3 border-t border-gray-500 hover:bg-gray-300 rounded-md p-2">
          More from YouTube
        </h1>
        <ul className="pb-2">
          <li className="flex mx-2 items-center hover:bg-gray-300 rounded-md p-2">
            <MdWorkspacePremium className="mx-2" />
            YouTube Premium
          </li>
          <li className="flex hover:bg-gray-300 rounded-md p-2 mx-2 items-center">
            <SiYoutubestudio className="mx-2" />
            YouTube Studio
          </li>
          <li className="flex hover:bg-gray-300 rounded-md p-2 mx-2 items-center">
            <SiYoutubemusic className="mx-2" />
            YouTube Music
          </li>
          <li className="flex hover:bg-gray-300 rounded-md p-2 mx-2 items-center">
            <SiYoutubekids className="mx-2" />
            YouTube Kids
          </li>
        </ul>
      </div>
    );
}

export default Sidebar
