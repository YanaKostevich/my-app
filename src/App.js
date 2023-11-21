import React, { useRef, useState } from "react";
// import Counter from "./components/Counter";
import "./styles/App.css";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";

function App() {
  // const [value, setValue] = useState("text");
  const [posts, setPosts] = useState([
    { id: 1, title: "JS", body: "Description" },
    { id: 2, title: "JS 1", body: "Description" },
    { id: 3, title: "JS 2", body: "Description" },
  ]);

  const [post, setPost] = useState({ title: "", body: "" });

  const addNewPost = (e) => {
    e.preventDefault();

    setPosts([...posts, { ...post, id: Date.now() }]);
    setPost({ title: "", body: "" });
    // console.log(bodyInputRef.current.value)
  };

  // const bodyInputRef = useRef();

  return (
    <div className="App">
      {/* <Counter /> */}
      <form>
        {/* Управляемий компонент */}
        <MyInput
          value={post.title}
          onChange={(e) => setPost({ ...post, title: e.target.value })}
          type="text"
          placeholder="Title post"
        />

        <MyInput
          value={post.body}
          onChange={(e) => setPost({ ...post, body: e.target.value })}
          type="text"
          placeholder="Description post"
        />

        {/* Неуправляемий компонент
        <MyInput
          ref={bodyInputRef}
          type="text"
          placeholder="Description post"
        /> */}

        <MyButton type="button" onClick={addNewPost}>
          Create post
        </MyButton>
      </form>
      <PostList posts={posts} title="Posts about JS" />
    </div>
  );
}

export default App;

// через useRef ми можемо напряму получати домтуп до ДОМ елементів
