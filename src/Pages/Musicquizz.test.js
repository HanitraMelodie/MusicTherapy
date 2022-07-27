import React from "react";
import { render, screen } from "@testing-library/react";
import Musicquizz from "./Musicquizz";
import MutationObserver from 'mutation-observer'
global.MutationObserver = MutationObserver 


it("renders user data", async () => {
  const QUESTION = "What is not a wind instrument?";
  const CORRECT_ANSWER = "Viola";
  const INCORRECT_ANSWERS = ["Duduk", "Oboe", "Trombone"];

  const fakeMusicquizz = {
    results: [
      {
        question: QUESTION,
        correct_answer: CORRECT_ANSWER,
        incorrect_answers: INCORRECT_ANSWERS,
      },
    ],
  };

  jest.spyOn(global, "fetch").mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(fakeMusicquizz),
    })
  );

  render(<Musicquizz />);

  // wait for the 'request' to 'finish'
  expect(await screen.findByText(QUESTION)).toBeInTheDocument();
  expect(screen.getByText(CORRECT_ANSWER)).toBeInTheDocument();
  expect(screen.getByText(INCORRECT_ANSWERS[0])).toBeInTheDocument();
  expect(screen.getByText(INCORRECT_ANSWERS[1])).toBeInTheDocument();
  expect(screen.getByText(INCORRECT_ANSWERS[2])).toBeInTheDocument();
  global.fetch.mockRestore();
});
