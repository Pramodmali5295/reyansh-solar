import { useState, useEffect } from "react";
import { Menu, X, Sun } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-card/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-4">
        <a href="#home" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg gradient-primary">
            <Sun className="h-6 w-6 text-primary-foreground" />
          </div>
          <span className={`font-display text-xl font-bold ${scrolled ? "text-foreground" : "text-primary-foreground"}`}>
            SolarVolt
          </span>
        </a>

        {/* Desktop */}
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  scrolled ? "text-foreground" : "text-primary-foreground/90"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105"
            >
              Get Quote
            </a>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X className={`h-6 w-6 ${scrolled ? "text-foreground" : "text-primary-foreground"}`} />
          ) : (
            <Menu className={`h-6 w-6 ${scrolled ? "text-foreground" : "text-primary-foreground"}`} />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden bg-card shadow-lg md:hidden"
          >
            <ul className="flex flex-col gap-1 p-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block rounded-md px-4 py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="mt-2">
                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="block rounded-lg bg-primary px-4 py-3 text-center text-sm font-semibold text-primary-foreground"
                >
                  Get Quote
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
