import './App.css';
import React, { useState } from 'react';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import Product from './Pages/Product/Product';
import Contact from './Pages/Contact/Contact';
import Cart from './Pages/Cart/Cart';
import Checkout from './Pages/Cart/Checkout'; 
import { CartProvider } from './Pages/Cart/CartContext';
import Footer from './Components/Footer/Footer';
import { ToastContainer } from 'react-toastify'; 

function App() {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async (searchTerm) => {
    try {
      const response = await fetch(
        `https://api.noroff.dev/api/v1/online-shop?q=${searchTerm}`
      );
      const data = await response.json();
      setSearchResults(data);
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

  return (
    <div>
      <CartProvider>
        <BrowserRouter>
        <Navbar onSearch={handleSearch} />
        <ToastContainer />
          <Routes>
            <Route
              path='/'
              element={<Shop searchResults={searchResults} />}
            />
            <Route path='/' element={<Shop />} />
            <Route path='/product' element={<Product />} />
            <Route path="/product/:productId" element={<Product />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/cart' element={<Cart />} /> 
            <Route path='/checkout' element={<Checkout />} /> 
          </Routes>
          <Footer />
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
