import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Play, Eye, MapPin, Clock } from "lucide-react";
import prayerFlags from "@/assets/prayer-flags.jpg"; // We'll keep this as a fallback image
import { useState, useEffect } from "react";
import axios from "axios";

// 1. Update the interface to match the complete backend data
interface Tour {
  _id: string;
  name: string;
  description: string;
  locationName: string;
  duration: string;
  views: string;
  images: string[]; // It's an array of image URLs
}

const VirtualTours = () => {
  const [tours, setTours] = useState<Tour[]>([]);

  useEffect(() => {
    const fetchTours = async () => {
      try {
        const { data } = await axios.get('/api/monasteries');
        // The data from the backend now matches our interface, so no mapping is needed
        setTours(data);
      } catch (error) {
        console.error("Error fetching tours:", error);
      }
    };
    fetchTours();
  }, []);

  return (
    <section id="tours" className="py-20 bg-gradient-sunset">
      <div className="container mx-auto px-6">
        {/* ... heading JSX is the same ... */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-monastery-earth mb-6">
            Virtual Tours
          </h2>
          <p className="text-lg text-monastery-earth/70 max-w-2xl mx-auto">
            Experience the sacred beauty of Sikkim's monasteries through immersive 360° virtual tours
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {tours.map((tour, index) => (
            <Card 
              key={tour._id} 
              className={`group overflow-hidden transition-zen hover:shadow-monastery border-0 ${
                index === 0 ? 'lg:col-span-2 lg:row-span-2' : ''
              }`}
            >
              <CardContent className="p-0">
                <div className="relative">
                  {/* 2. Use the first image from the images array, or a fallback */}
                  <img 
                    src={tour.images[0] || prayerFlags} 
                    alt={tour.name}
                    className={`w-full object-cover transition-zen group-hover:scale-105 ${
                      index === 0 ? 'h-64 lg:h-96' : 'h-48'
                    }`}
                  />
                  {/* ... overlay and button JSX is the same ... */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Button 
                      variant="monastery" 
                      size={index === 0 ? "lg" : "default"}
                      className="rounded-full w-16 h-16 group-hover:scale-110 transition-zen"
                    >
                      <Play className="w-6 h-6 ml-1" />
                    </Button>
                  </div>

                  {/* 3. Use real data for views and duration */}
                  <div className="absolute top-4 right-4 flex space-x-2">
                    <div className="bg-black/50 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
                      <Eye className="w-3 h-3 text-white" />
                      <span className="text-white text-xs">{tour.views}</span>
                    </div>
                    <div className="bg-black/50 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
                      <Clock className="w-3 h-3 text-white" />
                      <span className="text-white text-xs">{tour.duration}</span>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  {/* 4. Use the real location name */}
                  <div className="flex items-center space-x-2 text-monastery-gold text-sm mb-2">
                    <MapPin className="w-4 h-4" />
                    <span>{tour.locationName}</span>
                  </div>

                  <h3 className={`font-bold text-monastery-earth mb-2 ${
                    index === 0 ? 'text-2xl' : 'text-xl'
                  }`}>
                    {tour.name}
                  </h3>

                  <p className="text-monastery-earth/70 text-sm leading-relaxed">
                    {tour.description}
                  </p>

                  <Button 
                    variant="zen" 
                    className="mt-4 w-full" 
                    size={index === 0 ? "lg" : "default"}
                  >
                    Start Virtual Tour
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        {/* ... "View All Tours" button JSX is the same ... */}
        <div className="text-center mt-12">
          <Button variant="monastery" size="lg">
            View All Tours
          </Button>
        </div>
      </div>
    </section>
  );
};

export default VirtualTours;