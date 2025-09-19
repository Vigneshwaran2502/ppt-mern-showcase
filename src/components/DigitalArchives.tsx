import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search, BookOpen, FileText, Image, Download, Eye } from "lucide-react";
import { useState } from "react";
import manuscriptsImage from "@/assets/manuscripts.jpg";

const DigitalArchives = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const archives = [
    {
      id: 1,
      title: "Ancient Tibetan Manuscripts",
      type: "Manuscript",
      monastery: "Rumtek Monastery",
      date: "15th Century",
      description: "Rare collection of Buddhist texts and teachings",
      image: manuscriptsImage,
      pages: 156,
      downloads: 89
    },
    {
      id: 2,
      title: "Monastery Construction Records",
      type: "Historical Document",
      monastery: "Pemayangtse",
      date: "1705",
      description: "Original documents detailing the monastery's construction",
      image: manuscriptsImage,
      pages: 34,
      downloads: 67
    },
    {
      id: 3,
      title: "Traditional Murals Collection",
      type: "Artwork",
      monastery: "Tashiding",
      date: "18th Century",
      description: "High-resolution scans of sacred wall paintings",
      image: manuscriptsImage,
      pages: 28,
      downloads: 123
    }
  ];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "Manuscript":
        return <BookOpen className="w-4 h-4" />;
      case "Historical Document":
        return <FileText className="w-4 h-4" />;
      case "Artwork":
        return <Image className="w-4 h-4" />;
      default:
        return <FileText className="w-4 h-4" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Manuscript":
        return "bg-monastery-gold/10 text-monastery-gold border-monastery-gold/20";
      case "Historical Document":
        return "bg-monastery-crimson/10 text-monastery-crimson border-monastery-crimson/20";
      case "Artwork":
        return "bg-monastery-deep-orange/10 text-monastery-deep-orange border-monastery-deep-orange/20";
      default:
        return "bg-monastery-stone/10 text-monastery-earth border-monastery-stone/20";
    }
  };

  return (
    <section id="archives" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-monastery-earth mb-6">
            Digital Archives
          </h2>
          <p className="text-lg text-monastery-earth/70 max-w-2xl mx-auto mb-8">
            Explore our AI-powered searchable collection of manuscripts, historical documents, and sacred art
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-monastery-earth/50 w-5 h-5" />
            <Input
              type="text"
              placeholder="Search manuscripts, murals, historical records..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 pr-4 py-3 text-lg border-monastery-stone/30 focus:border-monastery-gold transition-zen"
            />
            <Button variant="monastery" className="absolute right-2 top-1/2 transform -translate-y-1/2">
              Search
            </Button>
          </div>
        </div>

        {/* Archive Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {["All Archives", "Manuscripts", "Historical Documents", "Artwork", "Audio Records"].map((category) => (
            <Button
              key={category}
              variant={category === "All Archives" ? "monastery" : "zen"}
              size="sm"
              className="rounded-full"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Archives Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {archives.map((archive) => (
            <Card key={archive.id} className="group overflow-hidden transition-zen hover:shadow-monastery border-monastery-stone/20">
              <CardContent className="p-0">
                <div className="relative">
                  <img 
                    src={archive.image} 
                    alt={archive.title}
                    className="w-full h-48 object-cover transition-zen group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  {/* Type Badge */}
                  <div className={`absolute top-4 left-4 px-3 py-1 rounded-full border text-xs font-medium flex items-center space-x-1 ${getTypeColor(archive.type)}`}>
                    {getTypeIcon(archive.type)}
                    <span>{archive.type}</span>
                  </div>

                  {/* Stats */}
                  <div className="absolute bottom-4 right-4 flex space-x-2">
                    <div className="bg-black/50 backdrop-blur-sm rounded-full px-2 py-1 flex items-center space-x-1">
                      <Eye className="w-3 h-3 text-white" />
                      <span className="text-white text-xs">{archive.pages} pages</span>
                    </div>
                    <div className="bg-black/50 backdrop-blur-sm rounded-full px-2 py-1 flex items-center space-x-1">
                      <Download className="w-3 h-3 text-white" />
                      <span className="text-white text-xs">{archive.downloads}</span>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="text-monastery-gold text-sm mb-2">
                    {archive.monastery} • {archive.date}
                  </div>
                  
                  <h3 className="text-xl font-bold text-monastery-earth mb-2">
                    {archive.title}
                  </h3>
                  
                  <p className="text-monastery-earth/70 text-sm leading-relaxed mb-4">
                    {archive.description}
                  </p>

                  <div className="flex space-x-2">
                    <Button variant="zen" size="sm" className="flex-1">
                      <Eye className="w-4 h-4" />
                      View
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Download className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="monastery" size="lg">
            Browse All Archives
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DigitalArchives;