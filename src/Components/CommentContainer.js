// import React from "react";

// const commentData = [
//   {
//     name: "Ranjeet Kumar",
//     text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, atque.",
//     replies: [
//       {
//         name: "Ranjeet Kumar",
//         text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, atque.",
//         replies: [
//           {
//             name: "Ranjeet Kumar",
//             text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, atque.",
//             replies: [
//               {
//                 name: "Ranjeet Kumar",
//                 text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, atque.",
//                 replies: [
//                   {
//                     name: "Ranjeet Kumar",
//                     text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, atque.",
//                     replies: [],
//                   },
//                 ],
//               },
//             ],
//           },
//         ],
//       },
//     ],
//   },
//   {
//     name: "Ranjeet Kumar",
//     text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, atque.",
//     replies: [
//       {
//         name: "Ranjeet Kumar",
//         text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, atque.",
//         replies: [
//           {
//             name: "Ranjeet Kumar",
//             text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, atque.",
//             replies: [],
//           },
//         ],
//       },
//     ],
//   },
//   {
//     name: "Ranjeet Kumar",
//     text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, atque.",
//     replies: [
//       {
//         name: "Ranjeet Kumar",
//         text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, atque.",
//         replies: [
//           {
//             name: "Ranjeet Kumar",
//             text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, atque.",
//             replies: [],
//           },
//         ],
//       },
//     ],
//   },
//   {
//     name: "Ranjeet Kumar",
//     text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, atque.",
//     replies: [],
//   },
// ];

// const Comment = ({ data }) => {
//   const { name, text, replies } = data
//   return (
//     <div className="flex shadow-sm bg-gray-200 rounded-lg p-2 m-2">
//       <img className="w-10 h-10 p-2" alt="coment-logo" src="https://static.thenounproject.com/png/1768489-200.png"/>
//       <div className="px-3">
        
//         <p className="font-bold">{name}</p>
//         <p>{text}</p>
//       </div>
//     </div>
//   )
// }
// const CommentList = ({ comments }) => {
//   return comments.map((comment, index) => (
//     <div key={index}>
//       <Comment data={comment} />
//       <div className="pl-5 border border-l-black ml-5">
//         <CommentList comments={comment.replies} />
//       </div>
//     </div>
//   ));
  
// };
// const CommentContainer = () => {
//   return(
//   <div className="m-5 p-2">
//     <h1 className="text-2xl font-bold">Commetns : </h1>
//     <CommentList comments={commentData}/>
//   </div>)
// };

// export default CommentContainer;

import React from "react";
import { useEffect, useState } from "react";
import { COMMENT_API } from "../utils/constrants";
 
import { FaChevronDown } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa";
import Shimmer from "../utils/Shimmer";

const Comment = ({ data }) => {
  const { textDisplay, authorDisplayName, authorProfileImageUrl } =
    data?.snippet?.topLevelComment?.snippet || data?.snippet;

  return (
    <div className="my-3 flex items-center gap-3 p-1 rounded-lg w-full">
      <div className=" h-10">
        <img
          className="min-w-10 h-full rounded-full"
          alt="commentProfile"
          src={authorProfileImageUrl && authorProfileImageUrl}
        />
      </div>
      <div className="w-3/4">
        <p className="font-semibold text-sm">{authorDisplayName}</p>
        <p className="text-xs font-medium ml-5">{textDisplay}</p>
      </div>
    </div>
  );
};

const CommentBox = ({ comment, handle, rep }) => {
  return (
    <div>
      <Comment data={comment} />
      {comment.replies && (
        <div className="ml-20 my-2 pl-3 border-l border-l-gray-500 ">
          <div
            onClick={handle}
            className="flex items-center gap-2 cursor-pointer font-medium text-blue-600"
          >
            Replies ({comment.replies.comments.length}){" "}
            {rep ? (
              <FaChevronUp size={15} className="mt-1" />
            ) : (
              <FaChevronDown size={15} className="mt-1" />
            )}
          </div>
          {rep && <CommentsList comments={comment.replies.comments} />}
        </div>
      )}
    </div>
  );
};
const CommentsList = ({ comments }) => {
  const [showIndex, setShowIndex] = useState(null);

  const handleShow = (index) => {
    if (showIndex !== index) {
      setShowIndex(index);
    } else {
      setShowIndex(null);
    }
  };
  return comments.length === 0 ? (
    <Shimmer/>
  ) : (
    comments?.map((comment, index) => (
      <CommentBox
        key={comment.id}
        rep={index === showIndex ? true : false}
        handle={() => handleShow(index)}
        comment={comment}
        index={index}
      />
    ))
  );
};

const CommentContainer = ({ videoId }) => {
  const [commentsData, setCommentsData] = useState([]);

  useEffect(() => {
    getCommentsData();
  }, [videoId]);

  const getCommentsData = async () => {
    const data = await fetch(COMMENT_API + videoId);
    const json = await data.json();
    setCommentsData(json.items);
  };

  return (
    <div>
      <h1 className="font-bold m-1 ml-3 mt-3 text-2xl tracking-wider">
        {commentsData && commentsData.length} Comments
      </h1>
      {commentsData ? (
        <CommentsList comments={commentsData} />
      ) : (
        <h2 className="text-lg font-semibold ml-10 text-red-600">
          This Video Has Disabled the Comments
        </h2>
      )}
    </div>
  );
};

export default CommentContainer;
