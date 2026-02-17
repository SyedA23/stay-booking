import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [dark, setDark] = useState(false);

  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
    setDark((p) => !p);
  };

  return (
    <header className="border-b bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <h2 className="font-bold text-xl">StayEase</h2>

        <nav className="flex gap-6 items-center">
          <Link to="/">Home</Link>
          <Link to="/stays">Stays</Link>

          <button onClick={toggleTheme} className="border px-3 py-1 rounded">
            {dark ? "Light" : "Dark"}
          </button>
        </nav>
      </div>
    </header>
  );
}
