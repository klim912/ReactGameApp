import { useState } from "react";
import { Search, X, Menu, ChevronDown, ShoppingCart } from "react-feather";
import { NavLink, useNavigate } from "react-router-dom";
import { useCart } from "./CartContext";

interface HeaderProps {
  setSearchQuery: (query: string) => void;
}

function Header({ setSearchQuery }: HeaderProps) {
  const [inputValue, setInputValue] = useState<string>("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleNav = () => setIsNavOpen(!isNavOpen);

  const navigate = useNavigate();
  const { cartItems } = useCart();
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    setSearchQuery(event.target.value);
  };

  const handleCartClick = () => {
    navigate("/cart");
  };

  return (
    <div className="flex flex-col fixed top-0 left-0 w-full z-10 bg-black">
      <div className="h-[30px] m-3 bg-black flex justify-end relative">
        <div
          className="flex flex-row bg-green-500 gap-1 mr-[30px] py-3 items-center cursor-pointer rounded-r-lg hover:scale-101 hover:shadow-lg transition duration-200"
          onClick={toggleMenu}
        >
          <img
            src="../src/assets/avatar.png"
            className="size-[30px] bg-yellow-700"
          />
          <div className="text-black text-xl">nickname</div>
          <ChevronDown className="text-black" />
        </div>

        {isMenuOpen && (
          <div className="absolute top-full right-0 bg-black text-white border border-green-500 rounded-md shadow-xl w-48 p-2 mt-2 z-20">
            <NavLink
              to="/profile"
              className="block p-2 hover:bg-green-500 rounded-md transition duration-200 hover:text-black"
            >
              Профіль
            </NavLink>
            <NavLink
              to="/settings"
              className="block p-2 hover:bg-green-500 rounded-md transition duration-200 hover:text-black"
            >
              Налаштування
            </NavLink>
            <button className="block w-full p-2 hover:bg-green-500 rounded-md transition duration-200 text-red-500 hover:text-black">
              Вийти
            </button>
          </div>
        )}
      </div>

      <div className="flex items-center justify-between px-4 md:px-[100px] h-[60px]">
        <NavLink to="/" className="flex items-center gap-2">
          <img src="../src/assets/logo.png" className="size-[50px]" />
          <div className="text-white text-xl">
            Game <span className="text-green-500 font-bold">Vault</span>
          </div>
        </NavLink>

        <div className="flex-grow max-w-[300px] mx-4 relative">
          <input
            type="text"
            placeholder="Search"
            value={inputValue}
            onChange={handleSearchChange}
            className="w-full px-4 py-2 bg-black border border-white rounded-full focus:outline-none focus:ring-2 focus:border-green-500 placeholder-white transition duration-300 text-green-400"
          />
          <Search className="text-white absolute right-3 top-3 cursor-pointer hover:text-green-500 transition duration-200" />
        </div>

        <button className="block lg:hidden text-white" onClick={toggleNav}>
          {isNavOpen ? <X size={30} /> : <Menu size={30} />}
        </button>

        <div className="hidden lg:flex gap-10">
          <NavLink
            to="/store"
            className="text-white text-xl hover:text-green-500"
          >
            Магазин
          </NavLink>
          <NavLink
            to="/library"
            className="text-white text-xl hover:text-green-500"
          >
            Бібліотека
          </NavLink>
          <NavLink
            to="/friends"
            className="text-white text-xl hover:text-green-500"
          >
            Друзі
          </NavLink>
          <NavLink
            to="/sales"
            className="text-white text-xl hover:text-green-500"
          >
            Акції
          </NavLink>
        </div>
      </div>

      {isNavOpen && (
        <div className="fixed inset-0 bg-black text-white z-20 flex flex-col items-center justify-center space-y-6">
          <button
            className="absolute top-5 right-5 text-white"
            onClick={toggleNav}
          >
            <X size={30} />
          </button>
          <NavLink
            to="/store"
            className="text-xl hover:text-green-500"
            onClick={toggleNav}
          >
            Магазин
          </NavLink>
          <NavLink
            to="/library"
            className="text-xl hover:text-green-500"
            onClick={toggleNav}
          >
            Бібліотека
          </NavLink>
          <NavLink
            to="/friends"
            className="text-xl hover:text-green-500"
            onClick={toggleNav}
          >
            Друзі
          </NavLink>
          <NavLink
            to="/sales"
            className="text-xl hover:text-green-500"
            onClick={toggleNav}
          >
            Акції
          </NavLink>
        </div>
      )}

      <div className="bg-neutral-200 flex flex-row justify-end gap-2.5 py-2 pr-2 border-b-2">
        <NavLink
          to="/wishlist"
          className="bg-white w-45 h-8 font-medium text-black border border-black flex items-center justify-center gap-1 rounded-xs cursor-pointer relative transition-all duration-300 ease-in-out hover:scale-101 hover:shadow-lg"
        >
          Список бажаного
        </NavLink>
        <NavLink
          to="/cart"
          className="bg-black w-40 h-8 font-medium text-white border border-black flex items-center justify-center gap-1 rounded-xs cursor-pointer relative transition-all duration-300 ease-in-out hover:scale-101 hover:shadow-lg"
          onClick={handleCartClick}
        >
          <ShoppingCart size={18} />
          Кошик
          {cartCount > 0 && (
            <span className="absolute top-2 right-4 bg-white text-black text-xs rounded-full px-2">
              {cartCount}
            </span>
          )}
        </NavLink>
      </div>
    </div>
  );
}

export default Header;
