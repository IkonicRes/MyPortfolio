// import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom' 
import MainLayout from '../Pages/MainLayout'
import MyWork from '../Pages/MyWork'
import Contact from '../Pages/Contact'
import Resume from '../Pages/Resume'
import AboutMe from '../Pages/AboutMe'

import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainLayout/>}>
          <Route index element = {<AboutMe/>}/>
          <Route path='/contact' element = {<Contact/>}/>
          <Route path='/portfolio' element = {<MyWork/>}/>
          <Route path='/resume' element = {<Resume/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
