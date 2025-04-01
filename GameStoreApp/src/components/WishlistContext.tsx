import { createContext, useContext, useEffect, useState } from "react";

interface Game {
  gameID: string;
  title: string;
  thumb: string;
  salePrice: string;
}

interface WishlistContextType {
  wishlist: Game[];
  addToWishlist: (game: Game) => void;
  removeFromWishlist: (id: string) => void;
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

export function WishlistProvider({ children }: { children: React.ReactNode }) {
  const [wishlist, setWishlist] = useState<Game[]>(() => {
    const savedWishlist = localStorage.getItem("wishlist");
    return savedWishlist ? JSON.parse(savedWishlist) : [];
  });

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  const addToWishlist = (game: Game) => {
    setWishlist((prevItems) => {
      if (!prevItems.find((item) => item.gameID === game.gameID)) {
        return [...prevItems, game];
      }
      return prevItems;
    });
  };

  const removeFromWishlist = (id: string) => {
    setWishlist((prevItems) => prevItems.filter((item) => item.gameID !== id));
  };

  return (
    <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
    const context = useContext(WishlistContext);
    if (!context) {
      throw new Error("useWishlist використано за межами WishlistProvider");
    }
    return context;
  }
  
