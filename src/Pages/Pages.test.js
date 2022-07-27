import React from "react";
import { render, screen, act, waitFor } from "@testing-library/react";
import Home from "./Home";
import ContactPage from "./ContactPage";
import ErrorPage from "./ErrorPage";
import Closure from "./Closure";
import Dance from "./Dance";
import Sing from "./Sing";
import Musicquizz from "./Musicquizz";

jest.mock("react-player");

// test the pages are creating with correct content
test("renders Home test", () => {
  render(<Home />);
  const linkElement = screen.getByText(/Welcome/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders Contact Page test", () => {
  render(<ContactPage />);
  const linkElement = screen.getByText(/anxiety/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders Closure test", () => {
  render(<Closure />);
  const linkElement = screen.getByText(/thanks/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders Closure test", () => {
  render(<ErrorPage />);
  const linkElement = screen.getByText(/error/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders Dance test", () => {
  render(<Dance />);
  const linkElement = screen.getByText(/along/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders Sing test", () => {
  render(<Sing />);
  const linkElement = screen.getByText(/along/i);
  expect(linkElement).toBeInTheDocument();
});


test("renders Musicquizz test", () => {
  render(<Musicquizz />);
  const linkElement = screen.getByText(/quizz/i);
  expect(linkElement).toBeInTheDocument();
});
