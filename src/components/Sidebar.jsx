import React from "react";

const Sidebar = ({ length, category, onStart, hidden }) => {
  return (
    <div className="py-4 w-full md:w-[20%] xl:w-[16%] grad bg-gradient-to-b from-[#4303d8] to-[#6003ab] flex flex-col justify-around">
      <div className="text-white text-xl font-bold text-center p-4">
        Quiz App
      </div>
      {hidden && (
        <>
          <div className="text-white  flex items-center font-semibold text-center justify-center p-4 bg-white/20 rounded-[300px] w-[95%] mx-auto ">
            Category: {category}
          </div>
          <div className="text-white text-center text-lg flex flex-col items-center  font-semibold mt-5 md:mt-28 bg-white/20 rounded-[300px] p-4 w-[95%] mx-auto">
            {length} Question
          </div>

          <button
            className="text-white text-xl font-bold p-6 hover:text-white/70 transition-all"
            onClick={() => onStart(true)}
          >
            Start Quiz
          </button>
        </>
      )}
    </div>
  );
};

export default Sidebar;
