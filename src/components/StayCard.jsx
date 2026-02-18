import { Link } from "react-router-dom";

export default function StayCard({ item }) {
  if (!item) return null;

  const fallback =
    "https://images.unsplash.com/photo-1505691938895-1758d7feb511";

  return (
    <Link to={`/villa/${item.id}`} className="group block">
      <div className="bg-white dark:bg-[#121212] rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition duration-300">
        {/* Image */}
        <div className="relative overflow-hidden rounded-t-3xl">
          <img
            src={item.image || fallback}
            alt={item.title}
            className="w-full h-64 object-cover group-hover:scale-105 transition duration-500"
            loading="lazy"
            onError={(e) => (e.target.src = fallback)}
          />

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition" />
        </div>

        {/* Content */}
        <div className="p-5">
          <p className="text-sm text-gray-500">{item.location}</p>

          <h3 className="text-lg font-semibold mt-1 dark:text-white">
            {item.title}
          </h3>

          <div className="flex justify-between items-center mt-4">
            <div>
              <p className="font-semibold dark:text-white">₹ {item.price}</p>
              <span className="text-xs text-gray-400">per night</span>
            </div>

            <span className="bg-black text-white text-sm px-3 py-1 rounded-full">
              4.8 ★
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
