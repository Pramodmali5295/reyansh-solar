import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectsSection from "@/components/ProjectsSection";
import PageHeader from "@/components/PageHeader";

const Projects = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <PageHeader 
          title="Project Portfolio" 
          subtitle="Explore our successful solar installations across India, ranging from smart-city residential complexes to high-capacity industrial projects."
        />
        <ProjectsSection showHeader={false} />
      </main>
      <Footer />
    </div>
  );
};

export default Projects;
