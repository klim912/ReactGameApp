import { useWishlist } from "./WishlistContext";
import { useCart } from "./CartContext";
import { Trash2 } from "react-feather";

function Wishlist() {
  const wishlistContext = useWishlist();
  const cartContext = useCart();

  if (!wishlistContext || !cartContext) {
    return <p className="text-center text-red-500">Помилка: Контекст не знайдено.</p>;
  }

  const { wishlist, removeFromWishlist } = wishlistContext;
  const { addToCart } = cartContext;

  const handleBuy = (game: any) => {
    addToCart(game);
    removeFromWishlist(game.gameID);
  };

  return (
    <div className="mt-[160px] px-10 bg-neutral-200 h-dvh">
      <h2 className="text-3xl font-bold text-black mb-6 text-center">Список бажаного</h2>
      {wishlist.length === 0 ? (
        <p className="text-center text-lg text-gray-400">Список бажаного порожній.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {wishlist.map((game) => (
            <div key={game.gameID} className="flex flex-col bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <h2 className="text-xl h-[100px] font-semibold text-center text-gray-800 p-4">{game.title}</h2>
              <img src={game.thumb} alt={game.title} className="object-contain w-33 h-48 bg-white m-auto" />
              <div className="flex justify-between items-center p-4 bg-gray-50">
                <span className="text-xl font-semibold text-green-600">{game.salePrice} $</span>
                <div className="flex gap-2">
                  <button 
                    onClick={() => handleBuy(game)} 
                    className="bg-green-600 text-white px-4 py-2 rounded-md cursor-pointer hover:bg-green-700 transition">
                    Купити
                  </button>
                  <button 
                    onClick={() => removeFromWishlist(game.gameID)} 
                    className="bg-red-500 text-white px-4 py-2 rounded-md cursor-pointer hover:bg-red-600 transition">
                    <Trash2 />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Wishlist;
