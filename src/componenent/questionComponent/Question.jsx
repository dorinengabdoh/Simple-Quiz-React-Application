import React, { useState } from "react";
import { useEffect } from "react";
import Static from "../staticComponent/Static";
import Footer from "../footerComponent/Footer";

let fetch_counter = 1;

const Question = () => {
  const [data, setData] = useState();

  const loadQuestions = () => {
    const api = "https://opentdb.com/api.php?amount=10&type=boolean";

    if (fetch_counter === 1) {
      fetch(api)
      .then((response) => response.json())
      .then((data) => setData(data.results));

      fetch_counter +=1;
    }
  };

  useEffect(() => {
    loadQuestions();
  }, []);

  const arr = data;
  console.log("heloooo", arr);

  return (
    <>
      <Static />
      {arr ? (
        <>
          <div className="question">
            <div>
              {arr.map((ques) => (
                <p className="quest" key={ques.question}>
                  {ques.question}
                  <div className="but">
                    <button className="tf">True</button>
                    <button className="tf">False</button>
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

export default Question;
