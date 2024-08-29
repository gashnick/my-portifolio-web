import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import Services from "./components/Services";
import About from "./components/About";
import Portifolio from "./components/Portifolio";
import Clients from "./components/Clients";
import "./style.css";
import Stats from "./components/Stats";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Services />
      <About />
      <Portifolio />
      <Clients />
      <Stats />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
