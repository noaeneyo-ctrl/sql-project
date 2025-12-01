import { useState } from "react";
import { Link } from "react-router-dom";

import "../App.css";
// import { Router } from "express";

function Home() {
  return (
    <>
      <h1>hello</h1>
      <Link to={"/posts"}>posts</Link>
      <br />
      <br />
      <Link to={"/todos"}>todos</Link>
    </>
  );
}

export default Home;
