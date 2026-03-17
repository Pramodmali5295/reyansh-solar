import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { MapPin, Zap } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);
import projectFarm from "@/assets/project-farm.png";
import projectOffice from "@/assets/project-office.png";
import projectVilla from "@/assets/project-villa.png";
import heroSolar1 from "@/assets/hero-solar-1.jpg";
import heroSolar2 from "@/assets/hero-solar-2.jpg";
import heroSolar3 from "@/assets/hero-solar-3.jpg";
import industrialSolar from "@/assets/industrial-solar-service.png";
import commercialSolar from "@/assets/commercial-solar.png";

const projects = [
  { image: projectFarm, title: "Gujarat Shakti Solar Park", location: "Patan, Gujarat", capacity: "15 MW", type: "Industrial" },
  { image: projectOffice, title: "TechTrend Corporate HQ", location: "Hitech City, Hyderabad", capacity: "800 kW", type: "Commercial" },
  { image: projectVilla, title: "Palm Grove Estates", location: "Goa, India", capacity: "25 kW", type: "Residential" },
  { image: heroSolar3, title: "Green Valley Residences", location: "Bengaluru, Karnataka", capacity: "150 kW", type: "Residential" },
  { image: industrialSolar, title: "Maharashtra Energy Hub", location: "Chakan, Pune", capacity: "10 MW", type: "Industrial" },
  { image: commercialSolar, title: "Skyline Business Center", location: "BKC, Mumbai", capacity: "500 kW", type: "Commercial" },
  { image: heroSolar1, title: "Radiant Towers", location: "Viman Nagar, Pune", capacity: "200 kW", type: "Residential" },
  { image: heroSolar2, title: "Nagpur Mega Steel Plant", location: "Nagpur, Maharashtra", capacity: "25 MW", type: "Industrial" },
];



const ProjectsSection = ({ 
  showHeader = true,
  isSlider = true 
}: { 
  showHeader?: boolean;
  isSlider?: boolean;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Combine projects for marquee and duplicate for seamless loop (only for slider)
  const displayProjects = isSlider ? [...projects, ...projects, ...projects, ...projects] : projects;

  useGSAP(() => {
    // 1. Header Animation (if visible)
    if (showHeader) {
      gsap.fromTo(".projects-header > *",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, stagger: 0.15, ease: "power3.out", scrollTrigger: { trigger: ".projects-section", start: "top 85%" } }
      );
    }
    
    // 2. Marquee Animation (only if isSlider is true)
    if (isSlider) {
      const track = scrollRef.current;
      if (track) {
        const trackWidth = track.scrollWidth;
        const oneSetWidth = trackWidth / 4;

        const marquee = gsap.to(track, {
          x: `-=${oneSetWidth}`,
          duration: 25,
          ease: "none",
          repeat: -1,
          modifiers: {
            x: (x) => {
              const val = parseFloat(x);
              return `${val % oneSetWidth}px`;
            }
          }
        });

        track.addEventListener("mouseenter", () => marquee.pause());
        track.addEventListener("mouseleave", () => marquee.play());
      }
    }

    // 3. Project Cards Entrance Animation
    gsap.fromTo(".project-card",
      { opacity: 0, scale: 0.9, y: 20 },
      { opacity: 1, scale: 1, y: 0, duration: 0.8, stagger: 0.1, ease: "power3.out", scrollTrigger: { trigger: ".projects-section", start: "top 80%" } }
    );

  }, { scope: containerRef, dependencies: [showHeader, isSlider] });

  return (
    <section id="projects" className="projects-section py-16 md:py-20 bg-section-alt overflow-hidden" ref={containerRef}>
      <div className="w-full max-w-full">
        {showHeader && (
          <div
            className="projects-header mx-auto mb-16 max-w-4xl text-center px-6 md:px-12 lg:px-20"
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

        {isSlider ? (
          <div className="relative cursor-grab active:cursor-grabbing">
            <div 
              ref={scrollRef}
              className="flex gap-8 whitespace-nowrap pb-12 will-change-transform"
            >
              {displayProjects.map((p, i) => (
                <div
                  key={`${p.title}-${i}`}
                  className="project-card group inline-block w-[300px] shrink-0 overflow-hidden rounded-3xl bg-card shadow-lg transition-all hover:shadow-2xl border border-border/50 will-change-transform"
                >
                  <div className="relative h-60 overflow-hidden">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute top-4 right-4 rounded-full bg-accent/90 backdrop-blur-md px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-accent-foreground">
                      {p.type}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="mb-3 text-xl font-bold text-foreground group-hover:text-primary transition-colors whitespace-normal">{p.title}</h3>
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
            <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[hsl(var(--section-alt))] to-transparent z-10"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[hsl(var(--section-alt))] to-transparent z-10"></div>
          </div>
        ) : (
          <div className="w-full max-w-full px-6 md:px-12 lg:px-20">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {displayProjects.map((p, i) => (
                <div
                  key={`${p.title}-${i}`}
                  className="project-card group overflow-hidden rounded-3xl bg-card shadow-lg transition-all hover:shadow-2xl border border-border/50 will-change-transform"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
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
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
