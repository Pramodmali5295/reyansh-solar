import { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { MapPin, Zap, ExternalLink } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);
import projectFarm from "@/assets/project-farm.png";
import projectOffice from "@/assets/project-office.png";
import projectVilla from "@/assets/project-villa.png";
import heroSolar1 from "@/assets/hero-solar-1.jpg";
import heroSolar2 from "@/assets/hero-solar-2.jpg";
import heroSolar3 from "@/assets/hero-solar-3.jpg";
import commercialSolar from "@/assets/commercial-solar.png";
import residentialSolar from "@/assets/residential-solar.png";

const projects = [
  { image: projectFarm, title: "Gujarat Shakti Solar Park", location: "Patan, Gujarat", capacity: "15 MW", type: "Industrial" },
  { image: projectOffice, title: "TechTrend Corporate HQ", location: "Hitech City, Hyderabad", capacity: "800 kW", type: "Commercial" },
  { image: projectVilla, title: "Palm Grove Estates", location: "Goa, India", capacity: "25 kW", type: "Residential" },
  { image: heroSolar3, title: "Green Valley Residences", location: "Bengaluru, Karnataka", capacity: "150 kW", type: "Residential" },
];

const filters = ["All", "Residential", "Commercial", "Industrial"];

const ProjectsSection = ({ showHeader = true }: { showHeader?: boolean }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [filter, setFilter] = useState("All");

  const filtered = filter === "All" ? projects : projects.filter((p) => p.type === filter);

  useGSAP(() => {
    // 1. Header Animation (if visible)
    if (showHeader) {
      gsap.fromTo(".projects-header > *",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, stagger: 0.15, ease: "power3.out", scrollTrigger: { trigger: ".projects-section", start: "top 85%" } }
      );
    }
    
    // 2. Filters Animation
    gsap.fromTo(".filter-btn",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: "power3.out", scrollTrigger: { trigger: ".projects-section", start: "top 80%" } }
    );

    // 3. Project Cards Animation (runs on mount AND when filter changes)
    gsap.fromTo(".project-card",
      { opacity: 0, scale: 0.95, y: 20 },
      { opacity: 1, scale: 1, y: 0, duration: 0.5, stagger: 0.08, ease: "power2.out", clearProps: "all" }
    );

  }, { scope: containerRef, dependencies: [filter, showHeader] });

  return (
    <section id="projects" className="projects-section section-padding bg-section-alt" ref={containerRef}>
      <div className="w-full max-w-full px-6 md:px-12 lg:px-20">
        {showHeader && (
          <div
            className="projects-header mx-auto mb-16 max-w-4xl text-center"
          >
            <span className="mb-2 inline-block text-sm font-semibold uppercase tracking-widest text-primary">
              Our Portfolio
            </span>
            <h2 className="mb-6 font-bold text-foreground heading-section">
              Clean Energy Projects Across India
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground leading-relaxed">
              From urban rooftops to rural solar farms, explore our diverse portfolio of engineering excellence 
              delivering sustainable energy to thousands of households and businesses.
            </p>
          </div>
        )}

        <div className="mb-12 flex flex-wrap justify-center gap-3">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`filter-btn rounded-full px-8 py-3 text-sm font-bold transition-all ${
                filter === f
                  ? "bg-primary text-primary-foreground shadow-xl scale-105"
                  : "bg-card text-muted-foreground hover:bg-primary/5 hover:text-primary"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((p, i) => (
            <div
              key={p.title}
              className="project-card group overflow-hidden rounded-3xl bg-card shadow-lg transition-all hover:shadow-2xl border border-border/50"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 flex items-end p-6">
                   <span className="text-white flex items-center gap-2 font-semibold">
                      View Details <ExternalLink className="h-4 w-4" />
                   </span>
                </div>
                <div className="absolute top-4 right-4 rounded-full bg-accent/90 backdrop-blur-md px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-accent-foreground">
                  {p.type}
                </div>
              </div>
              <div className="p-6">
                <h3 className="mb-3 text-xl font-bold text-foreground group-hover:text-primary transition-colors">{p.title}</h3>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4 text-primary" /> {p.location}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Zap className="h-4 w-4 text-accent" /> <span className="font-bold text-foreground">{p.capacity}</span> installed
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
