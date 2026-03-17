import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);
import { Zap, Shield, Award, Sun, Users, ShieldCheck } from "lucide-react";
import heroSolar2 from "@/assets/hero-solar-2.jpg";
import AnimatedCounter from "./AnimatedCounter";

const highlights = [
  { icon: Zap, value: 20, suffix: "+", label: "Projects Completed" },
  { icon: Sun, value: 60, suffix: " kW+", label: "Work Done" },
  { icon: Users, value: 20, suffix: "+", label: "Happy Customers" },
  { icon: ShieldCheck, value: 100, suffix: "%", label: "Safe Installation" },
];

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    // Smooth subtle slow-zoom on background
    tl.fromTo(".bg-image", 
      { scale: 1.1 },
      { scale: 1, duration: 2.5, ease: "power2.out" }
    )
    // Elegant fade up for content container
    .fromTo(".hero-content > *", 
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.15, ease: "power3.out" },
      "-=2"
    )
    // Gentle reveal for highlights bar
    .fromTo(".highlights-container", 
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
      "-=1.2"
    );

    // Subtle Parallax scrolling effect on background
    gsap.to(".bg-image-container", {
      yPercent: 20,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      }
    });

  }, { scope: containerRef });

  return (
    <section id="home" className="relative min-h-[110vh] sm:min-h-screen flex flex-col pt-24 sm:pt-32 pb-20 overflow-hidden" ref={containerRef}>
      {/* Background Image */}
      <div className="absolute inset-0 bg-image-container">
        <img
          src={heroSolar2}
          alt="Residential Solar Installations"
          className="bg-image h-full w-full object-cover will-change-transform"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center w-full">
        <div className="w-full max-w-full px-6 md:px-12 lg:px-20 py-12">
            <div
              className="hero-content max-w-5xl mx-auto text-center flex flex-col items-center"
            >
            <div className="mb-6 flex flex-wrap justify-center gap-2">
              <span className="rounded-full bg-primary/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary-foreground backdrop-blur-sm border border-primary-foreground/20">
                Residential
              </span>
              <span className="rounded-full bg-primary/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary-foreground backdrop-blur-sm border border-primary-foreground/20">
                Commercial
              </span>
              <span className="rounded-full bg-primary/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary-foreground backdrop-blur-sm border border-primary-foreground/20">
                Industrial Scale
              </span>
            </div>
            <h1 className="mb-8 font-bold text-primary-foreground text-glow text-3xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.2] sm:leading-[1.1]">
              Lower Your Bills to Zero. Power Your Future with Reyansh Solar Services.
            </h1>
            <div className="mb-8 max-w-3xl space-y-4 text-center">
              <p className="text-lg md:text-xl text-primary-foreground font-medium leading-relaxed">
                Premium solar solutions for homes and businesses. Expert design, professional installation, and lifelong support.
              </p>
              <p className="text-base md:text-lg text-primary-foreground/90 leading-relaxed bg-white/10 backdrop-blur-md py-3 px-6 rounded-2xl border border-white/20">
                <span className="text-accent font-bold">Government-approved</span> solar solutions with up to <span className="text-accent font-bold">₹78,000 subsidy</span>. We handle everything from site survey to DISCOM approval.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="w-full sm:w-auto rounded-lg bg-accent px-8 py-4 font-bold text-accent-foreground text-center transition-transform hover:scale-105"
              >
                Get Free Quote
              </Link>
              <Link
                to="/services"
                className="w-full sm:w-auto rounded-lg border border-primary-foreground/30 px-8 py-4 font-bold text-primary-foreground text-center backdrop-blur-sm transition-colors hover:bg-primary-foreground/10"
              >
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Highlights bar */}
      <div className="highlights-container relative bottom-0 left-0 right-0 z-20 w-full mt-auto lg:absolute">
        <div className="w-full max-w-full px-4 sm:px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 divide-y divide-primary-foreground/10 lg:rounded-t-2xl bg-primary/95 shadow-2xl backdrop-blur-md sm:grid-cols-2 lg:grid-cols-4 sm:divide-x lg:divide-x sm:divide-y-0">
            {highlights.map((h, i) => (
              <div key={i} className="flex items-center gap-3 sm:gap-4 px-6 sm:px-8 py-4 sm:py-5">
                <h.icon className="h-6 w-6 sm:h-8 sm:w-8 text-accent shrink-0" />
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-primary-foreground">
                    <AnimatedCounter value={h.value} suffix={h.suffix} />
                  </div>
                  <div className="text-xs sm:text-sm text-primary-foreground/70">{h.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
