import { Luggage, MapPin, ShieldCheck } from "lucide-react";

function AboutUs() {
  return (
    <section id="about" className="py-12 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="flex flex-col md:flex-row items-center gap-10">

          {/* Left Content */}
          <div className="w-full md:w-1/2">

            <h2 className="text-3xl font-bold text-blue-950 mb-4">
              About <span className="text-orange-500">Us</span>
            </h2>

            <p className="text-gray-600 leading-relaxed mb-4">
              Luggage With Us is a luggage storage platform designed
              to make travelling easier and more convenient.
              We connect travellers with secure and accessible
              luggage storage locations.
            </p>

            <p className="text-gray-600 leading-relaxed mb-6">
              Our goal is to give travellers the freedom to explore
              their destinations without the burden of carrying
              their luggage everywhere they go.
            </p>

            <button className="bg-orange-400 hover:bg-orange-500 text-white px-6 py-3 rounded-full transition">
              Learn More
            </button>

          </div>


          {/* Right Content */}
          <div className="w-full md:w-1/2 grid grid-cols-2 gap-3 max-w-lg max-amr-10">
            
            <div className="bg-blue-950 rounded-2xl p-4 text-white ">
              <Luggage size={30} className="text-orange-400 mb-4" />

              <h3 className="font-bold text-lg">
                Travel Freely
              </h3>

              <p className="text-sm mt-2 text-gray-200">
                Explore destinations without carrying your bags.
              </p>
            </div>


            <div className="bg-orange-100 rounded-2xl p-4">
              <ShieldCheck size={30} className="text-blue-950 mb-4" />

              <h3 className="font-bold text-lg text-blue-950">
                Secure Storage
              </h3>

              <p className="text-sm mt-2 text-gray-600">
                Find convenient luggage storage locations.
              </p>
            </div>


            <div className="bg-orange-100 rounded-2xl p-4">
              <MapPin size={30} className="text-blue-950 mb-4" />

              <h3 className="font-bold text-lg text-blue-950">
                Convenient Locations
              </h3>

              <p className="text-sm mt-2 text-gray-600">
                Discover storage options near your destination.
              </p>
            </div>


            <div className="bg-blue-950 rounded-2xl p-4 text-white">

              <Luggage size={30} className="text-orange-400 mb-4" />

              <h3 className="font-bold text-lg">
                Hassle Free
              </h3>

              <p className="text-sm mt-2 text-gray-200">
                Enjoy your journey with peace of mind.
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default AboutUs;