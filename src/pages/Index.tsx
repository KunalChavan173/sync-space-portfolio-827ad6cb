
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import VideoWorks from "@/components/VideoWorks";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import About from "@/components/About";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <About />
      <Services />
      <VideoWorks />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
