import { useState } from "react";
import ScrollReveal from "./ScrollReveal";
import { Briefcase, MapPin, Clock, ChevronDown, ChevronUp, Upload } from "lucide-react";
import { toast } from "sonner";

type Vacancy = {
  id: number;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  requirements: string[];
};

const vacancies: Vacancy[] = [
  {
    id: 1,
    title: "Architect — Project Lead",
    department: "Architecture",
    location: "Chandigarh, India",
    type: "Full-time",
    description:
      "We are seeking an experienced Project Lead Architect to oversee institutional and civic projects from design development through construction. You will collaborate directly with the principal architect and represent the firm at client meetings.",
    requirements: [
      "B.Arch or M.Arch with minimum 5 years of relevant experience",
      "Proficiency in AutoCAD, Revit, and SketchUp",
      "Experience with large-scale government or institutional projects preferred",
      "Strong communication skills and ability to manage project timelines",
      "Council of Architecture (CoA) registration required",
    ],
  },
  {
    id: 2,
    title: "Junior Architect / Architectural Assistant",
    department: "Architecture",
    location: "Chandigarh, India",
    type: "Full-time",
    description:
      "A motivated graduate or early-career architect to support the design team across residential, commercial, and civic projects. This is an excellent opportunity to learn within a practice with over 40 years of landmark work.",
    requirements: [
      "B.Arch (recent graduates encouraged to apply)",
      "Working knowledge of AutoCAD and hand drafting",
      "Strong portfolio demonstrating design thinking",
      "Willingness to learn and take initiative",
    ],
  },
  {
    id: 3,
    title: "Urban Planner",
    department: "Urban Design & Planning",
    location: "Chandigarh, India",
    type: "Full-time",
    description:
      "Join our urban design team to contribute to master planning and township development projects across India. You will support site analysis, zoning studies, and coordination with government stakeholders.",
    requirements: [
      "B.Plan / M.Plan with minimum 3 years of experience",
      "Familiarity with government planning regulations in India",
      "Proficiency in GIS tools and AutoCAD",
      "Experience with civic or township master planning preferred",
    ],
  },
];

const Careers = () => {
  const [openId, setOpenId] = useState<number | null>(null);
  const [applyId, setApplyId] = useState<number | null>(null);
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [cvFile, setCvFile] = useState<File | null>(null);

  const toggleOpen = (id: number) => setOpenId(openId === id ? null : id);
  const openApply = (id: number) => { setApplyId(id); window.scrollTo({ top: 0, behavior: "smooth" }); };
  const closeApply = () => { setApplyId(null); setForm({ name: "", email: "", phone: "", message: "" }); setCvFile(null); };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim()) {
      toast.error("Please fill in your name and email.");
      return;
    }
    const role = vacancies.find((v) => v.id === applyId)?.title ?? "the position";
    toast.success(`Application submitted for "${role}". We will review and be in touch.`);
    closeApply();
  };

  return (
    <section id="careers" className="bg-background">
      {/* Page header band */}
      <div className="bg-[#2A221D] py-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <p className="text-[10px] uppercase tracking-[0.25em] text-amber-400 mb-4">Join the Firm</p>
            <h1 className="font-serif text-4xl md:text-6xl font-light text-white leading-tight">
              Careers at<br />
              <em className="italic">Bachitter Singh Associates</em>
            </h1>
            <p className="mt-6 text-white/60 text-base max-w-xl leading-relaxed">
              We are always looking for talented architects, planners, and designers who share 
              our commitment to enduring, purposeful work. Join a practice with over 40 years 
              of landmark projects across India.
            </p>
          </ScrollReveal>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-20">

        {/* Apply overlay */}
        {applyId !== null && (
          <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4" onClick={(e) => e.target === e.currentTarget && closeApply()}>
            <div className="bg-white max-w-lg w-full p-10 shadow-2xl max-h-[90vh] overflow-y-auto">
              <p className="text-[10px] uppercase tracking-[0.25em] text-amber-700 mb-2">Apply Now</p>
              <h2 className="font-serif text-2xl font-light text-neutral-900 mb-1">
                {vacancies.find((v) => v.id === applyId)?.title}
              </h2>
              <p className="text-xs text-neutral-400 mb-8 uppercase tracking-widest">
                {vacancies.find((v) => v.id === applyId)?.location} · {vacancies.find((v) => v.id === applyId)?.type}
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-xs uppercase tracking-widest text-neutral-500 mb-2">
                    Full Name <span className="text-amber-600">*</span>
                  </label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    required
                    className="w-full bg-transparent border-b border-neutral-300 py-3 text-sm font-medium text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-amber-700 transition-colors"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-widest text-neutral-500 mb-2">
                    Email Address <span className="text-amber-600">*</span>
                  </label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    required
                    className="w-full bg-transparent border-b border-neutral-300 py-3 text-sm font-medium text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-amber-700 transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-widest text-neutral-500 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full bg-transparent border-b border-neutral-300 py-3 text-sm font-medium text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-amber-700 transition-colors"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-widest text-neutral-500 mb-2">
                    Cover Note / Message
                  </label>
                  <textarea
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    rows={3}
                    className="w-full bg-transparent border-b border-neutral-300 py-3 text-sm font-medium text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-amber-700 transition-colors resize-none"
                    placeholder="Tell us about yourself and your interest in this role..."
                  />
                </div>

                {/* CV upload */}
                <div>
                  <label className="block text-xs uppercase tracking-widest text-neutral-500 mb-3">
                    Upload CV / Resume
                  </label>
                  <label className="flex items-center gap-4 border border-dashed border-neutral-300 hover:border-amber-600 transition-colors cursor-pointer px-5 py-4 rounded-none">
                    <Upload className="w-5 h-5 text-neutral-400 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-neutral-600 font-medium">
                        {cvFile ? cvFile.name : "Click to upload PDF or DOCX"}
                      </p>
                      <p className="text-xs text-neutral-400 mt-0.5">Max 5 MB</p>
                    </div>
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx"
                      className="hidden"
                      onChange={(e) => setCvFile(e.target.files?.[0] ?? null)}
                    />
                  </label>
                </div>

                <div className="flex gap-4 pt-2">
                  <button
                    type="submit"
                    className="flex-1 bg-[#2A221D] hover:bg-amber-800 text-white text-xs uppercase tracking-[0.2em] py-4 transition-colors duration-300"
                  >
                    Submit Application
                  </button>
                  <button
                    type="button"
                    onClick={closeApply}
                    className="px-6 border border-neutral-300 text-neutral-500 hover:border-neutral-500 text-xs uppercase tracking-widest transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Intro */}
        <ScrollReveal>
          <p className="text-[10px] uppercase tracking-[0.25em] text-amber-700 mb-6">Current Vacancies</p>
          <h2 className="font-serif text-3xl md:text-4xl font-light text-foreground mb-4">
            Open <em className="italic">Positions</em>
          </h2>
          <p className="text-foreground/60 text-base max-w-2xl leading-relaxed mb-14">
            We are a studio that values precision, purpose, and creative rigour. 
            If you are passionate about architecture that lasts, we would love to hear from you.
          </p>
        </ScrollReveal>

        {/* Vacancy list */}
        <div className="space-y-4">
          {vacancies.map((v, i) => (
            <ScrollReveal key={v.id} delay={i * 100}>
              <div className="border border-foreground/10 hover:border-accent/40 transition-colors">
                {/* Header row */}
                <div
                  className="flex items-center justify-between px-8 py-6 cursor-pointer"
                  onClick={() => toggleOpen(v.id)}
                >
                  <div className="flex-1 min-w-0">
                    <h3 className="font-serif text-xl font-light text-foreground">{v.title}</h3>
                    <div className="flex flex-wrap gap-4 mt-2">
                      <span className="flex items-center gap-1.5 text-xs text-foreground/50 uppercase tracking-wider">
                        <Briefcase className="w-3.5 h-3.5" /> {v.department}
                      </span>
                      <span className="flex items-center gap-1.5 text-xs text-foreground/50 uppercase tracking-wider">
                        <MapPin className="w-3.5 h-3.5" /> {v.location}
                      </span>
                      <span className="flex items-center gap-1.5 text-xs text-foreground/50 uppercase tracking-wider">
                        <Clock className="w-3.5 h-3.5" /> {v.type}
                      </span>
                    </div>
                  </div>
                  <div className="ml-4 text-foreground/40 flex-shrink-0">
                    {openId === v.id ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </div>
                </div>

                {/* Expanded details */}
                {openId === v.id && (
                  <div className="px-8 pb-8 border-t border-foreground/10">
                    <p className="text-foreground/70 leading-relaxed text-sm mt-6 mb-6">{v.description}</p>
                    <div className="mb-8">
                      <p className="text-xs uppercase tracking-[0.2em] text-foreground/50 mb-3">Requirements</p>
                      <ul className="space-y-2">
                        {v.requirements.map((req, j) => (
                          <li key={j} className="flex items-start gap-3 text-sm text-foreground/70">
                            <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0 mt-2" />
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <button
                      onClick={() => openApply(v.id)}
                      className="bg-[#2A221D] hover:bg-amber-800 text-white text-xs uppercase tracking-[0.2em] px-10 py-4 transition-colors duration-300"
                    >
                      Apply Now
                    </button>
                  </div>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* General enquiry callout */}
        <ScrollReveal delay={200}>
          <div className="mt-20 border border-foreground/10 bg-[#f5f2ee] p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-amber-700 mb-2">Don't see a suitable role?</p>
              <h3 className="font-serif text-2xl font-light text-neutral-900">
                Send us a <em className="italic">speculative application</em>
              </h3>
              <p className="text-neutral-600 text-sm mt-2 max-w-md leading-relaxed">
                We are always interested in hearing from talented architects and designers. 
                Email your portfolio and CV to{" "}
                <a href="mailto:bachittersingh@yahoo.com" className="text-amber-700 underline underline-offset-2">
                  bachittersingh@yahoo.com
                </a>
              </p>
            </div>
            <a
              href="mailto:bachittersingh@yahoo.com"
              className="flex-shrink-0 bg-[#2A221D] hover:bg-amber-800 text-white text-xs uppercase tracking-[0.2em] px-10 py-4 transition-colors duration-300 whitespace-nowrap"
            >
              Email Us
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Careers;
