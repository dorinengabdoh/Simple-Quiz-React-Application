import React, { useState } from "react";
import { useEffect } from "react";
import Static from "../staticComponent/Static";
import Footer from "../footerComponent/Footer";

let number = 1;

const Question = () => {
  const [data, setData] = useState();

  const loadQuestions = () => {
    const api = "https://opentdb.com/api.php?amount=10&type=boolean";

    if (number === 1) {
      fetch(api)
      .then((response) => response.json())
      .then((data) => setData(data.results));
      number +=1;
    }
  };

  useEffect(() => {
    loadQuestions();
  }, []);

  const arr = data;
  console.log("heloooo i'm data", arr);

  return (
    <>
      <Static />
      {arr ? (
        <>
          <div className="question">
            <div>
              {arr.map((ques) => (
                <p className="quest" key={ques.question}>
                  {ques.question}?
                  <div className="but">
                    <button onClick={handleClickTrue} className="true">True</button>
                    <button onClick={handleClickFalse} className="false">False</button>
                  </div>
                </p>
              ))}
            </div>
          </div>
        </>
      ) : (
        <div>No Data</div>
      )}
      <Footer />
    </>
  );
};



// addEventListener to buttons

// const [questions, setQuestions] = useState([]);
// const [currentQuestion, setCurrentQuestion] = useState(0);
// const [userAnswer, setUserAnswer] = useState(null);
// const [score, setScore] = useState(0);


const handleClickTrue = () =>{
  console.log("true button clicker");
}

const handleClickFalse = () =>{
  console.log("false button clicker");
}


export default Question;

