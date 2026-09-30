// ---------------------------------------------------------------------------
// All site copy lives here. Edit this file to change the site — no JSX needed.
// ---------------------------------------------------------------------------

export const site = {
  url: 'https://harini-bala.vercel.app', // update after the first Vercel deploy
  title: 'Harini Raamiya Bala — Cost & Management Accountant | FP&A',
  description:
    'CMA-qualified finance professional working in FP&A, financial analysis, record to report and management reporting. SAP S/4HANA, Power BI and Microsoft Excel. Chennai, India.',
}

export const person = {
  name: 'Harini Raamiya Bala',
  shortName: 'Harini',
  initials: 'HB',
  role: 'Cost & Management Accountant',
  discipline: 'FP&A · Financial Analysis · Record to Report · Management Reporting',
  location: 'Chennai, India',
  email: 'cmaharinibala@gmail.com',
  phone: '+91 7358357417',
  phoneHref: '+917358357417',
  linkedin: 'https://www.linkedin.com/in/harini12/',
  linkedinLabel: 'in/harini12',
  resume: '/Harini_Raamiya_Bala.pdf',
  resumeFileName: 'Harini-Raamiya-Bala-CMA-Resume.pdf',
  avatar: '/harini-avatar.jpg',
  headline:
    'I turn numbers into narratives, insights into strategy, and financial data into smarter decisions.',
  intro:
    'A CMA-qualified finance professional with a strong interest in FP&A, financial analysis, problem-solving and business decision-making. I combine my finance knowledge with hands-on experience in Excel and Power BI, showcased through the practical projects below.',
}

// ---------------------------------------------------------------------------
// The FP&A / finance vocabulary that gets emphasised wherever it appears in the
// prose below — the same terms a résumé would bold, so a recruiter scanning the
// page catches them. Add or remove terms here; matching is case-insensitive and
// the longest phrase always wins ("bank reconciliation" over "reconciliation").
// Keep the list tight: highlighting everything highlights nothing.
// ---------------------------------------------------------------------------

export const keywords = [
  // the discipline
  'FP&A',
  'financial planning',
  'financial reporting',
  'management reporting',
  'record to report',
  'record-to-report',
  'R2R',
  'business partnering',
  'financial analysis',
  // the analysis
  'variance analysis',
  'variance commentary',
  'actual vs budget',
  'budget versus actual',
  'budgeting',
  'forecasting',
  'cost control',
  'profitability',
  'KPIs',
  'KPI',
  'MIS',
  'EBITDA',
  'gross profit',
  'net profit',
  'operating expenses',
  // the close
  'month-end close',
  'GL accounting',
  'journal entries',
  'accruals',
  'prepayments',
  'bank reconciliation',
  'reconciliations',
  'reconciliation',
  // the systems
  'SAP S/4HANA',
  'SAP FICO S/4HANA',
  'SAP FICO',
  'SAP',
  'Power BI',
  'Microsoft Excel',
  'pivot tables',
  'slicers',
  // compliance and audit
  'statutory compliance',
  'GST',
  'internal audits',
  'internal audit',
  'fixed assets',
  'audit committee',
  'knowledge transfer',
  // the qualification
  'CMA',
  'ICMAI',
]

export const heroStats = [
  { value: 2, suffix: ' yrs', label: 'FP&A & R2R experience' },
  { value: 50, suffix: '%', label: 'Manual processing time cut' },
  { value: 9.26, decimals: 2, label: 'B.Com CGPA, SRM' },
]

// Order here drives the nav, the footer links and the scroll-spy, and must match
// the order the sections are rendered in App.jsx.
export const nav = [
  { id: 'resume', label: 'Résumé', accent: true },
  { id: 'projects', label: 'Projects' },
  { id: 'capabilities', label: 'Capabilities' },
  { id: 'about', label: 'About' },
  { id: 'vision', label: 'Vision' },
]

export const resume = {
  title: 'The one-pager',
  lede: 'Read it here, or take the PDF with you.',
  highlights: [
    'FP&A · budgeting, forecasting, variance analysis',
    'Record to report · month-end close, accruals, reconciliations',
    'SAP FICO S/4HANA · report variants, GL, bank reconciliation',
    'Microsoft Excel & Power BI · dashboards, modelling, reporting',
  ],
}

// --- Featured projects ------------------------------------------------------
// The section header, then one entry per project. Each project renders the same
// way: metric strip, live demo, case study, insights. Add a third by appending
// to `projects` — drop its dashboard into public/projects/ first so the iframe
// stays same-origin and keeps following the site's dark/light toggle.

export const work = {
  eyebrow: 'Selected work',
  title: 'Finance dashboards',
  lede: 'Two dashboards built from raw transaction data — one on operating KPIs, one on the P&L itself. Both run live on this page: change a filter and every tile, chart and row recalculates.',
}

export const projects = [
  {
    id: 'finance-kpi-dashboard',
    title: 'Finance KPI Dashboard',
    kicker:
      'An interactive finance dashboard that tracks revenue, profit, cost and budget performance across regions, departments, channels and customers.',
    demoUrl: '/projects/finance-kpi-dashboard.html',
    demoLabel: 'finance-kpi-dashboard',
    demoCaption:
      'This is the real dashboard, running here on the page — change the year, region or month filters and every tile, chart and row recalculates.',
    excelUrl: '/projects/Finance-KPI-Dashboard.xlsm',
    excelFileName: 'Finance-KPI-Dashboard.xlsm',
    dataset:
      '500 daily transactions · Jan 2025 – May 2026 · 4 regions · 6 departments · 3 sales channels · 5 product categories · 10 expense categories',
    metrics: [
      { value: '₹8.51 Cr', label: 'Revenue analysed' },
      { value: '51.0%', label: 'Profit margin' },
      { value: '+1.0%', label: 'Profit vs budget' },
      { value: '243', label: 'Customers tracked' },
    ],
    narrative: [
      {
        heading: 'The problem',
        body: 'A static monthly report shows what happened, but not why. Management needs to see which region, department or cost line is driving performance, and whether results are genuinely beating the budget.',
      },
      {
        heading: 'What I built',
        body: 'A macro-enabled Excel dashboard on a single clean data table, with 7 pivot tables, 6 charts and Month and Region slicers. Every KPI tile and chart updates together when a filter changes. I also rebuilt it for the web so anyone can open it on any device.',
      },
      {
        heading: 'What it tracks',
        bullets: [
          'Revenue, expenses and profit trend by month',
          'Actual vs budget profit across revenue, gross profit, EBITDA, operating expenses and net profit',
          'Performance by region, department and sales channel',
          'Expense mix across 10 cost categories',
          'Top 10 customers by revenue',
        ],
      },
    ],
    insights: [
      {
        n: '01',
        title: 'Budget beaten on both lines',
        body: 'Revenue came in 0.2% above budget and profit 1.0% above, on a healthy 51% margin.',
      },
      {
        n: '02',
        title: 'Monthly margins swing but revenue stays steady',
        body: 'Monthly revenue held between ₹44 L and ₹57 L, while margin moved from 43.9% (Jul 2025) to 56.9% (Jun 2025). The swings come from costs, not sales.',
      },
      {
        n: '03',
        title: 'West leads on size, East on efficiency',
        body: 'West brings in 28% of revenue (₹2.40 Cr), but East earns the best margin at 53.1%. South is the only region below its revenue budget (−0.5%).',
      },
      {
        n: '04',
        title: 'Operations missed revenue but beat profit',
        body: 'It is the largest department (₹1.48 Cr) and took the biggest revenue-budget miss (−1.6%), yet it still beat its profit budget — on the best cost control of any department (53.9% margin).',
      },
      {
        n: '05',
        title: 'Three cost lines drive half the spend',
        body: 'Salaries (27%), marketing (13%) and rent (12%) make up 52% of total expenses, so that is where cost control has the most effect.',
      },
      {
        n: '06',
        title: 'Low customer concentration risk',
        body: 'The top 10 customers contribute only 11% of revenue across 243 customers, so no single account can move the results.',
      },
      {
        n: '07',
        title: 'Margins are improving',
        body: 'The 2026 year-to-date margin is 52.0%, up from 50.6% in 2025.',
      },
    ],
    tools: [
      'Microsoft Excel',
      'Pivot tables & slicers',
      'Excel macros',
      'Variance analysis',
      'KPI analysis',
      'Dashboard design',
    ],
  },
  {
    id: 'pl-dashboard',
    title: 'P&L Dashboard',
    kicker:
      'A profit and loss dashboard that walks revenue all the way down to net profit, then splits every line by region, business unit and month — with the transactions behind each number one scroll away.',
    demoUrl: '/projects/pl-dashboard.html',
    demoLabel: 'pl-dashboard',
    demoCaption:
      'The full P&L, live on the page — pick a region, business unit or month and the waterfall, the KPI tiles, the margin trend and all 499 transaction rows recalculate together.',
    excelUrl: '/projects/PL-Dashboard.xlsm',
    excelFileName: 'PL-Dashboard.xlsm',
    dataset:
      '499 transactions · Jan – Dec 2024 · 4 regions · 4 business units · 20 products · 220 customers',
    metrics: [
      { value: '₹14.92 Cr', label: 'Revenue analysed' },
      { value: '42.5%', label: 'Gross margin' },
      { value: '16.8%', label: 'Net margin' },
      { value: '+8.7%', label: 'Revenue vs budget' },
    ],
    narrative: [
      {
        heading: 'The problem',
        body: 'A P&L statement gives one number per line and stops there. It does not show where the gap between revenue and net profit opens up, which region is carrying the margin, or which business unit is quietly losing it — the questions management actually asks in the review meeting.',
      },
      {
        heading: 'What I built',
        body: 'A macro-enabled Excel workbook built on one clean transaction table, with 10 pivot tables, 9 charts and Year, Month and Region slicers feeding a single dashboard sheet. A waterfall runs revenue through COGS, operating expenses, interest and tax down to net profit, and the same rows drive the margin trend, budget versus actual and the regional and business unit splits. I then rebuilt it for the web, where the filters are shared across every chart, so they all answer the same question at the same time.',
      },
      {
        heading: 'What it tracks',
        bullets: [
          'Revenue to net profit as a waterfall: gross profit, EBITDA, interest and tax',
          'Monthly revenue, gross profit and net profit trend, with net profit margin by month',
          'Actual vs budget across revenue, gross profit, operating expenses and net profit',
          'Revenue, gross profit and net profit by region and by business unit',
          'Operating expense trend and the top 10 customers by revenue',
          'All 499 transaction rows, sortable on any column',
        ],
      },
    ],
    insights: [
      {
        n: '01',
        title: 'Every P&L line came in ahead of plan',
        body: 'Revenue, gross profit and net profit each landed 8.7% above budget, and operating expenses ran 4.8% under — favourable on both sides of the P&L.',
      },
      {
        n: '02',
        title: 'Where each ₹100 of revenue goes',
        body: 'COGS takes ₹57.50 and operating expenses ₹20.00, leaving ₹22.50 of EBITDA. Interest and tax take ₹5.70, so ₹16.80 lands as net profit.',
      },
      {
        n: '03',
        title: 'Revenue is steady, margin is not',
        body: 'Monthly revenue stayed inside ₹1.17 Cr – ₹1.33 Cr all year, while net margin ranged from 15.2% (Apr) to 18.5% (Dec). The result is set by costs, not by sales.',
      },
      {
        n: '04',
        title: 'Operating expenses are the swing factor',
        body: 'Monthly opex moved between ₹23.6 L and ₹26.4 L. December ran the leanest and returned the best margin of the year; September spent the most and gave back a point of margin on record revenue.',
      },
      {
        n: '05',
        title: 'The second half outperformed the first',
        body: 'Net margin improved from 16.5% in H1 to 17.1% in H2 on almost flat revenue (₹7.35 Cr to ₹7.56 Cr) — an efficiency gain, not a growth one.',
      },
      {
        n: '06',
        title: 'North sells the most, but margin barely moves',
        body: 'North contributes 29.7% of revenue against South at 21.7%, yet gross margin sits between 42.3% and 42.7% in every region and net margin within one point (16.4% – 17.3%). Scale is not buying efficiency here.',
      },
      {
        n: '07',
        title: 'No customer concentration risk',
        body: 'The top 10 of 220 customers account for just 7.3% of revenue, so no single account can move the P&L.',
      },
      {
        n: '08',
        title: 'One transaction in twenty loses money',
        body: '26 of 499 transactions closed below the line — ₹44.3 L of revenue returning −₹3.1 L of net profit. Small enough to absorb, specific enough to go and fix.',
      },
    ],
    tools: [
      'Microsoft Excel',
      'Pivot tables & slicers',
      'P&L analysis',
      'Variance analysis',
      'Margin analysis',
      'Dashboard design',
    ],
  },
]

// --- Capabilities -----------------------------------------------------------
// One flat list. `key` flags the cards shown under "Key Skills"; every other tab
// filters on `category`, so a card can appear in both.

export const capabilityTabs = [
  { id: 'key', label: 'Key Skills' },
  { id: 'finance', label: 'Finance' },
  { id: 'technical', label: 'Technical' },
  { id: 'soft', label: 'Soft Skills' },
  { id: 'other', label: 'Other Skills' },
]

export const capabilities = [
  // finance
  { code: 'FR', title: 'Financial Reporting', description: 'Financial statements and reporting', category: 'finance', key: true },
  { code: 'FS', title: 'Financial Statement Analysis', description: 'Analysis of financial performance', category: 'finance', key: true },
  { code: 'BF', title: 'Budgeting & Forecasting', description: 'Planning and forward-looking analysis', category: 'finance', key: true },
  { code: 'VA', title: 'Variance Analysis', description: 'Budget vs actual analysis', category: 'finance', key: true },
  { code: 'FM', title: 'Financial Modelling', description: 'Forecasting, valuation and scenarios', category: 'finance', key: true },
  { code: 'CO', title: 'Costing', description: 'Cost analysis and cost management', category: 'finance', key: true },
  { code: 'FN', title: 'Financial Management', description: 'Financial planning and management', category: 'finance', key: true },
  { code: 'MR', title: 'MIS & Management Reporting', description: 'Recurring performance and MIS reports', category: 'finance' },
  { code: 'KP', title: 'KPI Analysis', description: 'Tracking performance against targets', category: 'finance' },
  { code: 'MC', title: 'Month-End Close', description: 'Journals, accruals, prepayments and reclassifications', category: 'finance' },
  { code: 'RC', title: 'Reconciliations', description: 'Bank and balance sheet reconciliations', category: 'finance' },
  // technical
  { code: 'XL', title: 'Microsoft Excel', description: 'Financial analysis, dashboards and modelling', category: 'technical', key: true },
  { code: 'SAP', title: 'SAP FICO (S/4HANA)', description: 'GL, month-end close and reconciliations', category: 'technical', key: true },
  { code: 'BI', title: 'Power BI', description: 'Interactive dashboards and reporting', category: 'technical', key: true },
  { code: 'AI', title: 'Artificial Intelligence', description: 'AI tools for research, analysis and productivity', category: 'technical', key: true },
  { code: 'BL', title: 'BlackLine', description: 'Reconciliation and close management', category: 'technical' },
  { code: 'ZB', title: 'Zoho Books', description: 'Cloud accounting', category: 'technical' },
  { code: 'TP', title: 'Tally Prime', description: 'Accounting and bookkeeping', category: 'technical' },
  // soft
  { code: 'AT', title: 'Analytical Thinking', description: 'Structured financial problem solving', category: 'soft', key: true },
  { code: 'SM', title: 'Stakeholder Management', description: 'Working with client and business stakeholders', category: 'soft' },
  { code: 'TM', title: 'Time Management', description: 'Delivering to close and reporting deadlines', category: 'soft' },
  { code: 'AD', title: 'Adaptability', description: 'Learning new processes and tools quickly', category: 'soft' },
  { code: 'DT', title: 'Attention to Detail', description: 'Accuracy in numbers and reporting', category: 'soft' },
  // other
  { code: 'KT', title: 'Knowledge Transfer', description: 'Capturing and documenting client processes', category: 'other' },
  { code: 'SOP', title: 'SOP Documentation', description: 'Writing clear standard operating procedures', category: 'other' },
  { code: 'IA', title: 'Internal Audit', description: 'Verification, vouching and audit reporting', category: 'other' },
]

// --- Experience -------------------------------------------------------------

export const experience = [
  {
    role: 'Process Associate, FP&A & R2R',
    company: 'Tata Consultancy Services',
    period: 'Feb 2024 – Jan 2025',
    summary: 'UK-based client',
    points: [
      'Prepared actual vs budget reports and analysed the key drivers of revenue and expense variances.',
      'Delivered recurring MIS and performance reports with insights for management decisions.',
      'Tracked financial and operational KPIs against targets and prior periods to identify performance gaps.',
      'Handled month-end close: journal entries, accruals, prepayments, depreciation and reclassifications.',
      'Reconciled bank accounts against SAP and book balances and resolved open items.',
      'Cut manual reconciliation time by 50% using SAP S/4HANA report variants and Excel tools.',
      'Led knowledge transfer sessions with client stakeholders.',
      'Recognised: TCS town hall award for outstanding performance, management appreciation for automating bank reconciliation, BPS Torch Bearers Award.',
    ],
    stack: ['SAP S/4HANA', 'Microsoft Excel', 'BlackLine'],
  },
  {
    role: 'Junior Executive',
    company: 'Smart Accountants',
    period: 'Jul 2022 – Aug 2023',
    points: [
      'Maintained books of accounts and processed daily financial transactions.',
      'Prepared and posted monthly accruals and journal entries within close deadlines.',
      'Wrote SOPs that streamlined workflows and reduced inefficiencies.',
      'Conducted internal audits for manufacturing clients and drafted quarterly audit observation reports for the audit committee.',
      'Handled statutory compliance, including GST.',
    ],
    stack: ['Tally Prime', 'Zoho Books'],
  },
]

// --- Education --------------------------------------------------------------

export const education = [
  {
    title: 'Cost & Management Accountant (CMA)',
    where: 'ICMAI',
    when: 'Qualified June 2026',
  },
  {
    title: 'Bachelor of Commerce',
    where: 'SRM University',
    when: '2022',
    score: 'CGPA 9.26',
  },
]

// --- About ------------------------------------------------------------------

export const about = {
  title: 'About',
  paragraphs: [
    "I'm a CMA-qualified finance professional with experience across FP&A, record to report and accounting. At TCS, I supported a UK-based client with actual vs budget analysis, variance commentary, MIS reporting, KPI tracking and month-end close. I enjoy finding the story behind the numbers and presenting it in a way that helps people decide.",
  ],
  experienceTitle: "Where I've worked",
  experienceNote: 'Two years across FP&A, record to report and accounting.',
  educationTitle: 'Education',
  educationNote: 'The qualification and the degree behind it.',
}

// --- Vision -----------------------------------------------------------------

export const vision = {
  title: 'Vision',
  lede: 'Where I am headed',
  body: "I want to grow into a finance business partner: someone who doesn't just report the numbers, but explains what's driving them and helps leaders act on it. My focus is on building strong FP&A skills in financial analysis, performance reporting and data-driven insight, using tools like Excel and Power BI to make finance faster, clearer and more useful to the business.",
  items: [
    {
      n: '01',
      title: 'Deepen FP&A and analytics',
      body: 'Moving further into planning, forecasting and business partnering — and pairing it with Power BI so the reporting pack answers questions instead of just presenting them.',
    },
    {
      n: '02',
      title: 'Own a reporting cycle end to end',
      body: 'An FP&A role where I hold the close, the pack and the commentary for a business unit, and the numbers going to management are ones I stand behind.',
    },
  ],
}

export const contact = {
  title: "Let's talk",
  lede: 'Open to FP&A, management reporting and financial analysis roles. The quickest way to reach me is email — I reply to everything.',
}
