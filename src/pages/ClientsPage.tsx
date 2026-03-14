import React, { useEffect, useRef, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const clientsData = [
  { title: "Lala Lajpat Rai University of Veterinary and Animal Science", category: "University" },
  { title: "Chaudhary Ranbir Singh University", category: "University" },
  { title: "Bhagat Phool Singh Mahila VishWavidyalaya", category: "University" },
  { title: "Le Meridien Hotels & Resorts", category: "Hospitality" },
  { title: "Chandigarh Golf Club", category: "Golf Association" },
  { title: "Chandigarh Square", category: "Paras Buildtech" },
  { title: "AMAYA, KASAULI", category: "Private" },
  { title: "LandMark Wave", category: "LandMark Group" },
  { title: "Hewlett-Packard Tower, HP Town", category: "HP India" },
  { title: "TRIAM TOWER, I-42, SECTOR 83, ALPHA", category: "Private Developer" },
  { title: "NV Distilleries & Breweries Pvt. Ltd", category: "Industrial" },
  { title: "Clubhouse TDI Mohali", category: "Mohali Club Society" },
  { title: "Farmhouse", category: "Private Family" },
  { title: "Clinic", category: "Private Medical Practice" },
  { title: "Reception", category: "Private" },
  { title: "Haryana Chief Minister Secretariat Building", category: "Government of Haryana" },
  { title: "Kurukshetra University, Kurukshetra", category: "University" },
  { title: "Pt. Sundarlal Sharma (Open) University, Chhattisgarh", category: "University" },
  { title: "Residential Township for RGTPP, Hisar", category: "HPGCL / RGTPP" },
  { title: "Haryana CM Residence", category: "Government of Haryana" },
  { title: "Galaxy World Mall", category: "Galaxy Group" },
  { title: "Hotel Barog Valley", category: "Private" },
  { title: "Farmville", category: "Private" },
  { title: "Dr. Attri Residence", category: "Private" },
  { title: "Dr. Harkant Residence", category: "Private" },
  { title: "Ecocity", category: "Ecocity Developers" },
  { title: "Doon", category: "Private" },
  { title: "SBFI", category: "SBFI" },
  { title: "Wentworth", category: "Private" },
];

const ClientCard = ({ client, index }: { client: { title: string; category: string }; index: number }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      });
    }, { threshold: 0.1 });

    const current = domRef.current;
    if (current) observer.observe(current);

    return () => {
      if (current) observer.unobserve(current);
    };
  }, []);

  const delay = (index % 6) * 100;

  return (
    <div
      ref={domRef}
      className={`
        flex flex-col items-center justify-center text-center
        bg-white rounded-xl border border-stone-200/60 p-5 md:p-7
        shadow-sm hover:shadow-md hover:border-accent/40 hover:-translate-y-1 hover:scale-[1.02]
        transition-all duration-500 ease-out group aspect-[4/3]
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
      `}
      style={{ transitionDelay: isVisible ? `${delay}ms` : '0ms' }}
    >
      <h3 className="font-serif text-[13px] sm:text-[15px] font-semibold text-stone-800 leading-snug mb-3 group-hover:text-accent transition-colors duration-300 px-1 uppercase">
        {client.title}
      </h3>
      <p className="text-[9px] sm:text-[10px] text-stone-400 uppercase tracking-widest font-semibold mt-auto transition-colors duration-300 group-hover:text-stone-500">
        {client.category}
      </p>
    </div>
  );
};

const ClientsPage: React.FC = () => {
  useEffect(() => {
    document.title = "Clients | Bachitter Singh Associates";
  }, []);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <div className="flex-1 pt-32 pb-24 bg-[#FAF9F6] min-h-[calc(100vh-200px)]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Heading */}
          <div className="text-center mb-16 sm:mb-20 animate-fade-up">
            <h1 className="text-4xl md:text-5xl font-serif text-[#2A221D] mb-6">
              Trusted By Leading Organizations
            </h1>
            <div className="w-24 h-1 bg-accent mx-auto mb-8 animate-line-grow"></div>
            <p className="text-base sm:text-lg text-stone-600 max-w-2xl mx-auto leading-relaxed">
              We take pride in our collaborations with esteemed institutions, government bodies, and leading enterprises across various sectors.
            </p>
          </div>

          {/* Grid Layout of Client Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6 md:gap-7">
            {clientsData.map((client, index) => (
              <ClientCard key={index} client={client} index={index} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ClientsPage;
