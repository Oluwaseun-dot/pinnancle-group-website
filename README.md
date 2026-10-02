# Pinnancle Group — Premium AI Automation & Digital Systems Agency Website

A high-performance, bespoke agency website built for **Pinnancle Group**, operating between the United Kingdom and Nigeria, serving clients worldwide.

Built to feel like a **\$100,000+ custom digital agency platform**, combining architectural restraint, subtle 3D interactivity, and data-driven systems storytelling.

---

## ⚡ Quick Start

The website is currently compiled and running locally:
```bash
# In C:\Users\HP\.gemini\antigravity\scratch\pinnancle-group
npm run dev
```
Preview URL: **http://127.0.0.1:3000**

To build for production:
```bash
npm run build
npm run preview
```

---

## 🏛️ Brand & Positioning

- **Company**: Pinnancle Group
- **Core Positioning**: Helps businesses use AI, automation, and digital systems to work smarter, respond faster, reduce repetitive work, and scale their operations.
- **Primary Brand Message**: *"We Build Systems That Move Businesses Forward."*
- **Alternative Supporting Statement**: *"AI Automation. Intelligent Systems. Digital Growth."*
- **Brand Philosophy**: *"Technology should work for your business, not the other way around."*
- **Story Statement**: *"We started by helping businesses get online. Today, we help businesses work smarter."*
- **Global Footprint**: *"Built between the UK & Nigeria. Delivered worldwide."*

---

## 🎨 Visual Identity & Typography

- **Color Palette**:
  - Midnight / Deep Navy: `#070B14`, `#0B1120`, `#0F172A`
  - Rich Blue / Accent: `#1D4ED8`, `#2563EB`
  - Electric Sapphire / Highlight: `#38BDF8`
  - Subtle Silver & Slate: `#94A3B8`, `#64748B`, `#E2E8F0`
  - Soft White: `#F8FAFC`, `#FFFFFF`
- **Typography**: Plus Jakarta Sans (Editorial Display & Headings) and JetBrains Mono (Technical badges, timelines, data metrics).

---

## 🛠️ Architecture & Routes

| Route | Description |
|---|---|
| `/` | **Cinematic Homepage** with Hero 3D Three.js ecosystem, Trust metrics, Logo marquee, System Problem simulation, Interactive Services, How We Work 6-stage methodology, Cinematic video modal, 12 Industries interactive transformation, Selected Work, Our Story timeline, Technology Ecosystem, Global Reach UK/Nigeria map, 7 Specialists, Verified Testimonials, FAQ accordion, Booking CTA, and Editorial Footer. |
| `/services` | **Services Deep-Dive**: 5 major practice areas (AI Customer Experience, AI Sales Automation, AI Operations, AI Marketing, Custom AI Systems) with module inclusions and workflows. |
| `/solutions` / `/industries` | **Sector Solutions**: Interactive transformation cards for 12 distinct industries (Home Services, Real Estate, Healthcare, Legal, Accounting, Automotive, Ecommerce, Professional Services, Agencies, Education, Hospitality, Enterprise). |
| `/work` | **Selected Work & Portfolio**: Filterable case studies with category tags (AI Automation, CRM, Websites, Ecommerce, Business Automation, Creative Tech). |
| `/work/:slug` | **Dynamic Case Study**: Full narrative detailing Client Challenge, What Was Happening, The Opportunity, Technical Approach, System Architecture Blueprint, Sequential Workflow, Tech Stack, and Client Feedback. |
| `/team` | **The Collective (7 Specialists)**: Overview of the 7 multidisciplinary leaders and engineers. |
| `/team/:slug` | **Dynamic Editorial Specialist Profile**: Individual profile page for each specialist with bio, philosophy, core specialties, skills, project contributions, and personal contact CTA. |
| `/about` | **About & Philosophy**: Our Beginning, Our Evolution, Our Approach, The Vision. |
| `/insights` | **Practical Editorial**: Practical business automation articles with modal reader. |
| `/book` | **Interactive Booking Engine**: 4 consultation types, 14-day calendar picker, timezone detection, qualification questionnaire, and instant confirmation screen. |
| `/contact` | **Global Inquiries**: Comprehensive project request form with budget tiers, services needed, and direct UK & Nigeria operations desks. |

---

## 👥 The 7 Specialists Data Model

Each specialist has a dedicated profile at `/team/:slug`:
1. `ayodeji-moses` — Co-Founder & Team Leader (AI Automation Specialist · Tender Expert)
2. `olatunji-oluwuseun` — Senior Digital Architect (Website Designer · CRM Automation Expert · AI Automation Specialist)
3. `praise-salami` — Growth & Systems Specialist (AI Automation Specialist · Tender Expert)
4. `babatunde-david` — Creative Systems Lead (AI Automation Specialist · Graphic Designer)
5. `babatunde-odunayo` — Media & Automation Specialist (AI Automation Specialist · Video Editor)
6. `babatunde-damilola` — CRM Solutions Architect (AI Automation Specialist · CRM Expert)
7. `azeez-anuoluwapo` — AI Media & Creative Technologist (AI Automation Specialist · AI Video Editor)

---

## 📸 Asset Upload Guidelines

The application is structured with monogram and vector placeholders ready for production media:
- **Team Portraits**: Replace monogram placeholders in `src/pages/TeamPage.jsx` and `src/pages/TeamProfilePage.jsx`.
- **Client Logos**: Update `clientLogos` array in `src/data/testimonialsData.js`.
- **Case Study Screenshots & Architecture Diagrams**: Drop image assets into `/public/projects/` and reference in `src/data/caseStudiesData.js`.
- **Showcase Video**: Drop `.mp4` into `/public/video/` and link in `src/components/CinematicVideoSection.jsx`.
