import { useRef } from "react";

export default function Home() {
  const inputRef = useRef();

  return (
    <section className="text-center py-16 bg-blue-50">
      <h1 className="text-4xl font-bold mb-4">Discover Unique Stays</h1>

      <div className="flex justify-center gap-2">
        <input
          ref={inputRef}
          placeholder="Search city"
          className="border px-3 py-2"
        />

        <button
          onClick={() => inputRef.current.focus()}
          className="bg-blue-600 text-white px-4"
        >
          Focus
        </button>
      </div>
    </section>
  );
}
