import React, { useEffect, useState } from "react";
import Button from "./Button";
import { CATEGORIES_API } from "../utils/constrants";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

const Filterbuttons = () => {
  const [count, setCount] = useState(0);
  const [categories, setCategories] = useState([]);
   
  useEffect(() => {
    getCategories();
  }, []);

  const getCategories = async () => {
    const data = await fetch(CATEGORIES_API);
    const json = await data.json();
    setCategories(json.items);
  };
  const handleNext = () => {
    setCount((prev) => (prev < 8 ? prev + 1 : 8));
  };
  const handlePrev = () => {
    setCount(count > 1 ? count - 1 : 0);
  };
  return (
    <div className="md:max-w-screen-lg w-screen ml-8 mr-auto mt-4 relative">
      <div className="relative z-10 lg:w-[90%] w-4/5 mx-auto overflow-hidden">
        <div
          className="flex duration-500 w-[200px]"
          style={{ transform: `translateX(-${count * 200}%)` }}
        >
          {categories.map((button, index) => (
            <Button name={button.snippet.title} key={index} />
          ))}
        </div>
      </div>
      <div className="absolute flex justify-between items-center inset-0 w-full">
        <span
          className={`  cursor-pointer bg-gray-400 shadow-lg  px-1 py-2 rounded-lg ${
            count === 0 && "opacity-50 cursor-auto"
          }`}
          onClick={handlePrev}
        >
          <FaAngleLeft size={20} />
        </span>
        <span
          className={`${
            count === 7 && "opacity-50 cursor-auto"
          }  -translate-x-6 cursor-pointer bg-gray-400  shadow-lg  px-1 py-2 rounded-lg`}
          onClick={handleNext}
        >
          <FaAngleRight size={20} />
        </span>
      </div>
    </div>
  );
};

export default Filterbuttons;
