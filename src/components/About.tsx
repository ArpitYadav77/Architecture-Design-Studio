import ScrollReveal from "./ScrollReveal";
import architectPortrait from "@/assets/architect-portrait.jpg";

const stats = [
  { number: "1983", label: "Year Established" },
  { number: "40+", label: "Years of Practice" },
  { number: "200+", label: "Projects Delivered" },
  { number: "420+", label: "Acres Master Planned" },
];

const milestones = [
  { year: "1983", event: "Firm founded by Ar. Bachitter Singh in Chandigarh. Early commissions set the foundation for a practice devoted to civic and institutional architecture." },
  { year: "1990s", event: "Landmark government and judiciary projects including the Punjab & Haryana High Court complex — cementing the firm's standing in institutional design at the highest level." },
  { year: "2000s", event: "Appointed for Vidhan Sabha work and major legislative campus design — a hallmark of public trust and architectural authority." },
  { year: "2010s", event: "Expanded practice into master planning, urban design, and educational campuses. Pan-India institutional presence established with 420+ acres planned." },
  { year: "Present", event: "Over 200 completed projects. A legacy practice spanning residential, cultural, civic, hospitality, and urban sectors across India." },
];

const philosophy = [
  {
    title: "Design with Purpose",
    body: "Every space we design carries a clear intention — whether it is a legislative chamber that commands civic gravity or a residence that nurtures private life. Form is never arbitrary; it emerges from function, place, and people.",
  },
  {
    title: "Architecture as Legacy",
    body: "We build for permanence. Our institutional and civic works are designed to outlast generations — structures that become part of a city's identity and a nation's collective memory.",
  },
  {
    title: "Rooted in Context",
    body: "Our work draws from the climate, culture, and character of the places we build in. We believe in architecture that belongs — that feels inevitable to its site and respectful of its surroundings.",
  },
];

const AboutAndTeam = () => {
  return (
    <>
      {/* ================= ABOUT SECTION ================= */}
      <section id="about" className="py-28 bg-[#f5f2ee] text-neutral-900">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

          <ScrollReveal>
            <p className="uppercase tracking-[0.3em] text-xs text-amber-700 mb-10">
              About the Firm
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

            {/* LEFT CONTENT */}
            <div>
              <ScrollReveal delay={100}>
                <h2 className="text-4xl md:text-5xl font-serif font-light leading-tight mb-8">
                  Architecture that harmonises <br />
                  <span className="italic">vision, function & legacy</span>
                </h2>
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <p className="text-lg leading-relaxed text-neutral-700 mb-6">
                  Established in <strong>1983</strong> by <strong>Ar. Bachitter Singh</strong>, our practice has shaped 
                  institutional, civic, and large-scale developments across India for over four decades. 
                  Our work integrates architectural excellence with engineering precision, creating spaces 
                  that reflect permanence, purpose, and public trust.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={300}>
                <p className="text-base leading-relaxed text-neutral-600 mb-6">
                  From high-level government infrastructure — including the <strong>Vidhan Sabha</strong> and 
                  the <strong>Punjab &amp; Haryana High Court</strong> — to expansive master-planned 
                  townships and educational campuses, our portfolio reflects the confidence placed in us 
                  by the highest levels of governance and institutional leadership.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={360}>
                <p className="text-base leading-relaxed text-neutral-600 mb-12">
                  Headquartered at <strong>1514, Sector 7C, Chandigarh</strong>, we design environments 
                  that balance spatial intelligence, cultural sensitivity, and long-term sustainability — 
                  with a commitment to architecture that truly endures.
                </p>
              </ScrollReveal>

              {/* STATS */}
              <ScrollReveal delay={420}>
                <div className="border-t border-neutral-300 pt-10 grid grid-cols-2 md:grid-cols-4 gap-10">
                  {stats.map((stat) => (
                    <div key={stat.label}>
                      <p className="font-serif text-3xl md:text-4xl font-light text-neutral-900">
                        {stat.number}
                      </p>
                      <p className="uppercase text-xs tracking-wider text-neutral-500 mt-2">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>

            {/* RIGHT IMAGE */}
            <ScrollReveal delay={200}>
              <div className="relative aspect-[3/4] overflow-hidden">
                <img
                  src={architectPortrait}
                  alt="Ar. Bachitter Singh — Principal Architect"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-8 left-8 bg-[#b37a45] text-white px-10 py-6 shadow-2xl">
                  <p className="uppercase tracking-[0.35em] text-xs">
                    AR. BACHITTER SINGH
                  </p>
                  <p className="font-serif text-xl font-light mt-2">
                    Principal Architect
                  </p>
                  <p className="text-xs text-white/70 mt-1 uppercase tracking-widest">Est. 1983 · Chandigarh</p>
                </div>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* ================= PHILOSOPHY SECTION ================= */}
      <section id="philosophy" className="py-28 bg-white text-neutral-900">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

          <ScrollReveal>
            <p className="uppercase tracking-[0.3em] text-xs text-amber-700 mb-6">
              Design Philosophy
            </p>
            <h2 className="text-4xl md:text-5xl font-serif font-light leading-tight mb-16">
              Principles that guide <span className="italic">every project</span>
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {philosophy.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 150}>
                <div className="border-t-2 border-amber-700 pt-8">
                  <h3 className="font-serif text-2xl font-light mb-4">{item.title}</h3>
                  <p className="text-neutral-600 leading-relaxed text-base">{item.body}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= MILESTONES SECTION ================= */}
      <section id="milestones" className="py-28 bg-[#2A221D] text-white">
        <div className="max-w-5xl mx-auto px-6 md:px-12 lg:px-24">

          <ScrollReveal>
            <p className="uppercase tracking-[0.3em] text-xs text-amber-400 mb-6">
              Firm History
            </p>
            <h2 className="text-4xl md:text-5xl font-serif font-light leading-tight mb-20">
              Four decades of <span className="italic">shaping India</span>
            </h2>
          </ScrollReveal>

          <div className="relative border-l border-white/20 pl-10 space-y-14">
            {milestones.map((m, i) => (
              <ScrollReveal key={m.year} delay={i * 120}>
                <div className="relative">
                  {/* dot */}
                  <span className="absolute -left-[44px] top-1 w-3 h-3 rounded-full bg-amber-500 border-2 border-[#2A221D]" />
                  <p className="text-amber-400 text-xs uppercase tracking-[0.25em] mb-2">{m.year}</p>
                  <p className="text-white/80 text-base leading-relaxed">{m.event}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutAndTeam;
