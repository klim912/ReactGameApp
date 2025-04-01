import { useCart } from "./CartContext";
import { Trash2 } from "react-feather";

function CartPage() {
  const { cartItems, setCartItems, removeFromCart } = useCart();

  const updateQuantity = (gameID: string, quantity: number) => {
    if (quantity < 1) return;
    setCartItems(cartItems.map(item =>
      item.gameID === gameID ? { ...item, quantity } : item
    ));
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.salePrice * item.quantity, 0).toFixed(2);
  };

  return (
    <div className="min-h-screen bg-neutral-200 mt-[160px]">
      <div className="container mx-auto p-6">
        <h2 className="text-3xl font-bold text-center mb-6">Ваш кошик</h2>

        {cartItems.length === 0 ? (
          <div className="text-center text-xl text-gray-500">Ваш кошик порожній.</div>
        ) : (
          <div className="overflow-x-auto bg-white shadow-md rounded-lg">
            <table className="min-w-full table-auto">
              <thead className="bg-gray-200">
                <tr>
                  <th className="py-2 px-4 text-left">Зображення</th>
                  <th className="py-2 px-4 text-left">Гра</th>
                  <th className="py-2 px-4 text-left">Кількість</th>
                  <th className="py-2 px-4 text-left">Ціна</th>
                  <th className="py-2 px-4 text-left">Загальна ціна</th>
                  <th className="py-2 px-4 text-left"></th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.gameID} className="border-b">
                    <td className="py-4 px-4">
                      <img src={item.thumb} alt={item.title} className="w-16 h-16 object-cover rounded-md" />
                    </td>
                    <td className="py-4 px-4">{item.title}</td>
                    <td className="py-4 px-4">
                      <input 
                        type="number" 
                        value={item.quantity} 
                        min="1" 
                        onChange={(e) => updateQuantity(item.gameID, parseInt(e.target.value))} 
                        className="w-16 p-2 border rounded-md text-center"
                      />
                    </td>
                    <td className="py-4 px-4">${item.salePrice}</td>
                    <td className="py-4 px-4">${(item.salePrice * item.quantity).toFixed(2)}</td>
                    <td className="py-4 px-4">
                      <button onClick={() => removeFromCart(item.gameID)} className="bg-red-500 text-white py-1 px-4 rounded-md cursor-pointer hover:bg-red-700">
                        <Trash2 />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="text-right p-4 text-2xl font-bold">
              Загальна сума: ${calculateTotal()}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default CartPage;
