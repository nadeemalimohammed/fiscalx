import { FaRocket, FaBook, FaUsers, FaShieldAlt, FaArrowRight, FaCheck, FaBuilding, FaPhoneAlt, FaFileContract, FaChartLine, FaHandshake } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export function BusinessServices() {
  const services = [
    {
      icon: <FaRocket className="w-8 h-8" />,
      title: "New Business Registration",
      description: "Complete business setup including registration, numbering, and HST registration for new enterprises.",
      features: ["Federal/Provincial registration", "Numbered or named corporations", "Business Number setup", "HST/GST registration"],
      price: "Starting at $299"
    },
    {
      icon: <FaBook className="w-8 h-8" />,
      title: "Bookkeeping Services",
      description: "Professional bookkeeping for accurate financial records and informed business decision-making.",
      features: ["Monthly/Quarterly updates", "Financial statement preparation", "Accounts payable/receivable", "Bank reconciliation"],
      price: "Starting at $150/month"
    },
    {
      icon: <FaUsers className="w-8 h-8" />,
      title: "Payroll Management",
      description: "Complete payroll processing with accurate deductions and timely CRA submissions.",
      features: ["Payroll cycle management", "CPP/EI/Tax calculations", "CRA remittances", "T4 & ROE processing"],
      price: "Starting at $25/employee"
    },
    {
      icon: <FaShieldAlt className="w-8 h-8" />,
      title: "WSIB Filing",
      description: "Workplace Safety Insurance Board compliance and filing services for covered industries.",
      features: ["WSIB return preparation", "Premium calculations", "Compliance monitoring", "Claims assistance"],
      price: "Starting at $200"
    }
  ];

  const additionalServices = [
    {
      icon: <FaFileContract className="w-6 h-6" />,
      title: "Business Licensing",
      description: "Help obtaining required business licenses and permits"
    },
    {
      icon: <FaChartLine className="w-6 h-6" />,
      title: "Financial Planning",
      description: "Strategic financial planning and budgeting services"
    },
    {
      icon: <FaHandshake className="w-6 h-6" />,
      title: "Business Consulting",
      description: "Expert advice on business structure and operations"
    },
    {
      icon: <FaBuilding className="w-6 h-6" />,
      title: "Corporate Compliance",
      description: "Ongoing compliance monitoring and reporting"
    }
  ];

  const businessTypes = [
    "Sole Proprietorships",
    "Partnerships", 
    "Corporations (CCPC)",
    "Professional Corporations",
    "Non-Profit Organizations",
    "Cooperatives"
  ];

  const benefits = [
    "One-stop business setup solution",
    "Experienced business advisors",
    "Government liaison services",
    "Ongoing compliance support",
    "Competitive pricing packages",
    "Dedicated account management"
  ];

  const registrationSteps = [
    {
      step: "1",
      title: "Business Structure",
      description: "Choose the right business structure for your needs"
    },
    {
      step: "2",
      title: "Name & Registration",
      description: "Secure your business name and complete registration"
    },
    {
      step: "3",
      title: "Tax Numbers",
      description: "Obtain Business Number and HST registration"
    },
    {
      step: "4",
      title: "Banking & Setup",
      description: "Open business accounts and finalize setup"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-green-700 to-teal-600 py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Complete Business Solutions
            </h1>
            <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
              From business registration to ongoing bookkeeping and payroll - we provide all the services your business needs to succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-green-700 hover:bg-gray-100 px-8 py-3 rounded-full font-semibold transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105 hover:shadow-xl"
              >
                Get Business Quote
                <FaArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="tel:+16474509235"
                className="border-2 border-white text-white hover:bg-white hover:text-green-700 px-8 py-3 rounded-full font-semibold transition-all duration-300 flex items-center justify-center gap-2"
              >
                <FaPhoneAlt className="w-4 h-4" />
                (647) 450-9235
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Core Business Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive business support services to help you start, manage, and grow your business
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-green-700 flex-shrink-0">
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-gray-600 mb-4 text-sm">{service.description}</p>
                    
                    <div className="space-y-1 mb-4">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <FaCheck className="w-3 h-3 text-green-600" />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t">
                      <span className="text-lg font-bold text-green-700">{service.price}</span>
                      <Link
                        to="/contact"
                        className="bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded-lg font-medium transition-colors text-sm"
                      >
                        Get Started
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Additional Business Support
            </h2>
            <p className="text-lg text-gray-600">Extended services to support your business growth</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {additionalServices.map((service, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-xl hover:bg-teal-100 transition-colors">
                <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center text-teal-700 mx-auto mb-4">
                  {service.icon}
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-sm text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Three Column Information */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
            {/* Business Types */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <FaBuilding className="text-green-600" />
                Business Types
              </h3>
              <div className="space-y-3">
                {businessTypes.map((type, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                      <FaCheck className="w-3 h-3 text-green-600" />
                    </div>
                    <span className="text-gray-700">{type}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Why Choose Us */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <FaShieldAlt className="text-teal-600" />
                Why Choose Us
              </h3>
              <div className="space-y-3">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-teal-100 rounded-full flex items-center justify-center">
                      <FaCheck className="w-3 h-3 text-teal-600" />
                    </div>
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Registration Process */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <FaRocket className="text-orange-600" />
                Setup Process
              </h3>
              <div className="space-y-2">
                {registrationSteps.map((step, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-sm">
                    <div className="flex items-center gap-4 mb-2">
                      <div className="w-4 h-4 bg-orange-100 rounded-full flex items-center justify-center">
                        <span className="text-orange-700 font-bold text-sm">{step.step}</span>
                      </div>
                      <h5 className="font-semibold text-gray-900">{step.title}</h5>
                    </div>
                    <p className="text-sm text-gray-600 ml-8">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-100 to-teal-100">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Start or Grow Your Business?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Let our experienced team handle all your business needs so you can focus on what you do best - running your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-teal-700 hover:bg-teal-800 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 flex items-center justify-center gap-2"
            >
              Start Your Business Today
            </Link>
            <Link
              to="/corporate-tax"
              className="border-2 border-teal-700 text-teal-700 hover:bg-teal-800 hover:text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 flex items-center justify-center gap-2"
            >
              View Corporate Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}