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
    <section id="home" className="relative min-h-[100svh] flex flex-col pt-24 sm:pt-48 pb-12 sm:pb-20 overflow-hidden" ref={containerRef}>
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
      <div className="relative z-10 flex grow items-center justify-center w-full">
        <div className="w-full max-w-full px-4 sm:px-6 md:px-12 lg:px-20 py-8">
            <div
              className="hero-content max-w-5xl mx-auto text-center flex flex-col items-center"
            >
            <div className="mb-4 sm:mb-6 flex flex-wrap justify-center gap-1.5 sm:gap-2">
              {["Residential", "Commercial", "Industrial Scale"].map((tag) => (
                <span key={tag} className="rounded-full bg-primary/20 px-3 sm:px-4 py-1.5 text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-primary-foreground backdrop-blur-sm border border-primary-foreground/20">
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="mb-6 sm:mb-8 font-bold text-primary-foreground text-glow heading-hero px-2">
              Lower Your Bills to Zero. Power Your Future with Reyansh Solar Services.
            </h1>
            <div className="mb-8 sm:mb-10 max-w-3xl space-y-4 sm:space-y-5 text-center">
              <p className="text-base sm:text-lg md:text-xl text-primary-foreground font-medium leading-relaxed px-4">
                Premium solar solutions for homes and businesses. Expert design, professional installation, and lifelong support.
              </p>
              <div className="text-sm sm:text-base md:text-lg text-primary-foreground/90 leading-relaxed bg-white/5 backdrop-blur-md py-4 px-5 sm:px-8 rounded-2xl border border-white/10 mx-2 sm:mx-0">
                <span className="text-accent font-black">Government-approved</span> solar solutions with up to <span className="text-accent font-black">₹78,000 subsidy</span>. We handle everything from site survey to DISCOM approval.
              </div>
            </div>
            <div className="flex flex-col sm:flex-row justify-center gap-4 w-full sm:w-auto px-6 sm:px-0">
              <Link
                to="/contact"
                className="w-full sm:w-auto rounded-xl bg-accent px-8 py-4 sm:py-5 font-black text-accent-foreground text-center transition-all hover:scale-105 shadow-xl shadow-accent/20 active:scale-95"
              >
                Get Free Quote
              </Link>
              <Link
                to="/services"
                className="w-full sm:w-auto rounded-xl border border-primary-foreground/30 bg-white/5 px-8 py-4 sm:py-5 font-black text-primary-foreground text-center backdrop-blur-sm transition-all hover:bg-primary-foreground/10 active:scale-95"
              >
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Highlights bar */}
      <div className="highlights-container relative bottom-0 left-0 right-0 z-20 w-full mt-auto lg:absolute">
        <div className="w-full max-w-full px-0 sm:px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-2 lg:rounded-t-3xl bg-primary/95 shadow-2xl backdrop-blur-md sm:grid-cols-2 lg:grid-cols-4 divide-x divide-y divide-primary-foreground/10 sm:divide-y-0 border-t border-primary-foreground/10">
            {highlights.map((h, i) => (
              <div key={i} className="flex flex-col sm:flex-row items-center sm:items-center justify-center gap-2 sm:gap-4 px-4 sm:px-8 py-5 sm:py-6 text-center sm:text-left">
                <h.icon className="h-5 w-5 sm:h-8 sm:w-8 text-accent shrink-0" />
                <div>
                  <div className="text-lg sm:text-2xl font-black text-primary-foreground leading-none mb-1">
                    <AnimatedCounter value={h.value} suffix={h.suffix} />
                  </div>
                  <div className="text-[10px] sm:text-sm font-bold text-primary-foreground/70 uppercase tracking-tight">{h.label}</div>
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
