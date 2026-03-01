import { useNavigate, Link } from "react-router-dom";
import ScrollReveal from "./ScrollReveal";
import { portfolioProjects } from "@/data/projects";

const categories = ["All", "Commercial", "Cultural", "Education", "Hospitality", "Interior", "Residential", "Urban", "Competition"];

const sizeMap: Record<string, "large" | "small"> = {
  "cedar-house":      "large",
  "vertex-tower":     "small",
  "the-loft-gallery": "small",
  "dune-villa":       "large",
  "civic-promenade":  "small",
  "the-wave-museum":  "large",
};

const Projects = () => {
  const navigate = useNavigate();

  const handleCategoryChange = (category: string) => {
    if (category === "All") {
      navigate("/projects");
    } else {
      navigate(`/projects/${category.toLowerCase()}`);
    }
  };

  const filtered = portfolioProjects;

  return (
    <section id="projects" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <p className="text-accent mb-6 text-xs tracking-widest uppercase" style={{ letterSpacing: '0.15em' }}>
            PORTFOLIO
          </p>
          <h2 className="heading-lg text-foreground mb-12">
            Selected <em className="italic">Works</em>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="flex flex-wrap gap-8 mb-16">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className="relative group text-sm text-foreground/60 hover:text-foreground transition-colors duration-300 py-2"
                style={{ letterSpacing: '0.12em' }}
              >
                {cat.toUpperCase()}
                <span className="absolute bottom-0 left-0 h-[1px] bg-accent transition-all duration-300 ease-out w-0 group-hover:w-full" />
              </button>
            ))}
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filtered.map((project, i) => {
            const size = sizeMap[project.slug] ?? "small";
            return (
              <ScrollReveal key={project.slug} delay={i * 100} className={size === "large" ? "md:col-span-1" : ""}>
                <Link
                  to={`/project/${project.slug}`}
                  className="group block cursor-pointer overflow-hidden relative"
                >
                  <div className="aspect-[4/3] overflow-hidden bg-muted relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                    />
                    {/* Dark overlay on hover */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{ backgroundColor: 'rgba(28, 23, 20, 0.60)' }}
                    />
                    {/* Hover info */}
                    <div className="absolute inset-0 flex flex-col items-start justify-end p-8 opacity-0 group-hover:opacity-100 transition-all duration-500">
                      <p className="text-[10px] text-accent uppercase font-semibold mb-2" style={{ letterSpacing: '0.18em' }}>
                        {project.category}
                      </p>
                      <h3 className="font-serif text-2xl md:text-3xl font-light text-white mb-2" style={{ letterSpacing: '0.02em' }}>
                        {project.title}
                      </h3>
                      <p className="text-white/70 text-xs uppercase" style={{ letterSpacing: '0.12em' }}>
                        {project.location} · {project.year}
                      </p>
                      <span className="mt-4 text-[10px] text-white/90 border border-white/40 px-4 py-2 uppercase tracking-widest" style={{ letterSpacing: '0.15em' }}>
                        View Project
                      </span>
                    </div>
                  </div>
                  {/* Always-visible info */}
                  <div className="mt-4">
                    <h3 className="font-serif text-xl font-medium text-foreground group-hover:text-accent transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="label-text text-foreground/70 mt-1 font-medium">{project.category} · {project.location}</p>
                  </div>
                </Link>
              </ScrollReveal>
            );
          })}
        </div>

        <ScrollReveal delay={300}>
          <div className="mt-16 text-center">
            <Link
              to="/projects"
              className="inline-block text-sm uppercase border border-foreground/20 px-10 py-4 hover:bg-foreground hover:text-background transition-all duration-300"
              style={{ letterSpacing: '0.15em' }}
            >
              View Full Portfolio
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Projects;
