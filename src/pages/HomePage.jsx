import React, { useEffect } from 'react';
import CinematicHero from '../components/CinematicHero';
import TrustCredibilityBar from '../components/TrustCredibilityBar';
import PlatformMarquee from '../components/PlatformMarquee';
import ServicesOverview from '../components/ServicesOverview';
import SelectedWork from '../components/SelectedWork';
import CinematicVideoSection from '../components/CinematicVideoSection';
import WhyChooseUsSection from '../components/WhyChooseUsSection';
import BusinessGrowthMessageSection from '../components/BusinessGrowthMessageSection';
import SeeAutomationInAction from '../components/SeeAutomationInAction';
import RoiTimeSavedCalculator from '../components/RoiTimeSavedCalculator';
import TeamSection from '../components/TeamSection';
import FinalCTASection from '../components/FinalCTASection';
import ErrorBoundary from '../components/ErrorBoundary';

export default function HomePage() {
  useEffect(() => {
    document.title = 'Pinnacle Group | AI Automation & Digital Systems Agency';
  }, []);

  return (
    <div className="relative bg-brand-black text-brand-offWhite overflow-x-hidden">
      {/* 01. Existing Hero Section (Cinematic Atmosphere, Clear Value Proposition, Direct CTAs) */}
      <ErrorBoundary title="Hero Section">
        <CinematicHero />
      </ErrorBoundary>

      {/* 02. Trust Statistics Bar (50+ Businesses, 100+ Systems, 4.9/5 Rating) */}
      <ErrorBoundary title="Credibility Statistics">
        <TrustCredibilityBar />
      </ErrorBoundary>

      {/* 03. Restored Technology & Tools Section (Platforms & Software Marquee) */}
      <ErrorBoundary title="Tools & Platforms Marquee">
        <PlatformMarquee />
      </ErrorBoundary>

      {/* 04. Improved “What We Do” Services Section with Authentic Images & Pricing Link */}
      <ErrorBoundary title="Core Services Overview">
        <ServicesOverview />
      </ErrorBoundary>

      {/* 05. Selected Projects & Authentic Client Case Studies */}
      <ErrorBoundary title="Selected Work">
        <SelectedWork />
      </ErrorBoundary>

      {/* 06. Restored Homepage Video Section (Framed Container, Audio Handling, Clear Heading) */}
      <ErrorBoundary title="Agency Presentation Video">
        <CinematicVideoSection />
      </ErrorBoundary>

      {/* 07. “Why Choose Pinnacle Group?” Section (4 Clear Operational Standards) */}
      <ErrorBoundary title="Why Choose Pinnacle Group">
        <WhyChooseUsSection />
      </ErrorBoundary>

      {/* 08. Business Growth & Investment Message (“Your Business Deserves More Than Just Hard Work”) */}
      <ErrorBoundary title="Business Growth Message">
        <BusinessGrowthMessageSection />
      </ErrorBoundary>

      {/* 08B. Interactive Live Automation Simulator */}
      <ErrorBoundary title="Live Automation Demo">
        <SeeAutomationInAction />
      </ErrorBoundary>

      {/* 09. Restored Business Automation Calculator (“Discover What Your Business Could Automate”) */}
      <ErrorBoundary title="Automation Calculator">
        <RoiTimeSavedCalculator />
      </ErrorBoundary>

      {/* 10. Restored Concise Team Section (7 Multidisciplinary Specialists) */}
      <ErrorBoundary title="Specialist Team">
        <TeamSection />
      </ErrorBoundary>

      {/* 11. Final Consultation Call to Action */}
      <ErrorBoundary title="Final Call to Action">
        <FinalCTASection />
      </ErrorBoundary>
    </div>
  );
}
