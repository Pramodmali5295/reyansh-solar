import { useState, useEffect } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Send, CheckCircle2, Zap, Shield, Sun } from "lucide-react";

export function InquiryModal() {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    // Show modal once per session
    const hasSeenModal = sessionStorage.getItem("hasSeenInquiryModalProfessional");
    if (!hasSeenModal) {
      const timer = setTimeout(() => {
        setOpen(true);
        sessionStorage.setItem("hasSeenInquiryModalProfessional", "true");
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Construct WhatsApp message
    const formData = new FormData(e.target as HTMLFormElement);
    const name = formData.get("name");
    const phone = formData.get("phone");
    const units = formData.get("units");
    const type = formData.get("type");
    const details = formData.get("details");

    const message = `*Quick Quote Request from Reyansh Solar Services*\n\n` +
      `*Name:* ${name}\n` +
      `*Phone:* ${phone}\n` +
      `*Units:* ${units}\n` +
      `*Property Type:* ${type}\n` +
      `*Details:* ${details || "N/A"}`;

    const whatsappUrl = `https://wa.me/919657068609?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setOpen(false);
    }, 2000);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-4xl p-0 overflow-hidden border-0 bg-transparent shadow-none sm:rounded-3xl max-h-[96vh] overflow-y-auto">
        <div className="flex flex-col md:flex-row w-full bg-card rounded-3xl overflow-hidden shadow-2xl border border-border/50 my-auto">
          
          {/* Left Panel - Value Proposition */}
          <div className="hidden md:flex flex-col justify-between w-[40%] bg-primary p-10 text-primary-foreground relative overflow-hidden">
            {/* Abstract Background Design */}
            <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 opacity-10">
              <Sun className="w-64 h-64" />
            </div>
            <div className="absolute bottom-0 left-0 translate-y-24 -translate-x-12 w-64 h-64 bg-white/10 blur-3xl rounded-full" />
            
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 bg-primary-foreground/20 px-3 py-1 rounded-full text-sm font-medium mb-6 backdrop-blur-sm border border-primary-foreground/10">
                <Zap className="w-4 h-4 text-secondary" />
                 Special Offer Available
              </div>
              <h2 className="text-3xl font-bold leading-tight mb-4">
                Switch to Solar & Save up to 80%
              </h2>
              <p className="text-primary-foreground/80 mb-8 leading-relaxed">
                Join thousands of homeowners reducing their electricity bills with premium solar installations.
              </p>

              <div className="space-y-4">
                {[
                  { icon: CheckCircle2, text: "Zero upfront cost options" },
                  { icon: Shield, text: "25-year performance warranty" },
                  { icon: Zap, text: "Tier-1 high efficiency panels" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <item.icon className="w-5 h-5 text-secondary" />
                    <span className="font-medium">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative z-10 mt-12 bg-primary-foreground/10 p-4 rounded-2xl backdrop-blur-sm border border-primary-foreground/10">
              <div className="flex items-center gap-3 mb-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-secondary border-2 border-primary flex items-center justify-center text-xs font-bold text-primary-foreground">
                      U{i}
                    </div>
                  ))}
                </div>
                <div className="text-sm font-medium">Trusted by 500+</div>
              </div>
              <p className="text-xs text-primary-foreground/70">"Best decision for our home. The savings are incredible."</p>
            </div>
          </div>

          {/* Right Panel - Form */}
          <div className="w-full md:w-[60%] p-4 sm:p-6 md:p-10 relative bg-card">
            <div className="mb-3 md:mb-6">
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-1 md:mb-2 text-center md:text-left">Get Your Free Estimate</h3>
              <p className="text-muted-foreground text-[11px] sm:text-sm text-center md:text-left">Takes less than a minute. No obligations.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-2.5 md:space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider ml-1">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Rahul Sharma"
                    className="w-full rounded-xl border border-input bg-background/50 px-4 py-2 sm:py-3 text-sm outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider ml-1">Phone Number</label>
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
                    className="w-full rounded-xl border border-input bg-background/50 px-4 py-2 sm:py-3 text-sm outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
                  />
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider ml-1">Monthly Light Units</label>
                  <select name="units" className="w-full rounded-xl border border-input bg-background/50 px-4 py-2 sm:py-3 text-sm outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20">
                    <option>0 - 150 Units</option>
                    <option>151 - 300 Units</option>
                    <option>301 - 500 Units</option>
                    <option>501 - 1000 Units</option>
                    <option>1000+ Units</option>
                  </select>
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider ml-1">Property Type</label>
                  <select name="type" className="w-full rounded-xl border border-input bg-background/50 px-4 py-2 sm:py-3 text-sm outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20">
                    <option>Residential</option>
                    <option>Commercial</option>
                    <option>Industrial</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1.5 pt-2">
                <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider ml-1">Additional Details (Optional)</label>
                <textarea
                  rows={2}
                  name="details"
                  placeholder="Any specific requirements or questions?"
                  className="w-full h-16 sm:h-auto resize-none rounded-xl border border-input bg-background/50 px-4 py-2 sm:py-3 text-sm outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  disabled={submitted}
                  className={`relative flex w-full items-center justify-center gap-2 rounded-xl py-3 sm:py-4 text-base font-bold shadow-lg transition-all active:scale-[0.98] overflow-hidden ${
                    submitted ? "bg-green-500 text-white" : "bg-primary text-primary-foreground hover:shadow-primary/25"
                  }`}
                >
                  <div className="absolute inset-0 bg-white/20 translate-y-[-100%] hover:translate-y-[100%] transition-transform duration-500 transition-ease-out" />
                  {submitted ? (
                    <>
                      <CheckCircle2 className="h-5 w-5" />
                      Request Received!
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      Show My Estimate
                    </>
                  )}
                </button>
                <p className="mt-2 md:mt-4 text-center text-[10px] sm:text-[11px] text-muted-foreground font-medium">
                  Your information is 100% secure. We respect your privacy.
                </p>
              </div>
            </form>
          </div>

        </div>
      </DialogContent>
    </Dialog>
  );
}
