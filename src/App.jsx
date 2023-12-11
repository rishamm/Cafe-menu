import { useState } from 'react'
import Header from './components/shared/Header'
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import Home from './pages/Home';
import Footer from './components/shared/Footer';
import Cart from './pages/Cart';



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header/>
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/footer" element={<Footer/>}/>
      <Route path="/cart" element={<Cart/>}/>

     </Routes>
     </BrowserRouter>
      
    </>
  )
}

export default App
