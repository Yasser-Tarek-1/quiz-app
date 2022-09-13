import React from "react";

const Rules = ({ length, category }) => {
  return (
    <div>
      <h1 className="text-center mb-16 font-bold text-2xl">
        Quiz Instructions
      </h1>
      <div>
        <h3 className="font-bold text-lg">Note the following:</h3>
        <div>
          <div className="flex items-center">
            <span className="w-[7px] block h-[7px] bg-black rounded-[50%] mr-1 mt-1"></span>
            <p>Total {length} questions are asked.</p>
          </div>
          <div className="flex items-center">
            <span className="w-[7px] block h-[7px] bg-black rounded-[50%] mr-1 mt-1"></span>
            <p>Questions about evaluation of {category} knowledge.</p>
          </div>
          <div className="flex items-center">
            <span className="w-[7px] block h-[7px] bg-black rounded-[50%] mr-1 mt-1"></span>{" "}
            <p>Questions about multiple choice</p>
          </div>
          <div className="flex items-center">
            <span className="w-[7px] block h-[7px] bg-black rounded-[50%] mr-1 mt-1"></span>
            <p>The quiz will take {(length * 30) / 60} minutes or less.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rules;
