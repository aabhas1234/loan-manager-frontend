import React from 'react'
import {Routes, Route, } from 'react-router-dom'
import Home from './Home.jsx'
import Addnewloanentry from './Addnewloanentry.jsx'
import Authentication from './Authentication.jsx'
import Signin from './signin.jsx'
import Signup from './signup.jsx'
const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Authentication/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/signin' element={<Signin/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/addnewloanentry' element={<Addnewloanentry/>}></Route>
      </Routes>
    </div>
  )
}

export default App