import React from "react";
import "./styles/App.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Navbar from "./components/UI/navbar/Navbar";
import AppRouter from "./components/AppRouter";

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <AppRouter/>
    </BrowserRouter>
  );
}
App.debug = true;
App.strictMode = false;
export default App;
