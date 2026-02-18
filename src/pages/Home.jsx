import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="relative h-screen">
      <img
        src="https://images.unsplash.com/photo-1505691938895-1758d7feb511"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/50" />

      <div className="relative h-full flex items-center">
        <div className="px-8 md:px-20 text-white">
          <h1 className="text-6xl font-bold max-w-xl">Escape the ordinary.</h1>

          <p className="mt-6 max-w-md">
            Discover curated luxury villas and unforgettable stays.
          </p>

          <Link
            to="/stays"
            className="mt-8 inline-block bg-white text-black px-8 py-3 rounded-full"
          >
            Explore Villas
          </Link>
        </div>
      </div>
    </section>
  );
}
