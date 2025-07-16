import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaWhatsapp, FaCalendarAlt, FaArrowRight, FaCheck, } from 'react-icons/fa';
import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    setIsSubmitted(true);
  };

  const services = [
    "Individual Tax Returns",
    "Corporate Tax Returns",
    "Business Registration",
    "Bookkeeping Services",
    "Payroll Management",
    "WSIB Filing",
    "Tax Planning",
    "Other"
  ];

  const contactMethods = [
    {
      icon: <FaPhone className="w-6 h-6" />,
      title: "Call Us",
      details: "(647) 450-9235",
      description: "Speak directly with our tax experts",
      action: "tel:+16474509235"
    },
    {
      icon: <FaWhatsapp className="w-6 h-6" />,
      title: "WhatsApp",
      details: "Message us anytime",
      description: "Quick responses to your questions",
      action: "https://wa.me/16474509235"
    },
    {
      icon: <FaEnvelope className="w-6 h-6" />,
      title: "Email",
      details: "info@fiscalx.ca",
      description: "Send us your detailed inquiries",
      action: "mailto:info@fiscalx.ca"
    },
    {
      icon: <FaCalendarAlt className="w-6 h-6" />,
      title: "Schedule Meeting",
      details: "Book consultation",
      description: "In-person or virtual meetings",
      action: "#consultation"
    }
  ];

  const officeHours = [
    { day: "Monday - Friday", time: "11:00 AM - 6:00 PM" },
    { day: "Saturday", time: "By Appointment" },
    { day: "Sunday", time: "Closed" },
  ];


  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-emerald-700 to-sky-600 py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Get In Touch
            </h1>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Ready to maximize your tax savings? Get expert advice from our certified professionals. We're here to help with all your tax and business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+16474509235"
                className="bg-white text-emerald-700  hover:bg-gray-100 px-8 py-3 rounded-full font-semibold transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105 hover:shadow-xl"
              >
                <FaPhone className="w-4 h-4" />
                Call Now
              </a>
              <a
                href="https://wa.me/16474509235"
                className="border-2 border-white text-white hover:bg-white hover:text-emerald-700  px-8 py-3 rounded-full font-semibold transition-all duration-300 flex items-center justify-center gap-2"
              >
                <FaWhatsapp className="w-4 h-4" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Multiple Ways to Reach Us
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose the communication method that works best for you
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.action}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center group"
              >
                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-700  mx-auto mb-4 group-hover:bg-emerald-700  group-hover:text-white transition-colors">
                  {method.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{method.title}</h3>
                <p className="text-emerald-700  font-semibold mb-2">{method.details}</p>
                <p className="text-sm text-gray-600">{method.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Form & Info */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Send Us a Message
              </h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and we'll get back to you within 24 hours. All consultations are confidential.
              </p>

              {isSubmitted ? (
                <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FaCheck className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-lg font-bold text-green-800 mb-2">Message Sent!</h3>
                  <p className="text-green-700">Thank you for contacting us. We'll respond within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                        placeholder="(647) 123-4567"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">Service Needed</label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                      >
                        <option value="">Select a service</option>
                        {services.map((service, index) => (
                          <option key={index} value={service}>{service}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Message *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows="5"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                      placeholder="Tell us about your tax situation or business needs..."
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-emerald-700 hover:bg-emerald-800 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    Send Message
                    <FaArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Visit Our Office
              </h2>
              {/* Google Maps Embed */}
              <div className="mb-8">
                {/* Google Maps iFrame */}
                <div className="rounded-xl overflow-hidden shadow-lg mb-6 h-52">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2883.8234567890123!2d-79.2345678!3d43.7654321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4d1234567890a%3A0x1234567890abcdef!2s421%20Nugget%20Ave%2C%20Scarborough%2C%20ON%20M1S%204L8%2C%20Canada!5e0!3m2!1sen!2sca!4v1234567890123!5m2!1sen!2sca"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="FiscalX Office Location"
                  ></iframe>
                </div>
              </div>
              {/* Office Address */}
              <div className="mb-8">
                <div className="flex items-start gap-4">
                  <div className="rounded-xl flex items-center justify-center text-emerald-700 flex-shrink-0">
                    <FaMapMarkerAlt className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">FiscalX Professional Corporation</h3>
                    <p className="text-gray-700 leading-relaxed">
                      421 Nugget Avenue<br />
                      Scarborough, Ontario M1S 4L8<br />
                      Canada
                    </p>
                  </div>
                </div>
              </div>

              {/* Office Hours */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-3">
                  <FaClock className="text-emerald-700" />
                  Office Hours
                </h3>
                <div className="space-y-2 px-8">
                  {officeHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-gray-200">
                      <span className="text-gray-700">{schedule.day}</span>
                      <span className="text-gray-600">{schedule.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-16 bg-gradient-to-br from-emerald-100 to-sky-10
      0">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Need Urgent Tax Help?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Facing a CRA deadline or audit? We offer emergency tax services and same-day consultations for urgent matters.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+16474509235"

              className="bg-sky-700 hover:bg-sky-800 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 flex items-center justify-center gap-2"
            >
              <FaPhone className="w-4 h-4" />
              Call for Emergency Help
            </a>
            <a
              href="https://wa.me/16474509235"
              className="border-2 border-sky-700 text-sky-700 hover:bg-sky-800 hover:text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 flex items-center justify-center gap-2"
            >
              <FaWhatsapp className="w-4 h-4" />
              WhatsApp Us Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}