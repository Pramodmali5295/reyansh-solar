import { Sun, Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";

const Footer = () => (
  <footer className="gradient-primary pt-16 pb-8">
    <div className="container mx-auto">
      <div className="grid gap-10 pb-10 sm:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div>
          <div className="mb-4 flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary-foreground/20">
              <Sun className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="font-display text-lg font-bold text-primary-foreground">SolarVolt</span>
          </div>
          <p className="mb-6 text-sm leading-relaxed text-primary-foreground/70">
            India's trusted solar installation partner. Delivering clean energy solutions since 2010.
          </p>
          <div className="flex gap-3">
            {[Facebook, Twitter, Instagram, Linkedin, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-foreground/10 text-primary-foreground/70 transition-colors hover:bg-primary-foreground/20 hover:text-primary-foreground"
                aria-label="Social link"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary-foreground">Quick Links</h4>
          <ul className="space-y-2.5">
            {["Home", "About Us", "Services", "Projects", "Contact"].map((l) => (
              <li key={l}>
                <a href={`#${l.toLowerCase().replace(" ", "")}`} className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground">
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary-foreground">Services</h4>
          <ul className="space-y-2.5">
            {["Residential Solar", "Commercial Solar", "Industrial Solar", "Maintenance & AMC", "Solar Consulting"].map((s) => (
              <li key={s}>
                <a href="#services" className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground">
                  {s}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary-foreground">Contact Info</h4>
          <ul className="space-y-2.5 text-sm text-primary-foreground/70">
            <li>42, Solar Park Road, Koramangala</li>
            <li>Bengaluru, Karnataka 560034</li>
            <li>+91 98765 43210</li>
            <li>info@solarvolt.in</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10 pt-8 text-center text-sm text-primary-foreground/50">
        © {new Date().getFullYear()} SolarVolt Energy Pvt. Ltd. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
