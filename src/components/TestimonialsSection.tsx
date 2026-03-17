import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Star, CheckCircle2 } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    name: "Ramakant Chandole",
    text: "Switched to Reyansh Solar for our industrial plant. The transition was seamless, and the energy savings have been beyond our expectations. Truly a professional team!",
  },
  {
    name: "Chintamani Kadam",
    text: "Installing solar panels from Reyansh Solar Services was the best investment for my home. My monthly electricity bill has practically vanished. Highly recommend their service!",
  },
  {
    name: "Amol Ghumare",
    text: "The technical expertise of the Reyansh team is impressive. They designed a custom solar solution that perfectly fits our commercial warehouse needs. Excellent after-sales support.",
  },
  {
    name: "Amol Dunbale",
    text: "We implemented a solar pump system for our agricultural needs. It's reliable, cost-effective, and has significantly improved our farming operations. Thank you, Reyansh Solar!",
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
    <section id="testimonials" className="testimonials-section py-16 md:py-20 bg-background" ref={containerRef}>
      <div className="w-full max-w-full">
        {showHeader && (
          <div
            className="testimonials-header mx-auto mb-20 max-w-3xl text-center px-6 md:px-12 lg:px-20"
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
          <div className="flex w-max animate-marquee gap-6 md:gap-8 group-hover:[animation-play-state:paused] will-change-transform">
            {[...testimonials, ...testimonials].map((t, i) => (
              <div
                key={i}
                className="testimonial-card relative flex flex-col justify-between rounded-3xl border border-border bg-card p-6 sm:p-8 md:p-10 shadow-sm transition-all hover:-translate-y-2 hover:shadow-2xl hover:border-primary/20 w-[280px] sm:w-[350px] md:w-[450px] shrink-0 will-change-transform"
              >
                <div>
                  <p className="mb-6 md:mb-8 text-[15px] sm:text-[16px] md:text-[18px] font-medium italic leading-relaxed text-foreground whitespace-normal">
                    "{t.text}"
                  </p>
                </div>

                <div className="flex items-center gap-4 md:gap-5 border-t border-border/50 pt-6 md:pt-8 w-full">
                  <div>
                    <div className="flex items-center gap-1.5 font-bold text-foreground text-[18px] sm:text-[20px]">
                      {t.name}
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
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
