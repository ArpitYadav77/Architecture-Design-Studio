const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="px-6 md:px-12 lg:px-24 py-12 border-t border-border">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="font-serif text-xl font-medium tracking-wide text-foreground">
          BSA<span className="text-accent">.</span>
        </div>
        <div className="flex gap-8">
          {["Instagram", "LinkedIn", "Pinterest"].map((social) => (
            <a
              key={social}
              href="#"
              className="label-text text-muted-foreground hover:text-foreground transition-colors font-medium"
            >
              {social}
            </a>
          ))}
        </div>
        <p className="font-sans text-xs text-muted-foreground font-medium">
          © {currentYear} BSA. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
