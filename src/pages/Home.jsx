import { FaCalculator, FaChartLine, FaShieldAlt, FaUsers, FaFileInvoiceDollar, FaCalendarAlt, FaArrowRight, FaCheck, FaStar, FaAward, FaQuoteLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';


export function Home() {
  const services = [
    {
      icon: <FaFileInvoiceDollar className="w-12 h-12" />,
      title: "Individual Tax Returns",
      description: "Complete personal tax preparation with maximum deductions and expert guidance.",
      features: ["T1 Returns", "RRSP Optimization", "Tax Credits"]
    },
    {
      icon: <FaCalculator className="w-12 h-12" />,
      title: "Corporate Tax Services",
      description: "Comprehensive business tax solutions for corporations of all sizes.",
      features: ["T2 Returns", "GST/HST Filing", "Payroll Services"]
    },
    {
      icon: <FaChartLine className="w-12 h-12" />,
      title: "Tax Planning",
      description: "Strategic planning to minimize tax burden and maximize your financial growth.",
      features: ["Year-End Planning", "Investment Advice", "Estate Planning"]
    },
    {
      icon: <FaShieldAlt className="w-12 h-12" />,
      title: "Audit & Compliance",
      description: "Professional representation and support for CRA audits and compliance.",
      features: ["Audit Defense", "Compliance Review", "Documentation"]
    }
  ];

  const stats = [
    { number: "20+", label: "Years Experience", icon: <FaAward className="w-8 h-8" /> },
    { number: "500+", label: "Clients Served", icon: <FaUsers className="w-8 h-8" /> },
    { number: "98%", label: "Client Satisfaction", icon: <FaStar className="w-8 h-8" /> },
    { number: "5+", label: "Days Per Week", icon: <FaCalendarAlt className="w-8 h-8" /> }];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Small Business Owner",
      company: "Johnson Consulting Inc.",
      content: "FiscalX saved me thousands on my corporate taxes. Their expertise in business deductions is outstanding. I wouldn't trust anyone else with my company's finances.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Software Engineer",
      company: "Tech Professional",
      content: "As a self-employed contractor, my taxes were getting complicated. FiscalX made everything simple and found deductions I never knew existed. Highly recommended!",
      rating: 5
    },
    {
      name: "Linda Rodriguez",
      role: "Retiree",
      company: "Individual Client",
      content: "The team at FiscalX helped me navigate my retirement tax situation perfectly. They're professional, responsive, and always available when I have questions.",
      rating: 5
    },
    {
      name: "David Thompson",
      role: "Restaurant Owner",
      company: "Thompson's Bistro",
      content: "Been using FiscalX for 3 years now. They handle all my business taxes, payroll, and bookkeeping. Professional service and fair pricing. Couldn't be happier.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-blue-[#0365A8] to-slate-900">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)',
            backgroundSize: '20px 20px'
          }}></div>
        </div>

        <div className="relative container mx-auto px-6 py-16 lg:py-32">
          <div className="max-w-5xl mx-auto text-center">
            <div className="mb-8">
              <span className="inline-block px-4 py-2 bg-blue-200 text-fiscalblue rounded-full text-sm font-medium mb-6">
                🏆 Canada's Trusted Tax Professionals
              </span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-8 leading-tight">
              Expert Tax Solutions
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-fiscalblue to-fiscalgreen">
                Made Simple
              </span>
            </h1>

            <p className="text-xl lg:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              FiscalX Professional Corporation delivers personalized tax services that save you money,
              time and stress. Let our certified experts handle your taxes while you focus on what matters most.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link
                to="/contact"
                className="group bg-gradient-to-r from-fiscalblue to-fiscalgreen  hover:from-fiscalblue hover:to-fiscalgreen text-white px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-3"
              >
                Start Free Consultation
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/business-services"
                className="group border-2 border-slate-300 hover:border-white/50 text-slate-300 hover:text-white px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-fiscalgreen"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-50 text-fiscalblue rounded-2xl mb-4 group-hover:bg-blue-100 transition-colors">
                  {stat.icon}
                </div>
                <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">{stat.number}</h3>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-2 bg-blue-100 text-fiscalblue rounded-full text-sm font-semibold mb-6">
              OUR EXPERTISE
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Comprehensive Tax Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From individual returns to complex corporate planning, we provide end-to-end
              tax solutions tailored to your unique needs.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <div key={index} className="group bg-white p-8 lg:p-10 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 hover:border-blue-200">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl flex items-center justify-center text-fiscalblue group-hover:from-blue-100 group-hover:to-blue-200 transition-all duration-300">
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {service.features.map((feature, idx) => (
                        <span key={idx} className="px-3 py-1 bg-blue-50 text-fiscalblue text-sm font-medium rounded-full">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-2 bg-green-100 text-fiscalgreen rounded-full text-sm font-semibold mb-6">
              WHY CHOOSE US
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Your Success is Our Priority
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              With over 5 years of experience serving Canadian taxpayers, we combine
              deep expertise with personalized service to deliver exceptional results.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {[
                {
                  icon: <FaAward className="w-8 h-8" />,
                  title: "Certified Professionals",
                  description: "CPA designated accountants with proven expertise"
                },
                {
                  icon: <FaShieldAlt className="w-8 h-8" />,
                  title: "Secure & Confidential",
                  description: "Your information is protected with bank-level security"
                },
                {
                  icon: <FaCalendarAlt className="w-8 h-8" />,
                  title: "Year-Round Support",
                  description: "Consultation and guidance whenever you need it"
                },
                {
                  icon: <FaCalculator className="w-8 h-8" />,
                  title: "Transparent Pricing",
                  description: "Competitive rates with no hidden fees"
                },
                {
                  icon: <FaUsers className="w-8 h-8" />,
                  title: "Bilingual Services",
                  description: "Expert support in English, Urdu and Hindi"
                },  
                {
                  icon: <FaCheck className="w-8 h-8" />,
                  title: "Maximize Your Refund",
                  description: "We find every credit and deduction to get you the biggest refund possible"
                }
              ].map((feature, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-xl text-center hover:shadow-lg transition-all duration-300">
                  <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center text-fiscalgreen mx-auto mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-2 bg-yellow-100 text-yellow-800 rounded-full text-sm font-semibold mb-6">
              CLIENT TESTIMONIALS
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Don't just take our word for it. Here's what our satisfied clients have to say about their experience with FiscalX.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 flex-shrink-0">
                    <FaQuoteLeft className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-1 mb-2">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <FaStar key={i} className="w-4 h-4 text-yellow-500" />
                      ))}
                    </div>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      "{testimonial.content}"
                    </p>
                    <div className="border-t pt-4">
                      <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                      <p className="text-sm text-blue-600 font-medium">{testimonial.company}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-gradient-to-r from-green-500 to-fiscalblue py-20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)',
            backgroundSize: '20px 20px'
          }}></div>
        </div>
        <div className="relative container mx-auto px-6 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Maximize Your Tax Savings?
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto leading-relaxed">
            Don't leave money on the table. Get expert guidance from our certified tax professionals
            and discover how much you could save.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              to="/contact"
              className="bg-white text-fiscalblue hover:bg-gray-100 px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Get Your Free Consultation
            </Link>
            <Link
              to="/important-dates"
              className="border-2 border-white hover:bg-white hover:text-fiscalblue text-white px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300"
            >
              View Tax Calendar
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}