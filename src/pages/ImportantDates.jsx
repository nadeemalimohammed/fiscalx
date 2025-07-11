import {FaExclamationTriangle, FaBell, FaFileInvoiceDollar, FaBuilding, FaUsers, FaArrowRight, FaCheck, FaClock, FaPhoneAlt, FaDownload } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

export function ImportantDates() {
  const [currentDate, setCurrentDate] = useState(new Date());

  // Update current date every minute
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDate(new Date());
    }, 60000); // Update every minute

    return () => clearInterval(timer);
  }, []);

  // Helper function to calculate days difference
  const calculateDaysDifference = (targetDate) => {
    const target = new Date(targetDate);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    target.setHours(0, 0, 0, 0);
    
    const diffTime = target - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    return diffDays;
  };

  // Helper function to format days difference
  const formatDaysText = (days) => {
    if (days > 0) {
      return `${days} days left`;
    } else if (days === 0) {
      return "Today!";
    } else {
      return `${Math.abs(days)} days ago`;
    }
  };

  // Helper function to get status color
  const getStatusColor = (days) => {
    if (days > 30) return "bg-green-100 text-green-700";
    if (days > 7) return "bg-yellow-100 text-yellow-700";
    if (days >= 0) return "bg-red-100 text-red-700";
    return "bg-gray-100 text-gray-700";
  };

  const personalTaxDates = [
    {
      date: "2025-04-30",
      displayDate: "April 30, 2025",
      title: "Individual Tax Filing Deadline",
      description: "Deadline to file T1 personal income tax returns for most Canadians (2024 tax year)",
      type: "filing",
      urgent: false
    },
    {
      date: "2025-04-30",
      displayDate: "April 30, 2025", 
      title: "Tax Payment Deadline",
      description: "Final deadline to pay any taxes owed for 2024 to avoid interest charges",
      type: "payment",
      urgent: false
    },
    {
      date: "2025-06-16",
      displayDate: "June 16, 2025",
      title: "Self-Employed Filing Deadline", 
      description: "Extended filing deadline for self-employed individuals and their spouses (2024 tax year)",
      type: "filing",
      urgent: false
    },
    {
      date: "2025-03-03",
      displayDate: "March 3, 2025",
      title: "RRSP Contribution Deadline",
      description: "Last day to contribute to RRSP for 2024 tax year deduction",
      type: "contribution",
      urgent: true
    }
  ];

  const businessTaxDates = [
    {
      date: "2025-03-31",
      displayDate: "March 31, 2025",
      title: "Corporate Tax Filing (Dec year-end)",
      description: "T2 corporate tax return filing deadline for December 2024 year-end companies",
      type: "filing",
      urgent: false
    },
    {
      date: "2025-06-30",
      displayDate: "June 30, 2025",
      title: "Corporate Tax Payment Deadline",
      description: "Final tax payment deadline for most corporations (2024 tax year)",
      type: "payment", 
      urgent: false
    }
  ];

  const upcomingDeadlines = [
    {
      date: "2025-01-31",
      displayDate: "Jan 31",
      title: "HST/GST Returns (Annual)",
      description: "Annual HST/GST filing deadline for eligible businesses"
    },
    {
      date: "2025-02-28", 
      displayDate: "Feb 28",
      title: "T4 Slips to Employees",
      description: "Employers must provide T4 slips to employees (2024 tax year)"
    },
    {
      date: "2025-02-28",
      displayDate: "Feb 28",
      title: "T4 Summary to CRA",
      description: "File T4 Summary with CRA (2024 tax year)"
    },
    {
      date: "2025-03-03",
      displayDate: "Mar 3",
      title: "RRSP Deadline",
      description: "Last day for 2024 RRSP contributions"
    }
  ];

  const getTypeColor = (type) => {
    switch(type) {
      case 'filing': return 'bg-blue-100 text-blue-800';
      case 'payment': return 'bg-red-100 text-red-800'; 
      case 'contribution': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getTypeIcon = (type) => {
    switch(type) {
      case 'filing': return <FaFileInvoiceDollar className="w-4 h-4" />;
      case 'payment': return <FaExclamationTriangle className="w-4 h-4" />;
      case 'contribution': return <FaCheck className="w-4 h-4" />;
      default: return <FaBell className="w-4 h-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-orange-700 to-red-600 py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Important Tax Dates
            </h1>
            <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
              Never miss a deadline again. Stay on top of all your Canadian tax obligations with our comprehensive 2025 calendar.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-orange-700 hover:bg-gray-100 px-8 py-3 rounded-full font-semibold transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105 hover:shadow-xl"
              >
                Set Reminders
                <FaBell className="w-4 h-4" />
              </Link>
              <a
                href="tel:+16474509235"
                className="border-2 border-white text-white hover:bg-white hover:text-orange-700 px-8 py-3 rounded-full font-semibold transition-all duration-300 flex items-center justify-center gap-2"
              >
                <FaPhoneAlt className="w-4 h-4" />
                (647) 450-9235
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Deadlines Alert */}
      <section className="py-12 bg-yellow-50 border-b border-yellow-200">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center flex items-center justify-center gap-3">
              <FaExclamationTriangle className="text-yellow-600" />
              Upcoming Deadlines - 2025
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {upcomingDeadlines.map((deadline, index) => {
                const daysLeft = calculateDaysDifference(deadline.date);
                return (
                  <div key={index} className="bg-white p-4 rounded-xl shadow-sm border border-yellow-200">
                    <div className="text-center">
                      <div className="text-lg font-bold text-orange-700 mb-1">{deadline.displayDate}</div>
                      <h3 className="font-semibold text-gray-900 mb-2">{deadline.title}</h3>
                      <p className="text-sm text-gray-600 mb-3">{deadline.description}</p>
                      <div className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(daysLeft)}`}>
                        <FaClock className="w-3 h-3" />
                        {formatDaysText(daysLeft)}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Personal Tax Dates */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-3">
                <FaFileInvoiceDollar className="text-blue-600" />
                Personal Tax Deadlines 2025
              </h2>
              <p className="text-lg text-gray-600">Important dates for individual taxpayers filing 2024 tax returns</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {personalTaxDates.map((date, index) => {
                const daysLeft = calculateDaysDifference(date.date);
                return (
                  <div key={index} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600">
                          {getTypeIcon(date.type)}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900">{date.title}</h3>
                          <p className="text-blue-600 font-semibold">{date.displayDate}</p>
                        </div>
                      </div>
                      {date.urgent && (
                        <span className="px-2 py-1 bg-red-100 text-red-700 rounded-full text-xs font-medium">
                          Urgent
                        </span>
                      )}
                    </div>
                    <p className="text-gray-600 mb-4">{date.description}</p>
                    <div className="flex items-center justify-between">
                      <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ${getTypeColor(date.type)}`}>
                        {date.type.charAt(0).toUpperCase() + date.type.slice(1)} Deadline
                      </span>
                      <div className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(daysLeft)}`}>
                        <FaClock className="w-3 h-3" />
                        {formatDaysText(daysLeft)}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Business Tax Dates */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-3">
                <FaBuilding className="text-green-600" />
                Business Tax Deadlines 2025
              </h2>
              <p className="text-lg text-gray-600">Critical dates for business owners and corporations filing 2024 returns</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {businessTaxDates.map((date, index) => {
                const daysLeft = calculateDaysDifference(date.date);
                return (
                  <div key={index} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                    <div className="flex items-start gap-3 mb-4">
                      <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-green-600">
                        {getTypeIcon(date.type)}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{date.title}</h3>
                        <p className="text-green-600 font-semibold">{date.displayDate}</p>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4">{date.description}</p>
                    <div className="flex items-center justify-between">
                      <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ${getTypeColor(date.type)}`}>
                        {date.type.charAt(0).toUpperCase() + date.type.slice(1)} Deadline
                      </span>
                      <div className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(daysLeft)}`}>
                        <FaClock className="w-3 h-3" />
                        {formatDaysText(daysLeft)}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-20 bg-gradient-to-r from-orange-100 to-red-100 ">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Don't Miss Important Deadlines
            </h2>
            <p className="text-lg text-gray-600 mb-10">
              Let our experienced team handle all your tax deadlines and planning so you never have to worry about penalties or missed opportunities.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mx-auto mb-4">
                  <FaBell className="w-8 h-8" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Deadline Reminders</h3>
                <p className="text-sm text-gray-600">We'll remind you of all important dates</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center text-green-600 mx-auto mb-4">
                  <FaUsers className="w-8 h-8" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Expert Support</h3>
                <p className="text-sm text-gray-600">Professional guidance throughout the year</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center text-orange-600 mx-auto mb-4">
                  <FaDownload className="w-8 h-8" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Tax Calendar</h3>
                <p className="text-sm text-gray-600">Download our complete tax calendar</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-orange-700 hover:bg-orange-800 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 flex items-center justify-center gap-2"
              >
                Schedule Planning Session
                <FaArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/individual-tax"
                className="border-2 border-orange-700 text-orange-700 hover:bg-orange-700 hover:text-white px-8 py-3 rounded-full font-semibold transition-all duration-300"
              >
                View Tax Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}