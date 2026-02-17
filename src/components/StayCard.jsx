export default function StayCard({ item }) {
  return (
    <div className="rounded-xl overflow-hidden shadow hover:shadow-lg transition">
      <img
        src={item.image}
        alt={item.title}
        className="h-48 w-full object-cover"
      />

      <div className="p-4">
        <h3 className="font-semibold">{item.title}</h3>
        <p className="text-sm text-gray-500">{item.location}</p>
        <p className="font-bold text-blue-600 mt-1">₹ {item.price}</p>
      </div>
    </div>
  );
}
