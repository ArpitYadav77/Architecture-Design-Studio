import { useState } from "react";
import ScrollReveal from "./ScrollReveal";

type Service = {
  title: string;
  category: string;
  tag: string;
  description: string;
  images: string[];
};

const serviceData: Service[] = [
  {
    title: "Architectural Design",
    category: "Architecture",
    tag: "Core Service",
    description:
      "From concept to completion — we design buildings that endure. Our architectural services cover residential, commercial, civic, and institutional projects, with a focus on purpose-driven form and contextual sensitivity.",
    images: [
      "https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    title: "Urban & Master Planning",
    category: "Urban Design",
    tag: "Planning",
    description:
      "We have planned over 420 acres of civic and institutional land across India. Our urban design practice integrates land use, mobility, public space, and community needs into coherent, liveable environments.",
    images: [
      "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    title: "Interior Architecture",
    category: "Interiors",
    tag: "Design",
    description:
      "Interior architecture that is inseparable from the building itself. We design interiors for institutional lobbies, cultural spaces, residences, and hospitality projects that reflect material honesty and spatial clarity.",
    images: [
      "https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    title: "Project Management & Supervision",
    category: "Construction",
    tag: "Execution",
    description:
      "We oversee projects through every construction phase — ensuring specifications are met, timelines are honoured, and the built outcome matches the design intent. Trusted across government and private sector projects.",
    images: [
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    title: "Feasibility & Site Studies",
    category: "Consultancy",
    tag: "Advisory",
    description:
      "Pre-project analysis including site assessment, zoning compliance, regulatory approvals, and feasibility studies. We help clients understand the full potential and constraints of a site before design begins.",
    images: [
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    title: "Conservation & Restoration",
    category: "Heritage",
    tag: "Speciality",
    description:
      "Sensitive intervention in heritage structures and historically significant buildings. We approach conservation with rigorous research and a commitment to preserving the authenticity and character of existing fabric.",
    images: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1200&q=80",
    ],
  },
];

const ServiceCard = ({ service }: { service: Service }) => {
  const [current, setCurrent] = useState(0);

  return (
    <div
      className="relative bg-white overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
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
        <div className="absolute inset-0 bg-black/30 pointer-events-none" />

        {/* Tags */}
        <div className="absolute top-5 left-5 flex gap-2 z-20">
          <span className="px-3 py-1 bg-[#2A221D]/80 text-white text-[10px] uppercase tracking-widest">
            {service.tag}
          </span>
          <span className="px-3 py-1 bg-amber-700/80 text-white text-[10px] uppercase tracking-widest">
            {service.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-8 bg-white border-b border-neutral-100">
        <h3 className="text-xl md:text-2xl font-serif font-light mb-3 text-neutral-900">
          {service.title}
        </h3>
        <p className="text-neutral-600 leading-relaxed text-sm">
          {service.description}
        </p>
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <>
      {/* Header band */}
      <div className="bg-[#2A221D] py-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <p className="text-[10px] uppercase tracking-[0.25em] text-amber-400 mb-4">What We Do</p>
            <h1 className="font-serif text-4xl md:text-6xl font-light text-white leading-tight">
              Our <em className="italic">Services</em>
            </h1>
            <p className="mt-6 text-white/60 text-base max-w-xl leading-relaxed">
              Four decades of practice across architecture, urban design, project management, 
              and heritage conservation — trusted by government and private clients alike.
            </p>
          </ScrollReveal>
        </div>
      </div>

      {/* Services grid */}
      <section className="bg-[#f5f2ee] py-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <p className="text-[10px] uppercase tracking-[0.25em] text-amber-700 mb-6">Capabilities</p>
            <h2 className="font-serif text-3xl md:text-4xl font-light text-neutral-900 mb-16">
              Built on <em className="italic">expertise</em>
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceData.map((service, i) => (
              <ScrollReveal key={service.title} delay={i * 100}>
                <ServiceCard service={service} />
              </ScrollReveal>
            ))}
          </div>

          {/* CTA strip */}
          <ScrollReveal delay={200}>
            <div className="mt-20 border border-neutral-300 bg-white p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-amber-700 mb-2">Have a project in mind?</p>
                <h3 className="font-serif text-2xl font-light text-neutral-900">
                  Let's start a <em className="italic">conversation</em>
                </h3>
              </div>
              <a
                href="/contact"
                className="flex-shrink-0 bg-[#2A221D] hover:bg-amber-800 text-white text-xs uppercase tracking-[0.2em] px-10 py-4 transition-colors duration-300 whitespace-nowrap"
              >
                Contact Us
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
};

export default Services;
