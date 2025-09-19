import { Button } from "@/components/ui/button";
import { MapPin, Camera, Calendar, Search } from "lucide-react";
import monasteryHero from "@/assets/monastery-hero.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${monasteryHero})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/50" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg">
          Monastery<span className="text-monastery-gold">360</span>
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
          Digitize and explore the sacred monasteries of Sikkim through immersive virtual tours, 
          digital archives, and cultural experiences
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button variant="monastery" size="lg" className="text-lg px-8 py-3">
            <Camera className="w-5 h-5" />
            Start Virtual Tour
          </Button>
          <Button variant="zen" size="lg" className="text-lg px-8 py-3">
            <Search className="w-5 h-5" />
            Explore Archives
          </Button>
        </div>
        
        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
            <MapPin className="w-8 h-8 text-monastery-gold mb-4 mx-auto" />
            <h3 className="text-white font-semibold text-lg mb-2">Interactive Map</h3>
            <p className="text-white/80 text-sm">Discover geo-tagged monastery locations with travel routes</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
            <Camera className="w-8 h-8 text-monastery-gold mb-4 mx-auto" />
            <h3 className="text-white font-semibold text-lg mb-2">360° Virtual Tours</h3>
            <p className="text-white/80 text-sm">Immersive panoramic views with guided narrations</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
            <Calendar className="w-8 h-8 text-monastery-gold mb-4 mx-auto" />
            <h3 className="text-white font-semibold text-lg mb-2">Cultural Calendar</h3>
            <p className="text-white/80 text-sm">Book participation in festivals and spiritual events</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;