import { useFetch } from "../hooks/useFetch";
import StayCard from "../components/StayCard";
import Loader from "../components/Loader";
import Error from "../components/Error";
import { useState, useMemo } from "react";
import { FaSearch, FaMapMarkerAlt, FaSortAmountDown } from "react-icons/fa";

const Stays = () => {
  const { data, loading, error, retry } = useFetch("/data/stays.json");

  const [search, setSearch] = useState("");
  const [city, setCity] = useState("");
  const [sort, setSort] = useState("");

  // Unique cities
  const cities = useMemo(() => {
    if (!Array.isArray(data)) return [];
    return [...new Set(data.map((stay) => stay.location))];
  }, [data]);

  // Filter + sort logic
  const filteredStays = useMemo(() => {
    if (!Array.isArray(data)) return [];

    let list = [...data];

    if (search) {
      list = list.filter((stay) =>
        stay.location.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (city) {
      list = list.filter((stay) => stay.location === city);
    }

    if (sort === "low") {
      list.sort((a, b) => a.price - b.price);
    }

    if (sort === "high") {
      list.sort((a, b) => b.price - a.price);
    }

    return list;
  }, [data, search, city, sort]);

  // Loading
  if (loading) return <Loader />;

  // Error
  if (error) return <Error message={error} retry={retry} />;

  return (
    <div className="px-6 md:px-16 py-16 max-w-[1400px] mx-auto">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-semibold mb-10">
        Discover Luxury Villas
      </h2>

      {/* Premium Filters */}
      {/* PREMIUM FILTER BAR */}
      <div className="mb-14">
        <div className="bg-white dark:bg-[#111] border border-gray-200 dark:border-gray-800 rounded-3xl shadow-xl px-6 md:px-10 py-6">
          <div className="flex flex-col lg:flex-row items-center gap-6">
            {/* SEARCH */}
            <div className="flex-1 w-full">
              <label className="block text-xs tracking-wide text-gray-400 mb-2">
                Search destination
              </label>

              <input
                type="text"
                placeholder="Try Goa, Udaipur, Alibaug..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full text-lg px-5 py-4 rounded-2xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-[#181818] focus:bg-white dark:focus:bg-[#202020] focus:ring-2 focus:ring-black outline-none transition"
              />
            </div>

            {/* CITY */}
            <div className="w-full lg:w-60">
              <label className="block text-xs tracking-wide text-gray-400 mb-2">
                Location
              </label>

              <select
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="w-full text-lg px-5 py-4 rounded-2xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-[#181818] focus:bg-white dark:focus:bg-[#202020] focus:ring-2 focus:ring-black outline-none transition"
              >
                <option value="">All cities</option>
                {cities.map((c) => (
                  <option key={c}>{c}</option>
                ))}
              </select>
            </div>

            {/* SORT */}
            <div className="w-full lg:w-60">
              <label className="block text-xs tracking-wide text-gray-400 mb-2">
                Sort
              </label>

              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="w-full text-lg px-5 py-4 rounded-2xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-[#181818] focus:bg-white dark:focus:bg-[#202020] focus:ring-2 focus:ring-black outline-none transition"
              >
                <option value="">Recommended</option>
                <option value="low">Price: Low → High</option>
                <option value="high">Price: High → Low</option>
              </select>
            </div>

            {/* RESET CTA */}
            <div className="w-full lg:w-auto pt-6 lg:pt-0">
              <button
                onClick={() => {
                  setSearch("");
                  setCity("");
                  setSort("");
                }}
                className="w-full lg:w-auto bg-black text-white px-8 py-4 rounded-2xl text-lg font-medium hover:bg-gray-800 transition"
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Grid */}
      {filteredStays.length === 0 ? (
        <div className="text-center py-16">
          <h3 className="text-gray-500">No results found</h3>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredStays.map((stay) => (
            <StayCard key={stay.id} item={stay} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Stays;
