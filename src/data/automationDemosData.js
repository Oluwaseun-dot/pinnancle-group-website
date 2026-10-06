export const businessDemos = [
  {
    id: 'hvac',
    name: 'HVAC & Home Services',
    shortName: 'HVAC Services',
    icon: 'Wrench',
    tagline: 'Emergency AC repair triage, direct address verification, and automated technician dispatch.',
    customerName: 'James Miller',
    customerAvatar: 'JM',
    channel: 'SMS / Webform',
    summaryMetrics: {
      responseTime: '4.2s',
      conversionRate: '98%',
      savedAdminTime: '15 mins'
    },
    conversation: [
      {
        id: 1,
        sender: 'customer',
        text: 'Hi, my AC stopped working and I need someone to come out.',
        timestamp: '14:22',
        backendStep: {
          category: 'NEW LEAD',
          title: 'Lead Captured & Webhook Fired',
          detail: 'Incoming inquiry parsed from web SMS channel. Phone number verified.',
          systemState: {
            leadStatus: 'New Inbound',
            crmStage: 'Lead Ingested',
            automationTool: 'Webhook Gateway'
          }
        }
      },
      {
        id: 2,
        sender: 'ai',
        text: 'Hi James, sorry to hear that. I can help you get this sorted right away. What type of AC system are you having trouble with?',
        timestamp: '14:22',
        backendStep: {
          category: 'AI QUALIFICATION',
          title: 'Autonomous Inbound Triage',
          detail: 'AI responds in 3.8s. Initiates structured diagnostic decision tree.',
          systemState: {
            leadStatus: 'Diagnosing',
            crmStage: 'Qualification Active',
            automationTool: 'LLM Reasoning Engine'
          }
        }
      },
      {
        id: 3,
        sender: 'customer',
        text: 'Central air.',
        timestamp: '14:23',
        backendStep: {
          category: 'SYSTEM UPDATE',
          title: 'Equipment Parameter Stored',
          detail: 'System tagged: [HVAC_Type: Central_Air]. Matching certified technicians.',
          systemState: {
            leadStatus: 'Equipment Tagged',
            crmStage: 'Qualification Active',
            automationTool: 'Airtable / CRM Sync'
          }
        }
      },
      {
        id: 4,
        sender: 'ai',
        text: 'Thanks. Is the system completely off, or is it running but not cooling properly?',
        timestamp: '14:23',
        backendStep: {
          category: 'DIAGNOSTIC TRIAGE',
          title: 'Urgency & Severity Scoring',
          detail: 'Assessing mechanical failure risk to determine emergency technician tier.',
          systemState: {
            leadStatus: 'Scoring Severity',
            crmStage: 'In-Depth Triage',
            automationTool: 'Diagnostic Logic Tree'
          }
        }
      },
      {
        id: 5,
        sender: 'customer',
        text: 'It is running but not cooling.',
        timestamp: '14:24',
        backendStep: {
          category: 'CRM ENRICHMENT',
          title: 'Lead Moved to "Qualified"',
          detail: 'Issue classified as [Compressor/Refrigerant Fault]. Urgency: High.',
          systemState: {
            leadStatus: 'Qualified - High Urgency',
            crmStage: 'Ready for Scheduling',
            automationTool: 'HubSpot / GoHighLevel'
          }
        }
      },
      {
        id: 6,
        sender: 'ai',
        text: 'Got it. What is the address where you need the service?',
        timestamp: '14:24',
        backendStep: {
          category: 'GEO-LOCATION',
          title: 'Service Territory Validation',
          detail: 'Checking customer postcode against active technician service zones.',
          systemState: {
            leadStatus: 'Address Verification',
            crmStage: 'Territory Verified',
            automationTool: 'Google Maps API'
          }
        }
      },
      {
        id: 7,
        sender: 'customer',
        text: '24 King Street.',
        timestamp: '14:25',
        backendStep: {
          category: 'CALENDAR SCAN',
          title: 'Live Technician Slot Discovery',
          detail: 'Address confirmed in Zone 1. Querying mobile technician calendar availability for tomorrow.',
          systemState: {
            leadStatus: 'Dispatch Available',
            crmStage: 'Calendar Querying',
            automationTool: 'FieldPulse / Google Cal'
          }
        }
      },
      {
        id: 8,
        sender: 'ai',
        text: 'Thanks. We have availability tomorrow at 10:00 AM or 2:30 PM. Which works better for you?',
        timestamp: '14:25',
        interactiveOptions: ['10:00 AM', '2:30 PM'],
        backendStep: {
          category: 'APPOINTMENT OFFER',
          title: 'Interactive Booking Locks Offered',
          detail: 'Slots pre-reserved for 5 minutes pending customer selection.',
          systemState: {
            leadStatus: 'Awaiting Slot Selection',
            crmStage: 'Booking Proposed',
            automationTool: 'Scheduling Gateway'
          }
        }
      },
      {
        id: 9,
        sender: 'customer',
        text: '2:30 PM.',
        timestamp: '14:26',
        backendStep: {
          category: 'APPOINTMENT BOOKED',
          title: 'Calendar Locked & Route Optimized',
          detail: 'Confirmed: Tomorrow at 2:30 PM. Job assigned to Technician Dan (Van #4).',
          systemState: {
            leadStatus: 'Booked & Scheduled',
            crmStage: 'Job Dispatched',
            automationTool: 'Calendar API + CRM'
          }
        }
      },
      {
        id: 10,
        sender: 'ai',
        text: 'Perfect. Your appointment is booked for tomorrow at 2:30 PM.',
        timestamp: '14:26',
        backendStep: {
          category: 'CONFIRMATION',
          title: 'Automated SMS & Email Dispatched',
          detail: 'SMS delivery receipt: OK. Calendar invitation delivered to customer email.',
          systemState: {
            leadStatus: 'Customer Notified',
            crmStage: 'Pre-Visit Sequence',
            automationTool: 'Twilio SMS / SendGrid'
          }
        }
      },
      {
        id: 11,
        sender: 'ai',
        text: 'I have also sent the appointment confirmation to your phone and email with Dan\'s live arrival tracking link.',
        timestamp: '14:26',
        backendStep: {
          category: 'TEAM NOTIFIED',
          title: 'Slack Alert Dispatched to Dispatch Team',
          detail: 'Alert fired in #emergency-dispatch with full job notes and customer address.',
          systemState: {
            leadStatus: 'Workflow Complete',
            crmStage: 'Confirmed In Pipeline',
            automationTool: 'Slack API / Webhooks'
          }
        }
      }
    ],
    automationFlow: [
      { name: 'Lead Captured', tool: 'Webhook Gateway', status: 'done' },
      { name: 'Customer Qualified', tool: 'Diagnostic LLM', status: 'done' },
      { name: 'CRM Record Created', tool: 'HubSpot / GHL', status: 'done' },
      { name: 'Lead Moved to "Qualified"', tool: 'Pipeline Rules', status: 'done' },
      { name: 'Appointment Booked (2:30 PM)', tool: 'Calendar Sync', status: 'done' },
      { name: 'Confirmation Sent (SMS + Email)', tool: 'Twilio / SendGrid', status: 'done' },
      { name: 'Technician & Team Notified', tool: 'Slack #dispatch', status: 'done' }
    ]
  },
  {
    id: 'real-estate',
    name: 'Real Estate',
    shortName: 'Real Estate Agency',
    icon: 'Building2',
    tagline: 'High-value property buyer qualification, instant viewing scheduling, and CRM pipeline assignment.',
    customerName: 'Sarah Jenkins',
    customerAvatar: 'SJ',
    channel: 'Rightmove / Web Portal',
    summaryMetrics: {
      responseTime: '3.1s',
      conversionRate: '94%',
      savedAdminTime: '25 mins'
    },
    conversation: [
      {
        id: 1,
        sender: 'customer',
        text: 'Hi, I saw your listing for the 3-bedroom apartment on Marylebone High Street. Is it still available?',
        timestamp: '09:14',
        backendStep: {
          category: 'NEW LEAD',
          title: 'Property Portal Lead Ingested',
          detail: 'Incoming portal inquiry parsed for Listing Ref: #MB-4029 (£1,450,000).',
          systemState: {
            leadStatus: 'New Inbound Inquiry',
            crmStage: 'Portal Lead Captured',
            automationTool: 'Webhook Parser'
          }
        }
      },
      {
        id: 2,
        sender: 'ai',
        text: 'Hello Sarah! Yes, 14 Marylebone High Street is active. Are you looking to purchase as an owner-occupier or an investment?',
        timestamp: '09:14',
        backendStep: {
          category: 'BUYER TRIAGE',
          title: 'Purchaser Intent Qualification',
          detail: 'Categorizing buyer profile to tailor finance verification and chain status.',
          systemState: {
            leadStatus: 'Intent Scoring',
            crmStage: 'Discovery In Progress',
            automationTool: 'AI Sales Agent'
          }
        }
      },
      {
        id: 3,
        sender: 'customer',
        text: 'Owner-occupier. We are pre-approved and looking to complete within 60 days.',
        timestamp: '09:15',
        backendStep: {
          category: 'CRM ENRICHMENT',
          title: 'High-Net-Worth Tag Assigned',
          detail: 'Tags added: [Tier-1 Buyer, Pre-Approved, 60-Day Timeline]. Lead score: 96/100.',
          systemState: {
            leadStatus: 'Hot Prospect (Score: 96)',
            crmStage: 'VIP Buyer Pipeline',
            automationTool: 'HubSpot CRM'
          }
        }
      },
      {
        id: 4,
        sender: 'ai',
        text: 'Wonderful. The apartment features 1,420 sq ft, private lift access, and a south-facing terrace. Would you like to schedule an in-person viewing with our senior partner this week?',
        timestamp: '09:15',
        backendStep: {
          category: 'CALENDAR AUDIT',
          title: 'Listing Agent Diary Checked',
          detail: 'Senior Broker (Arthur Sterling) diary checked for Marylebone territory slots.',
          systemState: {
            leadStatus: 'Viewing Proposed',
            crmStage: 'Viewing Coordinator',
            automationTool: 'Google Calendar API'
          }
        }
      },
      {
        id: 5,
        sender: 'customer',
        text: 'Yes please, Friday afternoon would be ideal.',
        timestamp: '09:16',
        backendStep: {
          category: 'SLOT OPTIMIZATION',
          title: 'Friday Viewing Slots Generated',
          detail: 'Filtering Friday daylight viewing windows between 14:00 and 17:00 BST.',
          systemState: {
            leadStatus: 'Slots Filtered',
            crmStage: 'Booking Selection',
            automationTool: 'Scheduling Logic'
          }
        }
      },
      {
        id: 6,
        sender: 'ai',
        text: 'We have private viewing appointments available this Friday at 2:00 PM or 4:30 PM. Which suits you better?',
        timestamp: '09:16',
        interactiveOptions: ['2:00 PM', '4:30 PM'],
        backendStep: {
          category: 'APPOINTMENT OFFER',
          title: 'Interactive Private Viewing Offered',
          detail: 'Awaiting buyer slot confirmation for 14 Marylebone High St.',
          systemState: {
            leadStatus: 'Awaiting Choice',
            crmStage: 'Slot Offered',
            automationTool: 'Interactive Stepper'
          }
        }
      },
      {
        id: 7,
        sender: 'customer',
        text: '4:30 PM.',
        timestamp: '09:17',
        backendStep: {
          category: 'APPOINTMENT BOOKED',
          title: 'Viewing Locked in Broker Calendar',
          detail: 'Private VIP showing locked for Friday at 16:30 BST. Concierge access requested.',
          systemState: {
            leadStatus: 'Viewing Confirmed',
            crmStage: 'Scheduled Showing',
            automationTool: 'Calendar API'
          }
        }
      },
      {
        id: 8,
        sender: 'ai',
        text: 'Confirmed for Friday at 4:30 PM. I have sent the verified property brochure, architectural floor plan, and calendar invite to your email.',
        timestamp: '09:17',
        backendStep: {
          category: 'CONFIRMATION',
          title: 'Brochure Pack & Map Dispatched',
          detail: 'Automated delivery: PDF brochure + parking directions + calendar link.',
          systemState: {
            leadStatus: 'Assets Delivered',
            crmStage: 'Pre-Viewing Pack Sent',
            automationTool: 'SendGrid Email API'
          }
        }
      },
      {
        id: 9,
        sender: 'ai',
        text: 'Senior Listing Director Arthur Sterling has also been briefed with your requirements and will meet you at the main foyer.',
        timestamp: '09:17',
        backendStep: {
          category: 'TEAM NOTIFIED',
          title: 'Broker Alert Dispatched to WhatsApp',
          detail: 'Arthur Sterling alerted via WhatsApp with Sarah\'s pre-approval note & phone.',
          systemState: {
            leadStatus: 'Workflow Complete',
            crmStage: 'High-Value Showing',
            automationTool: 'WhatsApp Business API'
          }
        }
      }
    ],
    automationFlow: [
      { name: 'Portal Lead Captured', tool: 'Webhook Gateway', status: 'done' },
      { name: 'Buyer Intent & Budget Qualified', tool: 'AI Intent Engine', status: 'done' },
      { name: 'CRM Contact & Deal Created (£1.45M)', tool: 'HubSpot CRM', status: 'done' },
      { name: 'Moved to "VIP Buyer - 60 Day"', tool: 'Pipeline Rule', status: 'done' },
      { name: 'Private Viewing Booked (Fri 4:30 PM)', tool: 'Calendar Sync', status: 'done' },
      { name: 'Floor Plan & Brochure Emailed', tool: 'SendGrid API', status: 'done' },
      { name: 'Senior Partner Alerted', tool: 'WhatsApp / Slack', status: 'done' }
    ]
  },
  {
    id: 'healthcare',
    name: 'Healthcare & Wellness',
    shortName: 'Private Clinic',
    icon: 'Stethoscope',
    tagline: 'Emergency clinical triage, patient intake automation, and electronic health record scheduling.',
    customerName: 'David Chen',
    customerAvatar: 'DC',
    channel: 'Clinic Portal / SMS',
    summaryMetrics: {
      responseTime: '2.8s',
      conversionRate: '99%',
      savedAdminTime: '18 mins'
    },
    conversation: [
      {
        id: 1,
        sender: 'customer',
        text: 'Hello, I have severe tooth pain since last night and need to see a dentist as soon as possible.',
        timestamp: '08:02',
        backendStep: {
          category: 'NEW INQUIRY',
          title: 'Emergency Patient Triage Ingested',
          detail: 'Incoming patient chat flagged with clinical priority keyword: [severe pain].',
          systemState: {
            leadStatus: 'Urgent Clinical Case',
            crmStage: 'Triage Pending',
            automationTool: 'HIPAA/GDPR Secure Ingest'
          }
        }
      },
      {
        id: 2,
        sender: 'ai',
        text: 'Hello David, I understand tooth pain can be very distressing. Are you currently experiencing any facial swelling, difficulty breathing, or a fever?',
        timestamp: '08:02',
        backendStep: {
          category: 'CLINICAL SAFETY',
          title: 'Red-Flag Safety Screening',
          detail: 'Rule-based medical safety check. Verifies no urgent emergency room red flags exist.',
          systemState: {
            leadStatus: 'Safety Screen Passed',
            crmStage: 'Symptom Assessment',
            automationTool: 'Clinical Protocol LLM'
          }
        }
      },
      {
        id: 3,
        sender: 'customer',
        text: 'No swelling or fever, just sharp throbbing pain when drinking cold liquids.',
        timestamp: '08:03',
        backendStep: {
          category: 'EHR ENRICHMENT',
          title: 'Symptom Logged to Patient Chart',
          detail: 'Classification: [Suspected Pulpitis / Temperature Sensitivity]. Priority: Same-Day.',
          systemState: {
            leadStatus: 'Emergency Priority',
            crmStage: 'Same-Day Schedule',
            automationTool: 'Practice Management EHR'
          }
        }
      },
      {
        id: 4,
        sender: 'ai',
        text: 'Understood. Are you already a registered patient with Harley Dental Clinic, or will this be your first visit with us?',
        timestamp: '08:03',
        backendStep: {
          category: 'PATIENT VERIFY',
          title: 'EHR Database Lookup',
          detail: 'Queried EHR record database for phone: +44 79... Match: New Patient.',
          systemState: {
            leadStatus: 'New Patient Intake',
            crmStage: 'Registration Required',
            automationTool: 'EHR Database API'
          }
        }
      },
      {
        id: 5,
        sender: 'customer',
        text: 'First visit.',
        timestamp: '08:04',
        backendStep: {
          category: 'CHAIR ALLOCATION',
          title: 'Surgery Room & Dentist Query',
          detail: 'Emergency slot reserved on Dr. Aris (Endodontics) chair.',
          systemState: {
            leadStatus: 'Doctor Matched',
            crmStage: 'Slot Allocation',
            automationTool: 'Practice Calendar'
          }
        }
      },
      {
        id: 6,
        sender: 'ai',
        text: 'We have emergency consultation slots reserved for new patients today at 11:15 AM or 3:45 PM with Dr. Aris. Which time works for you?',
        timestamp: '08:04',
        interactiveOptions: ['11:15 AM', '3:45 PM'],
        backendStep: {
          category: 'APPOINTMENT OFFER',
          title: 'Immediate Same-Day Slots Offered',
          detail: 'Real-time practice availability presented with 0 human receptionist time.',
          systemState: {
            leadStatus: 'Awaiting Slot',
            crmStage: 'Emergency Booking',
            automationTool: 'EHR Booking Gateway'
          }
        }
      },
      {
        id: 7,
        sender: 'customer',
        text: '11:15 AM.',
        timestamp: '08:05',
        backendStep: {
          category: 'APPOINTMENT BOOKED',
          title: 'Emergency Surgery Slot Locked',
          detail: 'Booked: Today at 11:15 AM, Surgery 2. Digital medical record created.',
          systemState: {
            leadStatus: 'Confirmed in Chair',
            crmStage: 'Intake Link Dispatched',
            automationTool: 'Dentally / Curve Dental'
          }
        }
      },
      {
        id: 8,
        sender: 'ai',
        text: 'Booked for 11:15 AM today. I have sent your digital medical intake form via SMS so you can complete it on your phone before arriving and skip the waiting room paperwork.',
        timestamp: '08:05',
        backendStep: {
          category: 'CONFIRMATION',
          title: 'Secure Paperless Intake Dispatched',
          detail: 'Encrypted SMS delivered with medical history questionnaire.',
          systemState: {
            leadStatus: 'Paperless Intake Active',
            crmStage: 'Pre-Visit Complete',
            automationTool: 'Twilio Healthcare SMS'
          }
        }
      },
      {
        id: 9,
        sender: 'ai',
        text: 'Our front desk and Dr. Aris have been notified of your arrival time and symptom briefing.',
        timestamp: '08:05',
        backendStep: {
          category: 'TEAM NOTIFIED',
          title: 'Clinic Dashboard & Nurse Station Alerted',
          detail: 'Alert displayed on reception screen: "New Emergency Patient 11:15 AM - Dr. Aris".',
          systemState: {
            leadStatus: 'Workflow Complete',
            crmStage: 'Patient Scheduled',
            automationTool: 'Clinic Telemetry'
          }
        }
      }
    ],
    automationFlow: [
      { name: 'Patient Inbound Triage', tool: 'Secure Ingest', status: 'done' },
      { name: 'Clinical Red-Flag Screen', tool: 'Protocol Engine', status: 'done' },
      { name: 'Patient Profile Created in EHR', tool: 'Practice Software', status: 'done' },
      { name: 'Tagged "Emergency - Same Day"', tool: 'Triage Classifier', status: 'done' },
      { name: 'Emergency Slot Booked (11:15 AM)', tool: 'EHR Calendar', status: 'done' },
      { name: 'Paperless Intake Link Sent', tool: 'Encrypted SMS', status: 'done' },
      { name: 'Reception & Clinical Staff Alerted', tool: 'Clinic Station', status: 'done' }
    ]
  },
  {
    id: 'automotive',
    name: 'Automotive',
    shortName: 'Automotive Dealership',
    icon: 'Car',
    tagline: 'Vehicle repair diagnostics, parts availability lookup, courtesy loaner car booking.',
    customerName: 'Marcus Vance',
    customerAvatar: 'MV',
    channel: 'Dealership Webchat',
    summaryMetrics: {
      responseTime: '3.6s',
      conversionRate: '96%',
      savedAdminTime: '20 mins'
    },
    conversation: [
      {
        id: 1,
        sender: 'customer',
        text: 'Hi, I need a major service and brake inspection for my 2022 BMW M3 Competition.',
        timestamp: '11:30',
        backendStep: {
          category: 'NEW INQUIRY',
          title: 'Vehicle Service Request Captured',
          detail: 'Model identified: [2022 BMW M3 Competition G80]. Performance workshop route.',
          systemState: {
            leadStatus: 'Vehicle Ingested',
            crmStage: 'Workshop Lead',
            automationTool: 'Webhook Gateway'
          }
        }
      },
      {
        id: 2,
        sender: 'ai',
        text: 'Hello Marcus! We can certainly take care of your M3. Is the brake wear warning light currently illuminated on your dashboard?',
        timestamp: '11:30',
        backendStep: {
          category: 'SERVICE DIAGNOSTIC',
          title: 'Brake Sensor Triage',
          detail: 'Checking if sensor replacement is required along with pad/rotor inspection.',
          systemState: {
            leadStatus: 'Parts Scoping',
            crmStage: 'Diagnostic Triage',
            automationTool: 'Diagnostic Engine'
          }
        }
      },
      {
        id: 3,
        sender: 'customer',
        text: 'Yes, it came on two days ago.',
        timestamp: '11:31',
        backendStep: {
          category: 'PARTS SYSTEM',
          title: 'OEM Parts Availability Verified',
          detail: 'Queried dealer parts inventory: BMW OEM M-Compound pads & sensors in stock.',
          systemState: {
            leadStatus: 'Parts In Stock',
            crmStage: 'Quoted & Scoped',
            automationTool: 'Parts ERP Database'
          }
        }
      },
      {
        id: 4,
        sender: 'ai',
        text: 'Got it. Our master certified technicians can complete the brake overhaul and complete 60-point performance diagnostic. Would Thursday 09:00 AM or Friday 10:30 AM suit you for drop-off?',
        timestamp: '11:31',
        interactiveOptions: ['Thursday 09:00 AM', 'Friday 10:30 AM'],
        backendStep: {
          category: 'SERVICE BAY AUDIT',
          title: 'Workshop Ramp Availability Checked',
          detail: 'Ramp #3 (Performance Spec) free for Thursday 09:00 AM and Friday 10:30 AM.',
          systemState: {
            leadStatus: 'Ramp Reserved',
            crmStage: 'Slot Offered',
            automationTool: 'Dealer Management System'
          }
        }
      },
      {
        id: 5,
        sender: 'customer',
        text: 'Thursday 09:00 AM.',
        timestamp: '11:32',
        backendStep: {
          category: 'APPOINTMENT BOOKED',
          title: 'Service Bay & Loaner Vehicle Reserved',
          detail: 'Service scheduled for Thursday 09:00 AM. Courtesy BMW 330e loaner car tagged.',
          systemState: {
            leadStatus: 'Booked With Loaner',
            crmStage: 'Service Confirmed',
            automationTool: 'CDK / Keyloop DMS'
          }
        }
      },
      {
        id: 6,
        sender: 'ai',
        text: 'Locked in for Thursday at 09:00 AM. We have also reserved a complimentary courtesy loaner vehicle for you during the service.',
        timestamp: '11:32',
        backendStep: {
          category: 'CONFIRMATION',
          title: 'Drop-off Pass & SMS Sent',
          detail: 'SMS delivered with digital key drop-off instructions and service advisor contact.',
          systemState: {
            leadStatus: 'Customer Briefed',
            crmStage: 'Pre-Arrival Sequence',
            automationTool: 'Twilio SMS Gateway'
          }
        }
      },
      {
        id: 7,
        sender: 'ai',
        text: 'Confirmation pass has been sent to your phone. Master Technician Paul has been assigned to your vehicle.',
        timestamp: '11:32',
        backendStep: {
          category: 'TEAM NOTIFIED',
          title: 'Workshop Lead Alerted',
          detail: 'Job sheet generated and posted to Workshop Slack #service-bay-3.',
          systemState: {
            leadStatus: 'Workflow Complete',
            crmStage: 'Ready for Intake',
            automationTool: 'Slack API / DMS Sync'
          }
        }
      }
    ],
    automationFlow: [
      { name: 'Vehicle & Service Request Logged', tool: 'Webchat Webhook', status: 'done' },
      { name: 'Brake Warning Sensor Diagnosed', tool: 'AI Diagnostic Logic', status: 'done' },
      { name: 'OEM Parts Stock Verified in ERP', tool: 'Parts API', status: 'done' },
      { name: 'Lead Qualified (£1,150 Service Scope)', tool: 'DMS Pipeline', status: 'done' },
      { name: 'Ramp & Loaner Booked (Thu 09:00 AM)', tool: 'Workshop Planner', status: 'done' },
      { name: 'Digital Drop-Off Pass SMS Sent', tool: 'Twilio SMS', status: 'done' },
      { name: 'Master Tech Assigned & Alerted', tool: 'Slack #workshop', status: 'done' }
    ]
  },
  {
    id: 'ecommerce',
    name: 'Ecommerce & Retail',
    shortName: 'Global Ecommerce',
    icon: 'ShoppingBag',
    isHumanHandoff: true,
    tagline: 'Order lookup, warehouse tracking, and smart AI-to-human team escalation when modifications are needed.',
    customerName: 'Elena Rostova',
    customerAvatar: 'ER',
    channel: 'Helpdesk / WhatsApp',
    summaryMetrics: {
      responseTime: '1.9s',
      resolutionRate: '88%',
      handoffTime: '< 10s'
    },
    conversation: [
      {
        id: 1,
        sender: 'customer',
        text: 'Hello, I placed order #84920 yesterday but I need to change the delivery address to our secondary warehouse in Manchester before it dispatches.',
        timestamp: '15:40',
        backendStep: {
          category: 'NEW INQUIRY',
          title: 'Order Modification Webhook Captured',
          detail: 'Order token extracted: [#84920]. Checking Shopify & ERP database.',
          systemState: {
            leadStatus: 'Order Parsed',
            crmStage: 'Support Ticket Ingested',
            automationTool: 'Shopify / ERP Webhook'
          }
        }
      },
      {
        id: 2,
        sender: 'ai',
        text: 'Hi Elena! Checking order #84920 right now... The order is currently in processing status at our Birmingham fulfillment center.',
        timestamp: '15:40',
        backendStep: {
          category: 'API LOOKUP',
          title: 'Real-Time Inventory Status Query',
          detail: 'Order found: 120 units Industrial Sensor. Status: Packing in Progress (Not yet dispatched).',
          systemState: {
            leadStatus: 'Order Verified',
            crmStage: 'Fulfillment Identified',
            automationTool: 'Warehouse WMS API'
          }
        }
      },
      {
        id: 3,
        sender: 'customer',
        text: 'Can we also add 50 more units of the industrial matte sensors to that shipment and bill the original corporate card?',
        timestamp: '15:41',
        backendStep: {
          category: 'TRIAGE & ESCALATION',
          title: 'Human Handoff Trigger Activated',
          detail: 'AI detects wholesale order adjustment + secondary payment authorization. Protocol: Escalation.',
          systemState: {
            leadStatus: 'Human Escalation Triggered',
            crmStage: 'Live Specialist Queue',
            automationTool: 'Handoff Decision Logic'
          }
        }
      },
      {
        id: 4,
        sender: 'ai',
        text: 'Because this involves adjusting warehouse pallet packing and secondary invoice billing, let me connect you with a member of our commercial support team who can authorize this modification immediately.',
        timestamp: '15:41',
        backendStep: {
          category: 'DISPATCH HOLD',
          title: 'Automated 15-Minute Packing Hold',
          detail: 'Dispatched automated webhook to WMS: Pausing warehouse scan for Order #84920.',
          systemState: {
            leadStatus: 'Packing Hold Active',
            crmStage: 'Handoff In Progress',
            automationTool: 'WMS Webhook'
          }
        }
      },
      {
        id: 5,
        sender: 'ai',
        text: 'I have placed a temporary dispatch hold on #84920 and transferred your conversation to Alex from Commercial Operations with full order notes attached.',
        timestamp: '15:42',
        backendStep: {
          category: 'HUMAN HANDOFF',
          title: 'Assigned to Commercial Specialist',
          detail: 'Assigned to Alex Morgan. Customer brief, Manchester address, and SKU request passed seamlessly.',
          systemState: {
            leadStatus: 'Assigned to Human (Alex M.)',
            crmStage: 'Live Tier-2 Resolution',
            automationTool: 'Zendesk / Intercom CRM'
          }
        }
      },
      {
        id: 6,
        sender: 'human_agent',
        agentName: 'Alex Morgan · Commercial Operations',
        text: 'Hi Elena, Alex here! I have your order on my screen with the dispatch hold active. I’m updating the shipping destination to your Manchester warehouse and adding the 50 additional sensors right now.',
        timestamp: '15:42',
        backendStep: {
          category: 'TEAM NOTIFIED',
          title: 'Zero Context Loss Handoff Complete',
          detail: 'Alex took over within 8 seconds. Updated invoice dispatched to customer billing.',
          systemState: {
            leadStatus: 'Human Handling Complete',
            crmStage: 'Order Modified & Resolved',
            automationTool: 'Slack #order-escalations'
          }
        }
      }
    ],
    automationFlow: [
      { name: 'Order #84920 Verified in Shopify/ERP', tool: 'WMS API', status: 'done' },
      { name: 'Fulfillment Status Checked in Real-Time', tool: 'Warehouse DB', status: 'done' },
      { name: 'AI Identified Complex Multi-Item Change', tool: 'Decision Matrix', status: 'done' },
      { name: 'Automated 15-Min Warehouse Hold Placed', tool: 'WMS Webhook', status: 'done' },
      { name: 'Smart Human Handoff Activated', tool: 'Routing Logic', status: 'done' },
      { name: 'Assigned to Specialist with Full Context', tool: 'CRM Helpdesk', status: 'done' },
      { name: 'Slack Alert & Customer Resolved', tool: 'Slack #escalations', status: 'done' }
    ]
  },
  {
    id: 'professional-services',
    name: 'Professional Services',
    shortName: 'Corporate Advisory & Legal',
    icon: 'Briefcase',
    tagline: 'High-ticket B2B client qualification, cross-border discovery triage, and managing partner calendar locking.',
    customerName: 'Rachel Thorne',
    customerAvatar: 'RT',
    channel: 'Corporate Website Form',
    summaryMetrics: {
      responseTime: '4.5s',
      conversionRate: '95%',
      savedAdminTime: '30 mins'
    },
    conversation: [
      {
        id: 1,
        sender: 'customer',
        text: 'Hi, we are closing a £1.2M seed round and need cross-border corporate tax advisory between the UK and Delaware.',
        timestamp: '16:05',
        backendStep: {
          category: 'NEW LEAD',
          title: 'High-Value Advisory Lead Ingested',
          detail: 'Inbound web intake flagged: [Deal Value: £1.2M, Domain: UK-US Cross-Border Tax].',
          systemState: {
            leadStatus: 'Enterprise Inbound',
            crmStage: 'High-Value Lead',
            automationTool: 'Webhook Gateway'
          }
        }
      },
      {
        id: 2,
        sender: 'ai',
        text: 'Hello Rachel, congratulations on the funding round! Are you currently structured as a UK Ltd, or has the Delaware C-Corp flip already completed?',
        timestamp: '16:05',
        backendStep: {
          category: 'QUALIFICATION',
          title: 'Corporate Architecture Scoping',
          detail: 'Scoping structural complexity to route to Senior Tax Partner vs. Associate.',
          systemState: {
            leadStatus: 'Scoping Architecture',
            crmStage: 'Qualification Active',
            automationTool: 'AI Advisory LLM'
          }
        }
      },
      {
        id: 3,
        sender: 'customer',
        text: 'UK Ltd currently, planning the US holding company structure next month.',
        timestamp: '16:06',
        backendStep: {
          category: 'CRM ENRICHMENT',
          title: 'Lead Tagged: [Delaware Flip, £15k+ Retainer]',
          detail: 'Company enriched with Companies House records. Lead Score: 98/100.',
          systemState: {
            leadStatus: 'Score: 98 (Tier 1)',
            crmStage: 'Partner Consultation Ready',
            automationTool: 'HubSpot Enterprise CRM'
          }
        }
      },
      {
        id: 4,
        sender: 'ai',
        text: 'Understood. Our international tax partners specialize in UK-US EIS, IP holding transfer, and cross-border structuring. We have advisory consultation openings with our Managing Partner on Wednesday at 11:00 AM or Thursday at 3:00 PM BST. Which fits your schedule?',
        timestamp: '16:06',
        interactiveOptions: ['Wednesday 11:00 AM', 'Thursday 3:00 PM'],
        backendStep: {
          category: 'CALENDAR LOCK',
          title: 'Managing Partner Diary Query',
          detail: 'Managing Partner diary scanned for international tax consultation slots.',
          systemState: {
            leadStatus: 'Partner Slots Offered',
            crmStage: 'Booking Selection',
            automationTool: 'Cal.com / Google Meet'
          }
        }
      },
      {
        id: 5,
        sender: 'customer',
        text: 'Wednesday 11:00 AM.',
        timestamp: '16:07',
        backendStep: {
          category: 'APPOINTMENT BOOKED',
          title: 'Private Video Room & Calendar Generated',
          detail: 'Booked: Wednesday 11:00 AM BST. Google Meet briefing room link created.',
          systemState: {
            leadStatus: 'Consultation Confirmed',
            crmStage: 'Pre-Briefing Stage',
            automationTool: 'Google Workspace API'
          }
        }
      },
      {
        id: 6,
        sender: 'ai',
        text: 'Confirmed for Wednesday at 11:00 AM BST. Calendar invite and a brief pre-call structure questionnaire have been emailed to you.',
        timestamp: '16:07',
        backendStep: {
          category: 'CONFIRMATION',
          title: 'Mutual NDA & Discovery Doc Dispatched',
          detail: 'Automated email dispatched with calendar link and pre-call agenda.',
          systemState: {
            leadStatus: 'Intake Pack Delivered',
            crmStage: 'Advisory Confirmed',
            automationTool: 'DocuSign / Email Sync'
          }
        }
      },
      {
        id: 7,
        sender: 'ai',
        text: 'Managing Partner David Croft has been briefed with your seed round details and will lead the consultation.',
        timestamp: '16:07',
        backendStep: {
          category: 'TEAM NOTIFIED',
          title: 'Executive Briefing Pushed to Slack',
          detail: 'High-priority notification posted to Slack #commercial-partners with deal brief.',
          systemState: {
            leadStatus: 'Workflow Complete',
            crmStage: 'Confirmed In Pipeline',
            automationTool: 'Slack API'
          }
        }
      }
    ],
    automationFlow: [
      { name: 'Advisory Inbound Form Captured', tool: 'Webhook Gateway', status: 'done' },
      { name: 'Corporate Structure Qualified', tool: 'AI Advisory LLM', status: 'done' },
      { name: 'CRM Record Created (£15k Retainer)', tool: 'HubSpot Enterprise', status: 'done' },
      { name: 'Moved to "Partner Consultation"', tool: 'Pipeline Rules', status: 'done' },
      { name: 'Consultation Booked (Wed 11:00 AM)', tool: 'Google Workspace', status: 'done' },
      { name: 'Calendar Invite & NDA Emailed', tool: 'SendGrid / DocuSign', status: 'done' },
      { name: 'Managing Partner Briefed on Slack', tool: 'Slack #partners', status: 'done' }
    ]
  }
];
