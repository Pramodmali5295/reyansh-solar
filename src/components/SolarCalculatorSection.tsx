import { useState, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Calculator, Zap, IndianRupee, Sun, Leaf, ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);
import { Link } from "react-router-dom";

const SolarCalculatorSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // 1. Calculator Left Panel Animation
    gsap.fromTo(".calculator-left",
      { opacity: 0, x: -30 },
      { opacity: 1, x: 0, duration: 0.8, ease: "power3.out", scrollTrigger: { trigger: ".calculator-section", start: "top 80%" } }
    );

    // 2. Calculator Right Panel Animation
    const rightTl = gsap.timeline({ scrollTrigger: { trigger: ".calculator-section", start: "top 80%" } });
    rightTl.fromTo(".calculator-right > *",
      { opacity: 0, x: 30 },
      { opacity: 1, x: 0, duration: 0.8, stagger: 0.15, ease: "power3.out" }
    );
  }, { scope: containerRef });

  const [monthlyBill, setMonthlyBill] = useState<number>(0);
  const [propertyType, setPropertyType] = useState<"Residential" | "Commercial" | "Industrial">("Residential");
  const [unitRate, setUnitRate] = useState<number | string>(8);

  const handlePropertyTypeChange = (type: "Residential" | "Commercial" | "Industrial") => {
    setPropertyType(type);
    if (type === "Residential") setUnitRate(8);
    else if (type === "Commercial") setUnitRate(12);
    else if (type === "Industrial") setUnitRate(10);
  };

  // Constants for calculation
  const UNITS_PER_KW_MONTH = 120; // 1kW solar produces ~120 units/month
  const COST_PER_KW = 60000; // Estimated cost per kW in ₹

  // Calculations
  const numericUnitRate = Number(unitRate) > 0 ? Number(unitRate) : 1; // Prevent division by zero
  const monthlyUnits = monthlyBill / numericUnitRate;
  let recommendedKW = monthlyBill === 0 ? 0 : Math.ceil((monthlyUnits / UNITS_PER_KW_MONTH) * 2) / 2; // Round to nearest 0.5
  if (recommendedKW > 0 && recommendedKW < 1) recommendedKW = 1;

  const estimatedCost = recommendedKW * COST_PER_KW;
  const annualSavings = monthlyBill * 12;
  const lifetimeSavings = annualSavings * 25; // 25 years lifespan
  const roiYears = (estimatedCost / annualSavings).toFixed(1);

  return (
    <section id="calculator" className="calculator-section section-padding overflow-hidden relative" ref={containerRef}>
      <div className="absolute inset-0 bg-primary/5 -z-10" />
      <div className="w-full max-w-full px-6 md:px-12 lg:px-20">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          {/* Slider Input */}
          <div
            className="calculator-left bg-card rounded-3xl p-8 shadow-xl border border-border/50 relative overflow-hidden"
          >
            <div className="absolute -top-12 -right-12 text-primary/10">
              <Sun className="h-48 w-48" />
            </div>
            
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-6">Your Electricity Usage</h3>
              
              <div className="mb-6">
                <label className="text-sm font-bold text-muted-foreground uppercase tracking-widest block mb-2">
                  Property Type
                </label>
                <select
                  value={propertyType}
                  onChange={(e) => handlePropertyTypeChange(e.target.value as "Residential" | "Commercial" | "Industrial")}
                  className="w-full rounded-xl border border-input bg-background/50 px-4 py-3 text-sm font-semibold outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20 appearance-none"
                >
                  <option value="Residential">Residential</option>
                  <option value="Commercial">Commercial</option>
                  <option value="Industrial">Industrial</option>
                </select>
              </div>

              <div className="mb-6">
                <label className="text-sm font-bold text-muted-foreground uppercase tracking-widest block mb-2">
                  Electricity Rate (₹/unit)
                </label>
                <input
                  type="number"
                  value={unitRate}
                  onChange={(e) => setUnitRate(e.target.value)}
                  min="1"
                  step="0.5"
                  className="w-full rounded-xl border border-input bg-background/50 px-4 py-3 text-sm font-semibold outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </div>

              <div className="mb-8">
                <div className="flex justify-between items-end mb-4">
                  <label className="text-sm font-bold text-muted-foreground uppercase tracking-widest">
                    Average Monthly Bill
                  </label>
                  <div className="text-3xl font-black text-primary flex items-center">
                    <IndianRupee className="h-6 w-6" />
                    {monthlyBill.toLocaleString("en-IN")}
                  </div>
                </div>
                
                <input
                  type="range"
                  min="0"
                  max="20000"
                  step="500"
                  value={monthlyBill}
                  onChange={(e) => setMonthlyBill(Number(e.target.value))}
                  className="w-full h-3 bg-primary/20 rounded-lg appearance-none cursor-pointer accent-primary border border-primary/10"
                />
                <div className="flex justify-between mt-2 text-xs font-semibold text-muted-foreground">
                  <span>₹0</span>
                  <span>₹20,000+</span>
                </div>
              </div>

              <div className="bg-primary/5 rounded-2xl p-6 border border-primary/10 space-y-4">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-xl bg-background flex items-center justify-center shadow-sm">
                    <Zap className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground font-bold uppercase tracking-wider">Estimated Consumption</div>
                    <div className="text-xl font-bold text-foreground">{Math.round(monthlyUnits)} Units / month</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-xl bg-background flex items-center justify-center shadow-sm">
                    <Sun className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground font-bold uppercase tracking-wider">Recommended System Size</div>
                    <div className="text-xl font-bold text-foreground">{recommendedKW} kW System</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Results Display */}
          <div
            className="calculator-right flex flex-col gap-6"
          >
            <div className="bg-primary text-primary-foreground rounded-3xl p-8 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-6 opacity-20">
                <Leaf className="h-32 w-32" />
              </div>
              <h3 className="text-xl font-bold mb-8 opacity-90">Projected Financial Impact</h3>
              
              <div className="space-y-6">
                <div>
                  <div className="text-sm font-semibold uppercase tracking-widest opacity-80 mb-1">Annual Savings</div>
                  <div className="text-3xl font-black text-accent flex items-center">
                    <IndianRupee className="h-6 w-6" />
                    {annualSavings.toLocaleString("en-IN")}
                  </div>
                </div>

                <div className="bg-black/20 rounded-2xl p-4 border border-white/10 mt-4 backdrop-blur-sm">
                   <div className="text-sm font-semibold uppercase tracking-widest opacity-80 mb-1">25-Year Lifetime Savings</div>
                   <div className="text-4xl font-black text-green-400 flex items-center drop-shadow-md">
                      <IndianRupee className="h-8 w-8" />
                      {lifetimeSavings.toLocaleString("en-IN")}
                   </div>
                </div>
              </div>
            </div>
            
            <Link
               to="/contact"
               className="group flex w-full items-center justify-between rounded-2xl bg-card p-6 shadow-md transition-all hover:bg-accent hover:text-accent-foreground border border-border/50 hover:scale-[1.02]"
            >
               <span className="text-lg font-bold">Ready to start saving? Get exact quotes!</span>
               <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 group-hover:bg-black/10 transition-colors">
                  <ArrowRight className="h-5 w-5" />
               </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolarCalculatorSection;
