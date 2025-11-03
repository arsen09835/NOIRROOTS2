import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Header from './components/Header';
import Footer from './components/Footer';
import VoiceglowChat from './components/VoiceglowChat';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import ProductDetailPage from './pages/ProductDetailPage';
import AboutPage from './pages/AboutPage';
import IngredientsPage from './pages/IngredientsPage';
import HowToUsePage from './pages/HowToUsePage';
import ReviewsPage from './pages/ReviewsPage';
import FAQPage from './pages/FAQPage';
import ContactPage from './pages/ContactPage';
import PoliciesPage from './pages/PoliciesPage';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen bg-cream">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/shop" element={<ShopPage />} />
              <Route path="/product/:slug" element={<ProductDetailPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/ingredients" element={<IngredientsPage />} />
              <Route path="/how-to-use" element={<HowToUsePage />} />
              <Route path="/reviews" element={<ReviewsPage />} />
              <Route path="/faq" element={<FAQPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/policies" element={<PoliciesPage />} />
            </Routes>
          </main>
          <Footer />
          <VoiceglowChat />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;