import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Header from "./components/header/Header";
import Home from "./pages/Home";
import Services from "./components/Services/Services";
import Portifolio from "./components/portifolio/Portifolio";
import Clients from "./components/clients/Clients";
import "./style.css";
import Stats from "./components/stats/Stats";
import Qta from "./components/QTA/Qta";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Blog from "./components/blog/Blog";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Services />
      <About />
      <Portifolio />
      <Clients />
      <Stats />
      <Qta />
      <Contact />
      <Blog />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
