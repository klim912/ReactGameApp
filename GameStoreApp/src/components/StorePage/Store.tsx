import GameCard from "./GameCard";


interface StoreProps {
  searchQuery: string;
}

function Store({ searchQuery }: StoreProps) {
  
  return (
    <div className="mt-[160px] bg-neutral-200 h-dvh">
      <GameCard searchQuery={searchQuery} />
    </div>
  );
}

export default Store;
