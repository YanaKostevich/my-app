import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "../pages/About";
import Posts from "../pages/Posts";
import Error from "../pages/Error";
import SimplePost from "../pages/SimplePost";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="about" element={<About />} />
      <Route exact path="/posts" element={<Posts />} />
      <Route exact path="/posts/:id" element={<SimplePost />} />
      {/* <Route path="/*" element={<Error/>} /> */}
      {/* <Route
                    path="/error"
                    element={ <Error /> }
                />
                <Route
                    path="/redirect"
                    element={ <Navigate to="/error" /> }
                /> */}
    </Routes>
  );
};

export default AppRouter;
