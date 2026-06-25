export type CaseStudy = {
  slug: string;
  title: string;
  eyebrow: string;
  problem: string;
  solution: string;
  outcome: string;
  architecture: string[];
  challenges: string[];
  results: string[];
  stack: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "ai-document-operations",
    title: "AI Document Operations Platform",
    eyebrow: "Operations automation",
    problem: "A service team was manually reviewing forms, extracting data, and routing follow-ups across disconnected tools.",
    solution: "Built an AI-assisted intake system with validation, human review queues, and automated handoffs into the core CRM.",
    outcome: "Reduced manual work by 90%",
    architecture: ["Document intake", "AI extraction", "Review workflow", "CRM sync", "Audit trail"],
    challenges: ["Inconsistent source formats", "Strict review requirements", "Multi-system ownership"],
    results: ["90% less manual triage", "Same-day processing", "Traceable exception handling"],
    stack: ["Next.js", "Node.js", "OpenAI", "PostgreSQL", "Queue workers"],
  },
  {
    slug: "revenue-workflow-engine",
    title: "Revenue Workflow Engine",
    eyebrow: "Sales systems",
    problem: "Lead follow-up relied on spreadsheets, inbox reminders, and manual task creation.",
    solution: "Designed a workflow engine that scores leads, creates tasks, triggers messages, and keeps systems in sync.",
    outcome: "Increased booked meetings",
    architecture: ["Lead capture", "Scoring rules", "Task automation", "Calendar routing", "Reporting layer"],
    challenges: ["Duplicate records", "Changing sales rules", "Low tolerance for missed handoffs"],
    results: ["Faster first response", "Cleaner pipeline data", "More qualified meetings booked"],
    stack: ["Next.js", "TypeScript", "HubSpot", "Calendly", "Serverless functions"],
  },
  {
    slug: "systems-integration-layer",
    title: "Systems Integration Layer",
    eyebrow: "Architecture",
    problem: "Business data lived across billing, support, product, and analytics platforms with no reliable source of truth.",
    solution: "Created a resilient integration layer with typed contracts, retries, alerts, and clean operational dashboards.",
    outcome: "Integrated multiple business systems",
    architecture: ["API gateway", "Typed adapters", "Event log", "Retry policies", "Observability"],
    challenges: ["Rate limits", "Partial failures", "Conflicting data ownership"],
    results: ["Lower support load", "Reliable syncs", "Clear system accountability"],
    stack: ["Node.js", "PostgreSQL", "Redis", "Stripe", "Segment"],
  },
  {
    slug: "saas-analytics-console",
    title: "SaaS Analytics Console",
    eyebrow: "Product engineering",
    problem: "Leadership needed operational visibility, but reports were slow, manual, and frequently inconsistent.",
    solution: "Built a self-serve analytics console with metric definitions, permissions, and scheduled summaries.",
    outcome: "10M+ API requests processed",
    architecture: ["Metric model", "Data API", "Permission layer", "Dashboard UI", "Digest automation"],
    challenges: ["Metric drift", "Large data windows", "Executive-level polish"],
    results: ["Trusted reporting", "Reduced analyst dependency", "Faster decisions"],
    stack: ["Next.js", "PostgreSQL", "Prisma", "Chart APIs", "Edge caching"],
  },
  {
    slug: "customer-support-ai",
    title: "Customer Support AI Assistant",
    eyebrow: "AI systems",
    problem: "Support agents repeatedly answered known questions while complex tickets waited too long.",
    solution: "Implemented a retrieval-backed assistant that drafts answers, cites internal sources, and escalates uncertainty.",
    outcome: "1000+ hours automated",
    architecture: ["Knowledge base", "Retrieval pipeline", "Draft assistant", "Escalation rules", "Feedback loop"],
    challenges: ["Source freshness", "Hallucination control", "Agent trust"],
    results: ["Faster replies", "More consistent answers", "More time for complex issues"],
    stack: ["OpenAI", "Vector search", "Next.js", "Zendesk", "Background jobs"],
  },
  {
    slug: "internal-automation-os",
    title: "Internal Automation OS",
    eyebrow: "Workflow design",
    problem: "Teams used disconnected scripts and manual checklists to keep recurring business processes moving.",
    solution: "Built a centralized automation control plane with triggers, approvals, ownership, and run history.",
    outcome: "20+ integrations built",
    architecture: ["Trigger catalog", "Approval flows", "Integration hub", "Run logs", "Admin console"],
    challenges: ["Nontechnical users", "Process exceptions", "Cross-team governance"],
    results: ["Fewer process misses", "Reusable automations", "Clear operational ownership"],
    stack: ["Next.js", "Temporal", "Slack", "Google APIs", "PostgreSQL"],
  },
];

export const metrics = [
  { value: 50, suffix: "+", label: "Projects Delivered" },
  { value: 10, suffix: "M+", label: "API Requests Processed" },
  { value: 1000, suffix: "+", label: "Hours Automated" },
  { value: 20, suffix: "+", label: "Integrations Built" },
];
