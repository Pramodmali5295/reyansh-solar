import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutSection from "@/components/AboutSection";
import PageHeader from "@/components/PageHeader";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <PageHeader 
          title="About Reyansh Solar Services" 
          subtitle="Pioneering the clean energy revolution in India since 2010. We are dedicated to making solar power the primary energy source for every household and business."
        />
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
};

export default About;
