import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Head = () => {
  const dispatch = useDispatch();
  const toggleSidebar = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-sm">
      <div className="flex col-span-1">
        <img
          onClick={() => toggleSidebar()}
          className="h-8 mx-2 cursor-pointer"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1024px-Hamburger_icon.svg.png"
          alt="Hamberger_icon"
        />
        <a href="/">
          <img
            className="h-9 mx-2"
            src="https://t3.ftcdn.net/jpg/04/37/93/52/360_F_437935292_SqPVv39joYWJpPGmNOddEZpt5lvRL7Ed.jpg"
            alt="youtube_logo"
          />
        </a>
      </div>
      <div className=" col-span-10  px-10 ">
        <input
          className="w-1/2 border rounded-l-3xl border-gray-400 p-2"
          type="text"
          placeholder="Search"
        />
        <button className="border rounded-r-3xl border-gray-400 px-5 py-2 bg-gray-100">
          🔍
        </button>
      </div>
      <div className="flex col-span-1">
        <img
          className="h-8 mx-2"
          src="	https://cdn3.iconfinder.com/data/icons/linecons-free-vector-icons-pack/32/video-512.png"
          alt="video_Icon"
        />

        <img
          className="h-8 mx-2"
          src="	https://cdn-icons-png.flaticon.com/512/565/565422.png"
          alt="notification"
        />
        <img
          className="h-8 mx-2"
          src="https://static.thenounproject.com/png/1768489-200.png"
          alt="user"
        />
      </div>
    </div>
  );
};

export default Head;
