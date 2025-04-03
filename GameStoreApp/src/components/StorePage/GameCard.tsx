import { useEffect, useState } from "react";
import { useCart } from "../CartContext";
import { useWishlist } from "../WishlistContext";
import { Heart } from "react-feather";

interface Game {
  gameID: string;
  title: string;
  thumb: string;
  salePrice: string;
}

interface GameCardProps {
  searchQuery: string;
}

function GameCard({ searchQuery }: GameCardProps) {
  const { addToCart } = useCart();
  const { addToWishlist } = useWishlist();
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    fetch("https://www.cheapshark.com/api/1.0/deals?limit=5&storeID=3")
      .then(response => response.json())
      .then(data => {
        const uniqueGames = data.filter((game: Game, index: number, self: Game[]) =>
          index === self.findIndex((g) => g.gameID === game.gameID)
        );
        setGames(uniqueGames);
      })
      .catch(error => console.error("Помилка отримання даних:", error));
  }, []);

  const filteredGames = games.filter(game =>
    game.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
      {filteredGames.length > 0 ? (
        filteredGames.map((game) => (
          <div key={game.gameID} className="flex flex-col bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition transform hover:scale-105">
            <h2 className="text-lg font-semibold text-center p-3 h-[70px]">{game.title}</h2>

            <div className="w-70 h-40 flex justify-center items-center bg-black m-auto">
              <img 
                src={game.thumb} 
                alt={game.title} 
                className="max-w-full max-h-full object-contain"
              />
            </div>

            <div className="flex justify-between items-center p-3 bg-gray-50">
              <span className="text-lg font-semibold text-green-600">{game.salePrice} $</span>
              <div className="flex gap-2">
                <button onClick={() => addToCart(game)} className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700 cursor-pointer">Купити</button>
                <button onClick={() => addToWishlist(game)} className="bg-gray-200 text-black px-3 py-1 rounded hover:bg-gray-300 cursor-pointer">
                  <Heart />
                </button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p className="text-center text-gray-500 col-span-4">Нічого не знайдено</p>
      )}
    </div>
  );
}

export default GameCard;
