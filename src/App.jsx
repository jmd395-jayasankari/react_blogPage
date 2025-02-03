import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import BlogHeader from './component/BlogHeader'
import AddPost from './component/AddPost'
import Home from './component/Home.jsx'

function App() {

  return (
    <>
    <BlogHeader/>
    <AddPost/>
    <Home/>

    </>
  )
}

export default App
