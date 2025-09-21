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
      title: "Dubdi Monastery",
      type: "Manuscript",
      monastery: "Dubdi Monastery",
      date: "15th Century",
      description: "Established in 1701, Dubdi is one of the popular monasteries in Sikkim. Belonging to the Nyingma sect of Tibetan Buddhism, this monastery enjoys an amazing hilltop location. A treacherous path and dense alpine forest guard the pretty monastery, which must be visited by every traveller looking for popular attractions in Sikkim. Perched atop 6,900 meters, this beautiful creation bears the statues of three lamas. The monastery's two-story stone architecture is rather delicate, and a bell-shaped structure atop the roof is remarkable for its positioning, known as Gyaltshen. One of the most famous monasteries in Sikkim, this place is a must-visit",
      image: manuscriptsImage,
      pages: 156,
      downloads: 89
    },
    {
      id: 2,
      title: "Enchey Monaster",
      type: "Historical Document",
      monastery: " Enchey Monastery",
      date: "1705",
      description: "Dating back to 200 years, the Enchey Monastery is located 3 km northeast of Gangtok. Enchey translates to solitary, which is aptly justified by its location. The monastery belongs to the Nyingma of Vajrayana Buddhism. Nature’s grandeur truly embellishes the location. Special prayers are held at the monastery during the lunar month every year, which, according to the Tibetan calendar, takes place in January and February. Furthermore, monasteries in the Himalayas offer serene scenic views like no other place, making them a sight for sore eyes.",
      image: manuscriptsImage,
      pages: 34,
      downloads: 67
    },
    {
      id: 3,
      title: "Kartok Monastery",
      type: "Artwork",
      monastery: "Tashiding",
      date: "18th Century",
      description: "Located opposite Kartok Lake, the Kartok Monastery is the pride of Yuksom village. Hundreds of travellers flock to marvel at this beauty in the northeast, which bears a red colour. Yellow and golden motifs depicting Tibetan design are all over the monastery's exteriors. One of the popular sites to visit in Yuksom, the Kartok, forms a great combo with Dubdi and Ngadak Monastery. Slow chants, fluttering prayer flags, and the beautiful Lake Kartok nearby make it a superb spectacle for nature lovers. This is the best monastery in Sikkim for you if you love your temples located by gorgeous water bodies.",
      image: manuscriptsImage,
      pages: 28,
      downloads: 123
    },
    {
      id: 4,
      title: "Lingdum Monastery",
      type: "Artwork",
      monastery: "Tashiding",
      date: "18th Century",
      description: "Lingdum Monastery lies in East Sikkim, some 20 km from Gangtok. It has been a preferred location for Bollywood filmmakers, thus making it one of the most popular monasteries in Sikkim. Lingdum, also known as Ranka Monastery, is the most recent monastery, completed in 1998. The monastery is the perfect place to spend moments of solace in the company of divine intervention. Surrounded by forested mountains, the monastery is a photographer's delight among other monasteries in Sikkim.",
      image: manuscriptsImage,
      pages: 28,
      downloads: 123
    },
    {
      id: 5,
      title: "Pemayangtse Monastery",
      type: "Artwork",
      monastery: "Tashiding",
      date: "18th Century",
      description: "The 300-year-old monastery makes the perfect place to do some soul-searching and indulge in prayers and meditation. Rich architecture, stunning mountains in the backdrop, and friendly Buddhist followers inside the temple would make your trip to one of the oldest monasteries in Sikkim worthwhile.",
      image: manuscriptsImage,
      pages: 28,
      downloads: 123
    },
    {
      id: 6,
      title: "Phodong Monastery",
      type: "Artwork",
      monastery: "Tashiding",
      date: "18th Century",
      description: "Among many other monasteries that dot the pious land of Sikkim, Phodong Monastery, belonging to the Kagyupa Sect in Buddhism, is a popular attraction and a major monastery in Sikkim. Gyurmed Namgyal of Kagyupa Sect founded the monastery at 4,500 feet above sea level. The monastery is well adorned with paintings, murals, and holy scriptures from ancient times, making it one of the best monasteries in North Sikkim.",
      image: manuscriptsImage,
      pages: 28,
      downloads: 123
    },
    {
      id: 7,
      title: "Ralang Monastery",
      type: "Artwork",
      monastery: "Tashiding",
      date: "18th Century",
      description: "It is here at the Ralang Monastery that you can savour the best of Tibetan architecture. The biggest monastery in Sikkim is a wonderful assimilation of colours, traditions, and incredible Tibetan architecture. Located in the wonderful surroundings of Ravangla, the monastery is a popular site for Buddhists from all over the world. A new monastery was built in 1995 at a distance of 6 km from Ravangle.",
      image: manuscriptsImage,
      pages: 28,
      downloads: 123
    },
    {
      id: 8,
      title: " Rumtek Monastery",
      type: "Artwork",
      monastery: "Tashiding",
      date: "18th Century",
      description: "This monastery is located in Rumtek, a place which is 23 km from Gangtok town and on the opposite mountain. So if you visit Rumtek, there are vantage points from where you get amazing sights of the whole Gangtok town on the opposite hill. However from the gate at the base, it requires an uphill walk (about half a kilometer) to reach up to the main monastery. One of the largest monasteries in Sikkim, Rumtek, belongs to the Kargyu sect and was built by Gyalwa Karmapa in the 1960s.",
      image: manuscriptsImage,
      pages: 28,
      downloads: 123
    },
    {
      id: 9,
      title: "Tashiding Monastery: Adorned By Nature From All Sides",
      type: "Artwork",
      monastery: "Tashiding",
      date: "18th Century",
      description: "Snow-capped peaks and rustic charm prettify Tashiding Monastery. Popular among travellers from all over the world, this Sikkim Buddhist monastery truly reflects old-world charm. A pot of holy water is kept inside the temple, considered auspicious and used only during festivities. With plenty of fluttering prayer flags and holy chants, the temple complex is a perfect place to spend some great moments in the lap of nature. A day at one of the oldest and holiest monasteries in Sikkim will be perfect. The monastery houses close to 60-70 monks.",
      image: manuscriptsImage,
      pages: 28,
      downloads: 123
    },
    {
      id: 10,
      title: "Tsuklakhang Palace: Portrayal Of Ancient Artwork",
      type: "Artwork",
      monastery: "Tashiding",
      date: "18th Century",
      description: "Sikkim monasteries are like no other! This one came up towards the end of the 19th century and is one of the eminent structures in Sikkim. Popularly known as Tsuklakhang Royal Chapel and Monastery, it is a popular religious spot for Buddhists from all around the world. The monastery is also important from a cultural point of view as it promotes and preserves the cultural heritage of the northeastern state. A trip to Tsuklakhang Monastery would also bring you closer to our nation’s glorious tradition. Losar, the Tibetan New Year festival, is celebrated with much enthusiasm here.",
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