import ScrollReveal from "./ScrollReveal";

const stats = [
  { number: "40+", label: "Years of Legacy" },
  { number: "200+", label: "Projects Delivered" },
  { number: "420+", label: "Acres Master Planned" },
  { number: "Pan India", label: "Institutional Presence" },
];

const team = [
  {
    name: "Ar. Bachitter Singh",
    role: "Principal Architect",
    image:
      "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Ar. Meera Kapoor",
    role: "Design Director",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Ar. Rajiv Malhotra",
    role: "Urban Planning Lead",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80",
  },
];

const AboutAndTeam = () => {
  return (
    <>
      {/* ================= ABOUT SECTION ================= */}
      <section id="about" className="py-28 bg-[#f5f2ee] text-neutral-900">
        <div className="max-w-7xl mx-auto px-6">

          <ScrollReveal>
            <p className="uppercase tracking-[0.3em] text-sm text-amber-700 mb-10">
              About
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

            {/* LEFT CONTENT */}
            <div>
              <ScrollReveal delay={100}>
                <h2 className="text-4xl md:text-5xl font-serif font-light leading-tight mb-8">
                  Architecture that harmonizes <br />
                  <span className="italic">vision, function & legacy</span>
                </h2>
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <p className="text-lg leading-relaxed text-neutral-700 mb-8">
                  Established in 1983, our practice has shaped institutional,
                  civic, and large-scale developments across India. Our work
                  integrates architectural excellence with engineering precision,
                  creating spaces that reflect permanence and purpose.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={300}>
                <p className="text-base leading-relaxed text-neutral-600 mb-12">
                  From high-level government infrastructure to expansive
                  master-planned townships, our portfolio reflects trust at
                  the highest levels of governance and institutional leadership.
                  We design environments that balance spatial intelligence,
                  cultural sensitivity, and long-term sustainability.
                </p>
              </ScrollReveal>

              {/* STATS */}
              <ScrollReveal delay={400}>
                <div className="border-t border-neutral-300 pt-10 grid grid-cols-2 md:grid-cols-4 gap-10">
                  {stats.map((stat) => (
                    <div key={stat.label}>
                      <p className="font-serif text-3xl md:text-4xl font-light">
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

            {/* RIGHT IMAGE WITH NAME BOX */}
            <ScrollReveal delay={200}>
              <div className="relative aspect-[3/4] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80"
                  alt="Principal Architect"
                  className="w-full h-full object-cover"
                />

                {/* NAME BOX OVERLAY */}
                <div className="absolute bottom-8 left-8 bg-[#b37a45] text-white px-10 py-6 shadow-2xl">
                  <p className="uppercase tracking-[0.35em] text-xs">
                    AR. BACHITTER SINGH
                  </p>
                  <p className="font-serif text-xl font-light mt-2">
                    Principal Architect
                  </p>
                </div>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* ================= OUR TEAM SECTION ================= */}
      <section id="team" className="py-28 bg-white text-neutral-900">
        <div className="max-w-7xl mx-auto px-6">

          <ScrollReveal>
            <p className="uppercase tracking-[0.3em] text-sm text-amber-700 mb-10">
              Our Team
            </p>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <h2 className="text-4xl md:text-5xl font-serif font-light leading-tight mb-20">
              The minds shaping <span className="italic">architectural excellence</span>
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-14">
            {team.map((member, index) => (
              <ScrollReveal key={member.name} delay={index * 150}>
                <div>
                  <div className="aspect-[3/4] overflow-hidden mb-6">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition duration-700"
                    />
                  </div>

                  <h3 className="font-serif text-xl font-light">
                    {member.name}
                  </h3>
                  <p className="uppercase text-xs tracking-widest text-neutral-500 mt-2">
                    {member.role}
                  </p>
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