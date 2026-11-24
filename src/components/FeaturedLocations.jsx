const locations = [
  {
    id: 1,
    name: "City Centre Storage",
    location: "Nairobi CBD",
    price: 300,
    available: true,
    image: "https://constructionkenya.com/wp-content/uploads/2022/01/nairobi-central-train-station.jpg",
  },
  {
    id: 2,
    name: "Airport Luggage Hub",
    location: "JKIA, Nairobi",
    price: 500,
    available: true,
    image: "https://external-preview.redd.it/downtown-nairobi-kenya-from-the-sarova-stanley-hotel-v0-aFXrgmdA93R3l3vm9i2ss3fLbyUp_lvi3Q855b7q6iU.jpg?width=1080&crop=smart&auto=webp&s=620218ef7db51e550192409b95b94a1fc55e8055",
  },
  {
    id: 3,
    name: "Travellers Storage Point",
    location: "Nakuru Town",
    price: 250,
    available: false,
    image: "https://scontent.fmba5-2.fna.fbcdn.net/v/t39.30808-6/591934272_1371994911287888_5385462561833510339_n.jpg?stp=dst-jpg_tt6&cstp=mx1620x1620&ctp=p526x296&_nc_cat=109&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_ohc=t43CCtgv7uYQ7kNvwHhTJe1&_nc_oc=AdqQCefCq0EFCnDnQ_I4Xzq_fDtIhWY1yNekW6KoORmwNFpiF5cYyYzk3gA1YHDvJI4&_nc_zt=23&_nc_ht=scontent.fmba5-2.fna&_nc_gid=EhAaO2l4a5VmqZEo9kEIZw&_nc_ss=7b389&oh=00_AQRFrMVCHlsNxf6lHz88TZ_80ZL4On2oi_Hjs4zx2lUosQ&oe=6B0B2A2E",
  },
  {
    id: 4,
    name: "Airport Luggage Hub",
    location: "JKIA, Nairobi",
    price: 500,
    available: true,
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2f/67/cc/2c/restaurant.jpg?w=1400&h=800&s=1",
  },
];
function FeaturedLocations() {
  return (
    <section id="find-storage" className="py-6 bg-gray-50">

      <div className="max-w-7xl mx-auto px-6">

        {/* Section Heading */}
        
        <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-7 h-[2px] bg-orange-400"></div>
            <h2 className="text-2xl md:text-3xl font-bold text-blue-950">
              Featured Storage Locations
            </h2>
            <div className="w-7 h-[2px] bg-orange-400"></div>
            </div>
          <p className="text-gray-600 mt-4">
            Discover convenient places to store your luggage.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

  {locations.map((location) => (
   <div
  key={location.id}
  className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl hover:-translate-y-1 transition duration-300"
>

  {/* Location Image */}
  <img
    src={location.image}
    alt={location.name}
    className="w-full h-24 object-cover"
  />

  {/* Location Details */}
  <div className="p-3">

    <h3 className="text-sm font-bold text-blue-950">
      {location.name}
    </h3>

    <p className="text-gray-600 text-xs mt-1">
      {location.location}
    </p>

    {/* Rating */}
    <p className="text-xs mt-1 text-gray-600">
      <span className="text-orange-500">★</span> 4.8
      <span> (1.2k reviews)</span>
    </p>

    {/* Price and Availability */}
    <div className="flex items-center justify-between mt-2">

      <p className="text-blue-950 font-bold text-sm">
        KSh {location.price} / day
      </p>

      <span className={`text-xs px-3 py-1 rounded-full ${
        location.available
          ? "bg-green-200 text-green-950"
          : "bg-red-100 text-red-600"
      }`}>
        {location.available ? "Available" : "Fully Booked"}
      </span>

    </div>
        <button
        disabled={!location.available}
        className={`w-full py-2 rounded-lg mt-3 text-sm transition ${
        location.available
          ? "bg-blue-950 text-white hover:bg-orange-500"
          : "bg-gray-300 text-gray-500 cursor-not-allowed"
      }`}
    >
      View Details
    </button>

  </div>

</div>
  ))}

</div>

      </div>

    </section>
  );
}

export default FeaturedLocations;