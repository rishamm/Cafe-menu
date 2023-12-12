import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Layout from './components/layout';


function App() {


  return (
    <>
     
     <BrowserRouter>
     <Routes>
 
      <Route path="/" element={<Layout><Home/></Layout>}/>
     
      <Route path="/cart" element={<Layout><Cart/></Layout>}/>

     </Routes>
   
     </BrowserRouter>
    
    </>
  )
}

export default App
