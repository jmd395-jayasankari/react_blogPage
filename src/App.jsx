import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BlogHeader from "./component/BlogHeader";
import CreatePost from "./component/CreatePost";
import Home from "./component/Home";
import PostDetail from "./component/PostDetail"; // Import the new component
import EditPost from "./component/EditPost";


const App = () => {
  const [posts, setPosts] = useState([]);

  // Load posts from localStorage on page load
  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem("posts")) || [];
    setPosts(storedPosts);
  }, []);
  
  // Add new post to state and localStorage
  const addPost = (newPost) => {
    const newPostWithId = { ...newPost, id: Date.now() }; // Add unique ID to each post
    const updatedPosts = [...posts, newPostWithId];
    setPosts(updatedPosts);
    localStorage.setItem("posts", JSON.stringify(updatedPosts));
  };

  // Delete post by ID from state and localStorage
  const deletePost = (id) => {
    const updatedPosts = posts.filter((post) => post.id !== id);
    setPosts(updatedPosts);
    localStorage.setItem("posts", JSON.stringify(updatedPosts));
  };

  const updatePost = (updatedPost) => {
    const updatedPosts = posts.map((post) => (post.id === updatedPost.id ? updatedPost : post));
    setPosts(updatedPosts);
    localStorage.setItem("posts", JSON.stringify(updatedPosts));
  };
  

  return (
    <Router>
      <BlogHeader />
      <Routes>
        <Route path="/" element={<Home posts={posts} deletePost={deletePost} />} />
        <Route path="/createpost" element={<CreatePost addPost={addPost} />} />
        <Route path="/post/:id" element={<PostDetail posts={posts} />} />
         <Route path="/edit/:id" element={<EditPost posts={posts} updatePost={updatePost} />} /> {/* New route */}
      </Routes>
    </Router>
  );
};

export default App;
