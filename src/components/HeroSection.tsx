import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Zap, Shield, Award } from "lucide-react";
import heroSolar2 from "@/assets/hero-solar-2.jpg";

const highlights = [
  { icon: Zap, value: "500+", label: "Projects Completed" },
  { icon: Shield, value: "25 Yr", label: "Panel Warranty" },
  { icon: Award, value: "98%", label: "Customer Satisfaction" },
];

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen sm:h-screen flex flex-col pt-20 sm:pt-0 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroSolar2}
          alt="Residential Solar Installations"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center w-full">
        <div className="w-full max-w-full px-6 md:px-12 lg:px-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl mx-auto text-center flex flex-col items-center"
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
            <h1 className="mb-6 font-bold text-primary-foreground text-glow heading-hero">
              Powering a Cleaner Tomorrow
            </h1>
            <p className="mb-8 max-w-2xl text-lg md:text-xl text-primary-foreground/90 leading-relaxed mx-auto">
              India's trusted partner for <span className="text-accent font-bold">Residential</span>, 
              <span className="text-accent font-bold"> Commercial</span>, and 
              <span className="text-accent font-bold"> Utility-Grade Industrial</span> solar installations. 
              We deliver premium energy systems that save money and protect the planet.
            </p>
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
          </motion.div>
        </div>
      </div>

      {/* Highlights bar */}
      <div className="relative bottom-0 left-0 right-0 z-20 w-full mt-auto sm:absolute">
        <div className="w-full max-w-full px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 divide-y divide-primary-foreground/10 sm:rounded-t-2xl bg-primary/95 shadow-2xl backdrop-blur-md sm:grid-cols-3 sm:divide-x sm:divide-y-0">
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
