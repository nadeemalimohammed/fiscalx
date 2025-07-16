import { FaBuilding, FaFileAlt, FaCalculator, FaUsers, FaArrowRight, FaCheck, FaShieldAlt, FaClock, FaPhoneAlt, } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export function CorporateTax() {
  const services = [
    {
      icon: <FaFileAlt className="w-8 h-8" />,
      title: "Financial Statements",
      description: "GAAP-compliant financial statements recognizing all income, expenses, assets, and liabilities.",
      features: ["Balance Sheet preparation", "Income Statement", "Cash Flow Statement", "Notes to Financial Statements"],
      price: "Starting at $750"
    },
    {
      icon: <FaBuilding className="w-8 h-8" />,
      title: "Corporate Returns (T2)",
      description: "Complete T2 return preparation for businesses across all industries with maximum tax reliefs.",
      features: ["T2 Corporation Income Tax Return", "Provincial tax returns", "Tax planning strategies", "CRA correspondence"],
      price: "Starting at $850"
    },
    {
      icon: <FaCalculator className="w-8 h-8" />,
      title: "HST/GST Filing",
      description: "Accurate HST return preparation and filing while keeping your business organized and compliant.",
      features: ["Monthly/Quarterly HST returns", "Input Tax Credit optimization", "HST registration", "Voluntary disclosure"],
      price: "Starting at $150"
    },
    {
      icon: <FaUsers className="w-8 h-8" />,
      title: "Payroll Services",
      description: "Complete payroll management ensuring accurate and timely CRA remittances for all deductions.",
      features: ["Payroll processing", "CPP/EI/Tax remittances", "T4 preparation", "ROE processing"],
      price: "Starting at $25/employee"
    }
  ];

  const businessTypes = [
    "Small & Medium Enterprises (SMEs)",
    "Professional Corporations", 
    "Manufacturing Companies",
    "Retail & E-commerce",
    "Technology Companies",
    "Construction Companies",
    "Healthcare Practices",
    "Non-Profit Organizations"
  ];

  const compliance = [
    {
      deadline: "March 31",
      task: "Year-end (Dec 31) - T2 filing deadline",
      description: "Corporate tax return filing for December year-end companies"
    },
    {
      deadline: "June 30", 
      task: "Tax payment deadline",
      description: "Final tax payment due for most corporations"
    },
    {
      deadline: "Monthly/Quarterly",
      task: "HST/GST returns",
      description: "Regular HST filing based on your business volume"
    },
    {
      deadline: "15th of following month",
      task: "Payroll remittances",
      description: "CPP, EI, and income tax deductions due"
    }
  ];

  const benefits = [
    "Maximize tax deductions and credits",
    "Ensure full CRA compliance",
    "Professional financial statements",
    "Year-round tax planning support",
    "Electronic filing for faster processing",
    "Dedicated corporate tax specialist"
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-sky-700 to-emerald-600 py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Corporate Tax Solutions
            </h1>
            <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
              Comprehensive T2 returns, financial statements, and business tax compliance for Canadian corporations of all sizes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-sky-700 hover:bg-gray-100 px-8 py-3 rounded-full font-semibold transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105 hover:shadow-xl"
              >
                Get Corporate Quote
                <FaArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="tel:+16474509235"
                className="border-2 border-white text-white hover:bg-white hover:text-sky-700 px-8 py-3 rounded-full font-semibold transition-all duration-300 flex items-center justify-center gap-2"
              >
                <FaPhoneAlt className="w-4 h-4" />
                (647) 450-9235
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Corporate Tax Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              End-to-end corporate tax solutions designed to minimize your tax burden and ensure compliance
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-sky-100 rounded-xl flex items-center justify-center text-sky-700 flex-shrink-0">
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-gray-600 mb-4 text-sm">{service.description}</p>
                    
                    <div className="space-y-1 mb-4">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <FaCheck className="w-3 h-3 text-green-500" />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t">
                      <span className="text-lg font-bold text-sky-700">{service.price}</span>
                      <Link
                        to="/contact"
                        className="bg-sky-700 hover:bg-sky-800 text-white px-4 py-2 rounded-lg font-medium transition-colors text-sm"
                      >
                        Learn More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Three Column Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
            {/* Business Types */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <FaBuilding className="text-indigo-600" />
                We Serve
              </h3>
              <div className="space-y-3">
                {businessTypes.map((type, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-indigo-100 rounded-full flex items-center justify-center">
                      <FaCheck className="w-3 h-3 text-indigo-600" />
                    </div>
                    <span className="text-gray-700">{type}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* What's Included */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <FaShieldAlt className="text-green-600" />
                What's Included
              </h3>
              <div className="space-y-3">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                      <FaCheck className="w-3 h-3 text-green-600" />
                    </div>
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Compliance Calendar */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <FaClock className="text-orange-600" />
                Key Deadlines
              </h3>
              <div className="space-y-2">
                {compliance.map((item, index) => (
                  <div key={index}>
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      <span className="font-semibold text-orange-600">{item.deadline}</span>
                    </div>
                    <h5 className="font-medium text-gray-900 mb-1">{item.task}</h5>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-br from-sky-50 to-emerald-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Process
            </h2>
            <p className="text-lg text-gray-600">Simple steps to get your corporate taxes done right</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              {
                step: "1",
                title: "Initial Consultation",
                description: "Discuss your business structure, needs, and tax situation"
              },
              {
                step: "2",
                title: "Document Collection",
                description: "Gather financial records, receipts, and previous year returns"
              },
              {
                step: "3",
                title: "Preparation & Review",
                description: "Prepare statements and returns with thorough quality review"
              },
              {
                step: "4",
                title: "Filing & Follow-up",
                description: "Electronic filing and ongoing support for any CRA inquiries"
              }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-sky-100 to-emerald-100">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Optimize Your Corporate Taxes?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Let us handle your corporate tax needs while you focus on growing your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-emerald-700 hover:bg-emerald-800 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 flex items-center justify-center gap-2"
            >
              Start Your Corporate Return
            </Link>
            <Link
              to="/business-services"
              className="border-2 border-emerald-700 text-emerald-700 hover:bg-emerald-800 hover:text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 flex items-center justify-center gap-2"
            >
              View All Business Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}