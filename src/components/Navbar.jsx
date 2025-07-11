import { useState } from "react";
import { MdMenu, MdClose } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";

const links = [
  { name: "Home", to: "/" },
  { name: "Individual Tax", to: "/individual-tax" },
  { name: "Corporate Tax", to: "/corporate-tax" },
  { name: "Business Services", to: "/business-services" },
  { name: "Important Dates", to: "/important-dates" },
  { name: "Contact Us", to: "/contact" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm">
      <div className="container mx-auto flex items-center justify-between px-6 py-3">
        {/* Brand */}
        <Link to="/">
          <img
            src="./logo.png"
            alt="FiscalX Logo"
            className="h-12 w-auto"
          />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8">
          {links.map(({ name, to }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                isActive
                  ? "text-fiscalblue font-semibold border-b-2 border-fiscalgreen pb-1"
                  : "text-gray-700 hover:text-fiscalblue"
              }
            >
              {name}
            </NavLink>
          ))}
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <MdClose className="h-6 w-6" />
          ) : (
            <MdMenu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-sm">
          <div className="flex flex-col space-y-2 px-6 py-4">
            {links.map(({ name, to }) => (
              <NavLink
                key={to}
                to={to}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-700 font-semibold border-l-4 border-blue-700 pl-2"
                    : "text-gray-700 hover:text-blue-700 pl-2"
                }
              >
                {name}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
