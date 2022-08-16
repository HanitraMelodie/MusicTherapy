import React, { useState, useEffect } from "react";
import "./MusicquizPage.css";

import ButtonMood from "../components/ButtonMood";

const Answer = ({ text, onClick }) => {
  return (
    <button className="answer" id="answers" onClick={onClick}>
      {text}
    </button>
  );
};

function Musicquizz() {
  // we make the request
  // save the response
  // get the index of the response we want to load
  // create some ui elements based on the response
  // if correct answer is clicked, show correct answer - show correct
  // if wrong answer - show incorrect

  // the data from the api request
  const [questions, setQuestions] = useState();
  // the question we want to display
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!questions) {
      const getQuestions = () => {
        fetch(
          "https://opentdb.com/api.php?amount=50&category=12&difficulty=easy&type=multiple&encode=base64"
        ).then(async (response) => {
          const data = await response.json();
          const result = data.results.map((result) => {
            const question = atob(result.question);
            const correct_answer = atob(result.correct_answer);
            const incorrect_answers = result.incorrect_answers.map((answer) =>
              atob(answer)
            );

            return {
              question,
              correct_answer,
              incorrect_answers,
            };
          });
          //storing the data
          setQuestions(result);
        });
      };

      getQuestions();
    }
  }, [questions]);

  function renderQuestion() {
    // if we don't have any questions yet, dont' try and render anything
    if (!questions) {
      return null;
    }

    // make a new array, that's both correct answers and wrong answers
    // loop it (with a map)
    // render each answer out one by one
    // make sure the incorrect/correct is working

    const correctAnswer = questions[index].correct_answer;

    const allAnswers = [...questions[index].incorrect_answers, correctAnswer]
      // https://stackoverflow.com/a/18650169
      // vaguely sort the answers
      .sort(() => 0.5 - Math.random());

    function checkAnswer(answer) {
      if (answer === correctAnswer) {
        alert("Correct!");
        setIndex(index + 1);
      } else {
        alert("Incorrect!");
      }
    }

    return (
      <div>
        <h2 id="question">{questions[index].question}</h2>

        {allAnswers.map((answer) => {
          return (
            <Answer
              text={answer}
              onClick={() => checkAnswer(answer)}
              key={answer}
            />
          );
        })}
      </div>
    );
  }

  return (
    <div>
      <header className="Question-header">
        <h1 id="music-page">Music quiz</h1>
      </header>

      <div id="music-part">{renderQuestion()}</div>

      <div className="footer-div">
        <footer id="progressbar">
          <progress value="60" max="100" /> <span>3/5</span>
        </footer>

        <ButtonMood />
      </div>
    </div>
  );
}

export default Musicquizz;
