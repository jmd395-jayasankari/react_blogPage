// import { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import BlogHeader from './component/BlogHeader';
// import Home from './component/Home';
// import CreatePost from './component/CreatePost';
// import GrilledMeat from './component/GrilledMeat';

// function App() {
//   const [posts, setPosts] = useState([]);

//   // Fetch posts from localStorage when the app is loaded
//   useEffect(() => {
//     const storedPosts = JSON.parse(localStorage.getItem("blogs")) || [];
//     setPosts(storedPosts);
//   }, []);

//   // Add new post to the posts array and update localStorage
//   const addPost = (newPost) => {
//     const updatedPosts = [newPost, ...posts]; // Add new post at the beginning
//     setPosts(updatedPosts);
//     localStorage.setItem("blogs", JSON.stringify(updatedPosts)); // Save to localStorage
//   };

//   return (
//     <Router>
//       <BlogHeader />
//       <Routes>
//         <Route path="/" element={<Home posts={posts} setPosts={setPosts} />} />
//         <Route path="/Grilledmeat" element={<GrilledMeat />} />
//         <Route path="/createpost" element={<CreatePost addPost={addPost} />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;




import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Add this import

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BlogHeader from './component/BlogHeader';
import Home from './component/Home';
import CreatePost from './component/CreatePost';
import GrilledMeat from './component/GrilledMeat';

function App() {
  const [posts, setPosts] = useState([]);

  // Load posts from localStorage on initial load
  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem('posts')) || [];
    setPosts(storedPosts);
  }, []);

  // Add a new post
  const addPost = (newPost) => {
    const updatedPosts = [newPost, ...posts];  // Add new post to the beginning
    setPosts(updatedPosts);
    localStorage.setItem('posts', JSON.stringify(updatedPosts));

    // Create a new div element for the new post
    const postDiv = document.createElement('div');
    postDiv.className = 'bg-white p-6 rounded-lg shadow-md';
    postDiv.innerHTML = `
      <h3 class="text-2xl font-semibold">${newPost.title1}</h3>
      <p class="text-gray-700 mb-4">${newPost.title2.slice(0, 100)}...</p>
      <div class="flex justify-between items-center">
        <button class="bg-yellow-500 text-white px-4 py-2 rounded">Edit</button>
        <button class="bg-red-500 text-white px-4 py-2 rounded">Delete</button>
        <div class="flex items-center space-x-2">
          <button class="bg-green-500 text-white px-4 py-2 rounded">View Full</button>
          <input type="number" value="0" readonly class="w-16 text-center bg-gray-200 border border-gray-300 rounded px-2 py-1">
        </div>
      </div>
    `;

    // Append the new post to the posts container
    const postsContainer = document.getElementById('postsContainer');
    postsContainer.insertBefore(postDiv, postsContainer.firstChild);
  };

  // Edit an existing post
  const editPost = (updatedPost) => {
    const updatedPosts = posts.map((post) =>
      post.Id === updatedPost.Id ? updatedPost : post
    );
    setPosts(updatedPosts);
    localStorage.setItem('posts', JSON.stringify(updatedPosts));
  };

  // Delete a post
  const deletePost = (postId) => {
    const updatedPosts = posts.filter((post) => post.Id !== postId);
    setPosts(updatedPosts);
    localStorage.setItem('posts', JSON.stringify(updatedPosts));
  };

  return (
    <Router>
      <div className="App">
        <BlogHeader />
        <Routes>
          <Route
            path="/"
            element={<Home posts={posts} deletePost={deletePost} />}
          />
          <Route
            path="/createpost"
            element={<CreatePost addPost={addPost} editPost={editPost} />}
          />
          <Route
            path="/GrilledMeat"
            element={<GrilledMeat />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
