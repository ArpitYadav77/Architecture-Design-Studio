const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="px-6 md:px-12 lg:px-24 py-12 border-t border-border">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        <div className="font-serif text-xl font-semibold tracking-wide text-foreground">
          Bachitter singh associates<span className="text-accent">.</span>
        </div>

        <div className="flex gap-8">
          {["Instagram"].map((social) => (
            <a
              key={social}
              href="#"
              className="label-text text-foreground hover:opacity-70 transition-colors font-bold"
            >
              {social}
            </a>
          ))}
        </div>

        <p className="font-sans text-xs text-foreground font-bold">
          © {currentYear} Bachitter singh associates. All rights reserved.
        </p>

      </div>
    </footer>
  );
};

export default Footer;
