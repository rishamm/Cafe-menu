import { useState } from 'react'
import Header from './components/shared/Header'
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import Home from './pages/Home';



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header/>
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<Home/>}/>

     </Routes>
     </BrowserRouter>
      
    </>
  )
}

export default App
