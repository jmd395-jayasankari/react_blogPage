import React from 'react';

const GrilledMeat = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-6">
      {/* Header Section */}
      <h2 className="bg-amber-500 flex justify-center text-white p-4 text-2xl font-bold">
        Shop our newest collection on Etsy
      </h2>

      {/* Product Card Section */}
      <div className="max-w-sm mx-auto mt-8 rounded overflow-hidden shadow-lg bg-white flex justify-left">
        <img className="w-full" src="https://th.bing.com/th/id/R.a86f782a59048e426990de154dc24da6?rik=2JqXhyZexwSjxw&riu=http%3a%2f%2fphotos.demandstudios.com%2fgetty%2farticle%2f81%2f182%2f87531574.jpg&ehk=Bc7XclMU5eLighwhBrZM06Grnq%2bEah8Ky%2flW8ze9dAk%3d&risl=1&pid=ImgRaw&r=0" className="w-50 mx-5 my-5"alt="Sample Product" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Sample Title</div>
          <p className="text-gray-700 text-base">
            This is a sample description text that goes below the image. It provides additional information about the image or product.
          </p>
        </div>
      </div>
    </div>
  );
};

export default GrilledMeat;
