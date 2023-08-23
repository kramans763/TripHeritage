import React from 'react'
import './App.css';
import About from './Routes/About';
import Home from './Routes/Home';
import Service from './Routes/Service';
import Contact from './Routes/Contact';
import SignUp from './Routes/SignUp';
import {Routes, Route } from 'react-router-dom';
import Search from './Routes/Search';



function App(){
  return (
    <div className='App'>
     <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/service' element={<Service />}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
      <Route path='/signup' element={<SignUp />}></Route>
      <Route path='/search' element={<Search />}></Route>
     </Routes>
    </div>
  )
}

export default App