import logo from "@/assets/logo.png";

const navLinks = [
  { label: "Top Up", href: "#" },
  { label: "Transaction", href: "#" },
  { label: "Akun", href: "#" },
];

export default function Navbar() {
  return (
    <nav className="w-full border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="/" className="flex items-center gap-2">
          <img
            src={logo}
            alt="SIMS PPOB Logo"
            className="h-8 w-8 object-contain"
          />
          <span className="text-sm font-semibold tracking-wide text-gray-900">
            SIMS PPOB
          </span>
        </a>

        <ul className="flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-sm font-medium text-gray-800 transition-colors duration-150 hover:text-red-500"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
