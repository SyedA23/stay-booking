export default function Loader() {
  return (
    <div className="grid md:grid-cols-3 gap-6 p-20">
      {[...Array(6)].map((_, i) => (
        <div key={i} className="h-80 bg-gray-200 animate-pulse rounded-3xl" />
      ))}
    </div>
  );
}
