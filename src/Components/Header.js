import React, { useContext, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constrants";
import { IoSearchOutline } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineDarkMode } from "react-icons/md";
import { useSearchSuggestion } from "../utils/useSearchSuggestion";
import { Link } from "react-router-dom";
//import UserContext from "../utils/UserContext";
const Header = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState([]);
  const [saggetion, setSaggetion] = useState([]);
  const [Showaggetion, setShowsaggetion] = useState(false);
  //const { search, setSearch, searchSuggestion } = useSearchSuggestion;
  // const { suggestion, setShowSuggestion } = useContext(UserContext);
  // const { search, setSearch, searchSuggestion } = useSearchSuggestion();
  useEffect(() => {
    // console.log(searchQuery)

    const timer = setTimeout(() => getSearchSagetion(), 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSagetion = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSaggetion(json[1]);
  };

  const toggleSidebar = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col sticky top-0 right-0 left-0 bg-white p-3 mx-1 shadow-lg z-30">
      <div className="flex col-span-1">
        <GiHamburgerMenu
          onClick={() => toggleSidebar()}
          className="h-8 w-8 mx-2 cursor-pointer transform hover:scale-110
        transition-transform duration-150"
        />
        <div className="flex h-8 justify-center items-center bg-white">
          <Link to={"/"} className="inline-block">
            <img
              className="h-12 text-center mx-2 transition-colors duration-150 hover:text-blue-500 blend-multiply" // Added blend-multiply class here
              src="https://lh3.googleusercontent.com/3zkP2SYe7yYoKKe47bsNe44yTgb4Ukh__rBbwXwgkjNRe4PykGG409ozBxzxkrubV7zHKjfxq6y9ShogWtMBMPyB3jiNps91LoNH8A=s500"
              alt="youtube_logo"
            />
          </Link>
        </div>
      </div>
      <div className=" col-span-10 pl-16">
        <div className="flex">
          <input
            className="w-2/3 border rounded-l-3xl border-gray-400 p-2 transition-colors duration-150 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            type="text"
            placeholder=" Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowsaggetion(true)}
            onBlur={() => setShowsaggetion(false)}
          />

          <div className="flex flex-row items-center">
            <Link to={"/results?search_query=" + searchQuery}>
              <button className="border rounded-r-3xl border-gray-400 px-5 p-3 bg-gray-100">
                <IoSearchOutline className="mr-2" />
              </button>
            </Link>
          </div>
        </div>
        {Showaggetion && (
          <div className="absolute z-20 ml-4 bg-white px-2 py-2  w-[34rem] shadow-lg rounded-lg border border-gray-100 transition-opacity duration-150 ease-in-out">
            <ul>
              {saggetion.map((s, i) => (
                <Link to={"/results?search_query=" + s} key={s}>
                  <li key={s} className="px-3 py-2 hover:bg-gray-100">
                    <div className="flex items-center">
                      <span className="px-2 mx-2 ">
                        <IoSearchOutline />
                      </span>
                      {<span>{s}</span>}
                    </div>
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="flex col-span-1 space-x-2">
        
        <img
          className="h-8 px-2 cursor-pointer transform hover:scale-110 transition-transform duration-150"
          src="https://cdn3.iconfinder.com/data/icons/linecons-free-vector-icons-pack/32/video-512.png"
          alt="video_Icon"
        />
        <img
          className="h-8 px-2 cursor-pointer transform hover:scale-110 transition-transform duration-150"
          src="https://cdn-icons-png.flaticon.com/512/565/565422.png"
          alt="notification"
        />
        <img
          className="h-8 px-2 cursor-pointer transform hover:scale-110 transition-transform duration-150"
          src="https://static.thenounproject.com/png/1768489-200.png"
          alt="user"
        />
      </div>
    </div>
  );
};

export default Header;
