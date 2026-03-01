import { useState } from "react";

type Service = {
  title: string;
  category: string;
  tag: string;
  description: string;
  images: string[];
};

const ServiceCard = ({ service }: { service: Service }) => {
  const [current, setCurrent] = useState(0);

  return (
    <div
      className="relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
      onMouseLeave={() => setCurrent(0)}
    >
      {/* Image Section */}
      <div className="relative aspect-[4/3] overflow-hidden">
        {service.images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={service.title}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        {/* Hover Zones */}
        <div className="absolute inset-0 flex z-10">
          {service.images.map((_, index) => (
            <div
              key={index}
              className="flex-1"
              onMouseEnter={() => setCurrent(index)}
            />
          ))}
        </div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40 pointer-events-none"></div>

        {/* Tags */}
        <div className="absolute top-6 left-6 flex gap-3 z-20">
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

export default ServiceCard;