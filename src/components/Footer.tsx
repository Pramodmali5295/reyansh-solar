import { useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Sun, Facebook, Instagram, ArrowUp, Mail, Phone, MapPin, Award, CheckCircle2, Shield } from "lucide-react";
import logo from "../assets/logo.jpeg";

gsap.registerPlugin(ScrollTrigger);

const WhatsappIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    stroke="transparent"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
  </svg>
);

const Footer = () => {
  const containerRef = useRef<HTMLElement>(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  useGSAP(() => {
    // Reveal footer columns one by one
    gsap.fromTo(".footer-column",
      { opacity: 0, y: 30 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.8, 
        stagger: 0.15, 
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 95%",
        }
      }
    );

    // Subtle float animation for background blur elements
    gsap.to(".footer-bg-blob", {
      y: "20px",
      duration: 3,
      repeat: -1,
      yoyo: true,
      stagger: 0.5,
      ease: "sine.inOut"
    });
  }, { scope: containerRef });

  return (
    <footer className="relative bg-[#020617] pt-8 pb-4 overflow-hidden text-white" ref={containerRef}>
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="footer-bg-blob absolute top-0 left-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="footer-bg-blob absolute bottom-0 right-0 w-[400px] h-[400px] bg-accent/5 blur-[100px] rounded-full translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="w-full max-w-full px-6 md:px-12 lg:px-20">
        {/* Main Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 mb-6 border-b border-white/10 pb-8">
          
          {/* Column 1: Brand & Mission */}
          <div className="footer-column sm:col-span-2 lg:col-span-4 space-y-4">
            <Link to="/" className="group flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl overflow-hidden transition-all group-hover:scale-110 group-hover:rotate-3">
                <img src={logo} alt="Reyansh Solar Services" className="h-full w-full object-contain" />
              </div>
              <span className="font-display text-2xl sm:text-3xl font-bold tracking-tighter text-white">
                Reyansh Solar Services<span className="text-green-400">.</span>
              </span>
            </Link>
            <p className="text-white/90 leading-relaxed text-base sm:text-lg lg:text-xl font-medium max-w-md">
              Empowering India with clean, sustainable, and affordable energy solutions. Join the green revolution today.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              {[
                { icon: WhatsappIcon, href: "https://wa.me/919657068609", color: "text-[#25D366]", hoverBg: "hover:bg-[#25D366]", borderColor: "border-[#25D366]/20" },
                { icon: Instagram, href: "https://www.instagram.com/reyanshsolarservices?igsh=MTc5dmV2Y3d4ajkxNQ==", color: "text-[#E4405F]", hoverBg: "hover:bg-[#E4405F]", borderColor: "border-[#E4405F]/20" }
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-white/5 border ${social.borderColor} ${social.color} transition-all ${social.hoverBg} hover:text-white hover:-translate-y-1.5 hover:shadow-lg hover:shadow-primary/20`}
                >
                  <social.icon className="h-6 w-6 sm:h-7 sm:w-7" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div className="footer-column md:col-span-1 lg:col-span-2">
            <h4 className="text-lg lg:text-xl font-black uppercase tracking-widest text-green-400 mb-4 flex items-center gap-3">
               <span className="w-8 h-px bg-green-400/50 block md:hidden" /> Company
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Home", href: "/" },
                { label: "About Us", href: "/about" },
                { label: "Our Services", href: "/services" },
                { label: "Projects", href: "/projects" },
                { label: "Testimonials", href: "/testimonials" },
                { label: "Contact Us", href: "/contact" },
              ].map((link) => (
                <li key={link.label}>
                  <Link 
                    to={link.href} 
                    className="text-white/90 hover:text-white flex items-center gap-3 group text-base md:text-lg font-semibold w-fit"
                  >
                    <span className="h-px w-0 bg-green-400 transition-all group-hover:w-4" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="footer-column md:col-span-1 lg:col-span-3">
            <h4 className="text-lg lg:text-xl font-black uppercase tracking-widest text-green-400 mb-4 flex items-center gap-3">
               <span className="w-8 h-px bg-green-400/50 block md:hidden" /> Solutions
            </h4>
            <ul className="space-y-3">
              {[
                "Residential Solar",
                "Commercial Arrays",
                "Industrial EPC",
                "Solar Maintenance",
                "System Monitoring",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm sm:text-base md:text-lg font-semibold text-white/90 hover:text-white transition-colors cursor-pointer group w-fit">
                   <div className="h-1.5 w-1.5 rounded-full bg-white/20 group-hover:bg-green-400 transition-colors" />
                   {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Trust */}
          <div className="footer-column md:col-span-2 lg:col-span-3 space-y-6 pt-4 md:pt-0">
            <div>
              <h4 className="text-lg lg:text-xl font-black uppercase tracking-widest text-green-400 mb-4 flex items-center gap-3">
                 <span className="w-8 h-px bg-green-400/50 block md:hidden" /> Reach Out
              </h4>
              <ul className="space-y-3">
                <li className="flex gap-4 group items-start">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/5 border border-white/10 group-hover:border-primary/50 transition-all mt-1">
                    <MapPin className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-base md:text-lg text-white/90 group-hover:text-white leading-relaxed font-semibold transition-colors">
                    Gat no. 404, Yelwadi, Near Dehu, Khed, Pune - 410501
                  </span>
                </li>
                <li className="flex items-center gap-4 group">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/5 border border-white/10 group-hover:border-primary/50 transition-all">
                    <Phone className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-base md:text-lg text-white/90 group-hover:text-white font-bold transition-colors">+91 96570 68609</span>
                </li>
                <li className="flex items-center gap-4 group">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/5 border border-white/10 group-hover:border-primary/50 transition-all">
                    <Mail className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-base md:text-lg text-white/90 group-hover:text-white font-bold transition-colors break-all">reyanshsolarsevices@gmail.com</span>
                </li>
              </ul>
            </div>
            
            {/* Certifications row */}
            <div className="flex gap-6 pt-3 border-t border-white/5">
                <div className="flex items-center gap-2 text-white transition-all">
                   <Shield className="h-5 w-5" />
                   <span className="text-xs font-bold uppercase tracking-tight">ISO Certified</span>
                </div>
                <div className="flex items-center gap-2 text-white transition-all">
                   <Award className="h-5 w-5" />
                   <span className="text-xs font-bold uppercase tracking-tight">MNRE Approved</span>
                </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pt-6 border-t border-white/5">
          <div className="text-[12px] sm:text-[14px] font-bold text-white/70 text-center md:text-left tracking-wide">
            © {currentYear} REYANSH SOLAR SERVICES. All Rights Reserved.
          </div>

          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-10">
            <button 
              onClick={scrollToTop}
              className="group flex items-center gap-3 text-[12px] sm:text-[14px] font-extrabold uppercase tracking-[0.2em] text-white transition-all order-2 md:order-1"
            >
              Back to Top
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 border border-white/10 group-hover:bg-primary group-hover:border-primary group-hover:shadow-[0_0_20px_hsla(var(--primary),0.4)] transition-all">
                <ArrowUp className="h-4 w-4 text-white" />
              </div>
            </button>
            <div className="text-[12px] sm:text-[14px] font-bold text-white/70 order-1 md:order-2 text-center md:text-left">
              Developed by <a href="https://infoyashonand.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-white transition-colors underline underline-offset-4 decoration-white/30">Infoyashonand Technology Pvt Ltd</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
