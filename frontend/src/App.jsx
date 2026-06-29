import React, { useContext } from 'react'
import Registration from './pages/Registration'
import Home from './pages/Home'
import Login from './pages/Login'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import Nav from './component/Nav'
import { userDataContext } from './context/UserContext'
import About from './pages/About'
import Collections from './pages/Collections'
import Product from './pages/Product'
import Contact from './pages/Contact'
import ProductDetail from './pages/ProductDetail'
import Cart from './pages/Cart'
import PlaceOrder from './pages/PlaceOrder'
import Ai from './component/Ai'

function App() {
  let {userData}=useContext(userDataContext);
  let location=useLocation()
  return (
    <>
    {userData && <Nav/>}
      <Routes>
        <Route path="/" element={userData?<Home/>:<Navigate to={"/login"} state={{from:location.pathname}} />} />
        <Route path="/signup" element={userData?(<Navigate to={location.state?.from || "/"}/>):(<Registration/>)}/>
        <Route path="/login" element={userData?(<Navigate to={location.state?.from || "/"}/>):(<Login/>)} />
        <Route path="/about" element={userData?<About/>:<Navigate to={"/login"} state={{from:location.pathname}} />} />
        <Route path="/collections" element={userData?<Collections/>:<Navigate to={"/login"} state={{from:location.pathname}} />} />
        <Route path="/product" element={userData?<Product/>:<Navigate to={"/login"} state={{from:location.pathname}} />} />
        <Route path="/contact" element={userData?<Contact/>:<Navigate to={"/login"} state={{from:location.pathname}} />} />
        <Route path="/productDetail/:productId" element={userData?<ProductDetail/>:<Navigate to={"/login"} state={{from:location.pathname}} />} />
        <Route path='/cart' element={userData?<Cart/>:<Navigate to={"/login"} state={{from:location.pathname}} />} />
        <Route path='/placeOrder' element={userData?<PlaceOrder/>:<Navigate to={"/login"} state={{from:location.pathname}} />} />
      </Routes>
      <Ai/>
    </>
  )
}

export default App
