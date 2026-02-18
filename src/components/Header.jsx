import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="bg-[#fffff] py-6">
      {/* Floating navbar */}
      <header className="max-w-[1200px] mx-auto bg-[#fffff] text-black rounded-lg px-8 py-4 shadow-md flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-yellow-500 rounded-sm" />
          <h1 className="font-semibold tracking-wide">StayEase</h1>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex gap-8 text-sm">
          <Link to="/" className="hover:text-yellow-400">
            Homepage
          </Link>
          <Link to="/stays" className="hover:text-yellow-400">
            Villas
          </Link>
          <a className="hover:text-yellow-400">Experiences</a>
          <a className="hover:text-yellow-400">News</a>
          <a className="hover:text-yellow-400">Careers</a>
        </nav>

        {/* CTA */}
      </header>
    </div>
  );
}
