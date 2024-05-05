import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomMessage, generateRandomName ,displayImage} from "../utils/helper";
import { LuSendHorizonal } from "react-icons/lu";
const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");

  const dispatch = useDispatch();
  const chatMessage = useSelector((store) => store.chat.messages);
  useEffect(() => {
    const i = setInterval(() => {
      //API Polling
      // console.log("API Polling ");
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: generateRandomMessage(23),
          photo: displayImage(),
        })
      );
    }, 2000);
    return () => clearInterval(i);
  }, []);

  return (
    <>
      <div className="w-full h-[455px] ml-2 p-2 border border-black bg-slate-200 rounded-lg overflow-y-scroll flex flex-col-reverse ">
        {chatMessage.map((c, i) => (
          <ChatMessage
            key={i}
            name={c.name}
            message={c.message}
            photo={c.photo}
          />
        ))}
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessage({
              name: generateRandomName(),
              message: liveMessage,
              photo: displayImage(),
            })
          );
          setLiveMessage("");
        }}
        className="w-full p-2  m-2 border border-black rounded-md"
      >
        <input
          type="text"
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
          className=" w-4/5 bg-transparent placeholder:text-sm placeholder:font-semibold border border-x-0 border-t-0  border-b-gray-400 outline-0 focus:border-b-blue-600 duration-700"
        />
        <button className="  mt-2 p-2 hover:bg-blue-300 rounded-lg self-end">
          <LuSendHorizonal className="w-6 h-6 mx-3"/>
        </button>
      </form>
    </>
  );
};

export default LiveChat;
