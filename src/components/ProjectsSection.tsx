import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { MapPin, Zap, ExternalLink } from "lucide-react";
import projectFarm from "@/assets/project-farm.png";
import projectOffice from "@/assets/project-office.png";
import projectVilla from "@/assets/project-villa.png";
import heroSolar2 from "@/assets/hero-solar-2.jpg";

const projects = [
  { image: projectFarm, title: "Gujarat Shakti Solar Park", location: "Patan, Gujarat", capacity: "15 MW", type: "Industrial" },
  { image: projectOffice, title: "TechTrend Corporate HQ", location: "Hitech City, Hyderabad", capacity: "800 kW", type: "Commercial" },
  { image: projectVilla, title: "Palm Grove Estates", location: "Goa, India", capacity: "25 kW", type: "Residential" },
  { image: heroSolar2, title: "Green Valley Residences", location: "Bengaluru, Karnataka", capacity: "150 kW", type: "Residential" },
  { image: projectOffice, title: "Horizon Business Park", location: "Gurgaon, Haryana", capacity: "1.2 MW", type: "Commercial" },
  { image: projectFarm, title: "Steel Works Industrial Plant", location: "Jamshedpur, Jharkhand", capacity: "5 MW", type: "Industrial" },
  { image: projectVilla, title: "Elite Skyline Villas", location: "Pune, Maharashtra", capacity: "40 kW", type: "Residential" },
  { image: projectOffice, title: "Unity Retail Mall", location: "Kochi, Kerala", capacity: "600 kW", type: "Commercial" },
];

const filters = ["All", "Residential", "Commercial", "Industrial"];

const ProjectsSection = ({ showHeader = true }: { showHeader?: boolean }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [filter, setFilter] = useState("All");

  const filtered = filter === "All" ? projects : projects.filter((p) => p.type === filter);

  return (
    <section id="projects" className="section-padding bg-section-alt" ref={ref}>
      <div className="w-full max-w-full px-6 md:px-12 lg:px-20">
        {showHeader && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mx-auto mb-16 max-w-4xl text-center"
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
          </motion.div>
        )}

        <div className="mb-12 flex flex-wrap justify-center gap-3">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`rounded-full px-8 py-3 text-sm font-bold transition-all ${
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
            <motion.div
              key={p.title}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.08 * i }}
              className="group overflow-hidden rounded-3xl bg-card shadow-lg transition-all hover:shadow-2xl border border-border/50"
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
