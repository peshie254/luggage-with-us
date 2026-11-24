import { FaInstagram, FaFacebookF, FaYoutube, FaLinkedinIn, FaTiktok} from "react-icons/fa";
function Footer() {
  return (
    <footer className="bg-blue-950 text-white pt-7 pb-2">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-7">

          {/* Company Information */}
          <div>
            <h2 className="text-2xl font-bold">
              <span className="text-orange-500">Luggage</span> With Us
            </h2>

            <p className="text-gray-300 mt-2 leading-relaxed">
              Explore freely. Leave your luggage with us.
              We connect travellers with convenient luggage
              storage locations.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-3">
              Quick Links
            </h3>

            <ul className="space-y-3 text-gray-300">
              <li><a href="#" className="hover:text-orange-500 transition">Home</a></li>
              <li><a href="#find-storage" className="hover:text-orange-500 transition">Find Storage</a></li>
              <li><a href="#how-it-works" className="hover:text-orange-500 transition">How It Works</a></li>
              <li><a href="#about" className="hover:text-orange-500 transition">About Us</a></li>
              <li><a href="#why-choose-us" className="hover:text-orange-500 transition">Why Choose Us</a></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-3">
              Contact Us
            </h3>

            <p className="text-gray-300 mb-3">
              Email: info@luggagewithus.com
            </p>

            <p className="text-gray-300">
              Phone: +254 700 000 000
            </p>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-3">
              Follow Us
            </h3>

            <p className="text-gray-300 mb-4">
              Connect with us on social media.
            </p>

            <div className="flex items-center gap-4">

              <a href="#" aria-label="Instagram" className="text-orange-500 hover:text-pink-500 transition">
                <FaInstagram size={23} />
              </a>

              <a href="#" aria-label="Facebook" className="text-orange-500 hover:text-blue-600  transition">
                <FaFacebookF size={23} />
              </a>

              <a href="#" aria-label="YouTube" className="text-orange-500 hover:text-red-500  transition">
                <FaYoutube size={23} />
              </a>

              <a href="#" aria-label="LinkedIn" className="text-orange-500 hover:text-blue-400 
               transition">
                <FaLinkedinIn  size={23} />
              </a>

              <a href="#" aria-label="TikTok" className="text-orange-500 hover:text-gray-500 transition">
                <FaTiktok size={23} />
             </a>

            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="border-t border-gray-900 mt-7 pt-6 text-center">
          <p className="text-gray-400 text-sm mb-2">
            © 2026 Luggage With Us. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;