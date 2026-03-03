import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Phone, Mail, MapPin, Send, Clock, Globe } from "lucide-react";

const ContactSection = ({ showHeader = true }: { showHeader?: boolean }) => {
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
      <div className="w-full max-w-full px-6 md:px-12 lg:px-20">
        {showHeader && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mx-auto mb-16 max-w-3xl text-center"
          >
            <span className="mb-2 inline-block text-sm font-semibold uppercase tracking-widest text-primary">
              Get In Touch
            </span>
            <h2 className="mb-4 font-bold text-foreground heading-section">
              Start Your Solar Journey
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Have questions about solar for your home or business? Our experts are here to help you navigate the 
              transition to clean energy.
            </p>
          </motion.div>
        )}

        <div className="grid gap-12 lg:grid-cols-12">
          {/* Info Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-4 space-y-8"
          >
            <div>
               <h3 className="text-2xl font-bold text-foreground mb-6">Contact Information</h3>
               <p className="text-muted-foreground mb-8">
                 We're available 6 days a week to assist you with any inquiries or technical support.
               </p>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-1 lg:space-y-6">
              {[
                { icon: MapPin, label: "Headquarters", value: "42, Solar Park Road, Koramangala, KA 560034" },
                { icon: Phone, label: "Phone Support", value: "+91 98765 43210" },
                { icon: Mail, label: "Email Queries", value: "connect@solarvolt.in" },
                { icon: Clock, label: "Business Hours", value: "Mon - Sat: 9:00 AM - 6:30 PM" },
              ].map((item) => (
                <div key={item.label} className="group flex flex-col sm:flex-row lg:flex-row gap-5 rounded-2xl bg-card p-6 shadow-sm transition-all hover:shadow-md border border-border/50">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-foreground">{item.label}</div>
                    <div className="text-sm text-muted-foreground mt-0.5">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>


          </motion.div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-8 space-y-8"
          >
            <form
              onSubmit={handleSubmit}
              className="rounded-3xl bg-card p-8 md:p-12 shadow-xl border border-border/50 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5">
                 <Globe className="h-64 w-64 text-primary" />
              </div>

              <div className="relative z-10">
                <div className="mb-10">
                   <h3 className="text-3xl font-bold text-foreground mb-2">Request a Free Quote</h3>
                   <p className="text-muted-foreground">Fill out the form below and we'll get back to you within 24 hours.</p>
                </div>

                <div className="grid gap-6 md:grid-cols-2 mb-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-foreground ml-1">Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      className="w-full rounded-xl border border-input bg-background/50 px-5 py-4 text-sm outline-none transition-all focus:border-primary focus:ring-4 focus:ring-primary/5"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-foreground ml-1">Phone Number</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 00000 00000"
                      className="w-full rounded-xl border border-input bg-background/50 px-5 py-4 text-sm outline-none transition-all focus:border-primary focus:ring-4 focus:ring-primary/5"
                    />
                  </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2 mb-6">
                   <div className="space-y-2">
                    <label className="text-sm font-bold text-foreground ml-1">Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="rahul@example.com"
                      className="w-full rounded-xl border border-input bg-background/50 px-5 py-4 text-sm outline-none transition-all focus:border-primary focus:ring-4 focus:ring-primary/5"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-foreground ml-1">Property Type</label>
                    <select className="w-full rounded-xl border border-input bg-background/50 px-5 py-4 text-sm outline-none transition-all focus:border-primary focus:ring-4 focus:ring-primary/5">
                      <option>Residential Building</option>
                      <option>Commercial Complex</option>
                      <option>Industrial Factory</option>
                      <option>Other / Maintenance</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2 mb-8">
                  <label className="text-sm font-bold text-foreground ml-1">Project Details</label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your rooftop area or energy requirements..."
                    className="w-full resize-none rounded-xl border border-input bg-background/50 px-5 py-4 text-sm outline-none transition-all focus:border-primary focus:ring-4 focus:ring-primary/5"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitted}
                  className={`flex w-full items-center justify-center gap-3 rounded-2xl py-5 text-lg font-bold shadow-2xl transition-all active:scale-95 ${
                    submitted ? "bg-green-500 text-white" : "bg-primary text-primary-foreground hover:scale-[1.02] hover:shadow-primary/30"
                  }`}
                >
                  {submitted ? (
                    <>Message Sent Successfully! ✓</>
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      Get My Free Estimation
                    </>
                  )}
                </button>
                <p className="mt-4 text-center text-xs text-muted-foreground">
                  By clicking submit, you agree to our 100% privacy policy. No spam, ever.
                </p>
              </div>
            </form>

            <div className="overflow-hidden rounded-3xl shadow-xl border border-border/50 h-[300px]">
              <iframe
                title="SolarVolt Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.5560767862935!2d77.6167!3d12.9352!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU2JzA2LjciTiA3N8KwMzcnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "grayscale(0.1) contrast(1.1)" }}
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
