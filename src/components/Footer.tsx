const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#f5f3ef] border-t border-neutral-300">
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-20">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-14 text-sm">
          
          {/* Brand */}
          <div className="space-y-6">
            <h2 className="font-serif text-2xl font-semibold tracking-wide text-neutral-900">
              Bachitter Singh Associates<span></span>
            </h2>

            <p className="text-neutral-700 leading-relaxed">
              1514, Sector 7C <br />
              Chandigarh – 160019
            </p>
          </div>

          {/* Contact */}
          <div className="space-y-6 md:pl-8">
            <h3 className="uppercase tracking-[0.25em] text-xs text-neutral-900">
              Contact
            </h3>

            <div className="flex flex-col gap-4 text-neutral-800">
              <a href="tel:+911722792283" className="hover-link">
                +91 172 2792283
              </a>

              <a href="tel:+918860372037" className="hover-link">
                +91 8860372037
              </a>

              <a href="mailto:bachittersingh@yahoo.com" className="hover-link pt-2">
                bachittersingh@yahoo.com
              </a>
            </div>
          </div>

          {/* Social */}
          <div className="space-y-6 md:text-right">
            <h3 className="uppercase tracking-[0.25em] text-xs text-neutral-900 invisible md:visible">
              Social
            </h3>

            <div className="flex flex-col gap-4 text-neutral-800 md:items-end">
              <a href="#" className="hover-link">
                Instagram
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-20 pt-8 border-t border-neutral-300 text-center text-xs text-neutral-600 tracking-wide">
          © {currentYear} Bachitter Singh Associates. All rights reserved.
        </div>

      </div>

      {/* Underline Animation */}
      <style>{`
        .hover-link {
          position: relative;
          display: inline-block;
          width: fit-content;
        }

        .hover-link::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -4px;
          width: 100%;
          height: 1px;
          background-color: currentColor;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.35s ease;
        }

        .hover-link:hover::after {
          transform: scaleX(1);
        }
      `}</style>
    </footer>
  );
};

export default Footer;