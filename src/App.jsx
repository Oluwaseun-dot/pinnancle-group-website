import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import ScrollToTop from './components/ScrollToTop';
import ScrollProgressBar from './components/ScrollProgressBar';
import BackToTopButton from './components/BackToTopButton';
import ErrorBoundary from './components/ErrorBoundary';

import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import IndustriesPage from './pages/IndustriesPage';
import WorkPage from './pages/WorkPage';
import CaseStudyPage from './pages/CaseStudyPage';
import TeamPage from './pages/TeamPage';
import TeamProfilePage from './pages/TeamProfilePage';
import AboutPage from './pages/AboutPage';
import InsightsPage from './pages/InsightsPage';
import BookPage from './pages/BookPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  return (
    <Router>
      <div className="relative min-h-screen bg-brand-black text-brand-offWhite selection:bg-brand-lime selection:text-black flex flex-col justify-between">
        {/* Sleek top-edge scroll depth indicator */}
        <ScrollProgressBar />

        {/* Desktop-only magnetic custom cursor */}
        <CustomCursor />

        {/* Floating smooth back-to-top controller */}
        <BackToTopButton />

        {/* Route scroll reset */}
        <ScrollToTop />

        {/* Global sticky navigation */}
        <Navbar />

        {/* Main Content Area protected by ErrorBoundary */}
        <main className="flex-grow">
          <ErrorBoundary title="Page Content">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/solutions" element={<IndustriesPage />} />
              <Route path="/industries" element={<IndustriesPage />} />
              <Route path="/work" element={<WorkPage />} />
              <Route path="/work/:slug" element={<CaseStudyPage />} />
              <Route path="/portfolio" element={<WorkPage />} />
              <Route path="/portfolio/:slug" element={<CaseStudyPage />} />
              <Route path="/case-studies" element={<WorkPage />} />
              <Route path="/case-studies/:slug" element={<CaseStudyPage />} />
              <Route path="/case-study/:slug" element={<CaseStudyPage />} />
              <Route path="/team" element={<TeamPage />} />
              <Route path="/team/:slug" element={<TeamProfilePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/insights" element={<InsightsPage />} />
              <Route path="/book" element={<BookPage />} />
              <Route path="/contact" element={<ContactPage />} />
              {/* Catch-all redirect to Home */}
              <Route path="*" element={<HomePage />} />
            </Routes>
          </ErrorBoundary>
        </main>

        {/* Global editorial footer */}
        <Footer />
      </div>
    </Router>
  );
}
