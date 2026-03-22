export const caseStudies = [
  {
    id: 'vanguard-hvac',
    client: 'Vanguard HVAC Solutions',
    industry: 'B2B Services',
    brief: 'Automated commercial lead generation saving 20+ hours a week and increasing outbound volume by 300%.',
    challenge: 'The sales team was spending 20+ hours a week manually scraping LinkedIn and Apollo for commercial leads, resulting in low outreach volume and an inconsistent pipeline.',
    solution: {
      directive: 'Created a markdown SOP defining the target audience (Texas commercial HVAC owners), required data fields, and the threshold for a successful scrape.',
      orchestration: 'Deployed an LLM orchestrator to manage the workflow. It evaluates search parameters, triggers scraping tools, and handles rate-limit errors by dynamically adjusting filters (self-annealing).',
      execution: 'Built deterministic Python scripts to interface with the Apollo API and Google Sheets. The scripts execute the scrape, enrich missing emails via AnyMailFinder, and output a clean list.'
    },
    results: [
      '10x speed improvement in lead generation',
      'Completely autonomous execution',
      '300% increase in outbound volume'
    ],
    testimonial: {
      quote: "I was skeptical about handing over our lead gen to an AI, but the system Synapse built actually works. We've cut our prospecting time by 90% and the leads are surprisingly accurate. It's like having a full-time SDR who never sleeps.",
      author: "Sarah Jenkins",
      role: "Founder, Vanguard HVAC"
    },
    content: `
      <h2>The Bottleneck</h2>
      <p>Vanguard HVAC Solutions, a leading commercial HVAC provider in Texas, was facing a significant bottleneck in their sales pipeline. Their top-performing sales representatives were spending over 20 hours a week manually identifying prospects on LinkedIn, cross-referencing them on Apollo, and entering the data into their CRM.</p>
      <p>This manual process was not only soul-crushing for the sales team but also highly inefficient. Human error led to duplicate entries, and the sheer volume of manual work meant they were only reaching a fraction of their total addressable market.</p>
      
      <h2>The Agentic Solution</h2>
      <p>We implemented a fully autonomous lead generation engine using the DOE framework. Instead of a simple scraper, we built an intelligent agent capable of understanding the nuanced criteria of a "qualified lead" for Vanguard.</p>
      <p>The orchestrator agent dynamically adjusts search parameters based on the success rate of previous queries. If a specific region in Texas yields low results, the agent autonomously pivots to adjacent zip codes, ensuring a constant flow of high-quality leads.</p>
      
      <h2>The Technical Architecture</h2>
      <p>To ensure maximum reliability and speed, we decoupled the reasoning engine from the execution environment. Here is how the data flows:</p>
      <ul>
        <li><strong>Data Ingestion:</strong> A scheduled Python script securely connects to the Apollo.io API, pulling raw prospect data based on dynamic parameters set by the orchestrator.</li>
        <li><strong>Reasoning & Filtering:</strong> The raw data is passed to OpenAI o3-mini. The model evaluates each prospect against Vanguard's ideal customer profile (ICP), filtering out poor fits (e.g., residential contractors mislabeled as commercial).</li>
        <li><strong>Enrichment:</strong> Approved prospects are automatically routed through the AnyMailFinder API to verify contact information, ensuring a bounce rate of less than 2%.</li>
        <li><strong>CRM Sync:</strong> Finally, the enriched, verified leads are pushed directly into Vanguard's Salesforce instance, complete with drafted, hyper-personalized outreach emails ready for review.</li>
      </ul>

      <h2>Overcoming Edge Cases</h2>
      <p>Traditional automation breaks when APIs change or rate limits are hit. Our agentic workflow includes built-in self-correction. When the Apollo API returns a 429 (Too Many Requests) error, the agent automatically pauses, calculates the required backoff time, and resumes execution without human intervention. If an email cannot be verified, the agent flags the record for manual review rather than halting the entire batch.</p>

      <h2>The Impact & ROI</h2>
      <p>The results were immediate and transformative. The sales team reclaimed 20 hours a week, which they redirected towards closing deals rather than prospecting. The automated system now generates 3x the volume of qualified leads, running silently in the background 24/7. Vanguard estimates an annualized ROI of over 450% based on the increased pipeline velocity and recovered labor hours.</p>
    `
  },
  {
    id: 'aura-dental',
    client: 'Aura Dental Marketing',
    industry: 'Creative Agency',
    brief: 'Zero-touch client onboarding reducing setup time from 4 hours to 15 seconds.',
    challenge: 'Client onboarding was a manual, disjointed process involving multiple emails, CRM updates, and folder creations, leading to delayed project kickoffs and human error.',
    solution: {
      directive: 'Mapped out the onboarding sequence into a single onboard_client.md file, detailing exact email templates, ClickUp status changes, and Google Drive folder structures.',
      orchestration: 'An agent listens for a signed contract webhook. It reads the directive, extracts client details from the contract, and routes the data to the appropriate execution scripts in sequence.',
      execution: 'Scripts interact with the ClickUp API to create a project board, the Google Drive API to provision folders, and an MCP server to send the personalized welcome email.'
    },
    results: [
      'Onboarding time reduced from 4 hours to 15 seconds',
      'Zero missed steps or human errors',
      'Flawless first impression for new clients'
    ],
    testimonial: {
      quote: "The onboarding workflow they implemented saved my agency. We used to drop the ball constantly when new clients signed. Now, the moment a contract is signed, folders are created, emails go out, and ClickUp is populated. It's flawless.",
      author: "Marcus Thorne",
      role: "Creative Director, Aura Dental"
    },
    content: `
      <h2>The Bottleneck</h2>
      <p>Aura Dental Marketing was scaling rapidly, signing 10-15 new dental practices per month. However, their onboarding process was entirely manual. When a contract was signed, an account manager had to manually create Google Drive folders, set up a ClickUp workspace, draft a welcome email, and update the CRM.</p>
      <p>This process took an average of 4 hours per client and was prone to errors. Missing a step meant a delayed kickoff, frustrating new clients right at the start of the relationship.</p>
      
      <h2>The Agentic Solution</h2>
      <p>We designed a "Zero-Touch Onboarding" workflow. The trigger is simply the webhook from their e-signature software (PandaDoc). From there, the Agentic Workflow takes over completely.</p>
      <p>The orchestrator extracts key variables from the signed contract (Client Name, Practice Size, Services Purchased) and uses these variables to dynamically generate the required assets.</p>
      
      <h2>The Technical Orchestration</h2>
      <p>The beauty of this system lies in its seamless integration across multiple disparate platforms:</p>
      <ul>
        <li><strong>Webhook Listener:</strong> A secure endpoint listens for the "Document Completed" event from PandaDoc, immediately capturing the signed contract payload.</li>
        <li><strong>Intelligent Parsing:</strong> Gemini 3.1 Pro analyzes the contract text, extracting the client's name, the specific marketing packages purchased (e.g., SEO, Paid Ads, Website Redesign), and key dates.</li>
        <li><strong>Workspace Provisioning:</strong> Deterministic scripts use the Google Workspace API to clone a master folder structure, renaming it for the new client and adjusting permissions automatically.</li>
        <li><strong>Project Management Setup:</strong> The ClickUp API is called to instantiate a new project board. Crucially, the agent only populates the board with task templates relevant to the specific services the client purchased, avoiding clutter.</li>
      </ul>

      <h2>Handling Ambiguity</h2>
      <p>Sometimes, contracts contain custom clauses or non-standard service bundles. Instead of failing, the Gemini orchestrator recognizes when a package doesn't match the standard templates. It provisions the core workspace and sends an alert to the account manager via Slack, summarizing the custom requirements and providing a direct link to the newly created ClickUp board for manual adjustment.</p>

      <h2>The Impact & ROI</h2>
      <p>What used to be a stressful, half-day administrative burden is now an invisible, instantaneous process. Account managers wake up to fully provisioned workspaces and clients receive their welcome materials within seconds of signing. The agency has increased its capacity to take on new clients by 40% without adding administrative headcount, ensuring a flawless first impression every single time.</p>
    `
  },
  {
    id: 'nexus-financial',
    client: 'Nexus Financial Advisors',
    industry: 'Wealth Management',
    brief: 'Automated month-end financial reconciliation, saving 100+ hours of analyst time per month.',
    challenge: 'Monthly financial reporting and transaction reconciliation took a team of 3 analysts 4 full days, bottlenecking leadership decisions.',
    solution: {
      directive: 'Defined strict reconciliation rules, anomaly detection thresholds, and the exact formatting required for the final leadership PDF report.',
      orchestration: 'A scheduled agent wakes up on the 1st of the month. It pulls data, runs the reconciliation scripts, reflects on any discrepancies, and flags only the unresolvable exceptions for human review.',
      execution: 'Fast, deterministic code connects to accounting software APIs, processes thousands of rows of transaction data in milliseconds, and generates a polished PDF report.'
    },
    results: [
      'Reduced a 4-day manual process to 5 minutes',
      'Saved over 100 hours of analyst time per month',
      '100% accuracy in matched transactions'
    ],
    testimonial: {
      quote: "We were drowning in manual data entry for our end-of-month reporting. The Agentic workflow Synapse set up handles the reconciliation automatically and only flags the weird stuff for me to look at. Saved us at least 3 days a month.",
      author: "Elena Rodriguez",
      role: "VP of Finance, Nexus"
    },
    content: `
      <h2>The Bottleneck</h2>
      <p>Nexus Financial Advisors manages over $500M in assets. Every month, their finance team faced a grueling 4-day sprint to reconcile transactions across multiple bank feeds, brokerage accounts, and their internal accounting software.</p>
      <p>The process involved downloading dozens of CSV files, running complex VLOOKUPs in Excel, and manually investigating discrepancies. It was slow, error-prone, and kept highly paid analysts doing basic data entry.</p>
      
      <h2>The Agentic Solution</h2>
      <p>We built an autonomous reconciliation engine. On the 1st of every month, the system automatically authenticates with the necessary financial APIs, pulls the raw data, and begins the matching process.</p>
      <p>The true power of the system lies in its "Reflection" phase. When a transaction doesn't match perfectly (e.g., due to a slight date mismatch or a combined fee), the LLM orchestrator analyzes the anomaly, applies fuzzy matching logic, and attempts to resolve it. Only truly unresolvable exceptions are flagged for human review.</p>
      
      <h2>The Reconciliation Engine</h2>
      <p>This workflow requires absolute precision and security. We architected a robust, multi-stage pipeline:</p>
      <ul>
        <li><strong>Secure Data Aggregation:</strong> Python scripts securely authenticate with the Plaid API and QuickBooks Online, pulling thousands of transaction records into a secure, encrypted temporary database.</li>
        <li><strong>Deterministic Matching:</strong> A high-speed Pandas script performs the initial pass, matching 85-90% of transactions based on exact date, amount, and vendor ID criteria.</li>
        <li><strong>Agentic Resolution:</strong> The remaining 10-15% of unmatched transactions are passed to the reasoning engine. The model analyzes vendor name variations (e.g., "SQ *COFFEE SHOP" vs "Square Coffee"), date slippage (weekend processing delays), and bundled transactions, successfully resolving the majority of discrepancies.</li>
        <li><strong>Executive Reporting:</strong> Once reconciliation is complete, the system generates a beautifully formatted PDF report via ReportLab, summarizing the month's financials and highlighting any remaining anomalies.</li>
      </ul>

      <h2>Human-in-the-Loop Fallback</h2>
      <p>Financial data requires absolute certainty. If the reasoning engine's confidence score for a fuzzy match falls below 95%, it does not force the reconciliation. Instead, it compiles these edge cases into a clean, actionable dashboard for the lead analyst. The analyst simply clicks "Approve" or "Reject" on the agent's proposed matches, training the system for the next month.</p>

      <h2>The Impact & ROI</h2>
      <p>The 4-day reconciliation sprint has been reduced to a 5-minute automated run. The finance team now spends their time analyzing the data and advising clients, rather than wrangling spreadsheets. The firm estimates a cost savings of over $120,000 annually in recovered analyst hours, while completely eliminating manual data entry errors.</p>
    `
  }
];
