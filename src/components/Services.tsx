import ScrollReveal from "./ScrollReveal";
import { Compass, Home, Building2, LayoutGrid } from "lucide-react";

const services = [
  {
    icon: Compass,
    title: "Architectural Design",
    category: "DESIGN",
    tag: "ARCHITECTURE",
    description: "Comprehensive design services from concept through construction documentation, creating spaces that balance aesthetics with functionality.",
  },
  {
    icon: Home,
    title: "Interior Design",
    category: "DESIGN",
    tag: "INTERIOR",
    description: "Thoughtful interior environments that extend the architectural vision, curating materials, lighting, and furnishings.",
  },
  {
    icon: Building2,
    title: "Urban Planning",
    category: "PLANNING",
    tag: "URBAN",
    description: "Master planning and urban design that shapes communities, creating coherent and livable public spaces.",
  },
  {
    icon: LayoutGrid,
    title: "P&C Project and Consultation",
    category: "CONSULTING",
    tag: "PROJECTS",
    description: "Expert guidance for adaptive reuse and renovation projects, preserving character while introducing modern functionality.",
  },
];

const Services = () => {
  return (
    <section id="services" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <p className="text-accent mb-6 text-xs uppercase" style={{ letterSpacing: '0.15em' }}>
            SERVICES
          </p>
          <h2 className="heading-lg text-foreground mb-4" style={{ letterSpacing: '0.02em' }}>
            What We <em className="italic">Offer</em>
          </h2>
          <p className="body-lg text-muted-foreground max-w-2xl mb-16 font-medium" style={{ letterSpacing: '0.02em' }}>
            A full spectrum of architectural services, from initial vision to realized space.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8" style={{ perspective: "1000px" }}>
          {services.map((service, i) => (
            <ScrollReveal key={service.title} delay={i * 100}>
              <div 
                className="group relative bg-background rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
                style={{ transformStyle: "preserve-3d" }}
                onMouseMove={(e) => {
                  const card = e.currentTarget;
                  const rect = card.getBoundingClientRect();
                  const x = e.clientX - rect.left;
                  const y = e.clientY - rect.top;
                  const centerX = rect.width / 2;
                  const centerY = rect.height / 2;
                  const rotateX = (y - centerY) / 20;
                  const rotateY = (centerX - x) / 20;
                  card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'rotateX(0deg) rotateY(0deg) scale(1)';
                }}
              >
                {/* Placeholder for image - will be added later */}
                <div className="aspect-[4/3] bg-gradient-to-br from-muted to-secondary/50 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <service.icon className="w-20 h-20 text-accent/30 stroke-[1]" />
                  </div>
                  
                  {/* Tags at top */}
                  <div className="absolute top-6 left-6 flex gap-3">
                    <span className="px-3 py-1 bg-background/90 backdrop-blur-sm text-foreground text-xs uppercase rounded-md" style={{ letterSpacing: '0.12em' }}>
                      {service.tag}
                    </span>
                    <span className="px-3 py-1 bg-background/90 backdrop-blur-sm text-foreground text-xs uppercase rounded-md" style={{ letterSpacing: '0.12em' }}>
                      {service.category}
                    </span>
                  </div>
                </div>

                {/* Card content */}
                <div className="p-8">
                  <h3 className="font-serif text-2xl md:text-3xl font-light text-foreground mb-4 group-hover:text-accent transition-colors duration-300" style={{ letterSpacing: '0.02em' }}>
                    {service.title}
                  </h3>
                  <p className="body-lg text-muted-foreground leading-relaxed font-medium" style={{ letterSpacing: '0.02em' }}>
                    {service.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
