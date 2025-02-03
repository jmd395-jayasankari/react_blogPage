import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import BlogHeader from './component/BlogHeader'
import AddPost from './component/AddPost'
import Home from './component/Home.jsx'
import GrilledMeat from './component/GrilledMeat.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <Router>
    <BlogHeader/>
    <AddPost/>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/grilledmeat" element={<GrilledMeat />} />
      </Routes>
    </Router>
  )
}

export default App
