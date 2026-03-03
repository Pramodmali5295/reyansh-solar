import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Zap, Shield, Award } from "lucide-react";
import heroSolar1 from "@/assets/hero-solar-1.jpg";
import heroSolar2 from "@/assets/hero-solar-2.jpg";
import heroSolar3 from "@/assets/hero-solar-3.jpg";

const slides = [
  {
    image: heroSolar1,
    title: "Powering a Cleaner Tomorrow",
    subtitle: "Commercial Solar Solutions",
  },
  {
    image: heroSolar2,
    title: "Solar Energy for Every Home",
    subtitle: "Residential Installations",
  },
  {
    image: heroSolar3,
    title: "Industrial Scale Solar Power",
    subtitle: "Utility-Grade Solar Farms",
  },
];

const highlights = [
  { icon: Zap, value: "500+", label: "Projects Completed" },
  { icon: Shield, value: "25 Yr", label: "Panel Warranty" },
  { icon: Award, value: "98%", label: "Customer Satisfaction" },
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => setCurrent((p) => (p + 1) % slides.length), []);
  const prev = useCallback(() => setCurrent((p) => (p - 1 + slides.length) % slides.length), []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section id="home" className="relative h-screen min-h-[600px] overflow-hidden">
      {/* Slides */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          <img
            src={slides[current].image}
            alt={slides[current].subtitle}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/50 to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="container mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="max-w-2xl"
            >
              <span className="mb-4 inline-block rounded-full bg-primary/20 px-4 py-1.5 text-sm font-medium text-primary-foreground backdrop-blur-sm">
                {slides[current].subtitle}
              </span>
              <h1 className="mb-6 text-4xl font-bold leading-tight text-primary-foreground md:text-6xl lg:text-7xl text-glow">
                {slides[current].title}
              </h1>
              <p className="mb-8 max-w-lg text-lg text-primary-foreground/80">
                India's trusted solar installation partner. We deliver premium solar energy systems that save money and protect the planet.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="rounded-lg bg-accent px-8 py-3.5 font-semibold text-accent-foreground transition-transform hover:scale-105"
                >
                  Get Free Quote
                </a>
                <a
                  href="#services"
                  className="rounded-lg border border-primary-foreground/30 px-8 py-3.5 font-semibold text-primary-foreground backdrop-blur-sm transition-colors hover:bg-primary-foreground/10"
                >
                  Our Services
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Arrows */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-card/20 p-3 backdrop-blur-sm transition-colors hover:bg-card/40"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-5 w-5 text-primary-foreground" />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-card/20 p-3 backdrop-blur-sm transition-colors hover:bg-card/40"
        aria-label="Next slide"
      >
        <ChevronRight className="h-5 w-5 text-primary-foreground" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-28 left-1/2 z-20 flex -translate-x-1/2 gap-2 md:bottom-32">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-2.5 rounded-full transition-all ${
              i === current ? "w-8 bg-accent" : "w-2.5 bg-primary-foreground/40"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Highlights bar */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 divide-y divide-primary-foreground/10 rounded-t-xl bg-primary/90 backdrop-blur-md md:grid-cols-3 md:divide-x md:divide-y-0">
            {highlights.map((h, i) => (
              <div key={i} className="flex items-center gap-4 px-8 py-5">
                <h.icon className="h-8 w-8 text-accent" />
                <div>
                  <div className="text-2xl font-bold text-primary-foreground">{h.value}</div>
                  <div className="text-sm text-primary-foreground/70">{h.label}</div>
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
