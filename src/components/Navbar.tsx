import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Sun } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logo.jpeg";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Calculator", href: "/calculator" },
  { label: "Testimonials", href: "/testimonials" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (path: string) => {
    if (path === "/" && location.pathname !== "/") return false;
    return location.pathname.startsWith(path);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 flex items-center ${
        scrolled
          ? "bg-card/95 backdrop-blur-md shadow-lg border-b border-border/50 h-20 sm:h-24"
          : "bg-transparent h-24 sm:h-32"
      }`}
    >
      <div className="w-full max-w-full flex items-center justify-between px-6 md:px-12 lg:px-16 container mx-auto">
        <Link to="/" className="group flex items-center gap-2 sm:gap-4 shrink-0 max-w-[70%] sm:max-w-none">
          <div className="flex h-10 w-16 xs:h-12 xs:w-20 sm:h-20 sm:w-32 items-center justify-center rounded-lg sm:rounded-xl overflow-hidden transition-transform group-hover:scale-110">
            <img src={logo} alt="Reyansh Solar Services" className="h-full w-full object-contain" />
          </div>
          <span className={`font-display text-[14px] xs:text-lg sm:text-2xl lg:text-3xl font-black tracking-tighter transition-colors leading-tight ${scrolled ? "text-foreground" : "text-white"}`}>
            Reyansh Solar Services
          </span>
        </Link>

        {/* Desktop */}
        <ul className="hidden items-center gap-6 xl:gap-8 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                to={link.href}
                className={`text-[16px] font-bold uppercase tracking-wider transition-all hover:text-accent relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-accent after:transition-all hover:after:w-full ${
                  isActive(link.href) ? "text-accent after:w-full" : (scrolled ? "text-foreground" : "text-white drop-shadow-md brightness-110")
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              to="/contact"
              className="rounded-full bg-accent px-6 py-3 text-[16px] font-bold text-accent-foreground shadow-lg transition-all hover:scale-105 hover:shadow-accent/40 active:scale-95"
            >
              Contact Us
            </Link>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          className="rounded-lg p-2 lg:hidden transition-colors hover:bg-white/10"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X className={`h-7 w-7 ${scrolled ? "text-foreground" : "text-primary-foreground"}`} />
          ) : (
            <Menu className={`h-7 w-7 ${scrolled ? "text-foreground" : "text-primary-foreground"}`} />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop for mobile menu */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-[-1] bg-black/50 backdrop-blur-sm lg:hidden h-screen w-screen"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              className="absolute left-0 right-0 top-full mt-0 overflow-hidden bg-primary backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] lg:hidden border-t border-white/10"
            >
              <ul className="flex flex-col gap-1 p-6">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`block rounded-xl px-5 py-4 text-[18px] font-bold transition-all active:scale-[0.98] ${
                        isActive(link.href) 
                          ? "bg-white/20 text-white" 
                          : "text-white/90 hover:bg-white/10 hover:text-white"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
                <li className="mt-4">
                  <Link
                    to="/contact"
                    onClick={() => setIsOpen(false)}
                    className="block rounded-full bg-accent px-5 py-4 text-center text-[18px] font-bold text-accent-foreground shadow-lg active:scale-95"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
