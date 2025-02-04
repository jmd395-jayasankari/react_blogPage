
import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const PostDetail = ({ posts }) => {
  const { id } = useParams(); // Get the post id from the URL
  const navigate = useNavigate();
  
  // Find the post based on the id
  const post = posts.find((post) => post.id === parseInt(id)); 
  
  if (!post) {
    return <p>Post not found!</p>; // If post not found, show a message
  }

  return (
    <div className="flex max-w-6xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
      {/* Left Image */}
      <div className="w-1/2 pr-6">
        <img
          src={post.imageURL}
          alt="Post"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      {/* Right Text */}
      <div className="w-1/2">
        <h2 className="text-3xl font-semibold mb-4">{post.title1}</h2>
        <p className="text-lg text-gray-700 mb-4">{post.title2}</p>
        <div className="text-gray-800 mb-6">{post.title3}</div>
        <button
          onClick={() => navigate("/")}
          className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default PostDetail;

