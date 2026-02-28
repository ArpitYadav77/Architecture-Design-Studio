import { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Determine active section
      const sections = ["projects", "about", "services", "contact"];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      setActiveSection(current || "");
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Projects", href: "#projects", id: "projects" },
    { label: "About", href: "#about", id: "about" },
    { label: "Services", href: "#services", id: "services" },
    { label: "Contact", href: "#contact", id: "contact" },
  ];

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-background/70 backdrop-blur-sm"
      }`}
    >
      <div className="flex items-center justify-between px-6 md:px-12 lg:px-24 py-5">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="font-serif text-xl md:text-2xl font-medium tracking-wide text-foreground hover:text-accent transition-colors duration-300"
          style={{ letterSpacing: '0.05em' }}
        >
          BSA<span className="text-accent">.</span>
        </button>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => scrollTo(link.href)}
              className="relative group text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300 py-2"
              style={{ letterSpacing: '0.1em' }}
            >
              {link.label.toUpperCase()}
              {/* Underline animation */}
              <span
                className={`absolute bottom-0 left-0 h-[1px] bg-accent transition-all duration-300 ease-out ${
                  activeSection === link.id
                    ? "w-full"
                    : "w-0 group-hover:w-full"
                }`}
              />
            </button>
          ))}
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center gap-4">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => scrollTo(link.href)}
              className="relative group text-xs font-medium text-muted-foreground hover:text-foreground transition-colors duration-300 py-1"
              style={{ letterSpacing: '0.08em' }}
            >
              {link.label.toUpperCase()}
              {/* Mobile underline */}
              <span
                className={`absolute bottom-0 left-0 h-[1px] bg-accent transition-all duration-300 ease-out ${
                  activeSection === link.id
                    ? "w-full"
                    : "w-0 group-hover:w-full"
                }`}
              />
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
