import React, { useState, useEffect } from "react";

const Questions = ({ questions, onStartAgain }) => {
  let [currentQuestion, setCurrentQuestion] = useState(1);
  let [value, setValue] = useState("");
  let [result, setResult] = useState(0);
  let [done, setDone] = useState(false);
  let [trueOrFalse, setTrueOrFalse] = useState();
  const [count, setCount] = useState(30);

  useEffect(() => {
    const timer =
      count > 0 ? setInterval(() => setCount(count - 1), 1000) : setValue("");
    return () => clearInterval(timer);
  }, [count]);

  let data = questions[currentQuestion - 1];
  let correct_answer = data.correct_answer;
  let incorrect_answers = data.incorrect_answers;
  let answers = [...incorrect_answers, correct_answer].sort();

  const handelQ = () => {
    if (currentQuestion < questions.length) {
      setCurrentQuestion((prev) => prev + 1);
      setCount(30);
      if (data.correct_answer === value) {
        setResult((prev) => prev + 1);
        setTrueOrFalse(true);
        setValue("");
      } else {
        setValue("");

        setTrueOrFalse(false);
      }
    } else {
      setDone(true);
    }
  };

  return (
    <div className="w-full px-6">
      {done ? (
        <div className="flex flex-col justify-center items-center">
          <div className="text-xl font-bold flex items-center justify-center mb-5">
            Result: {result}/{questions.length}
          </div>
          <button
            onClick={onStartAgain}
            className="bg-[#7835c8] w-fit hover:bg-[#751bdc] text-white py-2 px-6 rounded-3xl uppercase transition-all font-semibold"
          >
            Start Again
          </button>
        </div>
      ) : (
        <>
          <div className="flex justify-between items-center mb-10 text-lg font-semibold w-full">
            <div>Timer: {count}</div>
            <div>
              {currentQuestion}/{questions.length}
            </div>
          </div>
          <h3 className="text-2xl font-bold mb-14">{data.question}</h3>
          <div className="flex w-full flex-wrap gap-2">
            {answers.map((item) => {
              return (
                <div
                  key={item}
                  onClick={() => (count === 0 ? setValue("") : setValue(item))}
                  className={`w-[48%] p-5 cursor-pointer font-bold hover:bg-red-100 flex items-center justify-center rounded-[100px]
                   ${value === item && "bg-green-400 hover:bg-green-400"}`}
                >
                  {item}
                </div>
              );
            })}
          </div>
          <div className="text-center font-semibold mt-4">
            <button
              onClick={handelQ}
              className="bg-[#7835c8] hover:bg-[#751bdc] text-white py-2 px-6 rounded-3xl uppercase transition-all"
            >
              Next
            </button>
            <div className="mt-4 flex">
              {trueOrFalse && (
                <>
                  <div> Last Question is</div>
                  <span className="text-green-600 ml-1"> True</span>
                </>
              )}
              {trueOrFalse === false && (
                <>
                  <div> Last Question is</div>
                  <span className="text-red-600 ml-1">False</span>
                </>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Questions;
