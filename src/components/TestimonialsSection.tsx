import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star, Quote, CheckCircle2 } from "lucide-react";
import customer1 from "@/assets/customer-1.png";
import customer2 from "@/assets/customer-2.png";
import customer3 from "@/assets/customer-3.png";

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "Homeowner, Bengaluru",
    image: customer3,
    text: "SolarVolt installed a 5kW system on our rooftop. Our electricity bill dropped from ₹8,000 to ₹500 per month. The team was professional and completed installation in just 2 days!",
    stars: 5,
    tag: "Residential"
  },
  {
    name: "Priya Sharma",
    role: "CEO, GreenTech Offices",
    image: customer2,
    text: "We chose SolarVolt for our 200kW commercial installation. The ROI has been fantastic — we're saving ₹15 lakhs annually. Their after-sales support is top-notch.",
    stars: 5,
    tag: "Commercial"
  },
  {
    name: "Anil Mehta",
    role: "Factory Owner, Ahmedabad",
    image: customer1,
    text: "Our 1MW industrial solar plant has been running flawlessly for 3 years. SolarVolt handled everything from permits to commissioning. Highly recommend them for large projects.",
    stars: 5,
    tag: "Industrial"
  },
  {
    name: "Sanjay Gupta",
    role: "Estate Manager, Delhi",
    image: customer1,
    text: "The maintenance package is a lifesaver. Monthly cleaning and proactive monitoring have kept our yield consistent even during peak summer months. Exceptional service quality.",
    stars: 5,
    tag: "Maintenance"
  },
  {
    name: "Meera Reddy",
    role: "Eco-Villa Owner, Goa",
    image: customer2,
    text: "Implementing solar with SolarVolt was the best decision for our luxury villa. They integrated the panels beautifully into our architecture. Seamless experience from start to finish!",
    stars: 5,
    tag: "Residential"
  },
  {
    name: "Vikram Singh",
    role: "Hotelier, Rajasthan",
    image: customer3,
    text: "Powering our resort with 100% solar has not only saved costs but also boosted our brand as an eco-friendly destination. SolarVolt's engineering team is brilliant.",
    stars: 5,
    tag: "Commercial"
  },
];

const TestimonialsSection = ({ showHeader = true }: { showHeader?: boolean }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="testimonials" className="section-padding bg-background" ref={ref}>
      <div className="w-full max-w-full px-6 md:px-12 lg:px-20">
        {showHeader && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mx-auto mb-20 max-w-3xl text-center"
          >
            <span className="mb-2 inline-block text-sm font-semibold uppercase tracking-widest text-primary">
              Client Feedback
            </span>
            <h2 className="mb-6 font-bold text-foreground heading-section">
              Trusted by Thousands
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
               Join the growing community of home and business owners who have made the switch to clean, 
               reliable energy with SolarVolt.
            </p>
          </motion.div>
        )}

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="group relative flex flex-col justify-between rounded-3xl border border-border bg-card p-10 shadow-sm transition-all hover:-translate-y-2 hover:shadow-2xl hover:border-primary/20"
            >
              <div className="absolute -top-4 -right-4 flex h-10 w-10 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-lg transition-transform group-hover:rotate-12">
                <Quote className="h-5 w-5" />
              </div>
              
              <div>
                <div className="mb-6 flex gap-1">
                  {Array.from({ length: t.stars }).map((_, j) => (
                    <Star key={j} className="h-5 w-5 fill-accent text-accent" />
                  ))}
                </div>
                
                <p className="mb-8 text-lg font-medium italic leading-relaxed text-foreground">
                  "{t.text}"
                </p>
              </div>

              <div className="flex items-center gap-5 border-t border-border/50 pt-8">
                <div className="h-16 w-16 overflow-hidden rounded-2xl bg-muted ring-4 ring-primary/5">
                  <img src={t.image} alt={t.name} className="h-full w-full object-cover" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5 font-bold text-foreground">
                    {t.name}
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                  </div>
                  <div className="text-sm text-muted-foreground">{t.role}</div>
                  <div className="mt-1 inline-block rounded-full bg-primary/10 px-3 py-0.5 text-[10px] font-bold uppercase tracking-wider text-primary">
                    {t.tag}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
