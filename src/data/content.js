// ---------------------------------------------------------------------------
// All site copy lives here. Edit this file to change the site — no JSX needed.
// ---------------------------------------------------------------------------

export const site = {
  url: 'https://harini-bala.vercel.app', // update after the first Vercel deploy
  title: 'Harini Raamiya Bala — Cost & Management Accountant | FP&A',
  description:
    'Cost & Management Accountant with 2 years in FP&A, management reporting and record-to-report at TCS. SAP S/4HANA, Power BI and Advanced Excel. Chennai, India.',
}

export const person = {
  name: 'Harini Raamiya Bala',
  shortName: 'Harini',
  initials: 'HB',
  role: 'Cost & Management Accountant',
  discipline: 'FP&A · Management Reporting · R2R',
  location: 'Chennai, India',
  email: 'cmaharinibala@gmail.com',
  phone: '+91 7358357417',
  phoneHref: '+917358357417',
  linkedin: 'https://www.linkedin.com/in/harini12/',
  linkedinLabel: 'in/harini12',
  resume: '/Harini_Raamiya_Bala.pdf',
  resumeFileName: 'Harini-Raamiya-Bala-CMA-Resume.pdf',
  photo: '/harini.jpg',
  headline: 'Numbers that hold up to the question behind them.',
  intro:
    'I plan, report and reconcile — turning ledgers and budgets into the variance story management actually needs. Two years across FP&A and record-to-report for a UK-based client at TCS, and statutory compliance for 80+ clients before that.',
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
  'record-to-report',
  'R2R',
  'business partnering',
  'financial analysis',
  // the analysis
  'variance analysis',
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
  'Advanced Excel',
  'pivot tables',
  'slicers',
  // compliance and audit
  'statutory compliance',
  'GST',
  'income tax',
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
  { value: 80, suffix: '+', label: 'GST clients filed monthly' },
  { value: 9.26, decimals: 2, label: 'B.Com CGPA, SRM' },
]

export const nav = [
  { id: 'work', label: 'Work' },
  { id: 'impact', label: 'Impact' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'about', label: 'About' },
  { id: 'resume', label: 'Résumé' },
]

// --- Featured project -------------------------------------------------------

export const project = {
  eyebrow: 'Featured project',
  title: 'Finance KPI Dashboard',
  kicker: 'An FP&A reporting pack, built twice — once in Excel, once for the web.',
  demoUrl: '/projects/finance-kpi-dashboard.html',
  excelUrl: '/projects/Finance-KPI-Dashboard.xlsm',
  excelFileName: 'Finance-KPI-Dashboard.xlsm',
  artifactUrl: 'https://claude.ai/artifact/Fgf4dTMKgD2wDMfCBfRnvi',
  metrics: [
    { value: '500', label: 'daily transactions' },
    { value: '6', label: 'departments' },
    { value: '4', label: 'regions' },
    { value: '17', label: 'months of data' },
  ],
  narrative: [
    {
      heading: 'The problem',
      body: 'Management reviews stall when the pack only answers the question that was asked last month. Revenue is up — against what? Which department, which region, and is that a real gain or a budget set too low? A static monthly report cannot follow a question to its second and third step.',
    },
    {
      heading: 'What I built',
      body: 'A financial performance model over 17 months of daily transactions, covering six departments and four regions. It started as a macro-enabled Excel workbook — 14 pivot tables, 6 charts and 3 slicers over a single flat fact table — then I rebuilt it for the web so the same analysis could be opened by anyone with a link, on any device, with no Excel and no macro warning.',
    },
    {
      heading: 'What it answers',
      body: 'Revenue and profit trend month by month; budget versus actual profit across EBITDA, gross profit, net profit, operating expenses and revenue; revenue, expenses and profit by department; where expenses concentrate across ten categories; the top ten customers by revenue; and revenue split by sales channel and region. Every filter recalculates the KPI tiles, all six charts and the underlying transaction table together, so a question can be followed all the way down to the rows behind the number.',
    },
    {
      heading: 'How I approached it',
      body: 'One clean fact table, then everything derived from it — no parallel copies of the data to fall out of sync. Profit is always revenue less expenses; variance is always actual against budget profit. Amounts follow the Indian numbering convention in lakh and crore, because the audience reads them that way.',
    },
  ],
  tools: ['Advanced Excel', 'Pivot tables & slicers', 'Variance analysis', 'KPI design', 'Data visualisation', 'Power BI thinking'],
  notes: [
    { k: 'Excel model', v: '14 pivot tables · 6 charts · 3 slicers · macro-enabled' },
    { k: 'Web rebuild', v: 'Filters, sortable ledger, light & dark — runs in the browser' },
    { k: 'Period', v: 'January 2025 – May 2026' },
  ],
}

// --- Impact -----------------------------------------------------------------

export const impact = {
  title: 'Impact',
  lede: 'The work that moved a number, not just a deadline.',
  items: [
    {
      figure: '50%',
      title: 'Cut reconciliation time by half',
      body: 'Built SAP S/4HANA report variants and Excel-based improvements for recurring reconciliation work — roughly 3 hours back per cycle, and a process that no longer depended on remembering the right selection screen.',
      tag: 'TCS',
    },
    {
      figure: '80+',
      title: 'GST returns filed monthly, on time',
      body: 'Monthly GST for 80+ clients and income tax returns for 25+ clients across diverse sectors, with consistent on-time submission and no compliance slippage.',
      tag: 'Smart Accountants',
    },
    {
      figure: 'KT',
      title: 'Led knowledge transfer with the client',
      body: 'Ran KT sessions with UK client stakeholders to capture business processes, accounting requirements, controls and reporting procedures — then documented them so the process survived a handover.',
      tag: 'TCS',
    },
    {
      figure: '★',
      title: 'Recognised at the TCS town hall',
      body: 'Named for outstanding performance on the BBC client account, and separately appreciated by management for automating the bank reconciliation process. Also a BPS Torch Bearers Award for representing the team across inter-branch events.',
      tag: 'Awards',
    },
  ],
}

// --- Skills -----------------------------------------------------------------

export const skills = [
  {
    group: 'Systems & tools',
    note: 'Where the work actually happens',
    items: [
      { name: 'SAP FICO S/4HANA', level: 'Daily', featured: true },
      { name: 'Advanced Excel', level: 'Daily', featured: true },
      { name: 'Power BI', level: 'Working' },
      { name: 'Blackline', level: 'Working' },
      { name: 'Zoho Books', level: 'Working' },
      { name: 'Tally Prime & ERP 9', level: 'Working' },
      { name: 'Compu-Tax', level: 'Working' },
    ],
  },
  {
    group: 'Core competencies',
    note: 'The finance work itself',
    items: [
      { name: 'Budgeting & forecasting' },
      { name: 'Variance analysis' },
      { name: 'MIS reporting' },
      { name: 'Cost control & analysis' },
      { name: 'Revenue & expense analysis' },
      { name: 'KPI analysis' },
      { name: 'Month-end close & accruals' },
      { name: 'Management reporting' },
      { name: 'Business partnering' },
    ],
  },
  {
    group: 'How I work',
    note: 'What colleagues notice',
    items: [
      { name: 'Analytical thinking' },
      { name: 'Stakeholder management' },
      { name: 'Time management' },
      { name: 'Adaptability' },
      { name: 'Attention to detail' },
    ],
  },
]

// --- Experience -------------------------------------------------------------

export const experience = [
  {
    role: 'Process Associate',
    company: 'Tata Consultancy Services Limited',
    period: 'Feb 2024 – Jan 2025',
    summary:
      'FP&A and finance operations for a UK-based client — financial reporting, management reporting and MIS for business performance review.',
    points: [
      'Prepared and analysed actual vs budget reports, ran variance analysis, and investigated the drivers behind revenue and expense movements for management review.',
      'Analysed revenue and expense trends and produced the recurring MIS and performance reporting that fed management decisions.',
      'Monitored financial and operational KPIs against targets and prior periods to surface performance gaps and the business drivers behind them.',
      'Performed GL accounting through month-end close — journal entries, accruals, prepayments, depreciation and reclassifications.',
      'Reconciled bank accounts by matching statements to SAP and book balances, investigating discrepancies and chasing open reconciling items to closure.',
      'Developed SAP S/4HANA report variants and Excel-based improvements for recurring reconciliations, cutting manual processing time by 50%.',
      'Led knowledge transfer sessions with client stakeholders covering processes, accounting requirements, controls and reporting procedures.',
    ],
    stack: ['SAP S/4HANA', 'Advanced Excel', 'Blackline'],
  },
  {
    role: 'Junior Executive',
    company: 'Smart Accountants',
    period: 'Jul 2022 – Aug 2023',
    summary:
      'End-to-end books, statutory compliance and internal audit across a portfolio of clients in multiple sectors.',
    points: [
      'Processed daily financial transactions, keeping books accurate and compliant with organisational policy.',
      'Wrote and documented Standard Operating Procedures to streamline workflows and remove repeated rework.',
      'Prepared, posted and reviewed monthly accruals and journal entries, consistently meeting close deadlines.',
      'Filed monthly GST returns for 80+ clients and income tax returns for 25+ clients across diverse sectors.',
      'Conducted internal audits for manufacturing clients — physical verification of fixed assets and closing stock, and vouching of invoices and bills.',
      'Drafted the audit observation reports presented to the audit committee each quarter.',
    ],
    stack: ['Tally Prime & ERP 9', 'Zoho Books', 'Compu-Tax'],
  },
]

// --- Education --------------------------------------------------------------

export const education = {
  cma: {
    title: 'Cost & Management Accountant',
    board: 'ICMAI',
    stages: [
      { stage: 'CMA Final', when: 'June 2026', score: '51.63%' },
      { stage: 'CMA Intermediate', when: 'December 2023', score: '56.62%' },
      { stage: 'CMA Foundation', when: 'June 2020', score: '73%' },
    ],
    note: 'Scored 60+ across key papers at all three levels — and across every subject at Foundation.',
  },
  academic: [
    { title: 'Bachelor of Commerce', where: 'SRM University', when: 'June 2022', score: 'CGPA 9.26' },
    { title: 'Senior Secondary', where: 'HSC', when: 'March 2019', score: '89.5%' },
    { title: 'Secondary', where: 'SSLC', when: 'March 2017', score: '88%' },
  ],
  certifications: [
    { title: 'Tally ERP 9 & Microsoft Office', where: 'Neo Orange Technology', when: 'May 2019', score: 'Grade A' },
    {
      title: 'Junior Grade Typewriting (English), 30 WPM',
      where: 'Government Technical Examinations',
      when: 'February 2022',
      score: 'First Class with Distinction',
    },
  ],
}

// --- About ------------------------------------------------------------------

export const about = {
  title: 'About',
  paragraphs: [
    'I am a Cost & Management Accountant based in Chennai, with two years across FP&A, financial reporting and record-to-report. At TCS I supported a UK-based client through the full monthly cycle — actual versus budget, variance analysis, KPI tracking, GL close and bank reconciliation — and led the knowledge transfer sessions that captured how all of it was meant to work.',
    'Before that, at Smart Accountants, I ran books and statutory compliance for a portfolio of clients: monthly GST for 80+ of them, income tax for 25+, internal audits for manufacturing clients down to physically verifying fixed assets and closing stock, and the quarterly observation reports that went to the audit committee.',
    'The part I enjoy most is the second question. A variance is only interesting once you know which department, which region and which driver produced it — so I tend to build the report that can answer that before anyone has to ask.',
  ],
  ahead: {
    title: 'Where I am headed',
    items: [
      {
        n: '01',
        title: 'Complete CMA Final',
        body: 'Finishing the ICMAI Final qualification and carrying the costing and strategic performance management syllabus straight into the day job.',
      },
      {
        n: '02',
        title: 'Deepen FP&A and analytics',
        body: 'Moving further into planning, forecasting and business partnering — and pairing it with Power BI so the reporting pack answers questions instead of just presenting them.',
      },
      {
        n: '03',
        title: 'Own a reporting cycle end to end',
        body: 'An FP&A role where I hold the close, the pack and the commentary for a business unit, and the numbers going to management are ones I stand behind.',
      },
    ],
  },
}

export const contact = {
  title: "Let's talk",
  lede: 'Open to FP&A, management reporting and financial analysis roles. The quickest way to reach me is email — I reply to everything.',
}
