import { Link } from "react-router-dom";
import { Sun, Facebook, Twitter, Instagram, Linkedin, ArrowUp, Mail, Phone, MapPin, Award, CheckCircle2, Shield } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#020617] pt-16 pb-8 overflow-hidden text-white">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none -z-10">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-accent/5 blur-[100px] rounded-full" />
      </div>

      <div className="w-full max-w-full px-6 md:px-12 lg:px-20">
        {/* Main Grid */}
        <div className="grid gap-12 lg:grid-cols-12 mb-12 border-b border-white/5 pb-12">
          
          {/* Column 1: Brand & Mission */}
          <div className="lg:col-span-4 space-y-6">
            <Link to="/" className="group flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl gradient-primary shadow-2xl transition-all group-hover:scale-110 group-hover:rotate-3">
                <Sun className="h-7 w-7 text-white" />
              </div>
              <span className="font-display text-2xl font-bold tracking-tighter text-white">
                SolarVolt<span className="text-primary">.</span>
              </span>
            </Link>
            <p className="text-white/70 leading-relaxed text-lg font-medium max-w-sm">
              Empowering India with clean, sustainable, and affordable energy solutions. Join the green revolution today.
            </p>
            <div className="flex gap-4">
              {[
                { icon: Facebook, href: "#" },
                { icon: Twitter, href: "#" },
                { icon: Instagram, href: "#" },
                { icon: Linkedin, href: "#" }
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 border border-white/10 text-white/60 transition-all hover:bg-primary hover:text-white hover:-translate-y-1.5 hover:shadow-lg hover:shadow-primary/20"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div className="lg:col-span-2">
            <h4 className="text-[13px] font-bold uppercase tracking-[0.25em] text-primary mb-6">Company</h4>
            <ul className="space-y-4">
              {[
                { label: "Home", href: "/" },
                { label: "About Us", href: "/about" },
                { label: "Our Services", href: "/services" },
                { label: "Portfolio", href: "/projects" },
                { label: "Testimonials", href: "/testimonials" },
                { label: "Contact Us", href: "/contact" },
              ].map((link) => (
                <li key={link.label}>
                  <Link 
                    to={link.href} 
                    className="text-white/70 hover:text-white transition-all duration-300 flex items-center gap-2 group text-base font-semibold"
                  >
                    <span className="h-px w-0 bg-primary transition-all group-hover:w-4" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="lg:col-span-3">
            <h4 className="text-[13px] font-bold uppercase tracking-[0.25em] text-primary mb-6">Solutions</h4>
            <ul className="space-y-4">
              {[
                "Residential Solar",
                "Commercial Arrays",
                "Industrial EPC",
                "Solar Maintenance",
                "System Monitoring",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-base font-semibold text-white/70 hover:text-white transition-colors cursor-pointer group">
                   <div className="h-1.5 w-1.5 rounded-full bg-white/20 group-hover:bg-primary transition-colors" />
                   {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Trust */}
          <div className="lg:col-span-3 space-y-6">
            <div>
              <h4 className="text-[13px] font-bold uppercase tracking-[0.25em] text-primary mb-6">Reach Out</h4>
              <ul className="space-y-4">
                <li className="flex gap-4 group">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/5 border border-white/10 group-hover:border-primary/50 transition-all">
                    <MapPin className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-base text-white/70 leading-relaxed font-semibold group-hover:text-white transition-colors">
                    42, Solar Park Road, Koramangala, KA 560034
                  </span>
                </li>
                <li className="flex items-center gap-4 group">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/5 border border-white/10 group-hover:border-primary/50 transition-all">
                    <Phone className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-base text-white/70 font-bold group-hover:text-white transition-colors">+91 98765 43210</span>
                </li>
              </ul>
            </div>
            
            {/* Certifications row */}
            <div className="flex gap-6 pt-4 border-t border-white/5">
                <div className="flex items-center gap-2 text-white/50 hover:text-white transition-all">
                   <Shield className="h-5 w-5" />
                   <span className="text-[11px] font-bold uppercase tracking-tight">ISO Certified</span>
                </div>
                <div className="flex items-center gap-2 text-white/50 hover:text-white transition-all">
                   <Award className="h-5 w-5" />
                   <span className="text-[11px] font-bold uppercase tracking-tight">MNRE Approved</span>
                </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-5 text-sm font-bold text-white/50">
            <span>© {currentYear} SOLARVOLT ENERGY PVT. LTD.</span>
            <span className="hidden md:inline h-4 w-px bg-white/10" />
            <span className="flex items-center gap-1.5 translate-y-[0.5px]">
               PROUDLY INDIAN <CheckCircle2 className="h-3.5 w-3.5 text-green-500" />
            </span>
          </div>

          <div className="flex items-center gap-8">
            <button 
              onClick={scrollToTop}
              className="group flex items-center gap-4 text-sm font-black uppercase tracking-[0.2em] text-white/60 hover:text-white transition-all"
            >
              Back to Top
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/5 border border-white/10 group-hover:bg-primary group-hover:border-primary group-hover:shadow-[0_0_20px_rgba(var(--primary),0.4)] transition-all">
                <ArrowUp className="h-5 w-5 text-white" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
