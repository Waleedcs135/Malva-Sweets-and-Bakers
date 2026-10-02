import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import ScrollToTop from './components/ScrollToTop';
import Header from './components/Header';
import Home from './pages/Home';
import CategoryPage from './pages/CategoryPage';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import CartToast from './components/CartToast';

function App() {
  return (
    <Router>
      <CartProvider>
        <ScrollToTop />
        <div className="app-wrapper">
          <Header />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/category/:id" element={<CategoryPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
        <CartDrawer />
        <CartToast />
      </CartProvider>
    </Router>
  );
}

export default App;
