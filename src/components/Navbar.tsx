import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Projects", mobileLabel: "Projects", path: "/", id: "home" },
    { label: "About", mobileLabel: "About", path: "/about", id: "about" },
    { label: "Services", mobileLabel: "Services", path: "/services", id: "services" },
    { label: "Process", mobileLabel: "Process", path: "/about", id: "process" },
    { label: "Contact", mobileLabel: "Contact", path: "/contact", id: "contact" },
  ];

  const isActiveLink = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname === path;
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#E9E6E2]/95 backdrop-blur-md border-b border-stone-300 shadow-sm"
          : "bg-[#E9E6E2]/90 backdrop-blur-sm"
      }`}
    >
      <div className="flex items-center justify-between px-6 md:px-12 lg:px-24 py-5">
        <Link
          to="/"
          className="font-serif text-xl md:text-2xl font-medium tracking-wide text-[#2A221D] hover:text-accent transition-colors duration-300"
          style={{ letterSpacing: '0.05em' }}
        >
          BSA<span className="text-accent">.</span>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.path}
              className="relative group text-sm font-medium text-[#6B645A] hover:text-[#2A221D] transition-colors duration-300 py-2"
              style={{ letterSpacing: '0.1em' }}
            >
              {link.label.toUpperCase()}
              {/* Underline animation */}
              <span
                className={`absolute bottom-0 left-0 h-[1px] bg-accent transition-all duration-300 ease-out ${
                  isActiveLink(link.path)
                    ? "w-full"
                    : "w-0 group-hover:w-full"
                }`}
              />
            </Link>
          ))}
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.path}
              className="relative group text-xs font-medium text-[#6B645A] hover:text-[#2A221D] transition-colors duration-300 py-1"
              style={{ letterSpacing: '0.08em' }}
            >
              {link.mobileLabel.toUpperCase()}
              {/* Mobile underline */}
              <span
                className={`absolute bottom-0 left-0 h-[1px] bg-accent transition-all duration-300 ease-out ${
                  isActiveLink(link.path)
                    ? "w-full"
                    : "w-0 group-hover:w-full"
                }`}
              />
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
