// import React,{useState} from 'react';
// import { Link } from 'react-router-dom';
// import GrilledMeat from './GrilledMeat';
// import { Heart,Share,Twitter,Facebook } from 'lucide-react';

// const Home = ({posts}) => {

//     const [count, setCount] = useState(0);
//     const [showIcons,SetShowIcons]=useState(false)
    
//   return (
//     <div >
//       <div className=" my-10 mx-80 border-2 border-gray-300 grid grid-cols-3 gap-4">
//         <div className="col-span-2">
//             <Link to="./GrilledMeat">
//             <h3 className="my-3 text-sm  font-bold mx-5 text-purple-500">Grilled food with saled receips</h3></Link>
//             <Link to="./GrilledMeat">
//             <h3 className="my-3 text-sm  mx-5">Something on your “to-do list” that never gets done.</h3></Link>
//             <Link to="./grilledMeat">
//           <h5 className="text-xl px-5 py-5">
//             {`We will cover examples for small and medium screen sizes, demonstrating how to create responsive image galleries with Tailwind CSS. We're using flex and flex-wrap utilities to create a flexible image container, centering the images horizontally with justify-We will cover examples for small and medium screen sizes, demonstrating how to create responsive image galleries with Tailwind CSS. We're using flex and flex-wrap utilities to create a flexible image container, centering the images horizontally with justify-center.`.slice(0,225)}
//           </h5></Link>
//         </div>
//         <div className="col-span-1">
//           <img 
//             src="https://my-health-and-beauty.com/wp-content/uploads/2025/02/image-7.png" 
//             className="w-90 h-60 py-5 px-5" 
//             alt="example" 
//           />
//         </div>  
//  <div className="mx-10 flex items-center space-x-2">
//   <Share onClick={()=>SetShowIcons(!ShareIcons)}/>
//     </div>


//   <div className=" mx-0 flex items-center cursor-pointer">
//     <Heart
//       className="text-red-500 text-2xl hover:scale-110 transition-transform"
//       onClick={() => setCount(count + 1)}/>
//     <span className="font-semibold text-lg ml-1">{count}</span>
//   </div>
// </div>
//       </div>
    
//   );
// };

// export default Home;



// import {React,  useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import { Heart, Share, Trash2 } from 'lucide-react';

// const Home = ({ posts, setPosts }) => {
//   const [count, setCount] = useState(0);
//   const [heartCounts, setHeartCounts] = useState({});

    
//   useEffect(() => {
//     const savedHeartCounts = JSON.parse(localStorage.getItem("heartCounts")) || {};
//     setHeartCounts(savedHeartCounts);
//   }, []);
  
  
//   const handleHeartClick = (postId) => {
//     const newCount = heartCounts[postId] ? heartCounts[postId] + 1 : 1;
//     setHeartCounts((prevState) => {
//       const updatedCounts = { ...prevState, [postId]: newCount };
//       localStorage.setItem("heartCounts", JSON.stringify(updatedCounts)); // Save to localStorage
//       return updatedCounts;
//     });
//   };
     

//   const deleteBlog = (blogId) => {
//   localStorage.removeItem('Read_count' + blogId);
//   const heartCounts=JSON.parse(localStorage.getItem("heartCounts")) || {};
//   delete heartCounts[blogId]; 

//   localStorage.setItem("heartCounts", JSON.stringify(heartCounts));
//   const updatedPosts = posts.filter(post => post.Id !== blogId);

//     setPosts(updatedPosts);
//     localStorage.setItem("blogs", JSON.stringify(updatedPosts));
//     const blogCount = parseInt(localStorage.getItem("blog_count")) || 0;
//     localStorage.setItem("blog_count", blogCount - 1);
//   };

//   const addNewPost = (newPost) => {
//     const updatedPosts = [...posts, newPost]; // Add the new post to the end of the array
//     setPosts(updatedPosts); // Update state
//     localStorage.setItem('blogs', JSON.stringify(updatedPosts)); // Save updated posts in localStorage

//     // Initialize heart count for the new post
//     const updatedHeartCounts = JSON.parse(localStorage.getItem('heartCounts')) || {};
//     updatedHeartCounts[newPost.Id] = 0; // Initialize heart count to 0 for new post
//     localStorage.setItem('heartCounts', JSON.stringify(updatedHeartCounts));
//   };



//   return (
//     <div className="my-10 mx-80 border-2 border-gray-300 grid grid-cols-3 gap-4">
//       {posts.length === 0 ? (
//         <div className="col-span-3 text-center py-5 text-xl text-gray-500">
//           No posts available yet. Be the first to create one!
//         </div>
//       ) : (
//         posts.map((post) => (
//           <div key={post.Id} className="col-span-3 sm:col-span-2 md:col-span-1">
//             <Link to="/GrilledMeat">
//               <h3 className="my-3 text-sm font-bold mx-5 text-purple-500">{post.title1}</h3>
//             </Link>
//             <Link to="/GrilledMeat">
//               <h3 className="my-3 text-sm mx-5">{post.title2}</h3>
//             </Link>
//             {/* <Link to="/GrilledMeat">
//               <h5 className="text-xl px-5 py-5">{post.title3.slice(0, 225)}</h5>
//             </Link> */}

//             <Link to="./grilledMeat"> <h5 className="text-xl px-5 py-5"> {post.title3.slice(0,225)}
//            </h5></Link>
//             {post.imageURL && (
//               <div className="col-span-1">
//                 <img
//                   src={post.imageURL}
//                   className="w-90 h-60 py-5 px-5"
//                   alt="example"
//                 />
//               </div>
//             )}
//             <div className="flex items-center my-4">
//               <div className="mx-10 flex items-center space-x-2">
//                 <Share />
//               </div>
//               <div className="mx-20 flex items-center cursor-pointer">
//                 <Heart className="text-red-500 text-2xl hover:scale-110 transition-transform" onClick={() => handleHeartClick(post.Id)}/>
//                 <span className="font-semibold text-lg ml-1">{heartCounts[post.Id] || 0}</span>
//               </div>
//               <div className="mx-20 flex items-center cursor-pointer">
//                 <Trash2
//                   className="text-black-500 text-2xl hover:scale-110 transition-transform"
//                   onClick={()=> deleteBlog(post.Id)} // Pass the function properly
//                 />
//               </div>
//             </div>
//           </div>
//         ))
//       )}



//     </div>
//   );
// };

// export default Home;


import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Heart, Share, Trash2 } from 'lucide-react';

const Home = ({ posts, deletePost }) => {
  // Make sure that we render the initial posts properly in the DOM
  useEffect(() => {
    const postsContainer = document.getElementById('postsContainer');
    
    // Add all posts dynamically to the container when the component is mounted
    posts.forEach((post) => {
      const postDiv = document.createElement('div');
      postDiv.className = 'bg-white p-6 rounded-lg shadow-md';
      postDiv.innerHTML = `
        <h3 class="text-2xl font-semibold">${post.title1}</h3>
        <p class="text-gray-700 mb-4">${post.title2.slice(0, 100)}...</p>
        <div class="flex justify-between items-center">
          <button class="bg-yellow-500 text-white px-4 py-2 rounded">Edit</button>
          <button class="bg-red-500 text-white px-4 py-2 rounded" onclick="deletePost(${post.Id})">Delete</button>
          <div class="flex items-center space-x-2">
            <button class="bg-green-500 text-white px-4 py-2 rounded">View Full</button>
            <input type="number" value="${post.views}" readonly class="w-16 text-center bg-gray-200 border border-gray-300 rounded px-2 py-1">
          </div>
        </div>
      `;
      postsContainer.appendChild(postDiv);
    });
  }, [posts]);

  return (
    <div className="my-10 mx-80 border-2 border-gray-300 grid grid-cols-3 gap-4">
      <div id="postsContainer">
        {/* Posts will be dynamically inserted here */}
      </div>
    </div>
  );
};

export default Home;
