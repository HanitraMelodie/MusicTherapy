import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DancePage from "./Pages/DancePage";
import HomePage from "./Pages/HomePage";
import ErrorPage from "./Pages/ErrorPage";
import Layout from "./Pages/Layout";
import ContactPage from "./Pages/ContactPage";
import MusicquizPage from "./Pages/MusicquizPage";
import SingPage from "./Pages/SingPage";
import SoundsPage from "./Pages/SoundsPage";
import MelodiesPage from "./Pages/MelodiesPage";
import ClosurePage from "./Pages/ClosurePage";
import FeedbackPage from "./Pages/FeedbackPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/homepage" element={<HomePage />} />
          <Route path="*" element={<ErrorPage />} />
          <Route path="/dancepage" element={<DancePage />} />
          <Route path="/contactpage" element={<ContactPage />} />
          <Route path="/singpage" element={<SingPage />} />
          <Route path="/musicquizpage" element={<MusicquizPage />} />
          <Route path="/soundspage" element={<SoundsPage />} />
          <Route path="/melodiespage" element={<MelodiesPage />} />
          <Route path="/closurepage" element={<ClosurePage />} />
          <Route path="/feedbackpage" element={<FeedbackPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
