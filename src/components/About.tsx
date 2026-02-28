import ScrollReveal from "./ScrollReveal";
import portraitImg from "@/assets/architect-portrait.jpg";

const stats = [
  { number: "25+", label: "Years Experience" },
  { number: "180+", label: "Projects Completed" },
  { number: "12", label: "Design Awards" },
  { number: "8", label: "Countries" },
];

const About = () => {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <p className="label-text text-accent mb-6">About</p>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <div>
            <ScrollReveal delay={100}>
              <h2 className="heading-lg text-foreground mb-8">
                Design is the silent
                <br />
                ambassador of <em className="italic">quality</em>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="body-lg text-muted-foreground mb-6 font-medium">
                Founded in 2001, BSA is an award-winning architecture and design
                studio led by principal architect Marcus Hale. We believe that
                exceptional architecture emerges from a deep understanding of place,
                purpose, and the human experience.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={300}>
              <p className="body-lg text-muted-foreground mb-10 font-medium">
                Our approach blends modernist principles with contextual sensitivity,
                creating buildings that are both timeless and deeply connected to
                their environment. Every project begins with listening — to the land,
                the light, and the lives that will unfold within our spaces.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={400}>
              <div className="architectural-line mb-10" />
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <p className="font-serif text-3xl md:text-4xl font-light text-foreground">
                      {stat.number}
                    </p>
                    <p className="label-text text-muted-foreground mt-2">{stat.label}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={200} className="relative">
            <div className="aspect-[3/4] overflow-hidden">
              <img
                src={portraitImg}
                alt="Architect in studio"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-accent text-accent-foreground px-6 py-4">
              <p className="label-text">Marcus Hale</p>
              <p className="font-serif text-lg font-light mt-1">Principal Architect</p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default About;
