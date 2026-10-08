import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import ScrollToTop from './components/ScrollToTop';
import ScrollProgressBar from './components/ScrollProgressBar';
import SeoRouteManager from './components/SeoRouteManager';
import ErrorBoundary from './components/ErrorBoundary';
import ConsultationActivityToast from './components/ConsultationActivityToast';
import AiSalesAssistant from './components/AiSalesAssistant';

// Direct import for instant initial landing load
import HomePage from './pages/HomePage';

// Code-split subpages for optimal bundle performance
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const IndustriesPage = lazy(() => import('./pages/IndustriesPage'));
const WorkPage = lazy(() => import('./pages/WorkPage'));
const CaseStudyPage = lazy(() => import('./pages/CaseStudyPage'));
const TeamPage = lazy(() => import('./pages/TeamPage'));
const TeamProfilePage = lazy(() => import('./pages/TeamProfilePage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const InsightsPage = lazy(() => import('./pages/InsightsPage'));
const BookPage = lazy(() => import('./pages/BookPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));

// Lightweight route transition fallback
const RouteFallback = () => (
  <div className="min-h-[60vh] flex items-center justify-center bg-brand-black">
    <div className="w-6 h-6 border-2 border-brand-border border-t-brand-lime rounded-full animate-spin" />
  </div>
);

export default function App() {
  return (
    <Router>
      <div className="relative min-h-screen bg-brand-black text-brand-offWhite selection:bg-brand-lime selection:text-black flex flex-col justify-between">
        {/* Dynamic SEO metadata manager */}
        <SeoRouteManager />

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

        {/* Main Content Area protected by ErrorBoundary & Suspense */}
        <main className="flex-grow">
          <ErrorBoundary title="Page Content">
            <Suspense fallback={<RouteFallback />}>
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
            </Suspense>
          </ErrorBoundary>
        </main>

        {/* Real Consultation Activity Toast */}
        <ConsultationActivityToast />

        {/* Global Website AI Sales Assistant */}
        <AiSalesAssistant />

        {/* Global editorial footer */}
        <Footer />
      </div>
    </Router>
  );
}
