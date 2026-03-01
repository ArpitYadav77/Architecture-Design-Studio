import { useEffect, useState, useRef } from "react";
import { ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import heroImg from "@/assets/hero-architecture.jpg";
import commercialImg from "@/assets/project-commercial.jpg";
import museumImg from "@/assets/project-museum.jpg";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const autoSlideRef = useRef<NodeJS.Timeout | null>(null);

  const slides = [
    {
      image: heroImg,
      label: "Architecture & Civic Design",
      heading: "Bachitter Singh\nAssociates",
      sub: "Over four decades of shaping India's most enduring civic, institutional, and architectural landmarks.",
    },
    {
      image: commercialImg,
      label: "Commercial & Institutional",
      heading: "Where Form\nMeets Purpose",
      sub: "From high courts to legislative assemblies — spaces built for permanence, authority, and the public good.",
    },
    {
      image: museumImg,
      label: "Cultural & Urban Works",
      heading: "Legacy\nIn Every Line",
      sub: "200+ delivered projects across India, master-planning 420+ acres of civic and cultural landscape.",
    },
  ];

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setTimeout(() => setIsAnimating(false), 700);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setTimeout(() => setIsAnimating(false), 700);
  };

  const goToSlide = (index: number) => {
    if (isAnimating || index === currentSlide) return;
    setIsAnimating(true);
    setCurrentSlide(index);
    setTimeout(() => setIsAnimating(false), 700);
  };

  // Auto-slide functionality
  useEffect(() => {
    if (!isPaused) {
      autoSlideRef.current = setInterval(() => {
        nextSlide();
      }, 3000); // 3 seconds
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
    img.src = slides[nextIndex].image;
  }, [currentSlide]);

  return (
    <section
      className="relative h-screen w-full overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Image Slides */}
      <div className="absolute inset-0">
        <div className="relative w-full h-screen overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <div key={index} className="w-full h-screen flex-shrink-0 relative">
                <img
                  src={slide.image}
                  alt={slide.label}
                  className="w-full h-full object-cover"
                />
                {/* Dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/35 to-black/70" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Firm identity bar — top left below navbar */}
      <div className="absolute top-[76px] left-6 md:left-12 lg:left-24 z-20 flex items-center gap-3 opacity-0 animate-fade-up"
        style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
      >
        <span
          className="text-[10px] text-white/70 uppercase font-medium tracking-[0.22em]"
        >
          Est. 1983
        </span>
        <span className="w-8 h-[1px] bg-accent/80" />
        <span
          className="text-[10px] text-white/70 uppercase font-medium tracking-[0.22em]"
        >
          Chandigarh, India
        </span>
      </div>

      {/* Location badge — right side */}
      <div className="absolute top-[76px] right-6 md:right-12 z-20 flex items-center gap-2 opacity-0 animate-fade-up"
        style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
      >
        <MapPin className="w-4 h-4 text-accent" />
        <span className="text-[11px] text-white/80 uppercase tracking-[0.18em]">
          1514, Sector 7C, Chandigarh
        </span>
      </div>

      {/* Left-Aligned Text Content */}
      <div className="relative z-10 h-full flex flex-col justify-end pb-32 px-6 md:px-12 lg:px-24">
        {/* Slide label */}
        <p
          key={`label-${currentSlide}`}
          className="text-[11px] text-accent font-semibold mb-5 opacity-0 animate-fade-up uppercase"
          style={{ animationDelay: "0.2s", animationFillMode: "forwards", letterSpacing: "0.20em" }}
        >
          {slides[currentSlide].label}
        </p>

        {/* Main heading */}
        <h1
          key={`h-${currentSlide}`}
          className="text-5xl md:text-7xl lg:text-8xl font-serif font-light leading-[1.08] mb-6 text-white opacity-0 animate-fade-up"
          style={{ animationDelay: "0.35s", animationFillMode: "forwards", letterSpacing: "0.01em", whiteSpace: "pre-line" }}
        >
          {slides[currentSlide].heading}
        </h1>

        {/* Line */}
        <div
          key={`line-${currentSlide}`}
          className="w-12 h-[2px] bg-accent mb-6 opacity-0 animate-fade-up"
          style={{ animationDelay: "0.5s", animationFillMode: "forwards" }}
        />

        {/* Subtext */}
        <p
          key={`sub-${currentSlide}`}
          className="text-base md:text-lg text-white/80 font-light mb-10 max-w-xl opacity-0 animate-fade-up"
          style={{ animationDelay: "0.6s", animationFillMode: "forwards", letterSpacing: "0.02em", lineHeight: "1.7" }}
        >
          {slides[currentSlide].sub}
        </p>

        {/* CTAs */}
        <div
          className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-up"
          style={{ animationDelay: "0.75s", animationFillMode: "forwards" }}
        >
          <Link
            to="/projects"
            className="px-10 py-4 bg-accent hover:bg-[#D4A45C] text-white text-sm font-medium uppercase transition-all duration-300"
            style={{ letterSpacing: "0.12em" }}
          >
            View Portfolio
          </Link>
          <Link
            to="/contact"
            className="px-10 py-4 border border-white/40 hover:border-white text-white text-sm font-medium uppercase transition-all duration-300 hover:bg-white/10"
            style={{ letterSpacing: "0.12em" }}
          >
            Get in Touch
          </Link>
        </div>

        {/* Firm intro strip — bottom right */}
        <div
          className="absolute bottom-8 right-6 md:right-12 lg:right-24 text-right opacity-0 animate-fade-up"
          style={{ animationDelay: "1s", animationFillMode: "forwards" }}
        >
         
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
                  : "w-8 bg-white/40 group-hover:bg-white/70"
              }`}
            />
          </button>
        ))}
      </div>
    </section>
  );
};

export default Hero;

