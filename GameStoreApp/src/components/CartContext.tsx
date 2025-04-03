import { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface Game {
  gameID: string;
  title: string;
  salePrice: number;
  thumb: string;
  quantity: number;
}

interface CartContextType {
  cartItems: Game[];
  setCartItems: React.Dispatch<React.SetStateAction<Game[]>>;
  addToCart: (game: Game) => void;
  removeFromCart: (gameID: string) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<Game[]>(() => {
    const savedCart = localStorage.getItem("cartItems");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (game: Game) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.gameID === game.gameID);
      if (existingItem) {
        return prevItems.map(item =>
          item.gameID === game.gameID ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevItems, { ...game, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (gameID: string) => {
    setCartItems(prevItems => prevItems.filter(item => item.gameID !== gameID));
  };

  return (
    <CartContext.Provider value={{ cartItems, setCartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
