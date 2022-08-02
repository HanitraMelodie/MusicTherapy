import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dance from "./Pages/Dance";
import Home from "./Pages/Home";
import ErrorPage from "./Pages/ErrorPage";
import Layout from "./Pages/Layout";
import ContactPage from "./Pages/ContactPage";
import Musicquizz from "./Pages/Musicquizz";
import Sing from "./Pages/Sing";
import Sounds from "./Pages/Sounds";
import Melodies from "./Pages/Melodies";
import Closure from "./Pages/Closure";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="*" element={<ErrorPage />} />
          <Route path="/dance" element={<Dance />} />
          <Route path="/contactpage" element={<ContactPage />} />
          <Route path="/sing" element={<Sing />} />
          <Route path="/musicquizz" element={<Musicquizz />} />
          <Route path="/sounds" element={<Sounds />} />
          <Route path="/melodies" element={<Melodies />} />
          <Route path="/contactPage" element={<ContactPage />} />
          <Route path="/closure" element={<Closure />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
