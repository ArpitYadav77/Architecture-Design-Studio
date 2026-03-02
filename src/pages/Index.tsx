import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Scroll3DSection from "@/components/Scroll3DSection";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div id="hero">
        <Hero />
      </div>
      <div id="architecture-reel">
        <Scroll3DSection />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
