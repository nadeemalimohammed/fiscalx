import { FaFileInvoiceDollar, FaUserTie, FaCalendarAlt, FaArrowRight, FaCheck, FaShieldAlt, FaPhoneAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export function IndividualTax() {
  const services = [
    {
      icon: <FaFileInvoiceDollar className="w-8 h-8" />,
      title: "Personal Tax Return (T1)",
      description: "Complete preparation of your annual tax return with maximum deductions and credits.",
      features: ["T1 General forms", "RRSP optimization", "Tax credit maximization", "Direct deposit setup"],
      price: "Starting at $99"
    },
    {
      icon: <FaUserTie className="w-8 h-8" />,
      title: "Self-Employed Returns",
      description: "Specialized service for freelancers, contractors, and small business owners.",
      features: ["Business income reporting", "Expense deductions", "HST/GST filing", "Quarterly remittances"],
      price: "Starting at $149"
    },
    {
      icon: <FaCalendarAlt className="w-8 h-8" />,
      title: "Prior Year Filings",
      description: "Catch up on missed tax returns and resolve outstanding CRA issues.",
      features: ["Back filing service", "Penalty reduction", "Payment arrangements", "Voluntary disclosure"],
      price: "Starting at $199"
    },
    {
      icon: <FaShieldAlt className="w-8 h-8" />,
      title: "T1 Adjustments",
      description: "Correct errors and claim missed credits from previously filed returns.",
      features: ["Error corrections", "Missed credit claims", "Income adjustments", "Documentation support"],
      price: "Starting at $75"
    }
  ];

  const benefits = [
    "Maximum refund guarantee",
    "CPA certified professionals", 
    "Electronic filing included",
    "Year-round support",
    "Audit protection available",
    "Multilingual service"
  ];

  const documents = [
    "T4 slips (employment income)",
    "T4A slips (pension, EI benefits)",
    "T5 slips (investment income)", 
    "RRSP contribution receipts",
    "Medical expense receipts",
    "Charitable donation receipts",
    "Tuition certificates (T2202)",
    "Childcare expense receipts"
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Compact Header */}
      <section className="bg-gradient-to-r from-blue-700 to-green-600 py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Personal Tax Returns
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Professional T1 tax preparation with maximum deductions and credits for Canadian taxpayers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-blue-700 hover:bg-gray-100 px-8 py-3 rounded-full font-semibold transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105 hover:shadow-xl"
              >
                Get Quote
                <FaArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="tel:+16474509235"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-700 px-8 py-3 rounded-full font-semibold transition-all duration-300 flex items-center justify-center gap-2"
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
              Our Individual Tax Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive tax preparation services for all types of personal tax situations
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-700 flex-shrink-0">
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
                      <span className="text-lg font-bold text-blue-700">{service.price}</span>
                      <Link
                        to="/contact"
                        className="bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded-lg font-medium transition-colors text-sm"
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

      {/* Three Column Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* What's Included */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">What's Included</h3>
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

            {/* Required Documents */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Documents You'll Need</h3>
              <div className="bg-gray-50 rounded-xl p-6">
                <div className="space-y-3">
                  {documents.map((doc, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-5 h-5 border-2 border-blue-600 rounded flex items-center justify-center">
                        <FaCheck className="w-3 h-3 text-blue-600" />
                      </div>
                      <span className="text-gray-700 text-sm">{doc}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Tax Tips & Deadlines */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Important Tips & Deadlines </h3>
              <div className="bg-blue-50 rounded-xl p-6">
                <div className="space-y-4">
                  
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-orange-600 rounded-full flex items-center justify-center mt-1">
                      <FaShieldAlt className="w-3 h-3 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Keep Records</h4>
                      <p className="text-sm text-gray-700">Save receipts for 6 years</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-purple-600 rounded-full flex items-center justify-center mt-1">
                      <FaCheck className="w-3 h-3 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Direct Deposit</h4>
                      <p className="text-sm text-gray-700">Get refunds faster with CRA</p>
                    </div>

                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center mt-1">
                      <FaCalendarAlt className="w-3 h-3 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Filing Deadline</h4>
                      <p className="text-sm text-gray-700">April 30, 2025 for most taxpayers</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-green-600 rounded-full flex items-center justify-center mt-1">
                      <FaFileInvoiceDollar className="w-3 h-3 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">RRSP Contribution</h4>
                      <p className="text-sm text-gray-700">Deadline: March 1, 2025</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Simple CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-100 to-green-100">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to File Your Taxes?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Let our certified professionals handle your tax return while you focus on what matters most.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-green-700 hover:bg-green-800 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 flex items-center justify-center gap-2"
            >
              Start Your Return
            </Link>
            <Link
              to="/important-dates"
              className="border-2 border-green-700 text-green-700 hover:bg-green-800 hover:text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 flex items-center justify-center gap-2"
            >
              Tax Deadlines
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}