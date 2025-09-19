import { Button } from "@/components/ui/button";
import { Globe, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-monastery-earth text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-himalayan rounded-full flex items-center justify-center">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold">
                Monastery<span className="text-monastery-gold">360</span>
              </span>
            </div>
            
            <p className="text-white/80 leading-relaxed mb-6 max-w-md">
              Digitizing and preserving the sacred heritage of Sikkim's monasteries through 
              innovative technology and immersive experiences for cultural tourism and education.
            </p>
            
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm" className="text-white hover:text-monastery-gold hover:bg-white/10">
                <Facebook className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="text-white hover:text-monastery-gold hover:bg-white/10">
                <Twitter className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="text-white hover:text-monastery-gold hover:bg-white/10">
                <Instagram className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="text-white hover:text-monastery-gold hover:bg-white/10">
                <Youtube className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-monastery-gold">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#tours" className="text-white/80 hover:text-monastery-gold transition-zen">Virtual Tours</a></li>
              <li><a href="#archives" className="text-white/80 hover:text-monastery-gold transition-zen">Digital Archives</a></li>
              <li><a href="#map" className="text-white/80 hover:text-monastery-gold transition-zen">Interactive Map</a></li>
              <li><a href="#calendar" className="text-white/80 hover:text-monastery-gold transition-zen">Cultural Calendar</a></li>
              <li><a href="#about" className="text-white/80 hover:text-monastery-gold transition-zen">About Us</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-monastery-gold">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-monastery-gold" />
                <span className="text-white/80 text-sm">info@monastery360.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-monastery-gold" />
                <span className="text-white/80 text-sm">+91 98765 43210</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-monastery-gold mt-0.5" />
                <span className="text-white/80 text-sm">Gangtok, Sikkim<br />India 737101</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/60 text-sm mb-4 md:mb-0">
              © 2025 Monastery360. All rights reserved. Built for SIH 2025 by Team Hijackers.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#privacy" className="text-white/60 hover:text-monastery-gold transition-zen">Privacy Policy</a>
              <a href="#terms" className="text-white/60 hover:text-monastery-gold transition-zen">Terms of Service</a>
              <a href="#support" className="text-white/60 hover:text-monastery-gold transition-zen">Support</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;