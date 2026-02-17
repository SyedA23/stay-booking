import { useState } from "react";
import useStays from "./hooks/useStays";
import StayCard from "./components/StayCard";
import Loader from "./components/Loader";
import ErrorState from "./components/Error";

export default function Stays() {
  const { stays, loading, error, retry } = useStays();
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");

  let list = stays.filter((s) =>
    s.location.toLowerCase().includes(search.toLowerCase())
  );

  if (sort === "low") list.sort((a, b) => a.price - b.price);
  if (sort === "high") list.sort((a, b) => b.price - a.price);

  if (loading) return <Loader />;
  if (error) return <ErrorState message={error} retry={retry} />;

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="flex gap-4 mb-6">
        <input
          placeholder="Search city"
          onChange={(e) => setSearch(e.target.value)}
          className="border p-2"
        />

        <select onChange={(e) => setSort(e.target.value)}>
          <option>Sort</option>
          <option value="low">Low price</option>
          <option value="high">High price</option>
        </select>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {list.map((item) => (
          <StayCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
