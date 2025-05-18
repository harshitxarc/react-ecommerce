import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './view/Home'
import Shop from './view/Shop'
import Blog from './view/Blog'
import About from './view/About'
import Contact from './view/Contact'
import Navbar from './component/Navbar'
import Cart from './Cart/Cart'
import CardDetails from './Card/CardDetails'
import Card from './Card/Card'
import Checkout from './Cart/Checkout'
import Dashboard from './view/Dashboard'
import ScrollToTop from './ScrollToTop'
import FooterPage from './component/FooterPage'
import Login from './component/Login'
import Signup from './component/Signup'
import CardDetails1 from './Card/CardDetails1'
import Card1 from './Card/Card1'

function App() {
  return (
    <>
      <Router>
        <ScrollToTop/>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/" element={<Card />} />
          <Route path="/" element={<Card1 />} />
          <Route path="/product/:id" element={<CardDetails />} />
          <Route path="/product1/:id" element={<CardDetails1 />} />
          <Route path="/Checkout" element={<Checkout />} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup/:id?" element={<Signup/>} />
          <Route path="/footerpage" element={<FooterPage/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App

