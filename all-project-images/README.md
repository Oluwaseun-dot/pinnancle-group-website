# Pinnancle Group — Complete Project Assets & Image Catalog

This folder contains **all images, photography, workflow screenshots, and brand assets** used across the Pinnancle Group website. All assets are also present inside `public/images/` and automatically bundled into `dist/` upon build for zero-configuration hosting deployment.

---

## Folder Structure

### 📁 `01-website-live-images/`
The complete set of live assets loaded directly by the website runtime (`/images/...`):
- `hero-command-center.jpg` — Hero section automation workstation
- `ai-agent-interface.jpg` — 01. AI Automation practice area visual
- `business-automation-workflow.jpg` — 02. Business Automation practice area visual
- `crm-pipeline-dashboard.jpg` — 03. CRM Automation featuring Babatunde Damilola
- `website-design-showcase.jpg` — 04. Website Design practice area visual
- `tender-support-procurement.jpg` — 05. Tender Support practice area visual
- `our-story-founders.jpg` & `founders-strategy-meeting.jpg` — "We Started With Three People" (Ayodeji Moses, Praise Salami, Oluwaseun Olatunji)
- `global-uk-nigeria-network.jpg` — Global Presence (UK · Nigeria · Worldwide)
- `final-cta-studio.jpg` — Final CTA booking section
- `case-studies/` — All client case study workflows and platform screenshots

### 📁 `02-team-portraits/`
High-resolution portraits of the leadership and delivery specialists:
1. `ayodeji-moses.jpg` — Co-Founder & Team Leader
2. `praise-salami.jpg` — Co-Founder
3. `oluwaseun-olatunji.jpg` — Co-Founder
4. `babatunde-damilola.jpg` — CRM & Systems Architecture Specialist
5. `babatunde-david.jpg` — Full-Stack Developer & Systems Integrator
6. `babatunde-odunayo.jpg` — Automation Engineer & Pipeline Specialist
7. `azeez-anuoluwapo.jpg` — Digital Operations & Client Success Specialist

### 📁 `03-case-studies-and-workflows/`
All client proof diagrams, workflow automation maps, and platform screenshots:
- **Cleveland Real Estate ($500 Project)**:
  - `cleveland-make-pipeline.png` — Make.com automated ingestion pipeline
  - `cleveland-ghl-workflow.png` — GoHighLevel auto-welcome & contact creation
  - `cleveland-lead-widget.png` — Property lead capture modal
  - `cleveland-zillow-reply.png` — Instant auto-response notification
- **Brendc Lifestyle LLC ($2,000 + $200/mo Project)**:
  - `brendc-n8n-workflow.png` — Master n8n AI lead qualification sequence
  - `brendc-airtable-crm.png` — Airtable database with automated scoring
  - `brendc-slack-alert.png` — Instant team notification on qualified leads
  - `brendc-nurture-email.png` — Automated nurture sequence trigger
  - `brendc-workflow-detail.png` — Multi-branch decision logic
- **Tech Agency Lead Triage**:
  - `tech-agency-n8n-pipeline.png` — Dual-channel triage to Slack #technical-team & Airtable #sales
- **Featured Case Studies**:
  - `meridian-case-study.jpg` — Meridian Health automated patient booking
  - `apex-case-study.jpg` — Apex Logistics real-time dispatching
  - `vanguard-case-study.jpg` — Vanguard Commercial automated tender pipeline

### 📁 `04-homepage-and-sections/`
All wide-format cinematic section visuals (16:9 and 21:9) rendered across the homepage.

### 📁 `05-user-original-uploads/`
Untouched, 1:1 original source files uploaded during development for archival reference.

### 📁 `06-video-and-branding/`
- `pinnancle_video.mp4` — High-definition cinematic overview video
- `favicon.svg` — Geometric mountain peak icon logo in lime and off-white

---

## Deployment Note for Custom Domains
When linking a custom domain on **Netlify**, **Vercel**, **Cloudflare Pages**, or **cPanel**:
- Build command: `npm run build`
- Publish directory: `dist`
- All images are already embedded into `dist/images/` and will serve automatically without any broken links.
