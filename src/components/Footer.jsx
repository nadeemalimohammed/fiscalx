import { FaFacebookF, FaInstagram, FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import { FaTiktok } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-white text-gray-800 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-8 justify-between">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-fiscalblue">FiscalX Professional Corporation</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Professional tax services and financial consulting to help you maximize your returns and minimize your tax burden.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" 
                 className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                <FaFacebookF className="w-5 h-5 text-white" />
              </a>
              <a href="https://x.com" target="_blank" rel="noopener noreferrer"
                 className="w-10 h-10 bg-black rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                <span className="text-white font-bold text-lg">𝕏</span>
              </a>
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer"
                 className="w-10 h-10 bg-black rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                <FaTiktok className="w-5 h-5 text-white" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                 className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                <FaInstagram className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

          {/* Services Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gray-800">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/individual-tax" className="text-gray-600 hover:text-blue-600 transition-colors text-sm">
                  Individual Tax Returns
                </Link>
              </li>
              <li>
                <Link to="/corporate-tax" className="text-gray-600 hover:text-blue-600 transition-colors text-sm">
                  Corporate Tax Services
                </Link>
              </li>
              <li>
                <Link to="/business-services" className="text-gray-600 hover:text-blue-600 transition-colors text-sm">
                  Business Services
                </Link>
              </li>
              <li>
                <Link to="/payroll" className="text-gray-600 hover:text-blue-600 transition-colors text-sm">
                  Payroll Services
                </Link>
              </li>
              <li>
                <Link to="/bookkeeping" className="text-gray-600 hover:text-blue-600 transition-colors text-sm">
                  Bookkeeping
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gray-800">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-600 hover:text-blue-600 transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-blue-600 transition-colors text-sm">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/important-dates" className="text-gray-600 hover:text-blue-600 transition-colors text-sm">
                  Important Dates
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors text-sm">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors text-sm">
                  Terms of Service
                </a>
              </li>
            </ul>
           
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gray-800">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <FaMapMarkerAlt className="w-5 h-5 text-fiscalblue mt-0.5 flex-shrink-0" />
                <div className="text-gray-600 text-sm">
                  <p>421 Nugget Avenue</p>
                  <p>Scarborough, ON M1S 4L8</p>
                  <p>Canada</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <FaPhone className="w-5 h-5 text-fiscalblue flex-shrink-0" />
                <a href="tel:+16474509235" className="text-gray-600 hover:text-blue-600 transition-colors text-sm">
                  (647) 450-9235
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <FaEnvelope className="w-5 h-5 text-fiscalblue flex-shrink-0" />
                <a href="mailto:info@fiscalx.ca" className="text-gray-600 hover:text-blue-600 transition-colors text-sm">
                  info@fiscalx.ca
                </a>
              </div>
            </div>
            {/* Business Hours */}
              <div className="flex items-start space-x-3 ">
                <FaClock className="w-5 h-5 text-fiscalblue mt-0.5 flex-shrink-0" />
                <div className="text-gray-600 text-sm">
                  <p className="font-medium mb-1">Business Hours</p>
                  <p>Mon - Fri: 11:00 AM - 6:00 PM</p>
                </div>
              </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-300 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-500 text-sm">
              © {new Date().getFullYear()} FiscalX Professional Corporation. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-500 hover:text-blue-600 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-500 hover:text-blue-600 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-500 hover:text-blue-600 transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}