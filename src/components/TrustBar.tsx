import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import waareeLogo from "@/assets/waaree-logo.png";
import adaniLogo from "@/assets/adani-solar-logo.png";
import tataLogo from "@/assets/tata-solar-logo.png";
import luminousLogo from "@/assets/luminous-logo.png";

gsap.registerPlugin(ScrollTrigger);

const partners = [
  { name: "Waaree", logo: waareeLogo },
  { name: "Adani Solar", logo: adaniLogo },
  { name: "Tata Power", logo: tataLogo },
  { name: "Luminous", logo: luminousLogo },
];

const TrustBar = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Triple the set for a smooth infinite loop
  const displayPartners = [...partners, ...partners, ...partners, ...partners];

  useGSAP(() => {
    const track = scrollRef.current;
    if (track) {
      const trackWidth = track.scrollWidth;
      const oneSetWidth = trackWidth / 4;

      const marquee = gsap.to(track, {
        x: `-=${oneSetWidth}`,
        duration: 15,
        ease: "none",
        repeat: -1,
        modifiers: {
          x: (x) => {
            const val = parseFloat(x);
            return `${val % oneSetWidth}px`;
          }
        }
      });

      track.addEventListener("mouseenter", () => marquee.pause());
      track.addEventListener("mouseleave", () => marquee.play());
    }
  }, { scope: containerRef });

  return (
    <div className="bg-white py-16 border-y border-slate-100 overflow-hidden" ref={containerRef}>
      <div className="w-full max-w-full px-6 md:px-12 lg:px-20 text-center mb-10">
        <p className="text-xs font-black uppercase tracking-[0.3em] text-slate-400">
          AUTHORIZED INSTALLER FOR PREMIUM BRANDS
        </p>
      </div>
      
      <div className="relative">
        <div 
          ref={scrollRef}
          className="flex items-center gap-8 md:gap-12 whitespace-nowrap will-change-transform"
        >
          {displayPartners.map((p, i) => (
            <div key={`${p.name}-${i}`} className="partner-logo flex items-center justify-center min-w-[120px] sm:min-w-[180px] md:min-w-[280px] px-2 sm:px-4">
              <div className="bg-white rounded-xl md:rounded-2xl p-3 md:p-5 shadow-sm border border-slate-50 flex items-center justify-center w-full h-20 sm:h-28 md:h-40">
                <img 
                  src={p.logo} 
                  alt={p.name} 
                  className="max-h-full w-auto object-contain transition-transform hover:scale-110" 
                />
              </div>
            </div>
          ))}
        </div>
        
        {/* Gradients for fading edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />
      </div>
    </div>
  );
};

export default TrustBar;
