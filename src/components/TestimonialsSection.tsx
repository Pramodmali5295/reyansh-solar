import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Star, Quote, CheckCircle2 } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);
import customer1 from "@/assets/customer-1.png";
import customer2 from "@/assets/customer-2.png";
import customer3 from "@/assets/customer-3.png";
import customer4 from "@/assets/customer-4.png";
import customer5 from "@/assets/customer-5.png";
import customer6 from "@/assets/customer-6.png";

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "Homeowner, Bengaluru",
    image: customer6,
    text: "Reyansh Solar Services installed a 5kW system on our rooftop. Our electricity bill dropped from ₹8,000 to ₹500 per month. The team was professional and completed installation in just 2 days!",
    stars: 5,
    tag: "Residential"
  },
  {
    name: "Priya Sharma",
    role: "CEO, GreenTech Offices",
    image: customer5,
    text: "We chose Reyansh Solar Services for our 200kW commercial installation. The ROI has been fantastic — we're saving ₹15 lakhs annually. Their after-sales support is top-notch.",
    stars: 5,
    tag: "Commercial"
  },
  {
    name: "Anil Mehta",
    role: "Factory Owner, Ahmedabad",
    image: customer4,
    text: "Our 1MW industrial solar plant has been running flawlessly for 3 years. Reyansh Solar Services handled everything from permits to commissioning. Highly recommend them for large projects.",
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
    text: "Implementing solar with Reyansh Solar Services was the best decision for our luxury villa. They integrated the panels beautifully into our architecture. Seamless experience from start to finish!",
    stars: 5,
    tag: "Residential"
  },
  {
    name: "Vikram Singh",
    role: "Hotelier, Rajasthan",
    image: customer3,
    text: "Powering our resort with 100% solar has not only saved costs but also boosted our brand as an eco-friendly destination. Reyansh Solar Services's engineering team is brilliant.",
    stars: 5,
    tag: "Commercial"
  },
];

const TestimonialsSection = ({ showHeader = true }: { showHeader?: boolean }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Header Animation
    if (showHeader) {
      gsap.fromTo(".testimonials-header > *",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, stagger: 0.15, ease: "power3.out", scrollTrigger: { trigger: ".testimonials-section", start: "top 85%" } }
      );
    }
    
    // Cards Animation is now handled by CSS marquee
  }, { scope: containerRef, dependencies: [showHeader] });

  return (
    <section id="testimonials" className="testimonials-section section-padding bg-background" ref={containerRef}>
      <div className="w-full max-w-full px-6 md:px-12 lg:px-20">
        {showHeader && (
          <div
            className="testimonials-header mx-auto mb-20 max-w-3xl text-center"
          >
            <span className="mb-2 inline-block text-sm font-semibold uppercase tracking-widest text-primary">
              Client Feedback
            </span>
            <h2 className="mb-6 font-bold text-foreground heading-section">
              Trusted by Thousands
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
               Join the growing community of home and business owners who have made the switch to clean, 
               reliable energy with Reyansh Solar Services.
            </p>
          </div>
        )}

        <div className="relative flex overflow-hidden w-full py-6 group">
          <div className="flex w-max animate-marquee gap-6 md:gap-8 group-hover:[animation-play-state:paused]">
            {[...testimonials, ...testimonials].map((t, i) => (
              <div
                key={i}
                className="testimonial-card relative flex flex-col justify-between rounded-3xl border border-border bg-card p-6 sm:p-8 md:p-10 shadow-sm transition-all hover:-translate-y-2 hover:shadow-2xl hover:border-primary/20 w-[300px] md:w-[450px] shrink-0"
              >
                <div className="absolute -top-3 -right-3 md:-top-4 md:-right-4 flex h-8 w-8 md:h-10 md:w-10 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-lg transition-transform hover:rotate-12">
                  <Quote className="h-4 w-4 md:h-5 md:w-5" />
                </div>
                
                <div>
                  <div className="mb-4 md:mb-6 flex gap-1">
                    {Array.from({ length: t.stars }).map((_, j) => (
                      <Star key={j} className="h-4 w-4 md:h-5 md:w-5 fill-accent text-accent" />
                    ))}
                  </div>
                  
                  <p className="mb-6 md:mb-8 text-base md:text-lg font-medium italic leading-relaxed text-foreground whitespace-normal">
                    "{t.text}"
                  </p>
                </div>

                <div className="flex items-center gap-4 md:gap-5 border-t border-border/50 pt-6 md:pt-8 w-full">
                  <div className="h-16 w-16 overflow-hidden rounded-2xl bg-muted ring-4 ring-primary/5 shrink-0">
                    <img src={t.image} alt={t.name} className="h-full w-full object-cover" loading="lazy" />
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
