import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Home, Building2, Factory, Wrench, ArrowRight, ClipboardCheck, Ruler, Truck, ShieldCheck } from "lucide-react";
import residentialImg from "@/assets/residential-solar.png";
import commercialImg from "@/assets/commercial-solar.png";

const services = [
  {
    icon: Home,
    image: residentialImg,
    title: "Residential Solar",
    desc: "Premium rooftop solar systems tailored for modern Indian homes. Reduce your carbon footprint while slashing bills.",
    features: ["3kW – 15kW Capacity", "Hybrid & On-Grid Options", "Govt. Subsidy Assistance"],
  },
  {
    icon: Building2,
    image: commercialImg,
    title: "Commercial Solar",
    desc: "Strategic energy solutions for offices and malls. Optimize operational costs with high-yield solar arrays.",
    features: ["20kW – 500kW Capacity", "Zero-Investment Models", "ESG Compliance Ready"],
  },
  {
    icon: Factory,
    image: commercialImg, // Reusing commercial for industrial look
    title: "Industrial Solar",
    desc: "Megawatt-scale EPC solutions for heavy industries. Engineered for durability and maximum ROI.",
    features: ["500kW – 50MW Projects", "Custom PV Engineering", "PPA & OPEX Models"],
  },
  {
    icon: Wrench,
    image: residentialImg, // Reusing residential for maintenance feel
    title: "Maintenance & AMC",
    desc: "Comprehensive annual maintenance to ensure your plant runs at peak efficiency 365 days a year.",
    features: ["Robotic Cleaning", "Real-time Monitoring", "Thermal Inspection"],
  },
];

const processSteps = [
  { icon: ClipboardCheck, title: "Consultation", desc: "Expert assessment of your load and site requirements." },
  { icon: Ruler, title: "Design", desc: "Custom 3D layout and shadow analysis for max yield." },
  { icon: Truck, title: "Installation", desc: "Rapid 48-hour deployment by certified technicians." },
  { icon: ShieldCheck, title: "Monitoring", desc: "24/7 AI-driven performance tracking via mobile app." },
];

const ServicesSection = ({ showHeader = true }: { showHeader?: boolean }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div id="services" ref={ref}>
      {/* Services Grid */}
      <section className="section-padding">
        <div className="w-full max-w-full px-6 md:px-12 lg:px-20">
          {showHeader && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="mx-auto mb-20 max-w-3xl text-center"
            >
              <span className="mb-2 inline-block text-sm font-semibold uppercase tracking-widest text-primary">
                Core Expertise
              </span>
              <h2 className="mb-6 font-bold text-foreground heading-section">
                Solar Solutions for Everyone
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                From small residential rooftops to massive industrial scales, we provide end-to-end solar EPC 
                services using world-class technology and components.
              </p>
            </motion.div>
          )}

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.12 * i }}
                className="group relative overflow-hidden rounded-3xl border border-border bg-card transition-all hover:shadow-2xl"
              >
                <div className="aspect-video w-full overflow-hidden">
                  <img src={s.image} alt={s.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
                </div>
                <div className="p-8">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <s.icon className="h-7 w-7" />
                  </div>
                  <h3 className="mb-4 text-2xl font-bold text-foreground">{s.title}</h3>
                  <p className="mb-6 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                  <ul className="mb-8 space-y-3">
                    {s.features.map((f) => (
                      <li key={f} className="flex items-center gap-3 text-sm font-medium text-foreground">
                        <div className="h-1.5 w-1.5 rounded-full bg-accent" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="/contact"
                    className="inline-flex items-center gap-2 font-bold text-primary transition-all hover:gap-3"
                  >
                    Custom Quote <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-section-alt py-24">
        <div className="w-full max-w-full px-6 md:px-12 lg:px-20">
          <div className="mb-16 text-center">
            <h2 className="mb-4 font-bold text-foreground heading-section">Our 4-Step Process</h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              We make the transition to solar energy seamless, transparent, and efficient.
            </p>
          </div>
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative text-center"
              >
                {i < processSteps.length - 1 && (
                  <div className="absolute left-[60%] top-[40px] hidden w-full border-t-2 border-dashed border-primary/20 md:block" />
                )}
                <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-card shadow-xl ring-8 ring-primary/5">
                  <step.icon className="h-9 w-9 text-primary" />
                </div>
                <h4 className="mb-3 text-xl font-bold text-foreground">{step.title}</h4>
                <p className="text-sm text-muted-foreground">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesSection;
