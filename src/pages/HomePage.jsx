import React, { useEffect } from 'react';
import CinematicHero from '../components/CinematicHero';
import TrustCredibilityBar from '../components/TrustCredibilityBar';
import ServicesOverview from '../components/ServicesOverview';
import SeeAutomationInAction from '../components/SeeAutomationInAction';
import PlatformMarquee from '../components/PlatformMarquee';
import SelectedWork from '../components/SelectedWork';
import OurStorySection from '../components/OurStorySection';
import FinalCTASection from '../components/FinalCTASection';
import ErrorBoundary from '../components/ErrorBoundary';

export default function HomePage() {
  useEffect(() => {
    document.title = 'Pinnancle Group | AI Automation & Digital Systems Agency';
  }, []);

  return (
    <div className="relative bg-brand-black text-brand-offWhite overflow-x-hidden">
      {/* 01. Hero Section (Cinematic Video, Clear Value Proposition, Direct CTAs) */}
      <ErrorBoundary title="Hero Section">
        <CinematicHero />
      </ErrorBoundary>

      {/* 02. Trust Statistics Bar (50+ Businesses, 100+ Systems, 4.9/5 Rating) */}
      <ErrorBoundary title="Credibility Statistics">
        <TrustCredibilityBar />
      </ErrorBoundary>

      {/* 03. Services Overview (Concise 6 Practice Areas with Deep Links to /services) */}
      <ErrorBoundary title="Core Services Overview">
        <ServicesOverview />
      </ErrorBoundary>

      {/* 04. Interactive “See Automation in Action” Live Simulator */}
      <ErrorBoundary title="Live Automation Demo">
        <SeeAutomationInAction />
      </ErrorBoundary>

      {/* 05. Platforms & Tools Marquee (20 Curated Software & Automation Tools) */}
      <ErrorBoundary title="Tools & Platforms Marquee">
        <PlatformMarquee />
      </ErrorBoundary>

      {/* 06. Selected Work (Concise Case Studies Featuring the Best 3 Projects) */}
      <ErrorBoundary title="Selected Work">
        <SelectedWork />
      </ErrorBoundary>

      {/* 07. Company Story (From Three Founders to Seven Specialists) */}
      <ErrorBoundary title="Company Story">
        <OurStorySection />
      </ErrorBoundary>

      {/* 08. Final Call to Action (Direct Consultation Invitation) */}
      <ErrorBoundary title="Final Call to Action">
        <FinalCTASection />
      </ErrorBoundary>
    </div>
  );
}
