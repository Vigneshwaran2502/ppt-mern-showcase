import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Play, Eye, MapPin, Clock } from "lucide-react";
import prayerFlags from "@/assets/prayer-flags.jpg";

const VirtualTours = () => {
  const tours = [
    {
      id: 1,
      name: "Rumtek Monastery",
      location: "East Sikkim",
      duration: "15 min",
      views: "1.2k",
      description: "The largest monastery in Sikkim, home to the Gyalwa Karmapa",
      image: prayerFlags,
      featured: true
    },
    {
      id: 2,
      name: "Pemayangtse Monastery",
      location: "West Sikkim",
      duration: "12 min",
      views: "890",
      description: "One of the oldest and most important monasteries in Sikkim",
      image: prayerFlags,
      featured: false
    },
    {
      id: 3,
      name: "Tashiding Monastery",
      location: "West Sikkim",
      duration: "10 min",
      views: "650",
      description: "Sacred monastery on a hilltop between two rivers",
      image: prayerFlags,
      featured: false
    }
  ];

  return (
    <section id="tours" className="py-20 bg-gradient-sunset">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-monastery-earth mb-6">
            Virtual Tours
          </h2>
          <p className="text-lg text-monastery-earth/70 max-w-2xl mx-auto">
            Experience the sacred beauty of Sikkim's monasteries through immersive 360° virtual tours
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {tours.map((tour) => (
            <Card 
              key={tour.id} 
              className={`group overflow-hidden transition-zen hover:shadow-monastery border-0 ${
                tour.featured ? 'lg:col-span-2 lg:row-span-2' : ''
              }`}
            >
              <CardContent className="p-0">
                <div className="relative">
                  <img 
                    src={tour.image} 
                    alt={tour.name}
                    className={`w-full object-cover transition-zen group-hover:scale-105 ${
                      tour.featured ? 'h-64 lg:h-96' : 'h-48'
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Button 
                      variant="monastery" 
                      size={tour.featured ? "lg" : "default"}
                      className="rounded-full w-16 h-16 group-hover:scale-110 transition-zen"
                    >
                      <Play className="w-6 h-6 ml-1" />
                    </Button>
                  </div>

                  {/* Tour Stats */}
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
                  <div className="flex items-center space-x-2 text-monastery-gold text-sm mb-2">
                    <MapPin className="w-4 h-4" />
                    <span>{tour.location}</span>
                  </div>
                  
                  <h3 className={`font-bold text-monastery-earth mb-2 ${
                    tour.featured ? 'text-2xl' : 'text-xl'
                  }`}>
                    {tour.name}
                  </h3>
                  
                  <p className="text-monastery-earth/70 text-sm leading-relaxed">
                    {tour.description}
                  </p>

                  <Button 
                    variant="zen" 
                    className="mt-4 w-full" 
                    size={tour.featured ? "lg" : "default"}
                  >
                    Start Virtual Tour
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

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