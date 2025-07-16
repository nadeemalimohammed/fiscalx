// src/App.jsx
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home';
import { IndividualTax } from './pages/IndividualTax';
import { CorporateTax } from './pages/CorporateTax';
import { BusinessServices } from './pages/BusinessServices';
import { ImportantDates } from './pages/ImportantDates';
import { Contact } from './pages/Contact';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/individual-tax" element={<IndividualTax />} />
            <Route path="/corporate-tax" element={<CorporateTax />} />
            <Route path="/business-services" element={<BusinessServices />} />
            <Route path="/important-dates" element={<ImportantDates />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </Router>
  )
}

export default App
