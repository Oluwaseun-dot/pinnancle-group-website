import React, { useEffect } from 'react';
import CinematicHero from '../components/CinematicHero';
import TrustCredibilityBar from '../components/TrustCredibilityBar';
import PlatformMarquee from '../components/PlatformMarquee';
import BusinessGrowthMessageSection from '../components/BusinessGrowthMessageSection';
import ServicesOverview from '../components/ServicesOverview';
import InteractivePhoneExperience from '../components/InteractivePhoneExperience';
import SeeAutomationInAction from '../components/SeeAutomationInAction';
import CinematicVideoSection from '../components/CinematicVideoSection';
import SelectedWork from '../components/SelectedWork';
import TestimonialsSection from '../components/TestimonialsSection';
import WhyChooseUsSection from '../components/WhyChooseUsSection';
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
      {/* 01. Hook & Positioning: Hero Section with Direct Consultation CTAs */}
      <ErrorBoundary title="Hero Section">
        <CinematicHero />
      </ErrorBoundary>

      {/* 02. Instant Proof of Scale: 50+ Businesses, 100+ Systems, 4.9/5 Rating */}
      <ErrorBoundary title="Credibility Statistics">
        <TrustCredibilityBar />
      </ErrorBoundary>

      {/* 03. Technology Stack & Software Compatibility Marquee */}
      <ErrorBoundary title="Tools & Platforms Marquee">
        <PlatformMarquee />
      </ErrorBoundary>

      {/* 04. The Core Bottleneck: “Your Business Deserves More Than Just Hard Work” */}
      <ErrorBoundary title="Business Growth Message">
        <BusinessGrowthMessageSection />
      </ErrorBoundary>

      {/* 05. The Solution: 6 Practice Areas with Authentic Photos & Pricing Matrix Link */}
      <ErrorBoundary title="Core Services Overview">
        <ServicesOverview />
      </ErrorBoundary>

      {/* 06. Pocket Telemetry: Interactive Smartphone Automation Experience */}
      <ErrorBoundary title="Interactive Smartphone Experience">
        <InteractivePhoneExperience />
      </ErrorBoundary>

      {/* 07. Demonstration: Interactive Live Automation Simulator */}
      <ErrorBoundary title="Live Automation Demo">
        <SeeAutomationInAction />
      </ErrorBoundary>

      {/* 07. Visual Immersion: Agency Film & Technology Philosophy */}
      <ErrorBoundary title="Agency Presentation Video">
        <CinematicVideoSection />
      </ErrorBoundary>

      {/* 08. Deliverable Proof: Selected Client Case Studies */}
      <ErrorBoundary title="Selected Work">
        <SelectedWork />
      </ErrorBoundary>

      {/* 09. Social Proof & Client Validation: “Trusted by Businesses Ready to Grow” */}
      <ErrorBoundary title="Client Testimonials">
        <TestimonialsSection />
      </ErrorBoundary>

      {/* 10. Foundational Principles: Why Choose Pinnacle Group */}
      <ErrorBoundary title="Why Choose Pinnacle Group">
        <WhyChooseUsSection />
      </ErrorBoundary>

      {/* 11. Self-Diagnosis: Interactive Operational Hours-Reclaimed Calculator */}
      <ErrorBoundary title="Automation Calculator">
        <RoiTimeSavedCalculator />
      </ErrorBoundary>

      {/* 12. Human Expertise: The 7 In-House Senior Specialists */}
      <ErrorBoundary title="Specialist Team">
        <TeamSection />
      </ErrorBoundary>

      {/* 13. Direct Action: Final Consultation & Discovery Call Booking */}
      <ErrorBoundary title="Final Call to Action">
        <FinalCTASection />
      </ErrorBoundary>
    </div>
  );
}
