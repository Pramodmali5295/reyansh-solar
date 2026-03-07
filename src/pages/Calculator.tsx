import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SolarCalculatorSection from "@/components/SolarCalculatorSection";
import PageHeader from "@/components/PageHeader";

const CalculatorPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <PageHeader 
          title="Solar Savings Calculator" 
          subtitle="Discover your potential savings with a custom solar installation. Adjust your current electricity usage to see how much you could save over 25 years."
        />
        <SolarCalculatorSection />
      </main>
      <Footer />
    </div>
  );
};

export default CalculatorPage;
