import { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Phone, Mail, MapPin, Send, Clock, Globe, Shield } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const ContactSection = ({ showHeader = true }: { showHeader?: boolean }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [submitted, setSubmitted] = useState(false);

  useGSAP(() => {
    // Header
    if (showHeader) {
      gsap.fromTo(".contact-header > *",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, stagger: 0.15, ease: "power3.out", scrollTrigger: { trigger: ".contact-section", start: "top 85%" } }
      );
    }

    // Info Side
    gsap.fromTo(".contact-info",
      { opacity: 0, x: -30 },
      { opacity: 1, x: 0, duration: 0.8, ease: "power3.out", scrollTrigger: { trigger: ".contact-grid", start: "top 80%" } }
    );

    // Form Side
    gsap.fromTo(".contact-form",
      { opacity: 0, x: 30 },
      { opacity: 1, x: 0, duration: 0.8, ease: "power3.out", scrollTrigger: { trigger: ".contact-grid", start: "top 80%" } }
    );

    // Map Reveal
    gsap.fromTo(".contact-map",
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.8, delay: 0.2, ease: "power3.out", scrollTrigger: { trigger: ".contact-grid", start: "top 75%" } }
    );

  }, { scope: containerRef, dependencies: [showHeader] });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct WhatsApp message
    const formData = new FormData(e.target as HTMLFormElement);
    const name = formData.get("name");
    const phone = formData.get("phone");
    const units = formData.get("units");
    const type = formData.get("type");
    const details = formData.get("details");

    const message = `*New Enquiry from Reyansh Solar Services Website*\n\n` +
      `*Name:* ${name}\n` +
      `*Phone:* ${phone}\n` +
      `*Units:* ${units}\n` +
      `*Property Type:* ${type}\n` +
      `*Details:* ${details || "N/A"}`;

    const whatsappUrl = `https://wa.me/919657068609?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");

    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="contact-section section-padding bg-section-alt" ref={containerRef}>
      <div className="w-full max-w-full px-6 md:px-12 lg:px-20">
        {showHeader && (
          <div
            className="contact-header mx-auto mb-16 max-w-3xl text-center"
          >
            <span className="mb-2 inline-block text-base md:text-lg font-semibold uppercase tracking-widest text-primary">
              Get In Touch
            </span>
            <h2 className="mb-4 font-bold text-foreground heading-section">
              Start Your Solar Journey
            </h2>
            <p className="text-muted-foreground text-xl leading-relaxed">
              Have questions about solar for your home or business? Our experts are here to help you navigate the 
              transition to clean energy.
            </p>
          </div>
        )}

        <div className="contact-grid grid gap-12 lg:grid-cols-12">
          {/* Info Side */}
          <div
            className="contact-info lg:col-span-4 space-y-8"
          >
            <div>
               <h3 className="text-3xl font-bold text-foreground mb-6">Contact Information</h3>
               <p className="text-muted-foreground mb-8 text-lg">
                 We're available 6 days a week to assist you with any inquiries or technical support.
               </p>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-1 lg:space-y-6">
              {[
                { icon: MapPin, label: "Headquarters", value: "Gat no. 404, Yelwadi, Near Dehu, Khed, Pune - 410501" },
                { icon: Phone, label: "Phone Support", value: "+91 96570 68609" },
                { icon: Mail, label: "Email Us", value: "reyanshsolarservices@gmail.com" },
                { icon: Shield, label: "GST Number", value: "27ABMFR1823R1ZH" },
                { icon: Clock, label: "Business Hours", value: "Mon - Sun: 9:00 AM - 6:00 PM" },
              ].map((item) => (
                <div key={item.label} className="group flex flex-row gap-3 sm:gap-5 rounded-2xl bg-card p-3 sm:p-6 shadow-sm transition-all hover:shadow-md border border-border/50">
                  <div className="flex h-10 w-10 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <item.icon className="h-4 w-4 sm:h-6 sm:w-6" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-[14px] sm:text-lg font-bold text-foreground truncate">{item.label}</div>
                    {item.label === "Email Us" ? (
                      <a href={`mailto:${item.value}`} className="text-[11px] xs:text-[13px] sm:text-base text-muted-foreground mt-0.5 leading-snug whitespace-nowrap hover:text-primary transition-colors block">
                        {item.value}
                      </a>
                    ) : item.label === "Phone Support" ? (
                      <a href={`tel:${item.value.replace(/\s+/g, '')}`} className="text-[14px] sm:text-base text-muted-foreground mt-0.5 leading-snug whitespace-nowrap hover:text-primary transition-colors block">
                        {item.value}
                      </a>
                    ) : (
                      <div className="text-[14px] sm:text-base text-muted-foreground mt-0.5 leading-snug break-words">{item.value}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>


          </div>

          {/* Form Side */}
          <div
            className="lg:col-span-8 space-y-8"
          >
            <form
              onSubmit={handleSubmit}
              className="contact-form rounded-3xl bg-card p-6 sm:p-8 md:p-12 shadow-xl border border-border/50 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5">
                 <Globe className="h-64 w-64 text-primary" />
              </div>

              <div className="relative z-10">
                <div className="mb-8">
                   <h3 className="text-2xl xs:text-3xl md:text-4xl font-black text-foreground mb-3 tracking-tight">Request a Free Quote</h3>
                   <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">Fill out the form below and we'll get back to you within 24 hours.</p>
                </div>

                <div className="grid gap-5 md:grid-cols-2 mb-5">
                  <div className="space-y-1.5 transition-all">
                    <label className="text-[14px] sm:text-[16px] font-bold text-foreground/80 ml-1">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="e.g. Rahul Sharma"
                      className="w-full rounded-xl border border-input bg-background/50 px-5 py-4 text-[16px] outline-none transition-all focus:border-primary focus:ring-4 focus:ring-primary/5"
                    />
                  </div>
                  <div className="space-y-1.5 transition-all">
                    <label className="text-[14px] sm:text-[16px] font-bold text-foreground/80 ml-1">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      pattern="[0-9]{10}"
                      title="Please enter a 10-digit phone number"
                      maxLength={10}
                      minLength={10}
                      onInput={(e) => {
                        e.currentTarget.value = e.currentTarget.value.replace(/[^0-9]/g, '');
                      }}
                      placeholder="e.g. 9876543210"
                      className="w-full rounded-xl border border-input bg-background/50 px-5 py-4 text-[16px] outline-none transition-all focus:border-primary focus:ring-4 focus:ring-primary/5"
                    />
                  </div>
                </div>

                <div className="grid gap-5 md:grid-cols-2 mb-5">
                   <div className="space-y-1.5 transition-all">
                    <label className="text-[14px] sm:text-[16px] font-bold text-foreground/80 ml-1">Monthly Light Units</label>
                    <select name="units" className="w-full rounded-xl border border-input bg-background/50 px-5 py-4 text-[16px] outline-none transition-all focus:border-primary focus:ring-4 focus:ring-primary/5">
                      <option>0 - 150 Units</option>
                      <option>151 - 300 Units</option>
                      <option>301 - 500 Units</option>
                      <option>501 - 1000 Units</option>
                      <option>1000+ Units</option>
                    </select>
                  </div>
                  <div className="space-y-1.5 transition-all">
                    <label className="text-[14px] sm:text-[16px] font-bold text-foreground/80 ml-1">Property Type</label>
                    <select name="type" className="w-full rounded-xl border border-input bg-background/50 px-5 py-4 text-[16px] outline-none transition-all focus:border-primary focus:ring-4 focus:ring-primary/5">
                      <option>Residential Building</option>
                      <option>Commercial Complex</option>
                      <option>Industrial Factory</option>
                      <option>Other / Maintenance</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5 mb-8 transition-all">
                  <label className="text-[14px] sm:text-[16px] font-bold text-foreground/80 ml-1">Project Details</label>
                  <textarea
                    rows={4}
                    name="details"
                    placeholder="Tell us about your rooftop area or energy requirements..."
                    className="w-full resize-none rounded-xl border border-input bg-background/50 px-5 py-4 text-[16px] outline-none transition-all focus:border-primary focus:ring-4 focus:ring-primary/5"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitted}
                  className={`flex w-full items-center justify-center gap-3 rounded-2xl py-5 text-[18px] sm:text-xl font-bold shadow-2xl transition-all active:scale-95 ${
                    submitted ? "bg-green-500 text-white" : "bg-primary text-primary-foreground hover:scale-[1.02] hover:shadow-primary/30"
                  }`}
                >
                  {submitted ? (
                    <>Message Sent Successfully! ✓</>
                  ) : (
                    <>
                      <Send className="h-6 w-6" />
                      Get My Free Estimation
                    </>
                  )}
                </button>
                <p className="mt-5 text-center text-sm text-muted-foreground">
                  By clicking submit, you agree to our 100% privacy policy. No spam, ever.
                </p>
              </div>
            </form>

            <div className="contact-map overflow-hidden rounded-3xl shadow-xl border border-border/50 h-[300px] md:h-[400px]">
              <iframe
                title="Reyansh Solar Services Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1890.8537843393096!2d73.89593328241729!3d18.58721810773384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c6d69d3f62a1%3A0xa18456879ab54285!2sDhanori%2C%20Pune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1773732075268!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "grayscale(0.1) contrast(1.1)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
