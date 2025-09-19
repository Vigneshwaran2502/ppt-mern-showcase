import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, MapPin, Users, Clock, Star } from "lucide-react";

const CulturalCalendar = () => {
  const events = [
    {
      id: 1,
      title: "Losar Festival",
      date: "March 15, 2025",
      time: "6:00 AM - 8:00 PM",
      monastery: "Rumtek Monastery",
      type: "Festival",
      participants: 245,
      price: "Free",
      description: "Tibetan New Year celebration with traditional dances, prayers, and ceremonies",
      featured: true,
      difficulty: "Beginner Friendly"
    },
    {
      id: 2,
      title: "Prayer Wheel Meditation",
      date: "March 22, 2025",
      time: "5:30 AM - 7:00 AM",
      monastery: "Pemayangtse",
      type: "Meditation",
      participants: 12,
      price: "₹500",
      description: "Join morning meditation sessions with traditional prayer wheels",
      featured: false,
      difficulty: "Intermediate"
    },
    {
      id: 3,
      title: "Monastic Debate Session",
      date: "March 28, 2025",
      time: "2:00 PM - 4:00 PM",
      monastery: "Tashiding",
      type: "Learning",
      participants: 28,
      price: "₹300",
      description: "Witness traditional Buddhist philosophical debates between monks",
      featured: false,
      difficulty: "All Levels"
    }
  ];

  const getEventTypeColor = (type: string) => {
    switch (type) {
      case "Festival":
        return "bg-monastery-gold/10 text-monastery-gold border-monastery-gold/20";
      case "Meditation":
        return "bg-monastery-sky/10 text-monastery-crimson border-monastery-sky/20";
      case "Learning":
        return "bg-monastery-deep-orange/10 text-monastery-deep-orange border-monastery-deep-orange/20";
      default:
        return "bg-monastery-stone/10 text-monastery-earth border-monastery-stone/20";
    }
  };

  return (
    <section id="calendar" className="py-20 bg-gradient-prayer">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Cultural Calendar
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Participate in authentic monastery experiences, festivals, and spiritual practices
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {["All Events", "Festivals", "Meditation", "Learning", "Rituals"].map((filter) => (
            <Button
              key={filter}
              variant={filter === "All Events" ? "zen" : "ghost"}
              size="sm"
              className="rounded-full text-white border-white/20 hover:bg-white/10"
            >
              {filter}
            </Button>
          ))}
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {events.map((event) => (
            <Card 
              key={event.id} 
              className={`group overflow-hidden transition-zen hover:shadow-prayer bg-white/95 backdrop-blur-md border-white/20 ${
                event.featured ? 'xl:col-span-2' : ''
              }`}
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className={`px-3 py-1 rounded-full border text-xs font-medium ${getEventTypeColor(event.type)}`}>
                    {event.type}
                  </div>
                  {event.featured && (
                    <div className="flex items-center space-x-1 text-monastery-gold">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="text-xs font-medium">Featured</span>
                    </div>
                  )}
                </div>

                <h3 className={`font-bold text-monastery-earth mb-2 ${
                  event.featured ? 'text-2xl' : 'text-xl'
                }`}>
                  {event.title}
                </h3>

                <div className="space-y-2 mb-4 text-sm text-monastery-earth/70">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4 text-monastery-gold" />
                    <span>{event.date}</span>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-monastery-gold" />
                    <span>{event.time}</span>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4 text-monastery-gold" />
                    <span>{event.monastery}</span>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4 text-monastery-gold" />
                    <span>{event.participants} participants registered</span>
                  </div>
                </div>

                <p className="text-monastery-earth/70 text-sm leading-relaxed mb-4">
                  {event.description}
                </p>

                <div className="flex items-center justify-between mb-4">
                  <div className="text-sm">
                    <span className="text-monastery-earth/60">Price: </span>
                    <span className="font-semibold text-monastery-earth">{event.price}</span>
                  </div>
                  <div className="text-sm">
                    <span className="text-monastery-earth/60">Level: </span>
                    <span className="font-semibold text-monastery-earth">{event.difficulty}</span>
                  </div>
                </div>

                <div className="flex space-x-2">
                  <Button variant="monastery" className="flex-1">
                    Book Now
                  </Button>
                  <Button variant="zen" size="sm">
                    Learn More
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="zen" size="lg" className="text-white border-white/20 hover:bg-white/10">
            View Full Calendar
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CulturalCalendar;