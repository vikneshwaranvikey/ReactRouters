import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Course from "./Components/Course";
import Contact from "./Components/Contact";
import { BrowserRouter, Route } from "react-router-dom";
const el = document.getElementById("root");
const root = ReactDOM.createRoot(el);

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Route path="/home" component={Home}></Route>
      <Route path="/about" component={About}></Route>
      <Route path="/course" component={Course}></Route>
      <Route path="/contact" component={Contact}></Route>
    </BrowserRouter>
  );
};
root.render(<App />);
