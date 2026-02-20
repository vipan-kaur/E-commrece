import React from 'react'
import Navbar from './layout.jsx/navbar'
import Home from './pages.jsx/home'
import Products from './pages.jsx/products'
import Cart from './pages.jsx/mycart'
import {BrowserRouter , Route , Routes} from 'react-router-dom'
import Buy from './pages.jsx/buy'
import  Contact from './pages.jsx/contact'
import Footer from './layout.jsx/footer'
import SearchProvider from './searchprovider'
import Login from './pages.jsx/login'
import Aboutpage from './pages.jsx/about/aboutpage.jsx'
import Use from './pages.jsx/usememo.jsx'
const App = () => {
  return (
    <>
    <SearchProvider>
    <BrowserRouter>
        <Navbar/>
        
        <Routes>
        <Route path='/' element ={<Home/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/buy/:id' element={<Buy/>}/>
        <Route path='/mycart' element={<Cart/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/aboutpage' element={<Aboutpage/>}/>
        <Route path="/uses" element={<Use/>}/>
        </Routes>
        <Footer/>
   </BrowserRouter>
   </SearchProvider>
    </>
  )
}

export default App