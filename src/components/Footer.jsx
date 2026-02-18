import {
  FaLinkedinIn,
  FaInstagram,
  FaFacebookF,
  FaTwitter
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0f3a34] text-white mt-20 rounded-3xl mx-6 mb-6 overflow-hidden">
      <div className="px-8 md:px-16 py-16 grid md:grid-cols-3 gap-12">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <div className="w-6 h-6 bg-yellow-500 rounded-sm" />
            <h2 className="text-xl font-semibold">StayEase</h2>
          </div>

          <p className="text-gray-300 leading-relaxed">
            Discover curated luxury villas and premium stays designed to create
            unforgettable travel experiences.
          </p>

          {/* Social */}
          <div className="flex gap-4 mt-6 text-lg">
            <FaTwitter />
            <FaLinkedinIn />
            <FaInstagram />
            <FaFacebookF />
          </div>

          {/* Back to top */}
          <button className="mt-8 border border-gray-400 px-5 py-2 rounded-lg text-sm hover:bg-white hover:text-black transition">
            ↑ Back to Top
          </button>
        </div>

        {/* Sitemap */}
        <div>
          <h3 className="font-semibold mb-6">Site Map</h3>

          <ul className="space-y-3 text-gray-300">
            <li className="hover:text-white cursor-pointer">Homepage</li>
            <li>Technology</li>
            <li>Villa Categories</li>
            <li>Resources</li>
            <li>Careers</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="font-semibold mb-6">Legal</h3>

          <ul className="space-y-3 text-gray-300">
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>Lawyer’s Corner</li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-yellow-500 text-center text-black py-3 text-sm">
        © 2026 StayEase. All Rights Reserved.
      </div>
    </footer>
  );
}
