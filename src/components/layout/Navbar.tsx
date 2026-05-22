import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/logo.png";

const navLinks = [
  { label: "Top Up", href: "/topup" },
  { label: "Transaction", href: "/transaction" },
  { label: "Akun", href: "/akun" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="w-full border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link to="/home" className="flex items-center gap-2">
          <img
            src={logo}
            alt="SIMS PPOB Logo"
            className="h-8 w-8 object-contain"
          />

          <span className="text-sm font-semibold tracking-wide text-gray-900">
            SIMS PPOB
          </span>
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.href;

            return (
              <li key={link.label}>
                <Link
                  to={link.href}
                  className={`text-sm font-medium transition-colors duration-150 ${
                    isActive
                      ? "text-red-500"
                      : "text-gray-800 hover:text-red-500"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center md:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-800"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-gray-200 bg-white md:hidden">
          <ul className="flex flex-col px-6 py-4">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.href;

              return (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className={`block py-3 text-sm font-medium transition-colors duration-150 ${
                      isActive
                        ? "text-red-500"
                        : "text-gray-800 hover:text-red-500"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </nav>
  );
}