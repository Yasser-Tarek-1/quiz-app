import React from "react";

const ChooseQ = ({ onSetCategory, onSetAmount, onSetHidden }) => {
  const submitHandler = (e) => {
    e.preventDefault();
    onSetCategory(e.target[0].value);
    onSetAmount(e.target[1].value);
    onSetHidden(true);
  };
  return (
    <form className="flex flex-col" onSubmit={submitHandler}>
      <div className="mb-4">
        <label htmlFor="category" className="font-semibold text-lg">
          Choose a Category:
        </label>
        <select
          name="category"
          id="category"
          className="font-semibold text-lg outline-none"
          required
        >
          <option value={20}>Mythology</option>
          <option value={21} selected>
            Sports
          </option>
          <option value={22}>Geography</option>
          <option value={23}>History</option>
        </select>
      </div>
      <div>
        <label htmlFor="num" className="font-semibold text-lg mr-2">
          Question Number
        </label>
        <input
          type="number"
          id="num"
          className="outline-none border-[#4403d5]  border-2 py-1 px-2 rounded-md text-base font-semibold bg-transparent"
          max={30}
          min={10}
          required
          placeholder="10~30"
        />
      </div>
      <button
        type="submit"
        className="mt-6 font-semibold text-base py-2 px-8 bg-[#8053e3] w-fit mx-auto rounded-[300px] text-white hover:bg-[#6e3bdb]"
      >
        Start
      </button>
    </form>
  );
};

export default ChooseQ;
