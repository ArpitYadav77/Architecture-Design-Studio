import ScrollReveal from "./ScrollReveal";

const steps = [
  {
    number: "01",
    title: "Concept",
    description: "We begin with deep listening — understanding your vision, site conditions, and program requirements to establish a clear design direction.",
  },
  {
    number: "02",
    title: "Design",
    description: "Through iterative sketches, models, and renderings, we develop a design that balances beauty, function, and budget.",
  },
  {
    number: "03",
    title: "Development",
    description: "Detailed construction documents, material specifications, and engineering coordination bring the design to buildable precision.",
  },
  {
    number: "04",
    title: "Execution",
    description: "On-site oversight ensures that every detail is realized as intended, from structural integrity to finish quality.",
  },
];

const Process = () => {
  return (
    <section id="process" className="section-padding bg-foreground text-background">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <p className="label-text text-accent mb-6">Process</p>
          <h2 className="heading-lg mb-16">
            How We <em className="italic">Work</em>
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {steps.map((step, i) => (
            <ScrollReveal key={step.number} delay={i * 150}>
              <div className="relative">
                <span className="font-serif text-6xl font-light text-background/10 block mb-4">
                  {step.number}
                </span>
                <div className="w-8 h-px bg-accent mb-6" />
                <h3 className="heading-md mb-4">{step.title}</h3>
                <p className="font-sans text-base font-medium leading-relaxed text-background/70">
                  {step.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
