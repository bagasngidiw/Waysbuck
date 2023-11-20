import './App.css'
import Home from './Pages/Home'
import {  Routes, Route } from "react-router-dom";
import DetailProduct from './Pages/DetailProduct';
import Cart from './Pages/Cart';



function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/drinks/:id" element={<DetailProduct/>} />
        <Route path="/cart" element={<Cart/>} />
      </Routes>
    </>
  )
}

export default App

