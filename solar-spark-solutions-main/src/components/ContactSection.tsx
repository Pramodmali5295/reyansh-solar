import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="section-padding bg-section-alt" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          <span className="mb-2 inline-block text-sm font-semibold uppercase tracking-widest text-primary">
            Get In Touch
          </span>
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            Contact Us
          </h2>
          <p className="text-muted-foreground">
            Ready to go solar? Get a free consultation and customized quote for your project.
          </p>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-2">
          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-5 rounded-xl bg-card p-8 shadow-sm"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="mb-1.5 block text-sm font-medium text-foreground">Full Name</label>
                <input
                  type="text"
                  required
                  className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-foreground">Phone</label>
                <input
                  type="tel"
                  required
                  className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary"
                  placeholder="+91 9876543210"
                />
              </div>
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium text-foreground">Email</label>
              <input
                type="email"
                required
                className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium text-foreground">Service Interested In</label>
              <select className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary">
                <option>Residential Solar</option>
                <option>Commercial Solar</option>
                <option>Industrial Solar</option>
                <option>Maintenance & AMC</option>
              </select>
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium text-foreground">Message</label>
              <textarea
                rows={4}
                className="w-full resize-none rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary"
                placeholder="Tell us about your project..."
              />
            </div>
            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3.5 font-semibold text-primary-foreground transition-transform hover:scale-[1.02]"
            >
              {submitted ? "Message Sent! ✓" : <><Send className="h-4 w-4" /> Send Message</>}
            </button>
          </motion.form>

          {/* Info + Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              {[
                { icon: MapPin, label: "Visit Us", value: "42, Solar Park Road, Koramangala, Bengaluru, Karnataka 560034" },
                { icon: Phone, label: "Call Us", value: "+91 98765 43210" },
                { icon: Mail, label: "Email Us", value: "info@solarvolt.in" },
              ].map((item) => (
                <div key={item.label} className="flex gap-4 rounded-xl bg-card p-5 shadow-sm">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-foreground">{item.label}</div>
                    <div className="text-sm text-muted-foreground">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="overflow-hidden rounded-xl shadow-sm">
              <iframe
                title="SolarVolt Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.5560767862935!2d77.6167!3d12.9352!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU2JzA2LjciTiA3N8KwMzcnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="280"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
