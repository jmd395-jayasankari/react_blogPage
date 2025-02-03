import React from 'react'

const Home = () => {
  return (
        <div>
            <h4 classNmae='text-2xl'>Let's do it</h4>
            <div className="grid h-screen grid-cols-2">
            <div>
                <h5 className>We will cover examples for small and medium screen sizes, demonstrating how to create responsive image galleries with Tailwind CSS. We're using flex and flex-wrap utilities to create a flexible image container, centering the images horizontally with justify-center.</h5></div>
            <div>
                <img src="https://sswt.art.blog/wp-content/uploads/2025/02/img_20250203_0154554286775358151020637.jpg?w=478" className="w-70 h-40"></img></div>  
            </div>
        </div>



  )
}

export default Home;
