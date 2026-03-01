const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="px-6 md:px-12 lg:px-24 py-16 border-t border-neutral-300 bg-[#f5f3ef]">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-16 text-sm">

        {/* Brand */}
        <div>
          <h2 className="font-serif text-2xl font-semibold tracking-wide text-neutral-900 mb-6">
            Bachitter Singh Associates<span>.</span>
          </h2>
          <p className="text-neutral-700 leading-relaxed">
            1514, Sector 7C <br />
            Chandigarh – 160019
          </p>
        </div>

        {/* Contact */}
        <div>
          <h3 className="uppercase tracking-[0.2em] text-xs text-neutral-900 mb-6">
            Contact
          </h3>

          <div className="flex flex-col gap-3 text-neutral-800">

            <a href="tel:+911722792283" className="hover-link">
              +91 172 2792283
            </a>

            <a href="tel:+918860372037" className="hover-link">
              +91 8860372037
            </a>

            <div className="h-4" />

            <a href="mailto:bachittersingh@yahoo.com" className="hover-link">
              bachittersingh@yahoo.com
            </a>

            <a href="mailto:pryaasthakur14@gmail.com" className="hover-link">
              pryaasthakur14@gmail.com
            </a>

          </div>
        </div>

        {/* Website */}
        <div>
          <h3 className="uppercase tracking-[0.2em] text-xs text-neutral-900 mb-6">
            Website
          </h3>

          <div className="flex flex-col gap-3 text-neutral-800">

            <a
              href="https://www.bachittersinghassociates.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover-link"
            >
              www.bachittersinghassociates.com
            </a>

            {/* Instagram in next line */}
            <a href="#" className="hover-link">
              Instagram
            </a>

          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-16 pt-6 border-t border-neutral-300 text-center text-xs text-neutral-600">
        © {currentYear} Bachitter Singh Associates. All rights reserved.
      </div>

      {/* Underline Animation */}
      <style jsx>{`
        .hover-link {
          position: relative;
          display: inline-block; /* Important */
          width: fit-content;    /* Prevents full-width stretching */
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