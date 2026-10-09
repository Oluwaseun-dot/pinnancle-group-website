import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const routeSeoMap = {
  '/': {
    title: 'Pinnancle Group | AI Automation & Digital Systems Agency',
    description: 'We Build AI Systems That Help Businesses Grow. Custom AI automations, intelligent CRM workflows, and autonomous agents for fast-growing companies in the UK, Nigeria, and worldwide.'
  },
  '/services': {
    title: 'Core Practice Areas & Enterprise Services | Pinnancle Group',
    description: 'Bespoke AI automation, multi-channel CRM pipelines, resilient business workflows, high-performance web platforms, and commercial tender support.'
  },
  '/solutions': {
    title: 'Industry Solutions & Automations | Pinnancle Group',
    description: 'Engineered AI systems and operations workflows tailored for Real Estate, Healthcare, Automotive, HVAC, Ecommerce, and Professional Services.'
  },
  '/industries': {
    title: 'Industry Solutions & Automations | Pinnancle Group',
    description: 'Engineered AI systems and operations workflows tailored for Real Estate, Healthcare, Automotive, HVAC, Ecommerce, and Professional Services.'
  },
  '/work': {
    title: 'Selected Work & Case Studies | Pinnancle Group',
    description: 'Production systems, autonomous triage pipelines, and measurable commercial results delivered for clients worldwide.'
  },
  '/team': {
    title: 'The Specialists & Founders | Pinnancle Group',
    description: 'Meet the seven multidisciplinary practitioners and systems engineers powering Pinnancle Group in the UK and Nigeria.'
  },
  '/about': {
    title: 'Our Story & Heritage | Pinnancle Group',
    description: 'Founded by three systems pioneers in 2023. Discover how Pinnancle Group evolved from web and tender advisory into an international AI agency.'
  },
  '/insights': {
    title: 'Operational Insights & Agency Perspectives | Pinnancle Group',
    description: 'Actionable perspectives on AI automation, CRM architecture, operational leverage, and digital systems.'
  },
  '/book': {
    title: 'Book a Technical Consultation | Pinnancle Group',
    description: 'Schedule a confidential operational diagnostic session. We audit your manual bottlenecks and design the exact automation architecture to deploy.'
  },
  '/contact': {
    title: 'Contact Commercial Desk | Pinnancle Group',
    description: 'Get in touch with our leadership and technical teams in London and Lagos. Direct email, WhatsApp, and consultation inquiry.'
  },
  '/automation-demo': {
    title: 'Interactive AI Automation Demos | Pinnancle Group',
    description: 'Experience simulated live customer conversations across multiple industries showing how AI qualifies leads, books appointments, and updates CRMs automatically.'
  },
  '/automation-assessment': {
    title: 'AI Automation Assessment & ROI Calculator | Pinnancle Group',
    description: 'Evaluate your business operations with our 7-question readiness diagnostic and calculate the exact hours and labor costs your team could save.'
  }
};

export default function SeoRouteManager() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Match exact route or base route
    let currentSeo = routeSeoMap[pathname];

    if (!currentSeo) {
      if (pathname.startsWith('/work/')) {
        currentSeo = {
          title: 'Case Study | Pinnancle Group',
          description: 'Technical walkthrough of production AI and automation architecture engineered by Pinnancle Group.'
        };
      } else if (pathname.startsWith('/team/')) {
        currentSeo = {
          title: 'Specialist Profile | Pinnancle Group',
          description: 'Meet the system engineers and creative directors at Pinnancle Group.'
        };
      } else {
        currentSeo = routeSeoMap['/'];
      }
    }

    if (currentSeo) {
      document.title = currentSeo.title;

      // Update meta description
      let metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute('content', currentSeo.description);
      }

      // Update og:title & og:description
      let ogTitle = document.querySelector('meta[property="og:title"]');
      if (ogTitle) ogTitle.setAttribute('content', currentSeo.title);

      let ogDesc = document.querySelector('meta[property="og:description"]');
      if (ogDesc) ogDesc.setAttribute('content', currentSeo.description);

      // Update canonical link
      let canonicalLink = document.querySelector('link[rel="canonical"]');
      if (canonicalLink) {
        canonicalLink.setAttribute('href', `https://pinnanclegroup.com${pathname === '/' ? '' : pathname}`);
      }
    }
  }, [pathname]);

  return null;
}
