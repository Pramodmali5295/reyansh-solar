import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "Homeowner, Bengaluru",
    text: "SolarVolt installed a 5kW system on our rooftop. Our electricity bill dropped from ₹8,000 to ₹500 per month. The team was professional and completed installation in just 2 days!",
    stars: 5,
  },
  {
    name: "Priya Sharma",
    role: "CEO, GreenTech Offices",
    text: "We chose SolarVolt for our 200kW commercial installation. The ROI has been fantastic — we're saving ₹15 lakhs annually. Their after-sales support is top-notch.",
    stars: 5,
  },
  {
    name: "Anil Mehta",
    role: "Factory Owner, Ahmedabad",
    text: "Our 1MW industrial solar plant has been running flawlessly for 3 years. SolarVolt handled everything from permits to commissioning. Highly recommend them for large projects.",
    stars: 5,
  },
];

const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="testimonials" className="section-padding" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          <span className="mb-2 inline-block text-sm font-semibold uppercase tracking-widest text-primary">
            Testimonials
          </span>
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            What Our Clients Say
          </h2>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 * i }}
              className="relative rounded-xl border border-border bg-card p-8"
            >
              <Quote className="absolute right-6 top-6 h-10 w-10 text-primary/10" />
              <div className="mb-4 flex gap-0.5">
                {Array.from({ length: t.stars }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="mb-6 text-sm leading-relaxed text-muted-foreground">"{t.text}"</p>
              <div>
                <div className="font-semibold text-foreground">{t.name}</div>
                <div className="text-xs text-muted-foreground">{t.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
