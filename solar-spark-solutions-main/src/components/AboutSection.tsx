import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Eye, Leaf, Users } from "lucide-react";

const values = [
  { icon: Target, title: "Our Mission", text: "To make solar energy accessible and affordable for every home and business across India." },
  { icon: Eye, title: "Our Vision", text: "A future where 100% of India's energy comes from clean, renewable solar power." },
  { icon: Leaf, title: "Sustainability", text: "Every installation reduces carbon footprint by an average of 4 tonnes per year." },
  { icon: Users, title: "Community", text: "We've trained 200+ local technicians, creating green jobs in communities we serve." },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding bg-section-alt" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="mb-2 inline-block text-sm font-semibold uppercase tracking-widest text-primary">
            About Us
          </span>
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            Trusted Solar Experts Since 2010
          </h2>
          <p className="text-muted-foreground">
            SolarVolt is one of India's leading solar installation companies with over a decade of experience 
            delivering high-performance solar energy systems. We've completed 500+ projects across residential, 
            commercial, and industrial sectors.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 * i }}
              className="rounded-xl bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <v.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-lg font-bold text-foreground">{v.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{v.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
