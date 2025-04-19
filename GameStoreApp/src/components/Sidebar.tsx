import { useEffect, useState } from "react";

function Sidebar({ setSearchParams }: { setSearchParams: any }) {
  const [sortOption, setSortOption] = useState(() => {
    return localStorage.getItem("sortOption") || "price-asc";
  });

  useEffect(() => {
    localStorage.setItem("sortOption", sortOption);
    setSearchParams((prev: URLSearchParams) => {
      const newParams = new URLSearchParams(prev);
      newParams.set("sort", sortOption);
      return newParams;
    });
  }, [sortOption, setSearchParams]);

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setSearchParams((prev: URLSearchParams) => {
      const newParams = new URLSearchParams(prev);
      newParams.set(name, value);
      return newParams;
    });
  };

  return (
    <aside
      className="w-64 bg-neutral-950 border-r mt-[30px] border-lime-500/30 p-6 text-white font-mono sticky top-0 self-start min-h-screen"
      style={{ maxHeight: "100vh", overflowY: "auto" }}
    >
      <h2
        className="text-xl md:text-2xl font-bold text-lime-400 mb-8 tracking-wider uppercase relative
          before:content-[''] before:absolute before:inset-x-0 before:bottom-0 before:h-0.5 before:bg-lime-500/50
          before:transform before:transition-transform before:duration-300 hover:before:scale-x-110"
      >
        ФІЛЬТРИ
      </h2>

      <div className="space-y-6">
        <div>
          <label className="text-lime-400 text-sm tracking-wide uppercase">
            ЖАНР
          </label>
          <select
            name="genre"
            onChange={handleFilterChange}
            className="w-full bg-neutral-900/50 border border-lime-500/50 text-lime-400 text-sm p-3 mt-2 rounded-sm
              focus:outline-none focus:border-lime-500 hover:bg-neutral-900/70 transition-all duration-300"
          >
            <option value="">УСІ</option>
            <option value="Action">ACTION</option>
            <option value="RPG">RPG</option>
            <option value="Shooter">SHOOTER</option>
            <option value="Strategy">STRATEGY</option>
          </select>
        </div>

        <div>
          <label className="text-lime-400 text-sm tracking-wide uppercase">
            СОРТУВАТИ ЗА
          </label>
          <select
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
            className="w-full bg-neutral-900/50 border border-lime-500/50 text-lime-400 text-sm p-3 mt-2 rounded-sm
              focus:outline-none focus:border-lime-500 hover:bg-neutral-900/70 transition-all duration-300"
          >
            <option value="price-asc">ЦІНА ↑</option>
            <option value="price-desc">ЦІНА ↓</option>
            <option value="rating-asc">РЕЙТИНГ ↑</option>
            <option value="rating-desc">РЕЙТИНГ ↓</option>
          </select>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
