import React from 'react'
import { useSelector } from 'react-redux';

const Sidebar = () => { 
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  // early Return 
  //if (!isMenuOpen) return null
    return !isMenuOpen ? null : (
      <div className="p-4 w-48 shadow-lg">
        <h1 className="font-bold pt-3"> Home</h1>
        <ul className="font-normal pb-2">
          <li>Shorts </li>
          <li>Subscriptions</li>
        </ul>
        <h1 className="font-bold pt-3 border-t border-gray-500">You </h1>
        <ul className="pb-2">
          <li>Your Channel </li>
          <li>History</li>
          <li>Your Video</li>
          <li>watch later</li>
          <li>Liked Video</li>
        </ul>
        <h1 className="font-bold pt-3 border-t border-gray-500">Explore</h1>
        <ul className="pb-2">
          <li>Trending </li>
          <li>Shopping</li>
          <li>Gaming </li>
          <li>Fashion & beauty</li>
          <li>Podcasts</li>
        </ul>
        <h1 className="font-bold pt-3 border-t border-gray-500">
          More from YouTube
        </h1>
        <ul className="pb-2">
          <li>YouTube Premium </li>
          <li>YouTube Studio</li>
          <li>YouTube Music</li>
          <li>YouTube Kids</li>
        </ul>
      </div>
    );
}

export default Sidebar
