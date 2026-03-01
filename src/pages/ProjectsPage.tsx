import { useParams, useNavigate, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { portfolioProjects, landmarkProjects } from "@/data/projects";

// Competition always last
const categories = [
  "All",
  "Commercial",
  "Cultural",
  "Education",
  "Hospitality",
  "Interior",
  "Residential",
  "Urban",
  "Competition",
];

const categoryPath = (cat: string) =>
  cat === "All" ? "/projects" : `/projects/${cat.toLowerCase()}`;

const ProjectsPage = () => {
  const { category } = useParams<{ category: string }>();
  const navigate = useNavigate();

  const activeCategory = category
    ? categories.find((c) => c.toLowerCase() === category.toLowerCase()) ?? "All"
    : "All";

  const filtered =
    activeCategory === "All"
      ? portfolioProjects
      : portfolioProjects.filter((p) => p.category.toLowerCase() === activeCategory.toLowerCase());

  const showLandmarks = activeCategory === "All";

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="pt-24 pb-20 max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        {/* Breadcrumb + heading */}
        <ScrollReveal>
          <div className="mb-4 flex items-center gap-2">
            <Link
              to="/"
              className="text-xs text-foreground/50 hover:text-foreground transition-colors uppercase tracking-widest"
              style={{ letterSpacing: "0.15em" }}
            >
              Home
            </Link>
            <span className="text-foreground/30 text-xs">›</span>
            <span
              className="text-xs text-accent uppercase tracking-widest"
              style={{ letterSpacing: "0.15em" }}
            >
              Portfolio
            </span>
            {activeCategory !== "All" && (
              <>
                <span className="text-foreground/30 text-xs">›</span>
                <span className="text-xs text-foreground/70 uppercase tracking-widest" style={{ letterSpacing: "0.15em" }}>
                  {activeCategory}
                </span>
              </>
            )}
          </div>

          <h1 className="heading-lg text-foreground mb-2">
            {activeCategory === "All" ? (
              <>Selected <em className="italic">Works</em></>
            ) : (
              <>{activeCategory} <em className="italic">Projects</em></>
            )}
          </h1>
          {activeCategory !== "All" && (
            <p className="text-foreground/50 text-sm mt-2">
              {filtered.length} project{filtered.length !== 1 ? "s" : ""}
            </p>
          )}
        </ScrollReveal>

        {/* Category navigation */}
        <ScrollReveal delay={100}>
          <div className="flex flex-wrap gap-8 mt-10 mb-14">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => navigate(categoryPath(cat))}
                className="relative group text-sm text-foreground/60 hover:text-foreground transition-colors duration-300 py-2"
                style={{ letterSpacing: "0.12em" }}
              >
                {cat.toUpperCase()}
                <span
                  className={`absolute bottom-0 left-0 h-[1px] bg-accent transition-all duration-300 ease-out ${
                    activeCategory === cat ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* ── LANDMARK / PRESTIGE PROJECTS ── */}
        {showLandmarks && (
          <div className="mb-20">
            <ScrollReveal>
              <div className="flex items-center gap-4 mb-10">
                <div className="w-1 h-8 bg-accent" />
                <div>
                  <p className="text-[10px] uppercase tracking-[0.25em] text-accent mb-1">Prestige Works</p>
                  <h2 className="text-2xl md:text-3xl font-serif font-light text-foreground">
                    Landmark <em className="italic">Projects</em>
                  </h2>
                </div>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {landmarkProjects.map((project, i) => (
                <ScrollReveal key={project.slug} delay={i * 120}>
                  <Link
                    to={`/project/${project.slug}`}
                    className="group block cursor-pointer overflow-hidden"
                  >
                    <div className="aspect-[4/3] overflow-hidden bg-muted relative">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                      />
                      <div className="absolute top-4 left-4 bg-accent/90 text-white text-[10px] uppercase tracking-widest px-3 py-1">
                        Landmark
                      </div>
                      <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6"
                        style={{ backgroundColor: "rgba(28, 23, 20, 0.78)" }}
                      >
                        <p className="text-white/80 text-sm leading-relaxed">{project.tagline}</p>
                        <span className="mt-3 text-[10px] text-white/80 border border-white/30 px-4 py-2 uppercase tracking-widest self-start" style={{ letterSpacing: "0.15em" }}>
                          View Project
                        </span>
                      </div>
                    </div>
                    <div className="mt-4 pb-6 border-b border-foreground/10">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="font-serif text-xl font-medium text-foreground group-hover:text-accent transition-colors duration-300">{project.title}</h3>
                          <p className="label-text text-foreground/60 mt-1">{project.category} · {project.location}</p>
                        </div>
                        <span className="text-xs text-accent font-medium uppercase tracking-widest mt-1">{project.year}</span>
                      </div>
                    </div>
                  </Link>
                </ScrollReveal>
              ))}
            </div>

            {/* All works divider */}
            <ScrollReveal delay={200}>
              <div className="flex items-center gap-4 mt-16 mb-2">
                <div className="w-1 h-8 bg-foreground/20" />
                <div>
                  <p className="text-[10px] uppercase tracking-[0.25em] text-foreground/40 mb-1">Portfolio</p>
                  <h2 className="text-2xl md:text-3xl font-serif font-light text-foreground">
                    All <em className="italic">Works</em>
                  </h2>
                </div>
              </div>
            </ScrollReveal>
          </div>
        )}

        {/* Projects grid */}
        {filtered.length === 0 ? (
          <ScrollReveal delay={150}>
            <div className="py-24 text-center">
              <p className="text-foreground/40 text-sm uppercase tracking-widest" style={{ letterSpacing: "0.15em" }}>
                No projects in this category yet
              </p>
              <button
                onClick={() => navigate("/projects")}
                className="mt-8 text-sm text-accent border border-accent/30 px-6 py-3 hover:bg-accent/5 transition-colors"
                style={{ letterSpacing: "0.1em" }}
              >
                VIEW ALL WORKS
              </button>
            </div>
          </ScrollReveal>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filtered.map((project, i) => (
              <ScrollReveal key={project.slug} delay={i * 100}>
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
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{ backgroundColor: "rgba(28, 23, 20, 0.65)" }}
                    />
                    <div className="absolute inset-0 flex flex-col items-start justify-end p-8 opacity-0 group-hover:opacity-100 transition-all duration-500">
                      <p className="text-[10px] text-accent uppercase font-semibold mb-2" style={{ letterSpacing: "0.18em" }}>
                        {project.category}
                      </p>
                      <h3
                        className="font-serif text-2xl md:text-3xl font-light text-white mb-2"
                        style={{ letterSpacing: "0.02em" }}
                      >
                        {project.title}
                      </h3>
                      <p className="text-white/70 text-xs uppercase" style={{ letterSpacing: "0.12em" }}>
                        {project.location} · {project.year}
                      </p>
                      <span className="mt-4 text-[10px] text-white/90 border border-white/40 px-4 py-2 uppercase tracking-widest" style={{ letterSpacing: "0.15em" }}>
                        View Project
                      </span>
                    </div>
                  </div>
                  <div className="mt-4">
                    <h3 className="font-serif text-xl font-medium text-foreground group-hover:text-accent transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="label-text text-foreground/70 mt-1 font-medium">
                      {project.category} · {project.location}
                    </p>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default ProjectsPage;

