import { Link } from "react-router-dom";

export default function StayCard({ item }) {
  return (
    <Link to={`/villa/${item.id}`} className="block">
      <div className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
        {/* Image */}
        <div className="overflow-hidden">
          <img
            src={item.image}
            alt={item.title}
            loading="lazy"
            className="h-60 w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* Content */}
        <div className="p-5">
          {/* Location */}
          <p className="text-xs uppercase tracking-wide text-gray-400">
            {item.location}
          </p>

          {/* Title */}
          <h3 className="text-xl font-semibold mt-1 text-gray-900 leading-snug line-clamp-2">
            {item.title}
          </h3>

          {/* Features */}
          <p className="text-gray-600 text-sm mt-2">
            Private pool • Sea view • Premium stay
          </p>

          {/* Divider */}
          <div className="border-t my-4" />

          {/* Price + Rating */}
          <div className="flex justify-between items-center">
            <div>
              <p className="font-semibold text-gray-900 text-lg">
                ₹ {item.price}
              </p>
              <span className="text-xs text-gray-500">per night</span>
            </div>

            {/* Rating badge */}
            <span className="text-sm font-medium bg-black text-white px-3 py-1 rounded-full">
              ★ 4.8
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
