import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import PageHeader from "@/components/PageHeader";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <PageHeader 
          title="Contact Us" 
          subtitle="Get in touch with our solar experts for a free consultation. We're here to help you transition to clean, affordable energy."
        />
        <ContactSection showHeader={false} />
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
