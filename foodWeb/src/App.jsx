
import { Route, Routes } from 'react-router-dom'
import './App.css'
import  Navbar  from './components/Navbar/Navbar'
import Home from './pages/home/Home'
import Cart from './pages/cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Footer from './components/Footer/Footer'
import { useState } from 'react'
import LoginPopup from './components/LoginPopup/LoginPopup.jsx'

function App() {
  
  const [showLogin,setShowLogin]=useState(false)

  return (
    <div>
    {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
    <div className='app'>
    <Navbar setShowLogin={setShowLogin}/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/placeorder' element={<PlaceOrder/>}/>
    </Routes>
    
    </div>
    <Footer/>
    </div>
    
  )
}

export default App
