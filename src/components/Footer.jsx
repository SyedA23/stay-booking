import {
  FaLinkedinIn,
  FaInstagram,
  FaFacebookF,
  FaTwitter
} from "react-icons/fa";

export default function Footer() {
  const socialLinks = {
    twitter: "https://twitter.com/stayease",
    linkedin: "https://linkedin.com/company/stayease",
    instagram: "https://instagram.com/stayease",
    facebook: "https://facebook.com/stayease"
  };

  const siteMapLinks = {
    homepage: "/",
    technology: "/technology",
    categories: "/categories",
    resources: "/resources",
    careers: "/careers",
    contact: "/contact"
  };

  const legalLinks = {
    privacy: "/privacy",
    terms: "/terms",
    lawyer: "/lawyer-corner"
  };

  return (
    <footer className="w-full bg-black text-white mt-20">
      {/* Main content */}
      <div className="px-8 md:px-16 py-16 grid md:grid-cols-3 gap-12">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <div className="w-6 h-6 bg-yellow-500 rounded-sm" />
            <h2 className="text-xl font-semibold text-white">StayEase</h2>
          </div>

          <p className="text-gray-300 leading-relaxed">
            Discover curated luxury villas and premium stays designed to create
            unforgettable travel experiences.
          </p>

          {/* Social icons */}
          <div className="flex gap-4 mt-8">
            <a
              href={socialLinks.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-800 rounded-full hover:bg-yellow-500 hover:text-black transition text-white"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>

            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-800 rounded-full hover:bg-yellow-500 hover:text-black transition text-white"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>

            <a
              href={socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-800 rounded-full hover:bg-yellow-500 hover:text-black transition text-white"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>

            <a
              href={socialLinks.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-800 rounded-full hover:bg-yellow-500 hover:text-black transition text-white"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
          </div>
        </div>

        {/* Sitemap */}
        <div>
          <h3 className="font-semibold mb-6 text-white">Site Map</h3>

          <ul className="space-y-3">
            <li>
              <a
                href={siteMapLinks.homepage}
                className="text-gray-300 hover:text-white transition"
              >
                Homepage
              </a>
            </li>
            <li>
              <a
                href={siteMapLinks.technology}
                className="text-gray-300 hover:text-white transition"
              >
                Technology
              </a>
            </li>
            <li>
              <a
                href={siteMapLinks.categories}
                className="text-gray-300 hover:text-white transition"
              >
                Villa Categories
              </a>
            </li>
            <li>
              <a
                href={siteMapLinks.resources}
                className="text-gray-300 hover:text-white transition"
              >
                Resources
              </a>
            </li>
            <li>
              <a
                href={siteMapLinks.careers}
                className="text-gray-300 hover:text-white transition"
              >
                Careers
              </a>
            </li>
            <li>
              <a
                href={siteMapLinks.contact}
                className="text-gray-300 hover:text-white transition"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="font-semibold mb-6 text-white">Legal</h3>

          <ul className="space-y-3">
            <li>
              <a
                href={legalLinks.privacy}
                className="text-gray-300 hover:text-white transition"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href={legalLinks.terms}
                className="text-gray-300 hover:text-white transition"
              >
                Terms of Service
              </a>
            </li>
            <li>
              <a
                href={legalLinks.lawyer}
                className="text-gray-300 hover:text-white transition"
              >
                Lawyer's Corner
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-yellow-500 text-center text-black py-3 text-sm font-medium">
        © 2026 StayEase. All Rights Reserved.
      </div>
    </footer>
  );
}
