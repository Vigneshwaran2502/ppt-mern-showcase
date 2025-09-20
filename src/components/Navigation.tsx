import { Button } from "@/components/ui/button";
import { Menu, Search, Globe, Calendar, Map, Archive } from "lucide-react";
import { useState } from "react";
import logoIcon from "@/assets/logo-icon.png";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-monastery-stone/30">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-himalayan rounded-full flex items-center justify-center p-1">
              <img src={logoIcon} alt="Monastery360 Logo" className="w-full h-full object-contain" />
            </div>
            <span className="text-xl font-bold text-monastery-earth">
              Monastery<span className="text-monastery-gold">360</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#tours" className="text-monastery-earth hover:text-monastery-gold transition-zen">
              Virtual Tours
            </a>
            <a href="#archives" className="text-monastery-earth hover:text-monastery-gold transition-zen">
              Digital Archives
            </a>
            <a href="#map" className="text-monastery-earth hover:text-monastery-gold transition-zen">
              Interactive Map
            </a>
            <a href="#calendar" className="text-monastery-earth hover:text-monastery-gold transition-zen">
              Cultural Calendar
            </a>
          </div>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              <Search className="w-4 h-4" />
              Search
            </Button>
            <Button variant="monastery" size="sm">
              Explore Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="w-5 h-5" />
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-monastery-stone/30 pt-4">
            <div className="flex flex-col space-y-4">
              <a href="#tours" className="flex items-center space-x-2 text-monastery-earth hover:text-monastery-gold transition-zen">
                <Globe className="w-4 h-4" />
                <span>Virtual Tours</span>
              </a>
              <a href="#archives" className="flex items-center space-x-2 text-monastery-earth hover:text-monastery-gold transition-zen">
                <Archive className="w-4 h-4" />
                <span>Digital Archives</span>
              </a>
              <a href="#map" className="flex items-center space-x-2 text-monastery-earth hover:text-monastery-gold transition-zen">
                <Map className="w-4 h-4" />
                <span>Interactive Map</span>
              </a>
              <a href="#calendar" className="flex items-center space-x-2 text-monastery-earth hover:text-monastery-gold transition-zen">
                <Calendar className="w-4 h-4" />
                <span>Cultural Calendar</span>
              </a>
              <div className="pt-4 space-y-2">
                <Button variant="ghost" size="sm" className="w-full justify-start">
                  <Search className="w-4 h-4" />
                  Search
                </Button>
                <Button variant="monastery" size="sm" className="w-full">
                  Explore Now
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;