import React, { useEffect, useState } from "react";

import axios from "axios";
import api from "./api";

import Main from "./components/Main";
import Sidebar from "./components/Sidebar";
import Questions from "./components/Questions";
import Rules from "./components/Rules";
import ChooseQ from "./components/ChooseQ";

const App = () => {
  const [questions, setQuestions] = useState([]);
  const [error, setError] = useState(null);
  const [start, setStart] = useState(false);
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    axios
      .get(api(amount, category))
      .then((res) => setQuestions(res.data.results))
      .catch((err) => setError(err));
  }, [amount, category]);

  const startAgain = () => {
    setStart(false);
    setHidden(false);
    setCategory("");
    setAmount("");
  };

  return (
    <>
      {error && (
        <div className="text-xl font-bold text-red-900 bg-red-300 flex items-center justify-center">
          {error}
        </div>
      )}
      <div className="bg-[#b2f4ff] xl:bg-white w-full h-[100vh] xl:w-[80%] xl:h-[750px] xl:rounded-[50px] translate-x-[-50%] translate-y-[-50%] absolute top-[50%] left-[50%] flex justify-center items-center">
        <div className=" w-full h-full xl:w-[80%] xl:h-[650px] flex flex-col md:flex-row">
          <Sidebar
            length={questions?.length}
            category={questions[0]?.category}
            onStart={setStart}
            hidden={hidden}
          />

          <Main>
            {!hidden ? (
              <ChooseQ
                onSetCategory={setCategory}
                onSetAmount={setAmount}
                onSetHidden={setHidden}
              />
            ) : (
              <>
                {start ? (
                  <Questions questions={questions} onStartAgain={startAgain} />
                ) : (
                  <Rules
                    length={questions?.length}
                    category={questions[0]?.category}
                  />
                )}
              </>
            )}
          </Main>
        </div>
      </div>
    </>
  );
};

export default App;
