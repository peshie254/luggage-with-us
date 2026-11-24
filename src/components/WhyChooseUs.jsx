import { ShieldCheck, Zap, MapPin, Headset } from "lucide-react";

function WhyChooseUs() {

  return (

    <section className="py-10 bg-gray-50">

      <div className="max-w-7xl mx-auto px-17">

        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-bold text-blue-950 mb-8">
          Why Choose Luggage With Us?
        </h2>


        {/* Benefits */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">

          {/* Benefit 1 */}
          <div className="flex flex-col items-center text-center gap-2">

            <ShieldCheck size={35} className="text-orange-300" />

            <h3 className="font-bold text-blue-950">
              Safe & Secure Storage
            </h3>

          </div>


          {/* Benefit 2 */}
          <div className="flex flex-col items-center text-center gap-2">

            <Zap size={35} className="text-orange-300" />

            <h3 className="font-bold text-blue-950">
              Easy Booking
            </h3>

          </div>


          {/* Benefit 3 */}
          <div className="flex flex-col items-center text-center gap-2">

            <MapPin size={35} className="text-orange-300" />

            <h3 className="font-bold text-blue-950">
              Multiple Locations
            </h3>

          </div>


          {/* Benefit 4 */}
          <div className="flex flex-col items-center text-center gap-2">

            <Headset size={35} className="text-orange-300" />

            <h3 className="font-bold text-blue-950">
              24/7 Support
            </h3>

          </div>

        </div>

      </div>

    </section>

  );
}

export default WhyChooseUs;