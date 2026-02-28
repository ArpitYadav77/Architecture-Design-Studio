import { useState } from "react";
import ScrollReveal from "./ScrollReveal";
import { MapPin, Phone, Mail } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error("Please fill in all fields.");
      return;
    }
    toast.success("Thank you for your inquiry. We'll be in touch shortly.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <div>
            <ScrollReveal>
              <p className="label-text text-accent mb-6">Contact</p>
              <h2 className="heading-lg text-foreground mb-8">
                Let's Build
                <br />
                <em className="italic">Together</em>
              </h2>
              <p className="body-lg text-muted-foreground mb-12 max-w-md font-medium">
                Have a project in mind? We'd love to hear about it. Reach out and
                let's start a conversation.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-accent mt-1 stroke-[1.5]" />
                  <div>
                    <p className="label-text text-foreground mb-1">Studio</p>
                    <p className="body-lg text-muted-foreground font-medium">
                      412 West Commerce St<br />San Antonio, TX 78205
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="w-5 h-5 text-accent mt-1 stroke-[1.5]" />
                  <div>
                    <p className="label-text text-foreground mb-1">Phone</p>
                    <p className="body-lg text-muted-foreground font-medium">+1 (210) 555-0147</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="w-5 h-5 text-accent mt-1 stroke-[1.5]" />
                  <div>
                    <p className="label-text text-foreground mb-1">Email</p>
                    <p className="body-lg text-muted-foreground font-medium">hello@atelier-arch.com</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={100}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="label-text text-foreground block mb-2">Name</label>
                <input
                  id="name"
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  maxLength={100}
                  className="w-full bg-transparent border-b border-border py-3 font-sans text-base font-medium text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-accent transition-colors"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label htmlFor="email" className="label-text text-foreground block mb-2">Email</label>
                <input
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  maxLength={255}
                  className="w-full bg-transparent border-b border-border py-3 font-sans text-base font-medium text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-accent transition-colors"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="label-text text-foreground block mb-2">Message</label>
                <textarea
                  id="message"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  maxLength={1000}
                  rows={5}
                  className="w-full bg-transparent border-b border-border py-3 font-sans text-base font-medium text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-accent transition-colors resize-none"
                  placeholder="Tell us about your project"
                />
              </div>
              <button
                type="submit"
                className="label-text px-10 py-4 bg-foreground text-background hover:bg-accent hover:text-accent-foreground transition-colors duration-300 mt-4"
              >
                Send Inquiry
              </button>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
