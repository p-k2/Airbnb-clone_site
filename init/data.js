

const sampleListings= [
  {
    title: "Cozy Mountain Cabin",
    reviews: [],
    owner: "688f3b7f6c00a6c753dc7798",
    category: "Mountains",
    description: "A peaceful cabin nestled in the mountains with a fireplace and great views.",
    image: { url: "https://picsum.photos/seed/cabin1/600/400", file: "cabin1.jpg" },
    price: 120,
    location: "Manali",
    country: "India"
  },
  {
    title: "Luxury Beach Villa",
    reviews: [],
    owner: "688f3b7f6c00a6c753dc7798",
     category: "Boats",
    description: "Spacious villa with a private pool right by the ocean.",
    image: { url: "https://picsum.photos/seed/villa1/600/400", file: "villa1.jpg" },
    price: 450,
    location: "Goa",
    country: "India"
  },
  {
    title: "Downtown Apartment",
    reviews: [],
    owner: "688f3b7f6c00a6c753dc7798",
     category: "Iconic Cities",
    description: "Modern apartment in the city center close to all amenities.",
    image: { url: "https://picsum.photos/seed/apartment1/600/400", file: "apartment1.jpg" },
    price: 200,
    location: "Mumbai",
    country: "India"
  },
  {
    title: "Rustic Countryside Home",
    reviews: [],
    owner: "688f3b7f6c00a6c753dc7798",
     category: "Iconic Cities",

    description: "Charming farmhouse surrounded by lush greenery.",
    image: { url: "https://picsum.photos/seed/home1/600/400", file: "home1.jpg" },
    price: 90,
    location: "Nainital",
    country: "India"
  },
  {
    title: "Modern Loft",
    reviews: [],
    owner: "688f3b7f6c00a6c753dc7798",
     category: "Rooms",

    description: "Stylish loft apartment with open concept design.",
    image: { url: "https://picsum.photos/seed/loft1/600/400", file: "loft1.jpg" },
    price: 300,
    location: "Bangalore",
    country: "India"
  },
  {
    title: "Desert Retreat",
    reviews: [],
    owner: "688f3b7f6c00a6c753dc7798",
     category: "Domes",

    description: "A serene retreat in the middle of the desert.",
    image: { url: "https://picsum.photos/seed/desert1/600/400", file: "desert1.jpg" },
    price: 150,
    location: "Jaisalmer",
    country: "India"
  },
  {
    title: "Lakeview Cottage",
    reviews: [],
    owner: "688f3b7f6c00a6c753dc7798",
     category: "Boats",

    description: "Cottage with stunning lake views and a private dock.",
    image: { url: "https://picsum.photos/seed/cottage1/600/400", file: "cottage1.jpg" },
    price: 170,
    location: "Udaipur",
    country: "India"
  },
  {
    title: "Snowy Ski Lodge",
    reviews: [],
    owner: "688f3b7f6c00a6c753dc7798",
    category:"Rooms",
    description: "Warm lodge located right by the ski slopes.",
    image: { url: "https://picsum.photos/seed/lodge1/600/400", file: "lodge1.jpg" },
    price: 350,
    location: "Gulmarg",
    country: "India"
  },
  {
    title: "Tropical Treehouse",
    reviews: [],
    owner: "688f3b7f6c00a6c753dc7798",
     category: "Camping",

    description: "Treehouse surrounded by lush tropical forest.",
    image: { url: "https://picsum.photos/seed/treehouse1/600/400", file: "treehouse1.jpg" },
    price: 220,
    location: "Kerala",
    country: "India"
  },
  {
    title: "Historic Castle Stay",
    reviews: [],
    owner: "688f3b7f6c00a6c753dc7798",
     category: "Castles",

    description: "Live like royalty in a beautifully restored castle.",
    image: { url: "https://picsum.photos/seed/castle1/600/400", file: "castle1.jpg" },
    price: 500,
    location: "Edinburgh",
    country: "UK"
  },
  {
    title: "Parisian Penthouse",
    reviews: [],
    owner: "688f3b7f6c00a6c753dc7798",
     category: "Farms",

    description: "Elegant penthouse with a view of the Eiffel Tower.",
    image: { url: "https://picsum.photos/seed/penthouse1/600/400", file: "penthouse1.jpg" },
    price: 600,
    location: "Paris",
    country: "France"
  },
  {
    title: "Santorini Cliff House",
    reviews: [],
    owner: "688f3b7f6c00a6c753dc7798",
     category: "Mountains",

    description: "White-washed house overlooking the blue Aegean Sea.",
    image: { url: "https://picsum.photos/seed/santorini1/600/400", file: "santorini1.jpg" },
    price: 550,
    location: "Santorini",
    country: "Greece"
  },
  {
    title: "Tokyo Capsule Stay",
    reviews: [],
    owner: "688f3b7f6c00a6c753dc7798",

    description: "Compact capsule hotel experience in downtown Tokyo.",
    image: { url: "https://picsum.photos/seed/capsule1/600/400", file: "capsule1.jpg" },
    price: 60,
    location: "Tokyo",
    country: "Japan"
  },
  {
    title: "Swiss Chalet",
    reviews: [],
    owner: "688f3b7f6c00a6c753dc7798",
    description: "Traditional wooden chalet in the Swiss Alps.",
    image: { url: "https://picsum.photos/seed/chalet1/600/400", file: "chalet1.jpg" },
    price: 400,
    location: "Zermatt",
    country: "Switzerland"
  },
  {
    title: "Sydney Harbour View Apartment",
  reviews: [],
    owner: "688f3b7f6c00a6c753dc7798",
    category:"Arctic",
    description: "Apartment with stunning views of the Sydney Opera House.",
    image: { url: "https://picsum.photos/seed/sydney1/600/400", file: "sydney1.jpg" },
    price: 380,
    location: "Sydney",
    country: "Australia"
  },
  {
    title: "New York Times Square Loft",
    reviews: [],
    owner: "688f3b7f6c00a6c753dc7798",
    category:"Amazing Pools",
    description: "Loft in the heart of NYC with bright city lights.",
    image: { url: "https://picsum.photos/seed/nyc1/600/400", file: "nyc1.jpg" },
    price: 450,
    location: "New York",
    country: "USA"
  },
  {
    title: "Venetian Canal House",
    reviews: [],
    owner: "688f3b7f6c00a6c753dc7798",
     category: "Domes",

    description: "House directly on the canals of Venice.",
    image: { url: "https://picsum.photos/seed/venice1/600/400", file: "venice1.jpg" },
    price: 500,
    location: "Venice",
    country: "Italy"
  },
  {
    title: "Iceland Glass Igloo",
    reviews: [],
    owner: "688f3b7f6c00a6c753dc7798",
     category: "Domes",

    description: "Stay under the northern lights in a glass igloo.",
    image: { url: "https://picsum.photos/seed/igloo1/600/400", file: "igloo1.jpg" },
    price: 300,
    location: "Reykjavik",
    country: "Iceland"
  },
  {
    title: "Dubai Luxury Penthouse",
    reviews: [],
    owner: "688f3b7f6c00a6c753dc7798",
     category: "Iconic Cities",

    description: "Ultra-luxurious penthouse in downtown Dubai.",
    image: { url: "https://picsum.photos/seed/dubai1/600/400", file: "dubai1.jpg" },
    price: 800,
    location: "Dubai",
    country: "UAE"
  },
  {
    title: "Bali Jungle Villa",
    reviews: [],
    owner: "688f3b7f6c00a6c753dc7798",
     category: "Camping",

    description: "Villa surrounded by lush Balinese jungle.",
    image: { url: "https://picsum.photos/seed/bali1/600/400", file: "bali1.jpg" },
    price: 250,
    location: "Ubud",
    country: "Indonesia"
  },
  {
    title: "Cape Town Oceanfront Home",
    reviews: [],
    owner: "688f3b7f6c00a6c753dc7798",
     category: "Boats",

    description: "Home with panoramic ocean views.",
    image: { url: "https://picsum.photos/seed/capetown1/600/400", file: "capetown1.jpg" },
    price: 350,
    location: "Cape Town",
    country: "South Africa"
  },
  {
    title: "Petra Desert Camp",
    reviews: [],
    owner: "688f3b7f6c00a6c753dc7798",
     category: "Domes",

    description: "Stay in a Bedouin-style tent near Petra.",
    image: { url: "https://picsum.photos/seed/petra1/600/400", file: "petra1.jpg" },
    price: 100,
    location: "Petra",
    country: "Jordan"
  },
  {
    title: "Himalayan Homestay",
    reviews: [],
    owner: "688f3b7f6c00a6c753dc7798",
     category: "Mountains",

    description: "Simple home with breathtaking Himalayan views.",
    image: { url: "https://picsum.photos/seed/himalaya1/600/400", file: "himalaya1.jpg" },
    price: 80,
    location: "Leh",
    country: "India"
  },
  {
    title: "London Riverfront Flat",
    reviews: [],
    owner: "688f3b7f6c00a6c753dc7798",
     category: "Iconic Cities",

    description: "Flat overlooking the River Thames.",
    image: { url: "https://picsum.photos/seed/london1/600/400", file: "london1.jpg" },
    price: 400,
    location: "London",
    country: "UK"
  },
  {
    title: "Mysore Palace View Stay",
    reviews: [],
    owner: "688f3b7f6c00a6c753dc7798",
     category: "Amazing Pools",

    description: "Stay right next to the Mysore Palace.",
    image: { url: "https://picsum.photos/seed/mysore1/600/400", file: "mysore1.jpg" },
    price: 110,
    location: "Mysore",
    country: "India"
  },
  {
    title: "Rio Beachfront Apartment",
    reviews: [],
    owner: "688f3b7f6c00a6c753dc7798",
     category: "Boats",

    description: "Apartment overlooking Copacabana beach.",
    image: { url: "https://picsum.photos/seed/rio1/600/400", file: "rio1.jpg" },
    price: 270,
    location: "Rio de Janeiro",
    country: "Brazil"
  },
  {
    title: "Jaipur Haveli Stay",
    reviews: [],
    owner: "688f3b7f6c00a6c753dc7798",
     category: "Domes",

    description: "Stay in a traditional Rajasthani Haveli.",
    image: { url: "https://picsum.photos/seed/jaipur1/600/400", file: "jaipur1.jpg" },
    price: 140,
    location: "Jaipur",
    country: "India"
  },
  {
    title: "Kerala Houseboat",
    reviews: [],
    owner: "688f3b7f6c00a6c753dc7798",
     category: "Boats",

    description: "Cruise the Kerala backwaters in style.",
    image: { url: "https://picsum.photos/seed/houseboat1/600/400", file: "houseboat1.jpg" },
    price: 180,
    location: "Alleppey",
    country: "India"
  }
];


module.exports = { data: sampleListings };
