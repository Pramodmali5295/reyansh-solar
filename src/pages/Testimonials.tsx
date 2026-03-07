import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TestimonialsSection from "@/components/TestimonialsSection";
import PageHeader from "@/components/PageHeader";

const Testimonials = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <PageHeader 
          title="Client Testimonials" 
          subtitle="Hear from our satisfied customers about how Reyansh Solar Services helped them achieve energy independence and significant cost savings."
        />
        <TestimonialsSection showHeader={false} />
      </main>
      <Footer />
    </div>
  );
};

export default Testimonials;
