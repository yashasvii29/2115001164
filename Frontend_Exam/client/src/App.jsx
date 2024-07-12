import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AllProducts from './components/AllProducts'
import Product from './components/Product';

const App = () => {
  return (
    <div>
        <BrowserRouter>
        <Routes>           
            <Route path='/' element={<AllProducts />}>
            <Route path='/product/:productId' element={<Product />} />
            
            </Route>
         
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App