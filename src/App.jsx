import React, { useState } from 'react'
import Search from './Components/Navbar/Search/Search'
import Navbar from './Components/Navbar/Navbar'
import {Route, Routes} from 'react-router-dom'
import Home from './Pages/Home/Home'
import Video from './Pages/Video/Video'
const App = () => {
  const [sidebar, setSidebar] = useState(true)
  return (
    <div>
      <Navbar setSidebar = {setSidebar} />
      <Routes>
      <Route path = '/' element = {<Home sidebar = {sidebar} />} />
      <Route path = '/video/:categoryId/:videoId' element = {<Video/>} />
      </Routes>
      <Routes>
  <Route path='/' element={<Home />} />
  <Route path='/video/:categoryId/:videoId' element={<Video />} />
  
  <Route path='/search/:searchQuery' element={<Search />} />
</Routes>
    </div>
  )
}
export default App
