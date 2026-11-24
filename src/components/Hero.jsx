import { MapPin, CalendarDays, Search } from "lucide-react";

function Hero() {

  return (

    <section className="bg-blue-950  rounded-br-[60px] rounded-tl-[60px] min-h-[70px] max-h-[300px]" >

      <div className="max-w-7xl mx-auto px-6 ">

        <div className="flex flex-row items-center justify-between gap-0">

          {/* Left Content */}
          <div className="w-[65%] px-2 sm:px-4 md:px-10">

        <h1 className="text-sm sm:text-lg md:text-2xl lg:text-4xl font-extrabold text-white leading-tight">
           Explore Freely.
         <br />
            Leave Your Luggage  <span className="text-orange-500">
                  With Us.
            </span> 

            </h1>

            <p className="text-[10px] sm:text-xs md:text-base text-white mt-2 leading-tight">

            Discover convenient and secure luggage storage locations
            wherever your journey takes you. Travel light and enjoy
            every moment without worrying about your bags.

            </p>

 <div className="w-full bg-white shadow-lg rounded-2xl md:rounded-full p-2 mt-4 mb-2">

  <div className="flex flex-col md:flex-row items-stretch md:items-center gap-2">

    {/* Location Input */}
    <div className="flex items-center gap-2 w-full md:w-[45%] px-2">

      <MapPin size={17} className="text-blue-950 shrink-0" />

      <input
        type="text"
        placeholder="Enter location"
        className="w-full min-w-0 py-2 outline-none text-gray-700 placeholder-gray-500 text-xs md:text-sm"
      />

    </div>

    {/* Vertical Divider */}
    <div className="hidden md:block h-8 border-l border-gray-300"></div>

    {/* Date Selection */}
    <div className="flex items-center gap-2 w-full md:flex-1 px-2">

      <CalendarDays size={15} className="text-blue-950 shrink-0" />

      <input
        type="date"
        className="w-full min-w-0 outline-none text-gray-600 py-2 cursor-pointer text-xs md:text-sm"
      />

    </div>

    {/* Search Button */}
    <button
      className="flex items-center justify-center gap-2 w-full md:w-auto bg-orange-400 hover:bg-orange-500 text-white font-semibold px-4 md:px-7 py-2 rounded-full transition shrink-0"
    >
      <Search size={15} />
      Search
    </button>

  </div>

</div>
          </div>

          {/* Right Content */}
          <div className="w-[35%] h-[300px]">

            {/* Image will go here */}
                <img
                src="/images/luggage.png"
                alt="Traveller's luggage"
                className="w-full h-full object-cover rounded-2xl  shadow-xl "
                />
          </div>

        </div>

      </div>

    </section>

  );

}

export default Hero;