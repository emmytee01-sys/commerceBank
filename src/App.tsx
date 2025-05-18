import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import FeatureSection from './components/FeatureSection/FeatureSection';
import ProductCard from './components/ProductCard/ProductCard';
import LoginWidget from './components/LoginWidget/LoginWidget';
import PromoLinks from './components/PromoLinks/PromoLinks';
import NewsSection from './components/NewsSection/NewsSection';
import Footer from './components/Footer/Footer';
import LoginPage from './components/LoginPage/LoginPage';
import Dashboard from './components/Dashboard/Dashboard';
import OpenAccountPage from './components/OpenAccountPage/OpenAccountPage';
import EnrollPage from './components/EnrollPage/EnrollPage';
import AdminDashboard from './components/AdminDashboard/AdminDashboard';
import { CreditCard, Shield, DollarSign, Briefcase } from 'lucide-react';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Main Page */}
        <Route
          path="/"
          element={
            <div className="min-h-screen bg-gray-50">
              <Header />
              <Hero
                title="Bank with confidence. Live with ease."
                subtitle="Find the right financial solutions to help you achieve your goals."
                backgroundImage="https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              />
              <section className="py-12 bg-white">
                <div className="container mx-auto px-4">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                      <h2 className="text-3xl font-bold text-blue-800 mb-8">
                        Banking Solutions for Every Need
                      </h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <ProductCard
                          title="Free Checking"
                          description="No minimum balance and no monthly fees. Access your money with ease."
                          icon={<CreditCard size={28} />}
                          linkText="Learn More"
                          linkUrl="#checking"
                        />
                        <ProductCard
                          title="Online & Mobile Banking"
                          description="Bank anytime, anywhere with our secure digital banking platforms."
                          icon={<Shield size={28} />}
                          linkText="Get Started"
                          linkUrl="#mobile-banking"
                        />
                        <ProductCard
                          title="Home Equity Loans"
                          description="Tap into your home's equity with competitive rates and flexible terms."
                          icon={<DollarSign size={28} />}
                          linkText="Explore Options"
                          linkUrl="#home-equity"
                        />
                        <ProductCard
                          title="Business Banking"
                          description="Solutions designed to help your business grow and succeed."
                          icon={<Briefcase size={28} />}
                          linkText="See Business Solutions"
                          linkUrl="#business"
                        />
                      </div>
                    </div>
                    <div>
                      <LoginWidget />
                    </div>
                  </div>
                </div>
              </section>
              <FeatureSection
                title="Explore Our Services"
                subtitle="Find the right financial solution for your unique needs"
                bgColor="bg-gray-50"
              >
                <PromoLinks />
              </FeatureSection>
              <FeatureSection
                title="News & Financial Resources"
                subtitle="Stay informed with the latest updates and financial tips"
              >
                <NewsSection />
              </FeatureSection>
              <section className="bg-blue-800 py-16">
                <div className="container mx-auto px-4 text-center">
                  <h2 className="text-3xl font-bold text-white mb-4">Ready to get started?</h2>
                  <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                    Whether you're looking for a new checking account, mortgage, or investment advice,
                    we're here to help you find the right solution.
                  </p>
                  <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                    <a
                      href="/open-account"
                      className="bg-white text-blue-800 px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors"
                    >
                      Open an Account
                    </a>
                    <button className="bg-red-600 text-white px-6 py-3 rounded-md font-medium hover:bg-red-700 transition-colors">
                      Contact Us
                    </button>
                  </div>
                </div>
              </section>
              <Footer />
            </div>
          }
        />
        
        {/* Open Account Page */}
        <Route path="/open-account" element={<OpenAccountPage />} />
        <Route path="/" element={<OpenAccountPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard/*" element={<Dashboard />} />
        <Route path="/enroll" element={<EnrollPage />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
};

export default App;