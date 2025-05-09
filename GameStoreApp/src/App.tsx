import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Library from "./pages/Library";
import Store from "./pages/Store";
import Friends from "./pages/Friends";
import Sales from "./pages/Sales";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import CartPage from "./pages/CartPage";
import WishList from "./pages/WishList";
import { CartProvider } from "./components/CartContext";
import { WishlistProvider } from "./components/WishlistContext";
import { LibraryProvider } from "./components/LibraryContext";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfUse from "./pages/TermsOfUse";
import FAQ from "./pages/FAQ";
import SupportPage from "./pages/SupportPage";
import GamePage from "./pages/GamePage";
import ScrollToTop from "./hooks/ScrollToTop";
import GoToTopButton from "./components/GoToTopButton";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <CartProvider>
        <WishlistProvider>
          <LibraryProvider>
            <Router>
              <div className="min-h-screen flex flex-col">
                <Header />
                <main className="flex-grow">
                  <ScrollToTop />
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/store" element={<Store />} />
                    <Route path="/library" element={<Library />} />
                    <Route path="/friends" element={<Friends />} />
                    <Route path="/sales" element={<Sales />} />
                    <Route path="/wishlist" element={<WishList />} />
                    <Route path="/cart" element={<CartPage />} />
                    <Route path="*" element={<NotFound />} />
                    <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                    <Route path="/terms-of-use" element={<TermsOfUse />} />
                    <Route path="/faq" element={<FAQ />} />
                    <Route path="/support" element={<SupportPage />} />
                    <Route path="/game/:id" element={<GamePage />} />
                  </Routes>
                </main>
                <GoToTopButton />
                <Footer />
              </div>
            </Router>
          </LibraryProvider>
        </WishlistProvider>
      </CartProvider>
    </QueryClientProvider>
  );
}

export default App;
