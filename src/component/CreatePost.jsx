// import React, { useState } from 'react';

// const CreatePost = ({addPost}) => {
//   const [imageURL, setImageURL] = useState('');
//   const [imageSrc, setImageSrc] = useState('');
//   const [title1, setTitle1] = useState('');
//   const [title2, setTitle2] = useState('');
//   const [title3, setTitle3] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');

//   const handleImageURLChange = (event) => {
//     setImageURL(event.target.value);
//   };
 

//   const displayImage = () => {
//     if (imageURL && (imageURL.endsWith('.jpg') || imageURL.endsWith('.png') || imageURL.endsWith('.gif'))) {
//       setImageSrc(imageURL);
//     } else {
//       setImageSrc('');
//     }
//   };

 
//   const handleSubmit = (event) => {
//     event.preventDefault();

//     if (!title1 || !title2 || !title3 || !imageURL) {
//         setError('Please fill in all the fields.');
//         return;
//       } 

//       setErrorMessage('');

//       const newPost = {
//         title1,
//         title2,
//         title3,
//         imageURL,
//       }; 
//       addPost(newPost);

      
//     setTitle1('');
//     setTitle2('');
//     setTitle3('');
//     setImageURL('');
//     setImageSrc('');
    
//     alert('Post Submitted!');
   
//   };

//   return (
//     <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
//       <h2 className="text-3xl font-semibold mb-4 text-center">Create a New Post</h2>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <div className="flex flex-col">
//           {/* <label className="font-medium">Title of the blog</label> */}
//           <input
//             type="text"
//             value={title1}
//             onChange={(e) => setTitle1(e.target.value)}
//             className="p-3 border border-gray-300 rounded-md"
//             placeholder="Enter title of the blog"
//           />
//         </div>

//         <div className="flex flex-col">
//           {/* <label className="font-medium">Short description about the blog</label> */}
//           <input
//             type="text"
//             value={title2}
//             onChange={(e) => setTitle2(e.target.value)}
//             className="p-3 border border-gray-300 rounded-md"
//             placeholder="Short description for the blog"
//           />
//         </div>

//         <div className="flex flex-col">
//           {/* <label className="font-medium">Title 3</label> */}
//           <input
//             type="text"
//             value={title3}
//             onChange={(e) => setTitle3(e.target.value)}
//             className="p-3 border border-gray-300 rounded-md"
//             placeholder="Blog Contents"
//           />
//         </div>

//         <div className="flex flex-col">
//           {/* <label className="font-medium">Image URL</label> */}
//           <input
//             type="text"
//             value={imageURL}  
//             onInput={displayImage}
//             onChange={handleImageURLChange}
          
//             className="p-3 border border-gray-300 rounded-md"
//             placeholder="Enter image URL"
//           />
//         </div>

//         {imageSrc && (
//           <div className="mt-4 text-center">
//             <img
//               src={imageSrc}
//               alt="Uploaded Image"
//               style={{ maxWidth: '300px' }} 
//             />
//           </div>
//         )}

//         <div className="text-center">
//           <button
//             type="submit"
//             className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition"
//           >
//             Submit Post
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default CreatePost;


import React, { useState, useEffect } from 'react';

const CreatePost = ({ addPost, editPost, editingPost }) => {
  const [title1, setTitle1] = useState('');
  const [title2, setTitle2] = useState('');
  const [title3, setTitle3] = useState('');
  const [imageURL, setImageURL] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Pre-fill fields if editing an existing post
  useEffect(() => {
    if (editingPost) {
      setTitle1(editingPost.title1);
      setTitle2(editingPost.title2);
      setTitle3(editingPost.title3);
      setImageURL(editingPost.imageURL);
    }
  }, [editingPost]);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!title1 || !title2 || !title3 || !imageURL) {
      setErrorMessage('Please fill in all the fields.');
      return;
    }

    setErrorMessage('');

    const newPost = {
      Id: editingPost ? editingPost.Id : Date.now().toString(), // Generate ID for new post or use existing ID for edit
      title1,
      title2,
      title3,
      imageURL,
    };

    if (editingPost) {
      editPost(newPost);  // Edit the existing post
    } else {
      addPost(newPost);  // Create a new post
    }

    setTitle1('');
    setTitle2('');
    setTitle3('');
    setImageURL('');
    
    alert(editingPost ? 'Post updated!' : 'New post created!');
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
      <h2 className="text-3xl font-semibold mb-4 text-center">{editingPost ? 'Edit Post' : 'Create a New Post'}</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col">
          <input
            type="text"
            value={title1}
            onChange={(e) => setTitle1(e.target.value)}
            className="p-3 border border-gray-300 rounded-md"
            placeholder="Enter title of the blog"
          />
        </div>

        <div className="flex flex-col">
          <input
            type="text"
            value={title2}
            onChange={(e) => setTitle2(e.target.value)}
            className="p-3 border border-gray-300 rounded-md"
            placeholder="Short description for the blog"
          />
        </div>

        <div className="flex flex-col">
          <input
            type="text"
            value={title3}
            onChange={(e) => setTitle3(e.target.value)}
            className="p-3 border border-gray-300 rounded-md"
            placeholder="Blog Contents"
          />
        </div>

        <div className="flex flex-col">
          <input
            type="text"
            value={imageURL}  
            onChange={(e) => setImageURL(e.target.value)}
            className="p-3 border border-gray-300 rounded-md"
            placeholder="Enter image URL"
          />
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition"
          >
            {editingPost ? 'Save Changes' : 'Create Post'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreatePost;
