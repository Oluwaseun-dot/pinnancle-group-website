import React, { useEffect } from 'react';
import CinematicHero from '../components/CinematicHero';
import TrustCredibilityBar from '../components/TrustCredibilityBar';
import ClientMarquee from '../components/ClientMarquee';
import ServicesInteractive from '../components/ServicesInteractive';
import SeeAutomationInAction from '../components/SeeAutomationInAction';
import WhatIsTakingTooMuchTime from '../components/WhatIsTakingTooMuchTime';
import WhatCanWeAutomateTool from '../components/WhatCanWeAutomateTool';
import AutomationAssessment from '../components/AutomationAssessment';
import RoiTimeSavedCalculator from '../components/RoiTimeSavedCalculator';
import IndustriesInteractive from '../components/IndustriesInteractive';
import PlatformMarquee from '../components/PlatformMarquee';
import SelectedWork from '../components/SelectedWork';
import CinematicVideoSection from '../components/CinematicVideoSection';
import OurStorySection from '../components/OurStorySection';
import TechnologyEcosystem from '../components/TechnologyEcosystem';
import GlobalReach from '../components/GlobalReach';
import TeamSection from '../components/TeamSection';
import TestimonialsSection from '../components/TestimonialsSection';
import FaqAccordion from '../components/FaqAccordion';
import FinalCTASection from '../components/FinalCTASection';
import ErrorBoundary from '../components/ErrorBoundary';

export default function HomePage() {
  useEffect(() => {
    document.title = 'Pinnancle Group | AI Automation & Digital Systems Agency';
  }, []);

  return (
    <div className="relative bg-brand-black text-brand-offWhite overflow-x-hidden">
      {/* 01. Cinematic Video Hero */}
      <ErrorBoundary title="Hero Section">
        <CinematicHero />
      </ErrorBoundary>

      {/* 02. Statistics Bar (50+ / 100+ / 4.9 / 2023 / 7 / Worldwide) */}
      <ErrorBoundary title="Credibility Statistics">
        <TrustCredibilityBar />
      </ErrorBoundary>

      {/* 03. Client Logos Marquee */}
      <ErrorBoundary title="Client Logos">
        <ClientMarquee />
      </ErrorBoundary>

      {/* 04. What We Do (The 6 Services with Alternating Layouts) */}
      <ErrorBoundary title="Core Services">
        <ServicesInteractive />
      </ErrorBoundary>

      {/* 05. See Automation in Action (Major Interactive Product Demo) */}
      <ErrorBoundary title="Live Automation Demo">
        <SeeAutomationInAction />
      </ErrorBoundary>

      {/* 06. "What Is Taking Too Much Time?" Interactive Diagnosis */}
      <ErrorBoundary title="Operational Diagnosis">
        <WhatIsTakingTooMuchTime />
      </ErrorBoundary>

      {/* 06B. "What Can We Automate?" Interactive Tool */}
      <ErrorBoundary title="What Can We Automate Tool">
        <WhatCanWeAutomateTool />
      </ErrorBoundary>

      {/* 06C. AI Automation Assessment */}
      <ErrorBoundary title="Automation Assessment">
        <AutomationAssessment />
      </ErrorBoundary>

      {/* 06D. ROI & Time-Saved Calculator */}
      <ErrorBoundary title="ROI Calculator">
        <RoiTimeSavedCalculator />
      </ErrorBoundary>

      {/* 07. Industries (We Build For Different Types of Businesses) */}
      <ErrorBoundary title="Industry Solutions">
        <IndustriesInteractive />
      </ErrorBoundary>

      {/* 07B. Platform & Technology Marquee (Tools & Platforms We Work With) */}
      <ErrorBoundary title="Tools & Platforms Marquee">
        <PlatformMarquee />
      </ErrorBoundary>

      {/* 08. Selected Work (Real Systems. Real Businesses.) */}
      <ErrorBoundary title="Selected Work">
        <SelectedWork />
      </ErrorBoundary>

      {/* 08. Cinematic Video Feature */}
      <ErrorBoundary title="System Overview Video">
        <CinematicVideoSection />
      </ErrorBoundary>

      {/* 09. Our Story (We Started With Three People) */}
      <ErrorBoundary title="Our Story">
        <OurStorySection />
      </ErrorBoundary>

      {/* 10. Technology (We Work With The Tools That Run Modern Businesses) */}
      <ErrorBoundary title="Technology Ecosystem">
        <TechnologyEcosystem />
      </ErrorBoundary>

      {/* 11. Global Presence (UK. Nigeria. Worldwide.) */}
      <ErrorBoundary title="Global Reach">
        <GlobalReach />
      </ErrorBoundary>

      {/* 12. Meet The Team (The 7 Specialists) */}
      <ErrorBoundary title="Team Section">
        <TeamSection />
      </ErrorBoundary>

      {/* 13. Client Testimonials */}
      <ErrorBoundary title="Client Reviews">
        <TestimonialsSection />
      </ErrorBoundary>

      {/* 14. FAQ (Questions, Answered.) */}
      <ErrorBoundary title="FAQ Section">
        <FaqAccordion />
      </ErrorBoundary>

      {/* 15. Final CTA: Ready To Build A Better System? */}
      <ErrorBoundary title="Final Call to Action">
        <FinalCTASection />
      </ErrorBoundary>
    </div>
  );
}
