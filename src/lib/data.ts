export type ProjectCategory = "AI Automation" | "CRM" | "Web dev" | "SaaS" | "CMS";

export type CaseStudy = {
  slug: string;
  title: string;
  category: ProjectCategory;
  image: string;
  role: string;
  summary: string[];
  solution: string;
  whatIBuilt: string;
  outcome: string;
  architecture: string[];
  challenges: string[];
  results: string[];
  stack: string[];
};

export const categories = ["All", "AI Automation", "CRM", "Web dev", "SaaS", "CMS"] as const;

export const caseStudies: CaseStudy[] = [
  {
    slug: "loan-processing-automation",
    title: "Loan Processing Automation",
    category: "AI Automation",
    image: "/temp.png",
    role: "Automation Engineer / Make.com Developer",
    summary: [
      "Operations automation for inbound and outbound communications with fast routing.",
      "Eliminated repetitive manual steps across the mortgage workflow.",
      "Improved response time and reduced missed handoffs.",
      "Added error handling and edge-case coverage to reduce operational risk.",
    ],
    solution:
      "Built an end-to-end mortgage loan-processing automation using Make.com, LendingWise, ClickUp, GoHighLevel, Microsoft 365, Outlook, and OpenAI-assisted workflow steps.",
    whatIBuilt:
      "Built a mortgage loan-processing automation for a financial lender. Make.com webhooks, routers, and tools modules sync LendingWise loan events - new loans, loan processing, terms sent, and loan notes - into ClickUp tasks through the ClickUp API. I also configured GoHighLevel CRM dashboards, opportunity pipelines, and workflow automations for email, SMS, after-call triggers, and lead campaigns tracking 1,000+ opportunities worth $428K. JSON parsing and Microsoft 365 / Outlook modules complete the data flow.",
    outcome: "Faster loan routing with fewer missed handoffs",
    architecture: ["LendingWise events", "Make.com routers", "ClickUp task sync", "GHL CRM workflows", "Outlook updates"],
    challenges: ["Complex loan states", "CRM and task-system alignment", "Operational exceptions"],
    results: ["1,000+ opportunities tracked", "$428K pipeline visibility", "Reduced repetitive processing work"],
    stack: [
      "Make.com",
      "LendingWise",
      "ClickUp",
      "GoHighLevel",
      "ClickUp API",
      "Webhooks",
      "JSON",
      "Microsoft 365",
      "Outlook",
      "OpenAI",
      "CRM Automation",
      "Loan Automation",
      "Mortgage",
      "Lead Management",
    ],
  },
  {
    slug: "ai-cold-calling-system",
    title: "AI Cold Calling System",
    category: "AI Automation",
    image: "/temp.png",
    role: "AI Automation Engineer",
    summary: [
      "Qualified inbound and outbound leads without manual calling.",
      "Connected voice AI with CRM stages and appointment booking.",
      "Reduced sales-team admin while keeping follow-up visible.",
    ],
    solution:
      "Designed a VAPI, Make.com, and GoHighLevel system that qualifies leads, routes outcomes, and books appointments automatically.",
    whatIBuilt:
      "Created a voice-agent workflow with call outcomes, qualification rules, CRM updates, calendar routing, and fail-safe notifications for missed or uncertain interactions.",
    outcome: "Automated lead qualification and appointment booking",
    architecture: ["Lead source", "VAPI agent", "Make.com workflow", "GHL pipeline", "Calendar booking"],
    challenges: ["Call outcome accuracy", "CRM state sync", "Human handoff rules"],
    results: ["Less manual outreach", "Faster lead response", "Cleaner pipeline updates"],
    stack: ["VAPI", "Make.com", "GoHighLevel", "OpenAI", "Calendar APIs", "SMS", "Webhooks"],
  },
  {
    slug: "restaurant-analytics-dashboard",
    title: "Restaurant Analytics Dashboard",
    category: "SaaS",
    image: "/temp.png",
    role: "Full Stack Developer",
    summary: [
      "Unified restaurant sales, labor, COGS, and operations metrics.",
      "Created executive-level reporting for daily decision-making.",
      "Designed a clean dashboard experience for multi-location teams.",
    ],
    solution:
      "Built a responsive analytics experience with KPI cards, operational charts, category insights, and location-level performance views.",
    whatIBuilt:
      "Designed and implemented the dashboard interface, metric model, filtering behavior, and data presentation patterns for restaurant operations teams.",
    outcome: "Improved visibility across restaurant operations",
    architecture: ["Data model", "KPI layer", "Filters", "Dashboard UI", "Reports"],
    challenges: ["Metric clarity", "Responsive chart layouts", "Executive readability"],
    results: ["Faster reporting", "Cleaner operational insight", "Better decision support"],
    stack: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Analytics UI", "Power BI concepts"],
  },
  {
    slug: "crm-sales-pipeline",
    title: "CRM Sales Pipeline Automation",
    category: "CRM",
    image: "/temp.png",
    role: "CRM Automation Specialist",
    summary: [
      "Automated lead capture, follow-up, and sales-stage movement.",
      "Improved team visibility into open opportunities.",
      "Reduced manual reminders and duplicated admin work.",
    ],
    solution:
      "Configured CRM pipelines, triggers, automated campaigns, and reporting views for sales and service teams.",
    whatIBuilt:
      "Built CRM dashboards, automated stage transitions, after-call workflows, email/SMS campaigns, and pipeline reports with clear owner accountability.",
    outcome: "Cleaner lead management and faster follow-up",
    architecture: ["Lead capture", "CRM pipeline", "Workflow triggers", "Campaigns", "Reporting"],
    challenges: ["Duplicate contacts", "Changing follow-up rules", "Team adoption"],
    results: ["Faster response times", "Clearer ownership", "Less manual CRM work"],
    stack: ["GoHighLevel", "HubSpot concepts", "Zapier", "Make.com", "Webhooks", "SMS", "Email Automation"],
  },
  {
    slug: "modern-web-platform",
    title: "Modern Web Application Platform",
    category: "Web dev",
    image: "/temp.png",
    role: "Full Stack Developer",
    summary: [
      "Built responsive user experiences for startups and business teams.",
      "Created API-first backends with secure and maintainable structure.",
      "Delivered production-ready interfaces across devices.",
    ],
    solution:
      "Developed full-stack web applications with React, Next.js, Python, FastAPI, and secure REST APIs.",
    whatIBuilt:
      "Delivered product screens, authentication flows, API integrations, backend services, admin panels, and responsive interfaces with a focus on speed and maintainability.",
    outcome: "Reliable products ready to scale",
    architecture: ["Product UI", "API layer", "Database", "Integrations", "Deployment"],
    challenges: ["Scope clarity", "Performance", "Security requirements"],
    results: ["Cleaner UX", "Faster product iteration", "Maintainable codebase"],
    stack: ["React", "Next.js", "TypeScript", "Python", "FastAPI", "REST APIs", "Tailwind CSS", "Stripe"],
  },
  {
    slug: "cms-commerce-website",
    title: "CMS and Commerce Website",
    category: "CMS",
    image: "/temp.png",
    role: "WordPress / Webflow Developer",
    summary: [
      "Created editable marketing and CMS-driven product experiences.",
      "Integrated payments, maps, forms, and admin workflows.",
      "Balanced fast delivery with clean front-end execution.",
    ],
    solution:
      "Built custom WordPress, Laravel, and Webflow experiences for teams that need practical content control.",
    whatIBuilt:
      "Created custom pages, CMS collections, admin panels, payment integrations, maps, and responsive front-end components for content-heavy business websites.",
    outcome: "Flexible websites that teams can operate",
    architecture: ["CMS model", "Custom theme", "Forms", "Payments", "Admin workflow"],
    challenges: ["Editor usability", "Plugin quality", "Performance optimization"],
    results: ["Easier content updates", "Improved responsiveness", "Cleaner admin workflows"],
    stack: ["WordPress", "PHP", "Laravel", "Webflow", "HTML5", "CSS3", "SASS", "Bootstrap", "PayPal"],
  },
];

export const metrics = [
  { value: 50, suffix: "+", label: "Projects Delivered" },
  { value: 10, suffix: "K+", label: "Upwork Earnings" },
  { value: 1000, suffix: "+", label: "Opportunities Automated" },
  { value: 60, suffix: "/hr", label: "Hourly Rate" },
];

export const testimonials = [
  {
    quote:
      "Our AI cold-caller qualifies leads and books appointments on its own. Ajay set it all up - VAPI, Make.com, GHL - and it just works. My team does not touch cold calls anymore.",
    name: "Holly Addi",
    title: "Co-Founder @ Colectif",
  },
  {
    quote:
      "Ajay connected our CRM, task management, and communication workflows into one system. The result was faster routing and far fewer missed follow-ups.",
    name: "Operations Lead",
    title: "Financial Services Client",
  },
  {
    quote:
      "He understood the business process first, then built the automation around it. That made the final system useful from day one.",
    name: "Product Founder",
    title: "SaaS Startup",
  },
  {
    quote:
      "The dashboard made our operations easier to read. Sales, labor, and performance metrics finally lived in one clean view.",
    name: "Restaurant Operator",
    title: "Multi-location Team",
  },
];
