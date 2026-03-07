import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Target, Eye, Leaf, Users, Award, ShieldCheck, Sun, Zap } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);
import companyBuilding from "../assets/solar-company-building.png";
import AnimatedCounter from "./AnimatedCounter";

const values = [
  { icon: Target, title: "Our Mission", text: "To make solar energy accessible and affordable for every home and business across India." },
  { icon: Eye, title: "Our Vision", text: "A future where 100% of India's energy comes from clean, renewable solar power." },
  { icon: Leaf, title: "Sustainability", text: "Every installation reduces carbon footprint by an average of 4 tonnes per year." },
  { icon: Users, title: "Community", text: "We've trained 200+ local technicians, creating green jobs in communities we serve." },
];

const stats = [
  { icon: Sun, value: 15, suffix: "MW+", label: "Clean Power Generated" },
  { icon: Users, value: 2500, suffix: "+", label: "Happy Customers" },
  { icon: Award, value: 12, suffix: "+", label: "Industry Awards" },
  { icon: ShieldCheck, value: 100, suffix: "%", label: "Safe Installation" },
];

const AboutSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // 1. Narrative Section Animation
    gsap.fromTo(".about-image-wrapper", 
      { opacity: 0, x: -30 },
      { opacity: 1, x: 0, duration: 1, ease: "power3.out", scrollTrigger: { trigger: ".narrative-section", start: "top 80%" } }
    );
    
    const textTl = gsap.timeline({ scrollTrigger: { trigger: ".narrative-section", start: "top 80%" }});
    textTl.fromTo(".about-text-content > *",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: "power3.out" }
    );

    // 2. Stats Section
    gsap.fromTo(".stat-card",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: "power3.out", scrollTrigger: { trigger: ".stats-section", start: "top 85%" }}
    );

    // 3. Values Section
    const valuesTl = gsap.timeline({ scrollTrigger: { trigger: ".values-section", start: "top 80%" }});
    valuesTl.fromTo(".values-header > *",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: "power3.out" }
    ).fromTo(".value-card",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: "power3.out" },
      "-=0.4"
    );

  }, { scope: containerRef });

  return (
    <div id="about" ref={containerRef}>
      {/* Narrative Section */}
      <section className="narrative-section section-padding overflow-hidden">
        <div className="w-full max-w-full px-6 md:px-12 lg:px-20">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div
              className="about-image-wrapper relative"
            >
              <div className="relative z-10 overflow-hidden rounded-3xl shadow-2xl h-[300px] sm:h-[400px] lg:h-[450px]">
                <img 
                  src={companyBuilding} 
                  alt="Reyansh Solar Services Headquarters" 
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-110" 
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 -z-10 h-64 w-64 rounded-3xl bg-primary/10" />
              <div className="absolute -left-6 -top-6 -z-10 h-64 w-64 rounded-3xl bg-accent/10" />
            </div>

            <div
              className="about-text-content"
            >
              <span className="mb-2 inline-block text-sm font-semibold uppercase tracking-widest text-primary">
                Our Journey
              </span>
              <h2 className="mb-6 font-bold text-foreground heading-section">
                Leading the Solar Revolution Since 2010
              </h2>
              <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
                <p>
                  Founded with a singular vision to harness India's abundant sunlight, Reyansh Solar Services began as a small team 
                  of passionate engineers in Bangalore. Today, we are one of the nation's most trusted solar EPC 
                  (Engineering, Procurement, and Construction) companies.
                </p>
                <p>
                  Over the past decade, we have perfected the art of solar integration, delivering over 500+ high-performance 
                  projects. Our journey is defined by innovation, engineering excellence, and a relentless commitment to 
                  customer satisfaction.
                </p>
                <div className="flex items-center gap-4 py-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl gradient-primary">
                    <Zap className="h-7 w-7 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-foreground">Technology First</h4>
                    <p className="text-sm">We use only Tier-1 components and AI-driven monitoring systems.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section bg-primary py-20 text-primary-foreground">
        <div className="w-full max-w-full px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-4">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className="stat-card text-center"
              >
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-sm">
                  <s.icon className="h-8 w-8 text-accent" />
                </div>
                <div className="mb-1 text-3xl font-bold md:text-5xl">
                  <AnimatedCounter value={s.value} suffix={s.suffix} />
                </div>
                <div className="text-sm font-medium text-white/70 uppercase tracking-wider">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section section-padding bg-section-alt">
        <div className="w-full max-w-full px-6 md:px-12 lg:px-20">
          <div className="values-header mb-16 text-center">
            <h2 className="mb-4 font-bold text-foreground heading-section">Our Core Values</h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Built on a foundation of integrity and innovation, we strive to exceed expectations in every project we undertake.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <div
                key={v.title}
                className="value-card group rounded-3xl bg-card p-8 shadow-sm transition-all hover:-translate-y-2 hover:shadow-xl border border-border/50"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <v.icon className="h-8 w-8" />
                </div>
                <h3 className="mb-4 text-xl font-bold text-foreground">{v.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutSection;
