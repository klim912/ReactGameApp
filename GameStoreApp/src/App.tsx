import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useState } from "react";
import Header from "./components/Header";
import Footer from './components/Footer';
import Library from './pages/Library';
import Store from './pages/Store';
import Friends from './pages/Friends';
import Sales from './pages/Sales';
import NotFound from "./pages/NotFound";
import Home from './pages/Home';
import CartPage from './pages/CartPage';
import WishList from './pages/WishList';
import { CartProvider } from './components/CartContext';
import { WishlistProvider } from "./components/WishlistContext";
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfUse from './pages/TermsOfUse';
import FAQ from './pages/FAQ';
import SupportPage from './pages/SupportPage';


const queryClient = new QueryClient();

function App() {
  const [searchQuery, setSearchQuery] = useState<string>("");


  return (
    <QueryClientProvider client={queryClient}>
       <CartProvider>
        <WishlistProvider>
              <Router>
                <div className='min-h-screen flex flex-col'>
                <Header setSearchQuery={setSearchQuery} />  
                <main className='flex-grow'>
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/store" element={<Store searchQuery={searchQuery}/>} />
                    <Route path="/library" element={<Library />} />
                    <Route path="/friends" element={<Friends />} />
                    <Route path="/sales" element={<Sales />} />
                    <Route path="/wishlist" element={<WishList />} />
                    <Route path="/cart" element={<CartPage />} />
                    <Route path="*" element={<NotFound />} />
                    <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                    <Route path="/terms-of-use" element={<TermsOfUse />} />
                    <Route path="/faq" element={<FAQ />} />
                    <Route path='/support' element={<SupportPage />} />
                  </Routes>
                  </main>
                <Footer />
                </div>
              </Router>
          </WishlistProvider>
        </CartProvider>
    </QueryClientProvider>
  );
}

export default App;
