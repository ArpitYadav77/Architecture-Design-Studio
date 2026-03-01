import { useState, useEffect } from "react";
import ScrollReveal from "./ScrollReveal";

const services = [
  {
    title: "Architectural Design",
    category: "DESIGN",
    tag: "ARCHITECTURE",
    description:
      "Comprehensive design services from concept through construction documentation, creating spaces that balance aesthetics with functionality.",
    images: [
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e",
      "https://images.unsplash.com/photo-1492724441997-5dc865305da7",
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab",
    ],
  },
  {
    title: "Interior Design",
    category: "DESIGN",
    tag: "INTERIOR",
    description:
      "Thoughtful interior environments that extend the architectural vision, curating materials, lighting, and furnishings.",
    images: [
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688",
    ],
  },
  {
    title: "Urban Planning",
    category: "PLANNING",
    tag: "URBAN",
    description:
      "Master planning and urban design that shapes communities, creating coherent and livable public spaces.",
    images: [
      "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df",
      "https://images.unsplash.com/photo-1444723121867-7a241cacace9",
      "https://images.unsplash.com/photo-1467269204594-9661b134dd2b",
    ],
  },
  {
    title: "Project and Consultation",
    category: "CONSULTING",
    tag: "PROJECTS",
    description:
      "Expert guidance for adaptive reuse and renovation projects, preserving character while introducing modern functionality.",
    images: [
      "https://images.unsplash.com/photo-1505842465776-3d90f6163108",
      "https://images.unsplash.com/photo-1497366216548-37526070297c",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858",
    ],
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 px-6 bg-neutral-100">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <p className="text-sm tracking-widest text-gray-500 uppercase mb-4">
            SERVICES
          </p>

          <h2 className="text-4xl md:text-5xl font-serif text-black mb-6">
            What We <em className="italic">Offer</em>
          </h2>

          <p className="text-gray-600 max-w-2xl mb-16">
            A full spectrum of architectural services, from initial vision to realized space.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {services.map((service, i) => (
            <ServiceCard key={i} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ServiceCard = ({ service }) => {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  // Auto slide every 3 seconds
useEffect(() => {
  if (!paused) return;

  const interval = setInterval(() => {
    setCurrent((prev) =>
      prev === service.images.length - 1 ? 0 : prev + 1
    );
  }, 3000);

  return () => clearInterval(interval);
}, [paused, service.images.length]);
  return (
    <div
      className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onMouseMove={(e) => {
        const card = e.currentTarget;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = (y - centerY) / 25;
        const rotateY = (centerX - x) / 25;
        card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
      }}
      onMouseLeaveCapture={(e) => {
        e.currentTarget.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";
      }}
    >
      {/* Image Slider */}
      <div className="relative aspect-[4/3] overflow-hidden">
        {service.images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={service.title}
            className={`absolute w-full h-full object-cover transition-opacity duration-1000 ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        {/* Overlay for text visibility */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Tags */}
        <div className="absolute top-6 left-6 flex gap-3 z-10">
          <span className="px-3 py-1 bg-white/90 text-xs uppercase rounded-md tracking-wider">
            {service.tag}
          </span>
          <span className="px-3 py-1 bg-white/90 text-xs uppercase rounded-md tracking-wider">
            {service.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-8 bg-white">
        <h3 className="text-2xl md:text-3xl font-serif mb-4 text-black">
          {service.title}
        </h3>
        <p className="text-gray-600 leading-relaxed">
          {service.description}
        </p>
      </div>
    </div>
  );
};

export default Services;