import React, { useState } from "react";
import Counter from "./components/Counter";
import "./styles/App.css";
import PostList from "./components/PostList";

function App() {
  // const [value, setValue] = useState("text");
  const [posts, setPosts] = useState([
    { id: 1, title: "JS", body: "Description" },
    { id: 2, title: "JS 1", body: "Description" },
    { id: 3, title: "JS 2", body: "Description" },
  ]);

  const [posts2, setPosts2] = useState([
    { id: 1, title: "Css", body: "Description" },
    { id: 2, title: "Css 1", body: "Description" },
    { id: 3, title: "Css 2", body: "Description" },
  ]);

  return (
    <div className="App">
      {/* <Counter /> */}
      <PostList posts={posts} title="Posts about JS" />
      <PostList posts={posts2} title="Posts about Css" />
    </div>
  );
}

export default App;
