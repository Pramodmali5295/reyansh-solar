import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Sun } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-card/95 backdrop-blur-md shadow-lg border-b border-border/50 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="w-full max-w-full flex items-center justify-between px-6 md:px-12 lg:px-16">
        <Link to="/" className="group flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl gradient-primary shadow-lg transition-transform group-hover:scale-110">
            <Sun className="h-6 w-6 text-primary-foreground" />
          </div>
          <span className={`font-display text-2xl font-bold tracking-tight transition-colors ${scrolled ? "text-foreground" : "text-primary-foreground"}`}>
            SolarVolt
          </span>
        </Link>

        {/* Desktop */}
        <ul className="hidden items-center gap-10 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                to={link.href}
                className={`text-base font-semibold uppercase tracking-wider transition-all hover:text-accent relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-accent after:transition-all hover:after:w-full ${
                  isActive(link.href) ? "text-accent after:w-full" : (scrolled ? "text-foreground" : "text-primary-foreground/90")
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              to="/contact"
              className="rounded-full bg-accent px-6 py-2.5 text-base font-bold text-accent-foreground shadow-lg transition-all hover:scale-105 hover:shadow-accent/40 active:scale-95"
            >
              Contact Us
            </Link>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          className="rounded-lg p-2 md:hidden transition-colors hover:bg-white/10"
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
          <motion.div
            initial={{ opacity: 0, height: 0, y: -20 }}
            animate={{ opacity: 1, height: "auto", y: 0 }}
            exit={{ opacity: 0, height: 0, y: -20 }}
            className="overflow-hidden bg-card/98 backdrop-blur-xl shadow-2xl md:hidden border-b border-border"
          >
            <ul className="flex flex-col gap-2 p-6">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`block rounded-xl px-5 py-4 text-lg font-bold transition-all hover:bg-primary/10 active:scale-[0.98] ${
                      isActive(link.href) ? "bg-primary/10 text-primary" : "text-foreground"
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
                  className="block rounded-full bg-accent px-5 py-4 text-center text-lg font-bold text-accent-foreground shadow-lg active:scale-95"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
