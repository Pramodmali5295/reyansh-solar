import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { MapPin, Zap } from "lucide-react";
import heroSolar1 from "@/assets/hero-solar-1.jpg";
import heroSolar2 from "@/assets/hero-solar-2.jpg";
import heroSolar3 from "@/assets/hero-solar-3.jpg";

const projects = [
  { image: heroSolar1, title: "Tata Motors Factory", location: "Pune, Maharashtra", capacity: "2.5 MW", type: "Industrial" },
  { image: heroSolar2, title: "Green Valley Residences", location: "Bengaluru, Karnataka", capacity: "150 kW", type: "Residential" },
  { image: heroSolar3, title: "Agri Solar Farm", location: "Rajkot, Gujarat", capacity: "10 MW", type: "Industrial" },
  { image: heroSolar2, title: "Horizon Mall Rooftop", location: "Hyderabad, Telangana", capacity: "500 kW", type: "Commercial" },
  { image: heroSolar1, title: "Smart City Complex", location: "Jaipur, Rajasthan", capacity: "1 MW", type: "Commercial" },
  { image: heroSolar3, title: "EcoVillage Housing", location: "Chennai, Tamil Nadu", capacity: "200 kW", type: "Residential" },
];

const filters = ["All", "Residential", "Commercial", "Industrial"];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [filter, setFilter] = useState("All");

  const filtered = filter === "All" ? projects : projects.filter((p) => p.type === filter);

  return (
    <section id="projects" className="section-padding bg-section-alt" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-12 max-w-2xl text-center"
        >
          <span className="mb-2 inline-block text-sm font-semibold uppercase tracking-widest text-primary">
            Portfolio
          </span>
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            Our Projects
          </h2>
        </motion.div>

        <div className="mb-10 flex flex-wrap justify-center gap-3">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
                filter === f
                  ? "bg-primary text-primary-foreground"
                  : "bg-card text-muted-foreground hover:text-foreground"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p, i) => (
            <motion.div
              key={p.title}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.08 * i }}
              className="group overflow-hidden rounded-xl bg-card shadow-sm"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              </div>
              <div className="p-5">
                <h3 className="mb-2 text-lg font-bold text-foreground">{p.title}</h3>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <MapPin className="h-3.5 w-3.5" /> {p.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Zap className="h-3.5 w-3.5" /> {p.capacity}
                  </span>
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
