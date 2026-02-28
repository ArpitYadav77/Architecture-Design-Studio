import { useEffect, useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const autoSlideRef = useRef<NodeJS.Timeout | null>(null);

  // Add your architectural images here
  const slides = [
    "/logo.png",
    "/logo.png", // Replace with actual image paths
    "/logo.png", // Replace with actual image paths
  ];

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setTimeout(() => setIsAnimating(false), 1000);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setTimeout(() => setIsAnimating(false), 1000);
  };

  const goToSlide = (index: number) => {
    if (isAnimating || index === currentSlide) return;
    setIsAnimating(true);
    setCurrentSlide(index);
    setTimeout(() => setIsAnimating(false), 1000);
  };

  // Auto-slide functionality
  useEffect(() => {
    if (!isPaused) {
      autoSlideRef.current = setInterval(() => {
        nextSlide();
      }, 6000); // 6 seconds
    }

    return () => {
      if (autoSlideRef.current) {
        clearInterval(autoSlideRef.current);
      }
    };
  }, [isPaused, currentSlide]);

  // Preload next image
  useEffect(() => {
    const nextIndex = (currentSlide + 1) % slides.length;
    const img = new Image();
    img.src = slides[nextIndex];
  }, [currentSlide]);

  return (
    <section 
      className="relative h-screen w-full overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Image Slides */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-transform duration-1000 ease-in-out ${
              index === currentSlide
                ? "translate-x-0"
                : index < currentSlide
                ? "-translate-x-full"
                : "translate-x-full"
            }`}
          >
            <img
              src={slide}
              alt={`Architecture ${index + 1}`}
              className="w-full h-full object-cover"
            />
            {/* Dark overlay for text readability */}
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
        ))}
      </div>

      {/* Centered Text Content */}
      <div className="relative z-10 h-full flex items-center justify-center text-center text-white px-6">
        <div 
          key={currentSlide}
          className="animate-fade-up-slow"
        >
          <p 
            className="text-sm text-white/90 font-semibold mb-6 opacity-0 animate-fade-up uppercase"
            style={{ animationDelay: "0.3s", animationFillMode: "forwards", letterSpacing: '0.15em' }}
          >
            ARCHITECTURE & DESIGN STUDIO
          </p>
          
          <h1 
            className="text-5xl md:text-7xl lg:text-8xl font-serif leading-tight mb-8 opacity-0 animate-fade-up"
            style={{ animationDelay: "0.5s", animationFillMode: "forwards", letterSpacing: '0.02em' }}
          >
            Where Form
            <br />
            <span className="italic">Meets Purpose</span>
          </h1>

          <p 
            className="text-lg md:text-xl text-white/90 font-medium mb-12 max-w-2xl mx-auto opacity-0 animate-fade-up"
            style={{ animationDelay: "0.7s", animationFillMode: "forwards", letterSpacing: '0.02em' }}
          >
            We design spaces that inspire, endure, and transform the way people experience the built environment.
          </p>

          <div 
            className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-up"
            style={{ animationDelay: "0.9s", animationFillMode: "forwards" }}
          >
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-10 py-4 bg-accent hover:bg-[#D4A45C] text-white font-medium uppercase transition-all duration-300 transform hover:scale-105"
              style={{ letterSpacing: '0.1em' }}
            >
              VIEW PROJECTS
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-10 py-4 border border-white/40 hover:border-accent hover:bg-accent/10 text-white font-medium uppercase transition-all duration-300 transform hover:scale-105"
              style={{ letterSpacing: '0.1em' }}
            >
              GET IN TOUCH
            </a>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        disabled={isAnimating}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-20 text-white/60 hover:text-white transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed group"
        aria-label="Previous slide"
      >
        <div className="p-2 bg-black/20 hover:bg-black/40 backdrop-blur-sm rounded-full transition-all duration-300 group-hover:scale-110">
          <ChevronLeft className="w-8 h-8" />
        </div>
      </button>

      <button
        onClick={nextSlide}
        disabled={isAnimating}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-20 text-white/60 hover:text-white transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed group"
        aria-label="Next slide"
      >
        <div className="p-2 bg-black/20 hover:bg-black/40 backdrop-blur-sm rounded-full transition-all duration-300 group-hover:scale-110">
          <ChevronRight className="w-8 h-8" />
        </div>
      </button>

      {/* Pagination Dots */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            disabled={isAnimating}
            className="group disabled:cursor-not-allowed"
            aria-label={`Go to slide ${index + 1}`}
          >
            <div
              className={`h-[1px] transition-all duration-500 ${
                index === currentSlide
                  ? "w-12 bg-accent"
                  : "w-8 bg-white/40 group-hover:bg-accent/60"
              }`}
            />
          </button>
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-28 left-1/2 -translate-x-1/2 z-20 opacity-0 animate-fade-up" style={{ animationDelay: "1.2s", animationFillMode: "forwards" }}>
        <p className="text-xs text-white/80 font-medium mb-2 uppercase" style={{ letterSpacing: '0.15em' }}>SCROLL TO EXPLORE</p>
        <div className="w-px h-12 bg-white/60 mx-auto"></div>
      </div>
    </section>
  );
};

export default Hero;
