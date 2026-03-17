import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import heroSolar2 from "@/assets/hero-solar-2.jpg";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

const PageHeader = ({ title, subtitle }: PageHeaderProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(".header-content > *",
      { opacity: 0, y: 50, scale: 0.95 },
      { opacity: 1, y: 0, scale: 1, duration: 1.2, stagger: 0.2, ease: "power4.out" }
    );
  }, { scope: containerRef });

  return (
    <div className="relative pt-32 pb-16 sm:pt-48 sm:pb-28 lg:pt-56 lg:pb-32 min-h-[35vh] sm:min-h-[40vh] md:min-h-[50vh] flex flex-col justify-center overflow-hidden" ref={containerRef}>
      <div className="absolute inset-0 z-0">
        <img src={heroSolar2} alt="Header Background" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
      </div>
      <div className="w-full max-w-full px-6 md:px-12 lg:px-20 relative z-10">
        <div
          className="header-content text-center"
        >
          <h1 className="mb-4 sm:mb-6 font-bold text-primary-foreground font-display text-3xl sm:text-5xl md:text-6xl tracking-tight leading-tight drop-shadow-lg">
            {title}
          </h1>
          {subtitle && (
            <p className="text-lg sm:text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
