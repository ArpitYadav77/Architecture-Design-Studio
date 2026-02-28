import { useState } from "react";
import ScrollReveal from "./ScrollReveal";
import residentialImg from "@/assets/project-residential.jpg";
import commercialImg from "@/assets/project-commercial.jpg";
import interiorImg from "@/assets/project-interior.jpg";
import urbanImg from "@/assets/project-urban.jpg";
import villaImg from "@/assets/project-villa.jpg";
import museumImg from "@/assets/project-museum.jpg";

const categories = ["All", "Commercial", "Competition", "Cultural", "Education", "Hospitality", "Interior", "Residential", "Urban"];

const projects = [
  { title: "Cedar House", category: "Residential", location: "Portland, OR", year: "2024", image: residentialImg, size: "large" },
  { title: "Vertex Tower", category: "Commercial", location: "Chicago, IL", year: "2023", image: commercialImg, size: "small" },
  { title: "The Loft Gallery", category: "Interior", location: "New York, NY", year: "2023", image: interiorImg, size: "small" },
  { title: "Dune Villa", category: "Residential", location: "Scottsdale, AZ", year: "2024", image: villaImg, size: "large" },
  { title: "Civic Promenade", category: "Urban", location: "Seattle, WA", year: "2022", image: urbanImg, size: "small" },
  { title: "The Wave Museum", category: "Commercial", location: "Miami, FL", year: "2024", image: museumImg, size: "large" },
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleCategoryChange = (category: string) => {
    if (category === activeCategory) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveCategory(category);
      setTimeout(() => setIsTransitioning(false), 50);
    }, 200);
  };

  const filtered = activeCategory === "All"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="section-padding bg-foreground">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <p className="text-accent mb-6 text-xs tracking-widest uppercase" style={{ letterSpacing: '0.15em' }}>
            PORTFOLIO
          </p>
          <h2 className="heading-lg text-background mb-12">
            Selected <em className="italic">Works</em>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="flex flex-wrap gap-8 mb-16">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className="relative group text-sm text-background/60 hover:text-background transition-colors duration-300 py-2"
                style={{ letterSpacing: '0.12em' }}
              >
                {cat.toUpperCase()}
                {/* Underline animation */}
                <span
                  className={`absolute bottom-0 left-0 h-[1px] bg-accent transition-all duration-300 ease-out ${
                    activeCategory === cat
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                />
              </button>
            ))}
          </div>
        </ScrollReveal>

        <div 
          className={`grid grid-cols-1 md:grid-cols-2 gap-6 transition-opacity duration-300 ${
            isTransitioning ? "opacity-0" : "opacity-100"
          }`}
        >
          {filtered.map((project, i) => (
            <ScrollReveal key={project.title} delay={i * 100} className={project.size === "large" ? "md:col-span-1" : ""}>
              <div className="group cursor-pointer overflow-hidden relative">
                <div className="aspect-[4/3] overflow-hidden bg-muted relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 group-hover:blur-sm"
                  />
                  
                  {/* Frosted overlay on hover - using warm black with transparency */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-[2px]"
                    style={{ backgroundColor: 'rgba(28, 23, 20, 0.65)' }}
                  />
                  
                  {/* Project info overlay - centered */}
                  <div className="absolute inset-0 flex flex-col items-start justify-start p-8 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <h3 
                      className="font-serif text-3xl md:text-4xl font-light text-white mb-3"
                      style={{ letterSpacing: '0.02em' }}
                    >
                      {project.title}
                    </h3>
                    <p 
                      className="text-sm text-white/90 uppercase font-medium"
                      style={{ letterSpacing: '0.12em' }}
                    >
                      {project.category} · {project.location}
                    </p>
                  </div>
                </div>
                
                {/* Always visible minimal info */}
                <div className="mt-4">
                  <h3 className="font-serif text-xl font-medium text-background">{project.title}</h3>
                  <p className="label-text text-background/70 mt-1 font-medium">{project.category} · {project.location}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
