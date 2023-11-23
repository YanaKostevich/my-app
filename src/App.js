import React from "react";
import "./styles/App.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Posts from "./pages/Posts";

function App() {
  return (
    <BrowserRouter>
      <div className="navbar">
        <div className="navbar__links">
          <Link to="/about">About</Link>
          <Link to="/posts">Posts</Link>
        </div>
      </div>
      <Routes>
        <Route path="/about" element={<About to="/about" replace />} />
        <Route path="/posts" element={<Posts to="/posts" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
App.debug = true;
App.strictMode = false;
export default App;
