import React from "react";

import "./App.css";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import Composer from "./components/Layout/Composer";
import Post from "./components/Post/Post";

function App() {
  return (
    <div className="container">
      <Header />
      <div className="content">
        <Composer />
      </div>
      <div className="posts">
        <Post />
        <Post />
        <Post />
        <Post />
      </div>

      <Footer />
    </div>
  );
}

export default App;
