import React from "react";

import { render, screen, within } from "@testing-library/react";
import App from "./App";

test("renders the application, and the navigation", () => {
  render(<App />);

  const navigation = screen.getByRole("navigation");
  expect(navigation).toBeInTheDocument();
  expect(within(navigation).getByText("Home")).toBeInTheDocument();
  expect(within(navigation).getByText("Dance")).toBeInTheDocument();
  expect(within(navigation).getByText("Sing")).toBeInTheDocument();
  expect(within(navigation).getByText("Musicquizz")).toBeInTheDocument();
  expect(within(navigation).getByText("Sounds")).toBeInTheDocument();
  expect(within(navigation).getByText("Melodies")).toBeInTheDocument();
  expect(within(navigation).getByText("Contact")).toBeInTheDocument();


 
  expect(screen.getByText("WELCOME TO MUSIC THERAPY")).toBeInTheDocument();
  expect(screen.getByText("What do you need ?")).toBeInTheDocument();
  expect(screen.getByText("Distraction ?")).toBeInTheDocument();
  expect(screen.getByText("Relaxation ?")).toBeInTheDocument();
 
});
