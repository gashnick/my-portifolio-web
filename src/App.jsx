import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import Services from "./components/Services";
import About from "./components/About";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Services />
      <About />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
