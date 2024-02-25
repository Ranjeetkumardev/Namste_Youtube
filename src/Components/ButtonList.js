import React from "react";
import Button from "../utils/Button";

const List = [
  "All",
  "Music",
  "Gaming",
  "Podcast",
  "News",
  "Science",
  "Entertenments",
  "comedy",
  "Recent Upload",
  "Cooking",
  "Cricket",
  "Live",
];
const ButtonList = () => {
  return (
    <div className=" ">
      {List.map((name) => (
        <Button name={name} key={name} />
      ))}

      {/*we do like this also
       <Button name="Music" />
      <Button name="Gaming" />
      <Button name="Podcast" /> */}
    </div>
  );
};

export default ButtonList;
