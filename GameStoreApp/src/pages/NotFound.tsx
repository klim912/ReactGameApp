import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black text-white font-mono">
      <h1
        className="text-6xl font-bold text-lime-400 uppercase tracking-wide relative
        before:content-[''] before:absolute before:inset-x-0 before:bottom-0 before:h-0.5 before:bg-lime-500/50
        before:transform before:transition-transform before:duration-300 hover:before:scale-x-110"
      >
        404
      </h1>
      <p className="text-xl mt-4 text-neutral-400 uppercase tracking-wide">
        СТОРІНКУ НЕ ЗНАЙДЕНО
      </p>
      <Link
        to="/"
        className="mt-6 px-6 py-3 bg-neutral-900/50 border border-lime-500/50 text-lime-400 text-sm rounded-sm uppercase tracking-wide
          hover:bg-lime-500 hover:text-black transition-all duration-300 transform hover:scale-105"
      >
        ПОВЕРНУТИСЯ НА ГОЛОВНУ
      </Link>
    </div>
  );
};

export default NotFound;
