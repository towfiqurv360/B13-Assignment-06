import { useState } from 'react';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Stats from './components/Stats';
import MainContainer from './components/MainContainer';
import Steps from './components/Steps';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    const isExist = cart.find((item) => item.id === product.id);
    
    if (isExist) {
      toast.warning("This product is already in your cart!");
    } else {
      setCart([...cart, product]);
      toast.success("Successfully added to cart!");
    }
  };

  const handleRemove = (id) => {
    const remainingCart = cart.filter((item) => item.id !== id);
    setCart(remainingCart);
    toast.info("Product removed from cart!");
  };

  const handleCheckout = () => {
    if (cart.length > 0) {
      setCart([]);
      toast.success("Checkout successful! Cart cleared.");
    } else {
      toast.error("Your cart is empty!");
    }
  };

  return (
    <div className="min-h-screen bg-base-100 font-sans">
      <Navbar cartCount={cart.length} />
      
      <Banner />
      <Stats />
      
      
      <MainContainer 
        cart={cart} 
        handleAddToCart={handleAddToCart} 
        handleRemove={handleRemove} 
        handleCheckout={handleCheckout} 
      /> 
      
      <Steps />
      <Pricing />
      <Footer />
      
      <ToastContainer position="top-center" autoClose={2000} />
    </div>
  );
}