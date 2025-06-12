import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './component/Navbar'
import  Productcart from './component/ProductCart'
function App() {


  return (
    <>

   <Navbar/>

   <br />

   <Productcart/>
    </>
  )
}

export default App
