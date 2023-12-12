import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Layout from './components/layout';
import Orders from './pages/Orders';


function App() {


  return (
    <>
     
     <BrowserRouter>
     <Routes>
 
      <Route path="/" element={<Layout><Home/></Layout>}/>
     
      <Route path="/cart" element={<Layout><Cart/></Layout>}/>
      <Route path="/order" element={<Layout><Orders/></Layout>}/>


     </Routes>
   
     </BrowserRouter>
    
    </>
  )
}

export default App
