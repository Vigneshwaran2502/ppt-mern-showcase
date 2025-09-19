import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import VirtualTours from "@/components/VirtualTours";
import DigitalArchives from "@/components/DigitalArchives";
import CulturalCalendar from "@/components/CulturalCalendar";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <VirtualTours />
      <DigitalArchives />
      <CulturalCalendar />
      <Footer />
    </div>
  );
};

export default Index;
