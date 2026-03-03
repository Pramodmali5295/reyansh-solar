import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Home, Building2, Factory, Wrench, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Residential Solar",
    desc: "Rooftop solar systems for homes. Cut your electricity bill by up to 90% with panels designed for Indian climates.",
    features: ["3kW – 10kW Systems", "Net Metering Support", "Government Subsidy Assistance"],
  },
  {
    icon: Building2,
    title: "Commercial Solar",
    desc: "Scalable solar solutions for offices, malls, and commercial complexes to reduce operational costs.",
    features: ["10kW – 500kW Capacity", "Custom Design & Engineering", "ROI within 3-4 Years"],
  },
  {
    icon: Factory,
    title: "Industrial Solar",
    desc: "Megawatt-scale solar power plants for manufacturing units and industrial parks.",
    features: ["500kW – 50MW Projects", "EPC Turnkey Solutions", "Power Purchase Agreements"],
  },
  {
    icon: Wrench,
    title: "Maintenance & AMC",
    desc: "Comprehensive maintenance packages to ensure peak performance of your solar systems year-round.",
    features: ["Preventive Maintenance", "24/7 Monitoring", "Performance Guarantee"],
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="section-padding" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          <span className="mb-2 inline-block text-sm font-semibold uppercase tracking-widest text-primary">
            What We Do
          </span>
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            Our Solar Services
          </h2>
          <p className="text-muted-foreground">
            End-to-end solar solutions from design and installation to maintenance and monitoring.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.12 * i }}
              className="group relative overflow-hidden rounded-xl border border-border bg-card p-8 transition-all hover:border-primary/30 hover:shadow-lg"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl gradient-primary">
                <s.icon className="h-7 w-7 text-primary-foreground" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-foreground">{s.title}</h3>
              <p className="mb-5 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              <ul className="mb-6 space-y-2">
                {s.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-foreground">
                    <div className="h-1.5 w-1.5 rounded-full bg-accent" />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
              >
                Learn More <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
