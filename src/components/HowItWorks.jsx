import { Search, CalendarDays, ShieldCheck, ChevronRight } from "lucide-react";

function HowItWorks() {
  return (
    <section id="how-it-works" className="py-5 bg-white rounded-lg shadow-md mt-3">

      <div className="max-w-7xl mx-auto px-6">

        {/* Section Heading */}
        <div className="flex items-center justify-center gap-4 mb-8">

          <div className="w-25 h-[2px] bg-orange-400"></div>
          <h2 className="text-2xl md:text-3xl font-bold text-blue-950 whitespace-nowrap">
            How It Works
          </h2>

          <div className="w-25 h-[2px] bg-orange-400"></div>

        </div>

        {/* Steps Container */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-5">

          {/* Step 1 */}
          <div className="flex items-center gap-4 flex-1">

            <div className="w-15 h-15 rounded-full bg-orange-200 flex items-center justify-center shrink-0">
              <Search size={30} className="text-blue-950" />
            </div>

            <div>
              <h3 className="font-bold text-blue-950">
                1. Search
              </h3>

              <p className="text-sm text-blue-950 mt-1">
                Find nearby luggage-storage locations.
              </p>
            </div>

          </div>

          {/* Arrow */}
          <ChevronRight size={30} className="hidden md:block text-orange-500 shrink-0" />


          {/* Step 2 */}
          <div className="flex items-center gap-4 flex-1">

            <div className="w-15 h-15 rounded-full bg-orange-200 flex items-center justify-center shrink-0">
              <CalendarDays size={30} className="text-blue-950" />
            </div>

            <div>
              <h3 className="font-bold text-blue-950">
                2. Book
              </h3>

              <p className="text-sm text-blue-950 mt-1">
                Reserve your storage space in just a few clicks.
              </p>
            </div>

          </div>

          {/* Arrow */}
          <ChevronRight size={30} className="hidden md:block text-orange-500 shrink-0" />


          {/* Step 3 */}
          <div className="flex items-center gap-4 flex-1">

            <div className="w-15 h-15 rounded-full bg-orange-200 flex items-center justify-center shrink-0">
              <ShieldCheck size={30} className="text-blue-950" />
            </div>

            <div>
              <h3 className="font-bold text-blue-950">
                3. Drop & Explore
              </h3>

              <p className="text-sm text-blue-950 mt-1">
                Leave your luggage safely and enjoy your day!
              </p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default HowItWorks;