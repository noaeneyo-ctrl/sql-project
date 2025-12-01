import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

import Post from "./components/Post";
import Posts from "./components/Posts";
import Home from "./components/Home";
import "./App.css";
// import { Router } from "express";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts/" element={<Posts />}>
            <Route path=":post_id" element={<Post />} />
          </Route>
          {/* <Route path="/todos" element={<Todos />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
