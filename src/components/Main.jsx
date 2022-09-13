import React from "react";

const Main = ({ children }) => {
  return (
    <div className="w-full h-full md:w-[80%] xl:w-[84%] bg-[#fffaf0] flex justify-center items-center p-2">
      {children}
    </div>
  );
};

export default Main;
