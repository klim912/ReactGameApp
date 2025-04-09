import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black text-white">
      <h1 className="text-6xl font-bold text-green-500">404</h1>
      <p className="text-xl mt-4">Сторінку не знайдено</p>
      <Link
        to="/"
        className="mt-6 px-6 py-3 bg-green-500 text-black rounded-lg hover:bg-green-400 transition duration-300"
      >
        Повернутися на головну
      </Link>
    </div>
  );
};

export default NotFound;