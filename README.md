# FiscalX Professional Corporation Website

A modern, responsive website for FiscalX Professional Corporation - a Canadian tax services company specializing in individual tax returns, corporate tax services, and comprehensive business solutions.


## 📋 Table of Contents

- [Features](#features)
- [Technology Stack](#technology-stack)
- [Pages Overview](#pages-overview)
- [Installation](#installation)
- [Available Scripts](#available-scripts)
- [Project Structure](#project-structure)
- [Key Components](#key-components)
- [Services Offered](#services-offered)
- [Contact Information](#contact-information)
- [Development](#development)
- [Deployment](#deployment)
- [Contributing](#contributing)

## ✨ Features

### 🎨 Design & UX
- **Modern, Professional Design** - Clean and trustworthy aesthetic for financial services
- **Fully Responsive** - Optimized for desktop, tablet, and mobile devices
- **Accessible Navigation** - Intuitive menu with clear service categorization
- **Interactive Elements** - Smooth hover effects and transitions
- **Color-Coded Sections** - Each service area has its own color scheme

### 📱 Responsive Layout
- Mobile-first responsive design
- Adaptive navigation with hamburger menu
- Optimized images and content for all screen sizes
- Touch-friendly interactive elements

### 🔧 Technical Features
- **React Router** - Single Page Application with smooth navigation
- **Component-Based Architecture** - Reusable and maintainable code
- **React Hooks** - Modern state management
- **Tailwind CSS** - Utility-first styling framework
- **React Icons** - Consistent iconography throughout

## 🛠️ Technology Stack

- **Frontend Framework**: React 18+
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **Icons**: React Icons (Font Awesome)
- **Build Tool**: Create React App
- **State Management**: React Hooks (useState, useEffect)
- **Development**: ES6+ JavaScript, JSX

## 📄 Pages Overview

### 🏠 Home Page (`/`)
- Hero section with call-to-action
- Services overview cards
- Company statistics and achievements
- Why choose us section
- Client testimonials area

### 👤 Individual Tax Services (`/individual-tax`)
- Personal tax return services
- T1 filing information
- RRSP optimization details
- Tax credits and deductions
- Pricing and packages

### 🏢 Corporate Tax Services (`/corporate-tax`)
- Business tax solutions
- T2 corporate returns
- HST/GST filing services
- Corporate compliance

### 🚀 Business Services (`/business-services`)
- New business registration
- Bookkeeping services
- Payroll management
- WSIB filing
- Business consulting

### 📅 Important Dates (`/important-dates`)
- **Live Tax Calendar** - Real-time countdown to deadlines
- Canadian tax deadlines for 2025
- Personal and business tax dates

### 📞 Contact Page (`/contact`)
- Multiple contact methods
- Contact form with service selection
- Google Maps integration
- Office hours and location
- Emergency contact options

## 🚀 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/fiscalx.git
   cd fiscalx
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm start
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

## 📜 Available Scripts

### `npm start`
Runs the app in development mode at [http://localhost:3000](http://localhost:3000)

### `npm test`
Launches the test runner in interactive watch mode

### `npm run build`
Builds the app for production to the `build` folder

### `npm run eject`
**Note: This is a one-way operation. Once you `eject`, you can't go back!**

## 📁 Project Structure

```
fiscalx-site/
├── public/
│   ├── index.html
│   ├── logo.png
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── IndividualTax.jsx
│   │   ├── CorporateTax.jsx
│   │   ├── BusinessServices.jsx
│   │   ├── ImportantDates.jsx
│   │   └── Contact.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
└── README.md
```

## 🔧 Key Components

### Navigation (`Navbar.jsx`)
- Responsive navigation bar
- Mobile hamburger menu
- Active page highlighting
- Company logo integration

### Footer (`Footer.jsx`)
- Contact information
- Service links
- Social media links
- Business hours
- Copyright information

### Pages
Each page component includes:
- Consistent header sections
- Service-specific content
- Call-to-action buttons
- Contact integration

## 🔄 Live Features

### Real-Time Tax Calendar
- Automatic date calculations
- Days remaining/passed indicators
- Color-coded urgency levels
- Monthly planning reminders

### Interactive Contact Form
- Service selection dropdown
- Form validation
- Success confirmation
- Professional styling

### Google Maps Integration
- Office location display
- Get directions functionality
- Responsive map embedding

## 📦 Deployment

### Build for Production
```bash
npm run build
```

### Deployment Options
- **Netlify**: Connect GitHub repository
- **Vercel**: Import project from Git
- **AWS S3**: Upload build folder
- **GitHub Pages**: Use gh-pages package

### Environment Variables
Create `.env` file for:
- Google Maps API key
- Contact form endpoints
- Analytics tracking IDs

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open Pull Request

## 📝 License

This project is proprietary software belonging to FiscalX Professional Corporation.

## 🆘 Support

For technical support or questions:
- Email: nadeemali.dev@gmail.com

---

**Built with ❤️ by Nadeem Ali Mohammed**
