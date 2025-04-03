import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useState } from "react";
import Header from "./components/Header";
import Library from './components/Library';
import Store from './components/StorePage/Store';
import Friends from './components/Friends';
import Sales from './components/Sales';
import NotFound from "./components/NotFound";
import Home from './components/Home';
import CartPage from './components/CartPage';
import WishList from './components/WishList';
import { CartProvider } from './components/CartContext';
import { WishlistProvider } from "./components/WishlistContext";

const queryClient = new QueryClient();

function App() {
  const [searchQuery, setSearchQuery] = useState<string>("");


  return (
    <QueryClientProvider client={queryClient}>
       <CartProvider>
        <WishlistProvider>
              <Router>
                <Header setSearchQuery={setSearchQuery} />  
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/store" element={<Store searchQuery={searchQuery}/>} />
                  <Route path="/library" element={<Library />} />
                  <Route path="/friends" element={<Friends />} />
                  <Route path="/sales" element={<Sales />} />
                  <Route path="/wishlist" element={<WishList />} />
                  <Route path="/cart" element={<CartPage />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Router>
          </WishlistProvider>
        </CartProvider>
    </QueryClientProvider>
  );
}

export default App;
