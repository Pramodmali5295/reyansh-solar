import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServicesSection from "@/components/ServicesSection";
import PageHeader from "@/components/PageHeader";

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <PageHeader 
          title="Our Services" 
          subtitle="From rooftop residential panels to massive industrial solar farms, we provide end-to-end solar solutions tailored to your specific needs."
        />
        <ServicesSection showHeader={false} />
      </main>
      <Footer />
    </div>
  );
};

export default Services;
