// --- OPTIMIZATION: Content Database ---
const contentDB = {
    'p-project-content': `
        <div class="content-header">
             <div class="content-header-left">
                <button class="btn btn-back" onclick="history.back()"><i class="fas fa-chevron-left"></i> Back</button>
                <h1>Project (Core DNA)</h1>
            </div>
            <div class="actions">
                <span style="font-size:0.9rem; color:var(--light-font); margin-right:1rem;">Last saved: May 08, 2025 10:15 AM</span>
                <button class="btn btn-go-to-deal"><i class="fas fa-history"></i> View History</button>
                <button class="btn btn-primary btn-small"><i class="fas fa-save"></i> Save Progress</button>
            </div>
        </div>
        <div class="assessment-section">
            <h2><i class="fas fa-low-vision p-icon" style="color:var(--p-project-color);"></i>Vision Assessment</h2>
            <div class="assessment-item">
                <label for="vision-statement">Company's Articulated Long-Term Vision</label>
                <div class="input-area">
                    <textarea id="vision-statement" rows="5" placeholder="Describe the company's long-term vision...">To be the leading platform for trustworthy AI-driven insights, enabling smarter, more efficient, and equitable city governance globally.</textarea>
                    <button class="comment-btn-inline" title="Comments"><i class="fas fa-comment-dots"></i></button>
                </div>
                <div class="ai-assist-panel">
                    <h4><i class="fas fa-lightbulb"></i> AI Insights & Suggestions</h4>
                    <p><em>Document Scan ('Investor Pitch Deck Q1 2025', pg. 3):</em> "Our vision is to power the smart cities of tomorrow with ethical AI..." - <a href="#">View Source</a></p>
                    <p><strong>Suggestion:</strong> Consider adding a specific target (e.g., "powering X% of major global cities by 2030").</p>
                    <button class="btn btn-ai btn-secondary btn-small">Apply Suggestion</button>
                </div>
            </div>
             <div class="assessment-item">
                <label for="vision-clarity">Clarity & Communication of Vision</label>
                <div class="input-area">
                    <textarea id="vision-clarity" rows="4" placeholder="How clearly is the vision communicated...?">Vision is frequently cited in all-hands meetings and external comms. Employee survey indicates 80% clarity score.</textarea>
                    <button class="comment-btn-inline" title="Comments"><i class="fas fa-comment-dots"></i></button>
                </div>
            </div>
        </div>
        <div class="assessment-section">
            <h2><i class="fas fa-flag-checkered p-icon" style="color:var(--p-project-color);"></i>Mission Assessment</h2>
             <div class="assessment-item">
                <label for="mission-statement">Company's Core Mission</label>
                <div class="input-area">
                    <textarea id="mission-statement" rows="5" placeholder="What is the company's core purpose...?">Our mission is to provide cities with robust AI governance tools and actionable analytics to improve urban services, ensure data privacy, and foster resident trust.</textarea>
                    <button class="comment-btn-inline" title="Comments"><i class="fas fa-comment-dots"></i></button>
                </div>
                 <div class="ai-assist-panel">
                    <h4><i class="fas fa-lightbulb"></i> AI Insights & Suggestions</h4>
                    <p><em>Comparison:</em> Competitor CityZen focuses heavily on "citizen engagement analytics". Is there an opportunity to emphasize governance differentiation more?</p>
                </div>
            </div>
            <div class="assessment-item">
                <label for="mission-alignment">Alignment of Mission with Daily Operations</label>
                <div class="input-area">
                    <textarea id="mission-alignment" rows="4" placeholder="How well do daily activities align...?">Product development roadmap prioritizes data lineage and bias detection features. Sales team focuses on municipal clients concerned with data ethics.</textarea>
                    <button class="comment-btn-inline" title="Comments"><i class="fas fa-comment-dots"></i></button>
                </div>
            </div>
        </div>
        <div class="assessment-section">
             <h2><i class="fas fa-sitemap p-icon" style="color:var(--p-project-color);"></i>Strategy Clarity</h2>
             <div class="assessment-item">
                <label for="strategy-main">Main Strategic Pillars (3-5 Years)</label>
                <div class="input-area">
                    <textarea id="strategy-main" rows="6" placeholder="Outline key strategic pillars...">1. Establish Leadership in AI Governance for Cities. 2. Expand Analytics Suite for Core Urban Services (Transport, Utilities, Safety). 3. Build Strategic Alliances with Cloud Providers & System Integrators. 4. Develop Talent Pool in Ethical AI & Urban Data Science. 5. Achieve SOC 2 Type II & relevant Gov certifications.</textarea>
                    <button class="comment-btn-inline" title="Comments"><i class="fas fa-comment-dots"></i></button>
                </div>
            </div>
             <div class="assessment-item">
                <label for="strategy-competitive">Competitive Differentiation & Market Positioning</label>
                <div class="input-area">
                    <textarea id="strategy-competitive" rows="5" placeholder="How does the strategy differentiate...?">Focus on integrated Governance + Analytics differentiates from pure analytics players. Positioned as the 'Trust Layer' for smart city AI. Emphasis on explainability and regulatory compliance support.</textarea>
                    <button class="comment-btn-inline" title="Comments"><i class="fas fa-comment-dots"></i></button>
                </div>
                 <div class="ai-assist-panel">
                    <h4><i class="fas fa-lightbulb"></i> AI Insights & Suggestions</h4>
                    <p><em>Market Trend:</em> Increasing demand for edge AI processing in cities. Strategy impact?</p>
                    <p><em>Risk Identified:</em> Dependence on open-source AI libraries requires robust monitoring. <span class="text-warning">Mitigation needed.</span></p>
                </div>
            </div>
        </div>
        <div class="assessment-section">
            <h2><i class="fas fa-user-shield p-icon" style="color:var(--p-project-color);"></i>Future-Proofing Against Client Needs</h2>
             <div class="assessment-item">
                <label for="future-client-trends">Anticipated Client Needs & Market Trends (Next 5 Years)</label>
                <div class="input-area">
                    <textarea id="future-client-trends" rows="5" placeholder="Anticipated shifts...?">1. Cities: Need for cross-departmental data sharing governance, increased citizen data rights demands, integration with IoT platforms. 2. Regulatory: Evolving AI regulations (EU AI Act), data sovereignty laws. 3. Technological: Federated learning, advancements in privacy-preserving techniques.</textarea>
                    <button class="comment-btn-inline" title="Comments"><i class="fas fa-comment-dots"></i></button>
                </div>
            </div>
            <div class="assessment-item">
                <label for="future-proofing-strategy">Strategies to Adapt & Address Future Needs</label>
                <div class="input-area">
                    <textarea id="future-proofing-strategy" rows="5" placeholder="How is the company adapting...?">R&D exploring federated learning integrations. Active participation in AI policy forums. Developing modular architecture for easier adaptation to new regulations. Partnership with privacy tech firms.</textarea>
                    <button class="comment-btn-inline" title="Comments"><i class="fas fa-comment-dots"></i></button>
                </div>
            </div>
        </div>
        <div class="assessment-section">
            <h2><i class="fas fa-rocket p-icon" style="color:var(--p-project-color);"></i>Innovation Outlook</h2>
            <div class="assessment-item">
                <label for="innovation-culture">Culture of Innovation & R&D Pipeline</label>
                <div class="input-area">
                    <textarea id="innovation-culture" rows="5" placeholder="Describe innovation culture and pipeline...">Dedicated 'AI Ethics & Innovation Lab'. Internal 'GovTech Challenges'. R&D (15% revenue) focuses on bias detection algorithms, synthetic data generation for testing, and automated compliance checks.</textarea>
                    <button class="comment-btn-inline" title="Comments"><i class="fas fa-comment-dots"></i></button>
                </div>
                 <div class="ai-assist-panel">
                    <h4><i class="fas fa-lightbulb"></i> AI Insights & Suggestions</h4>
                    <p><em>Patent Analysis:</em> 2 patents granted for differential privacy techniques, 1 pending for AI model validation workflow. <span class="text-success">Strength.</span></p>
                    <p><em>Employee Survey Snippet:</em> "Need better tools for cross-team collaboration on R&D projects." Score: 3.5/5.</p>
                </div>
            </div>
             <div class="assessment-item">
                <label for="innovation-ip">Intellectual Property & Competitive Edge from Innovation</label>
                <div class="input-area">
                    <textarea id="innovation-ip" rows="4" placeholder="Status of IP...?">Key IP focuses on proprietary governance frameworks and bias mitigation techniques. Trade secrets cover specific analytics models for urban services. Aiming for continuous innovation lead.</textarea>
                    <button class="comment-btn-inline" title="Comments"><i class="fas fa-comment-dots"></i></button>
                </div>
            </div>
        </div>
    `,
    'p-people-content': `
         <div class="content-header">
             <div class="content-header-left">
                 <button class="btn btn-back" onclick="history.back()"><i class="fas fa-chevron-left"></i> Back</button>
                <h1>People (Social Architecture)</h1>
            </div>
            <div class="actions">
                 <button class="btn btn-primary btn-small"><i class="fas fa-save"></i> Save Progress</button>
            </div>
        </div>
        <div class="assessment-section">
            <h2><i class="fas fa-seedling p-icon" style="color:var(--p-people-color);"></i>Growth Culture Assessment</h2>
            <div class="assessment-item">
                <label>Learning & Development Environment</label>
                <textarea rows="4" placeholder="Describe the company's approach to continuous learning...">Focus on AI ethics, data science, and cloud certifications. Subscription to online learning platforms (Coursera, Pluralsight). Internal mentorship program pairing senior data scientists with junior analysts. L&D budget approx 3% of payroll.</textarea>
                 <div class="ai-assist-panel"><h4><i class="fas fa-lightbulb"></i> AI Suggestion</h4><p>Review 'HR Training Records Q1 2025.xlsx'. Certifications in AWS/Azure/GCP are high, but AI Ethics training completion rate is lower (65%). Suggest targeted campaign.</p></div>
            </div>
            <div class="assessment-item">
                <label>Adaptability & Resilience</label>
                <textarea rows="4" placeholder="Assess the organization's ability to adapt to change...">Agile methodologies used in product dev foster adaptability. Recent pivot to support new data privacy regulation (X) implemented within one quarter shows resilience. Cross-functional teams used for new module launches.</textarea>
            </div>
        </div>
         <div class="assessment-section">
            <h2><i class="fas fa-users-cog p-icon" style="color:var(--p-people-color);"></i>Leadership Principles</h2>
            <div class="assessment-item">
                <label>Leadership Style & Effectiveness</label>
                <textarea rows="4" placeholder="Analyze the predominant leadership style(s)...">Generally collaborative and expert-driven leadership. Strong technical direction from founders/CTO. Mid-level management empowerment appears varied across teams. Need for stronger strategic communication downwards.</textarea>
                 <div class="ai-assist-panel"><h4><i class="fas fa-lightbulb"></i> AI Insight</h4><p>360-Feedback Summary (Leadership Team): High scores on 'Technical Competence', lower on 'Cross-Departmental Vision Alignment'.</p></div>
            </div>
             <div class="assessment-item">
                <label>Succession Planning & Bench Strength</label>
                <textarea rows="4" placeholder="Evaluate approach to succession planning for key roles...">Informal succession planning for key technical roles. Limited bench strength identified for Head of Product and Head of Sales roles. High potential program ('Alpha Leaders') recently launched but impact TBD.</textarea>
            </div>
        </div>
         <div class="assessment-section">
             <h2><i class="fas fa-user-graduate p-icon" style="color:var(--p-people-color);"></i>Talent Development Systems</h2>
             <div class="assessment-item">
                <label>Talent Acquisition & Onboarding</label>
                <textarea rows="4" placeholder="Assess effectiveness of hiring and onboarding...">Strong employer brand within AI/GovTech niche attracts talent. Average time-to-hire for data scientists is 60 days. Onboarding process includes technical bootcamps and ethics module. High focus on candidates with prior public sector or regulated industry experience.</textarea>
             </div>
              <div class="assessment-item">
                <label>Performance Management & Rewards</label>
                <textarea rows="4" placeholder="Analyze performance management system...">Quarterly OKR reviews. Performance tied to individual, team, and company goals. Mix of base salary, bonus (based on company/team performance), and stock options. Recognition program for ethical AI contributions.</textarea>
                 <div class="ai-assist-panel"><h4><i class="fas fa-lightbulb"></i> AI Insight</h4><p>Glassdoor Reviews Mention: 'Competitive compensation' but 'bonus structure lacks transparency'. <span class="text-warning">Area for improvement.</span></p></div>
             </div>
              <div class="assessment-item">
                <label>Employee Engagement & Retention</label>
                <textarea rows="4" placeholder="Evaluate engagement levels (e.g., survey results, eNPS) and retention rates...">Recent eNPS score: +45 (Good). Annual engagement survey shows high scores for 'Meaningful Work' and 'Technical Challenge'. Lower scores on 'Career Path Visibility'. Voluntary attrition rate at 12% (slightly above industry avg for tech roles).</textarea>
                 <div class="ai-assist-panel"><h4><i class="fas fa-lightbulb"></i> AI Insight</h4><p>Turnover highest among mid-level data analysts (2-4 years tenure). Need to investigate career progression pathways.</p></div>
             </div>
        </div>
    `,
    'p-product-content': `
        <div class="content-header">
             <div class="content-header-left">
                 <button class="btn btn-back" onclick="history.back()"><i class="fas fa-chevron-left"></i> Back</button>
                <h1>Product (Innovation & IP)</h1>
            </div>
            <div class="actions">
                 <button class="btn btn-primary btn-small"><i class="fas fa-save"></i> Save Progress</button>
            </div>
        </div>
        <div class="assessment-section">
            <h2><i class="fas fa-server p-icon" style="color:var(--p-product-color);"></i>Technical Foundation Audit</h2>
             <div class="assessment-item">
                <label>Architecture & Scalability</label>
                <textarea rows="4" placeholder="Assess core architecture...">Microservices architecture deployed on Kubernetes (AWS EKS). Core governance engine designed for high throughput data processing. Analytics module uses Snowflake. Scalability tested for 100 concurrent city tenants. Potential bottleneck identified in real-time anomaly detection service under peak load.</textarea>
                 <div class="ai-assist-panel"><h4><i class="fas fa-lightbulb"></i> AI Insight</h4><p>Review 'Architecture Review Q4 2024.pdf'. Load testing report shows anomaly detection latency increase beyond SLA at 50K events/sec. Optimization required.</p></div>
            </div>
            <div class="assessment-item">
                <label>Technology Stack & Modernity</label>
                <textarea rows="4" placeholder="Evaluate tech stack...">Backend: Python (FastAPI), Go. Frontend: React, TypeScript. Data: PostgreSQL, Snowflake, S3. Infra: AWS, Terraform, Kubernetes. Stack is modern and leverages managed services where appropriate. Minimal legacy dependencies.</textarea>
            </div>
             <div class="assessment-item">
                <label>Security Posture (Product-Level)</label>
                <textarea rows="4" placeholder="Assess product security practices...">OWASP Top 10 addressed in SDLC. SAST/DAST integrated into CI/CD. Annual external penetration tests. Role-based access control (RBAC) implemented. Data encrypted at rest and in transit. Focus on securing AI models against adversarial attacks.</textarea>
                  <div class="ai-assist-panel"><h4><i class="fas fa-lightbulb"></i> AI Insight</h4><p>Last Pen Test ('TargetAlpha_PenTest_2025-01.pdf') identified one medium-severity vulnerability related to input sanitization in API gateway. Remediation confirmed.</p></div>
            </div>
        </div>
        <div class="assessment-section">
             <h2><i class="fas fa-code-branch p-icon" style="color:var(--p-product-color);"></i>Development Methodologies</h2>
             <div class="assessment-item">
                <label>SDLC Process & Agility</label>
                <textarea rows="4" placeholder="Describe SDLC...">Agile (Scrum) methodology with 2-week sprints. Jira used for backlog management. Feature flags used for gradual rollouts. Release cadence is monthly for major features, weekly for minor updates/patches.</textarea>
             </div>
             <div class="assessment-item">
                <label>Code Quality & Testing Practices</label>
                <textarea rows="4" placeholder="Evaluate code reviews, automated testing...">Mandatory code reviews via GitHub pull requests. Automated testing includes unit tests (Pytest, Jest - avg 80% coverage), integration tests, and E2E tests (Cypress). CI/CD pipeline runs full test suite on every commit to main branches.</textarea>
                  <div class="ai-assist-panel"><h4><i class="fas fa-lightbulb"></i> AI Suggestion</h4><p>SonarQube analysis shows 'A' rating for maintainability and reliability. Code duplication below 5%. <span class="text-success">Strength.</span></p></div>
            </div>
        </div>
        <div class="assessment-section">
            <h2><i class="fas fa-clipboard-check p-icon" style="color:var(--p-product-color);"></i>Quality Assurance Processes</h2>
             <div class="assessment-item">
                <label>QA Team Structure & Process</label>
                <textarea rows="4" placeholder="Describe QA team role, structure...">Dedicated QA team embedded within Scrum teams. Focus on exploratory testing, test automation development, and release sign-off. Use TestRail for test case management.</textarea>
            </div>
             <div class="assessment-item">
                <label>Bug Tracking & Resolution</label>
                <textarea rows="4" placeholder="Analyze bug tracking/prioritization/resolution process...">Jira used for bug tracking. Bugs prioritized based on severity/impact (P0-P4). SLA for P0/P1 bug resolution is 24/72 hours. Weekly bug triage meetings.</textarea>
            </div>
        </div>
         <div class="assessment-section">
            <h2><i class="fas fa-lightbulb p-icon" style="color:var(--p-product-color);"></i>Intellectual Property (IP)</h2>
             <div class="assessment-item">
                <label>Patents, Trademarks, Trade Secrets</label>
                <textarea rows="4" placeholder="Inventory key IP assets...">(Referencing Project assessment) Patents cover specific algorithms for bias detection and data minimization. Trademark 'Target Alpha' registered. Core governance workflows maintained as trade secrets.</textarea>
                 <div class="ai-assist-panel"><h4><i class="fas fa-lightbulb"></i> AI Insight</h4><p>Freedom-to-operate search recommended for planned expansion into healthcare data analytics.</p></div>
            </div>
             <div class="assessment-item">
                <label>Open Source Software (OSS) Usage & Compliance</label>
                <textarea rows="4" placeholder="Assess policies and practices for using OSS components.">Clear policy on approved OSS licenses (MIT, Apache 2.0, BSD preferred). Use FOSSA for automated license scanning and vulnerability detection in dependencies. Regular audits performed.</textarea>
            </div>
        </div>
    `,
    'p-processes-content': `
        <div class="content-header">
             <div class="content-header-left">
                 <button class="btn btn-back" onclick="history.back()"><i class="fas fa-chevron-left"></i> Back</button>
                <h1>Processes (Dynamic Work Graph)</h1>
            </div>
            <div class="actions">
                 <button class="btn btn-primary btn-small"><i class="fas fa-save"></i> Save Progress</button>
            </div>
        </div>
         <div class="assessment-section">
            <h2><i class="fas fa-leaf p-icon" style="color:var(--p-processes-color);"></i>Operational Leanness</h2>
             <div class="assessment-item">
                <label>Core Process Efficiency (Value Stream Mapping)</label>
                <textarea rows="4" placeholder="Analyze key operational processes...">Customer onboarding process mapped - avg time 5 days, potential automation identified in initial data validation step. Data processing pipeline efficiency monitored via Grafana dashboards. Support ticket resolution process (Zendesk) avg time 8 hours for high priority.</textarea>
             </div>
              <div class="assessment-item">
                <label>Cross-Functional Collaboration & Handoffs</label>
                <textarea rows="4" placeholder="Evaluate how effectively different departments collaborate...">Sales-to-Onboarding handoff managed via Salesforce/Slack integration. Product-Support collaboration via shared Jira project for bug reporting/feature requests. Occasional friction reported between Data Science and Platform Engineering regarding resource prioritization.</textarea>
                 <div class="ai-assist-panel"><h4><i class="fas fa-lightbulb"></i> AI Suggestion</h4><p>Interview stakeholders involved in Data Science/Platform Eng handoffs to identify specific process improvement opportunities.</p></div>
            </div>
        </div>
         <div class="assessment-section">
            <h2><i class="fas fa-robot p-icon" style="color:var(--p-processes-color);"></i>AI & Automation Adoption</h2>
            <div class="assessment-item">
                <label>Current Use of Automation/AI in Core Processes</label>
                <textarea rows="4" placeholder="Inventory existing automation tools and AI applications...">CI/CD pipeline fully automated (Jenkins/ArgoCD). Automated infrastructure provisioning (Terraform). AI used internally for code completion assistance (Copilot), log anomaly detection (Datadog AI), and customer support ticket categorization (Zendesk AI).</textarea>
            </div>
             <div class="assessment-item">
                <label>Potential for Further Automation/AI (Impact/Feasibility)</label>
                <textarea rows="4" placeholder="Identify high-potential areas for introducing/expanding automation & AI...">High potential for automating initial data quality checks during customer onboarding (Impact: High, Feasibility: Medium). Potential for AI-driven predictive resource scaling for processing pipeline (Impact: Medium, Feasibility: High). Using AI to generate draft compliance reports (Impact: Medium, Feasibility: Medium).</textarea>
                 <div class="ai-assist-panel"><h4><i class="fas fa-lightbulb"></i> AI Insight</h4><p>Analysis of support tickets shows 30% relate to common configuration questions - potential for AI chatbot/knowledge base automation.</p></div>
            </div>
        </div>
        <div class="assessment-section">
            <h2><i class="fas fa-chart-pie p-icon" style="color:var(--p-processes-color);"></i>Resource Allocation</h2>
            <div class="assessment-item">
                <label>Alignment of Resources (Financial, Human) with Strategy</label>
                <textarea rows="4" placeholder="Assess how financial and human resources are allocated...">R&D budget (~15% of revenue) aligns with tech leadership strategy. Sales resources focused on Tier 1 city targets. Significant investment in cloud infrastructure supports analytics suite expansion. Headcount growth planned for AI Governance SME roles.</textarea>
            </div>
             <div class="assessment-item">
                <label>Budgeting, Planning & Forecasting Process Agility</label>
                <textarea rows="4" placeholder="Evaluate the budgeting/planning process...">Annual budgeting process with quarterly rolling forecasts. Use Adaptive Planning. Resource trade-offs for new initiatives discussed in monthly strategy review meetings. Process allows for some flexibility to pivot based on market changes.</textarea>
                 <div class="ai-assist-panel"><h4><i class="fas fa-lightbulb"></i> AI Suggestion</h4><p>Compare budget allocation vs. strategic pillar importance. Ensure sufficient funding for compliance/certification initiatives (Posture P).</p></div>
            </div>
        </div>
        <div class="assessment-section">
             <h2><i class="fas fa-book-reader p-icon" style="color:var(--p-processes-color);"></i>Organizational Learning Capabilities</h2>
            <div class="assessment-item">
                <label>Knowledge Management & Sharing Practices</label>
                <textarea rows="4" placeholder="Assess how institutional knowledge is captured, stored, accessed, and shared...">Confluence used as internal wiki for technical documentation, process guides, and research findings. Regular tech talks and 'lunch & learn' sessions. Knowledge sharing culture encouraged, but documentation consistency varies across teams.</textarea>
            </div>
             <div class="assessment-item">
                <label>Feedback Loops & Continuous Improvement Culture</label>
                <textarea rows="4" placeholder="Evaluate mechanisms for collecting feedback and incorporating it...">Regular customer feedback surveys (CSAT/NPS) and user interviews conducted by Product team. Sprint retrospectives used by dev teams. Post-mortems conducted for major incidents/outages. Findings feed into backlog refinement and process adjustments. Evidence of iterative improvement on core platform modules.</textarea>
            </div>
        </div>
    `,
    'p-performance-content': `
         <div class="content-header">
             <div class="content-header-left">
                 <button class="btn btn-back" onclick="history.back()"><i class="fas fa-chevron-left"></i> Back</button>
                <h1>Performance (Quest for Success)</h1>
            </div>
            <div class="actions">
                 <button class="btn btn-primary btn-small"><i class="fas fa-save"></i> Save Progress</button>
            </div>
        </div>
        <div class="assessment-section">
             <h2><i class="fas fa-tachometer-alt p-icon" style="color:var(--p-performance-color);"></i>KPI/OKR Frameworks</h2>
              <div class="assessment-item">
                <label>Goal Setting Framework & Alignment Cascade</label>
                <textarea rows="4" placeholder="Does the company use OKRs, Balanced Scorecard, other?">Company-wide OKRs set annually, cascaded quarterly to departments and teams. Use Lattice for OKR tracking and visibility. Alignment seems generally good, though linkage between team KRs and company Os could be clearer in some cases.</textarea>
             </div>
              <div class="assessment-item">
                <label>Key Performance Indicators (KPIs) - Financial & Operational</label>
                <textarea rows="4" placeholder="Identify key financial KPIs and operational KPIs...">Financial: ARR Growth, Net Revenue Retention (NRR), Gross Margin, CAC Payback Period, Rule of 40. Operational: Platform Uptime, Avg Data Processing Latency, Customer Support CSAT, Model Accuracy/Fairness Metrics (e.g., F1 score, disparate impact ratio), # of Governance Policies Managed.</textarea>
                <div class="ai-assist-panel"><h4><i class="fas fa-lightbulb"></i> AI Insight</h4><p>KPI Dashboard (Tableau link placeholder) shows strong ARR Growth (40% YoY) and NRR (115%). Platform uptime consistently >99.95%. CAC Payback Period is 18 months, requires monitoring.</p></div>
             </div>
        </div>
         <div class="assessment-section">
             <h2><i class="fas fa-hand-holding-usd p-icon" style="color:var(--p-performance-color);"></i>Financial Discipline & Performance</h2>
             <div class="assessment-item">
                <label>Historical Financial Performance Analysis (3-5 Years)</label>
                <textarea rows="4" placeholder="Analyze trends in Revenue, Gross Margin, EBITDA, Net Income, Cash Flow...">Consistent ARR growth (~35-45% YoY). Gross Margin stable at ~75%. Negative EBITDA but improving trend towards breakeven. Operating Cash Flow negative due to R&D/Sales investments. Strong performance vs. initial budgets.</textarea>
                 <div class="ai-assist-panel"><h4><i class="fas fa-lightbulb"></i> AI Suggestion</h4><p>Upload 'Financials_2022_2024.xlsx'. AI analysis confirms trends, highlights increasing R&D spend as % of revenue. Benchmarking vs SaaS Rule of 40 shows performance slightly below top quartile but improving.</p></div>
            </div>
             <div class="assessment-item">
                <label>Working Capital Management</label>
                <textarea rows="4" placeholder="Evaluate management of receivables (DSO), payables (DPO), and inventory.">Primarily SaaS model, minimal inventory. DSO stable around 60 days (typical for municipal contracts). DPO managed actively (~45 days). Cash conversion cycle consistent and well-managed.</textarea>
            </div>
             <div class="assessment-item">
                <label>Unit Economics & Cohort Analysis</label>
                <textarea rows="4" placeholder="Analyze CAC, LTV, contribution margin per user/unit...">CAC ~$150K per city contract. LTV estimated >$1M based on high NRR and long contract potential. LTV/CAC ratio > 6x. Healthy unit economics. Cohort analysis shows increasing contract value over time for earlier cohorts.</textarea>
            </div>
              <div class="assessment-item">
                <label>Capital Structure & Funding History</label>
                <textarea rows="4" placeholder="Review current capital structure & funding history...">Series C company. Total funding $80M. Key investors: GovTech Ventures, Urban Future Fund, CloudProvider Ventures. Minimal debt ($5M venture debt line). Clean cap table. Estimated cash runway ~18 months at current burn rate.</textarea>
            </div>
        </div>
        <div class="assessment-section">
            <h2><i class="fas fa-brain p-icon" style="color:var(--p-performance-color);"></i>AI-Enabled Execution & Data Usage</h2> <div class="assessment-item">
                <label>Use of Data/AI in Decision Making & Operations</label>
                <textarea rows="4" placeholder="Assess current use of data analytics & AI to inform decisions...">Extensive use of product analytics (Mixpanel) to guide feature dev. AI used in sales forecasting (Salesforce Einstein). Customer churn prediction model used by CS team. A/B testing framework used for UI/UX improvements. Data-driven culture is strong, especially in Product/Eng.</textarea>
            </div>
             <div class="assessment-item">
                <label>Data Infrastructure, Quality & Analytics Capabilities</label>
                <textarea rows="4" placeholder="Evaluate data infrastructure, quality & capabilities...">Centralized data warehouse (Snowflake). Data ingestion pipelines from various sources (product DBs, CRM, support). dbt used for transformations. Data quality monitored via Great Expectations. Analytics team uses Tableau for BI. Growing internal data science capability.</textarea>
                <div class="ai-assist-panel"><h4><i class="fas fa-lightbulb"></i> AI Suggestion</h4><p>Assess data governance maturity for internal data usage - are the same principles applied internally as offered to clients? Gap analysis recommended.</p></div>
            </div>
        </div>
        <div class="assessment-section">
            <h2><i class="fas fa-network-wired p-icon" style="color:var(--p-performance-color);"></i>Ecosystem Leverage</h2>
            <div class="assessment-item">
                <label>Strategic Partnership Value & Management</label>
                <textarea rows="4" placeholder="Analyze existing strategic partnerships...">Key partnerships with AWS, Azure, Google Cloud (co-selling, marketplace listings). Integration partnerships with major smart city platform providers (e.g., Cisco Kinetic, Siemens MindSphere). Dedicated partnership team manages relationships and tracks joint KPIs.</textarea>
            </div>
            <div class="assessment-item">
                <label>Market Position, Brand Strength & Network Effects</label>
                <textarea rows="4" placeholder="Evaluate market position, brand strength & network effects...">Recognized leader in AI Governance for Smart Cities niche (Gartner MQ mention - placeholder). Strong brand reputation for ethics and reliability. Potential network effects exist as more cities adopt, creating standards and attracting more integrators.</textarea>
            </div>
        </div>
    `,
    'p-posture-content': `
         <div class="content-header">
             <div class="content-header-left">
                 <button class="btn btn-back" onclick="history.back()"><i class="fas fa-chevron-left"></i> Back</button>
                <h1>Posture (Mindful Self-Regulation)</h1>
            </div>
            <div class="actions">
                 <button class="btn btn-primary btn-small"><i class="fas fa-save"></i> Save Progress</button>
            </div>
        </div>
        <div class="assessment-section">
            <h2><i class="fas fa-balance-scale p-icon" style="color:var(--p-posture-color);"></i>Compliance Architecture</h2>
             <div class="assessment-item">
                <label>Regulatory Compliance Framework (Identify Key Regs)</label>
                <textarea rows="4" placeholder="Identify key regulations and assess compliance...">Key Regs: GDPR, CCPA, relevant state-level privacy laws, aiming for NIST AI RMF alignment, FedRAMP (future goal). Dedicated Compliance Officer. Policies documented for data handling, privacy, security. Regular employee training. SOC 2 Type I achieved, Type II in progress.</textarea>
                 <div class="ai-assist-panel"><h4><i class="fas fa-lightbulb"></i> AI Suggestion</h4><p>Scan 'SOC 2 Gap Analysis.pdf'. Key control gap identified in vendor risk management process. Remediation plan required for Type II audit.</p></div>
            </div>
             <div class="assessment-item">
                <label>Contractual Compliance Management</label>
                <textarea rows="4" placeholder="Evaluate processes for managing contractual compliance...">Use Ironclad for contract lifecycle management. Standard templates include robust data processing agreements (DPAs). Process exists for reviewing non-standard terms. Monitoring SLAs via platform metrics dashboards.</textarea>
            </div>
        </div>
        <div class="assessment-section">
            <h2><i class="fas fa-exclamation-triangle p-icon" style="color:var(--p-posture-color);"></i>Risk Management Framework</h2>
             <div class="assessment-item">
                <label>Risk Identification, Assessment & Prioritization Process</label>
                <textarea rows="4" placeholder="Formal process for identifying, assessing risks?">Formal quarterly risk assessment process involving department heads, facilitated by Compliance Officer. Risks assessed on likelihood/impact matrix. Top risks reviewed by leadership team. Use LogicGate for GRC tracking.</textarea>
            </div>
            <div class="assessment-item">
                <label>Risk Mitigation Strategies & Internal Controls</label>
                <textarea rows="4" placeholder="Evaluate effectiveness of mitigation strategies and controls...">Key Risks: AI model bias, data breach, regulatory changes, cloud provider outage. Mitigations: Robust model validation/testing, security controls (see Product P), BCP/DR plan, regulatory monitoring, multi-cloud strategy exploration. Internal controls tested periodically.</textarea>
                 <div class="ai-assist-panel"><h4><i class="fas fa-lightbulb"></i> AI Insight</h4><p>Review 'Risk Register Q1 2025.xlsx'. Mitigation plan for 'Regulatory Changes' risk appears underdeveloped. Requires specific actions and owners.</p></div>
            </div>
            <div class="assessment-item">
                <label>Business Continuity & Disaster Recovery (BCP/DR)</label>
                <textarea rows="4" placeholder="Assess BCP/DR plans' comprehensiveness...">Documented BCP/DR plan covering core platform services. Leverages AWS multi-AZ deployment. Backups stored immutably in separate region. Annual DR test performed (last test successful - RTO 4 hours, RPO 1 hour). Plan covers key personnel unavailability.</textarea>
            </div>
             <div class="assessment-item">
                <label>Cybersecurity Posture & Incident Response</label>
                <textarea rows="4" placeholder="Evaluate overall cybersecurity posture & incident response...">Managed SIEM (Splunk), EDR solution, regular vulnerability scanning (Nessus). Security awareness training mandatory. Incident Response plan documented and tested via tabletop exercises annually. No major breaches reported.</textarea>
            </div>
        </div>
         <div class="assessment-section">
            <h2><i class="fas fa-gavel p-icon" style="color:var(--p-posture-color);"></i>Audit & Accountability Processes</h2>
             <div class="assessment-item">
                <label>Internal & External Audit Functions</label>
                <textarea rows="4" placeholder="Describe scope, frequency, independence, and effectiveness of audits...">No formal internal audit function yet. Relies on external audits (SOC 2, Pen Tests). External financial audit performed annually (Big 4 firm - placeholder). Audit findings tracked by Compliance Officer and reported to leadership/board.</textarea>
            </div>
            <div class="assessment-item">
                <label>Governance Structure & Board Oversight Effectiveness</label>
                <textarea rows="4" placeholder="Evaluate governance structure and board effectiveness...">Board comprises founders, key investors (2), and 1 independent director. Committees: Audit & Risk, Compensation. Board meets quarterly, reviews strategy, financials, key risks. Effectiveness appears adequate for current stage, may need more independent directors post-acquisition.</textarea>
            </div>
             <div class="assessment-item">
                <label>Ethical Culture, Code of Conduct & Whistleblower Mechanisms</label>
                <textarea rows="4" placeholder="Assess ethical culture, code of conduct, whistleblower mechanisms...">Code of Conduct covers AI ethics principles, data privacy, anti-corruption. Annual ethics training. Confidential whistleblower hotline managed by third party (NAVEX Global - placeholder). Reports investigated by Compliance/Legal. Culture emphasizes 'responsible AI' principles.</textarea>
            </div>
        </div>
    `,
    // Keep other templates (roadmap, documents, etc.) as they were
    'roadmap-content': `
        <div class="content-header">
            <h1 id="roadmap-content-deal-name">Transformation Roadmap</h1>
             <div class="content-header-left" style="margin-left: -78px;"> <button class="btn btn-back" onclick="history.back()"><i class="fas fa-chevron-left"></i> Back</button>
                 </div>
            <div class="actions">
                <button class="btn btn-go-to-deal"><i class="fas fa-plus"></i> Add Initiative</button>
                <button class="btn btn-secondary btn-small"><i class="fas fa-filter"></i> Filters</button>
            </div>
        </div>
        <div class="roadmap-main-view">
            <div class="roadmap-phase">
                <h2>Q1 2025: Foundation & Quick Wins</h2>
                <div class="initiative-card status-completed"><h3>Finalize 6P Due Diligence</h3><p class="initiative-owner">Owner: Alex C. (Acquirer), Sarah M. (Target)</p><p>Complete all 6P framework assessments and establish baseline KPIs...</p><p class="initiative-kpis">KPIs: 100% 6P sections signed off...</p></div>
                <div class="initiative-card status-inprogress"><h3>Integration Team Kick-off & Governance</h3><p class="initiative-owner">Owner: Integration Lead (Acquirer)</p><p>Establish joint integration team, communication protocols...</p><p class="initiative-kpis">KPIs: Team chartered, communication plan active...</p></div>
                <div class="initiative-card status-planned"><h3>Identify Top 3 Synergy Opportunities</h3><p class="initiative-owner">Owner: Joint Strategy Group</p><p>Based on DD, pinpoint, quantify, and validate top 3 synergy opportunities...</p><p class="initiative-kpis">KPIs: Report validated by leadership...</p></div>
                <div class="initiative-card status-planned"><h3>Employee Communication Plan Execution (Phase 1)</h3><p class="initiative-owner">Owner: HR & Comms Leads</p><p>Announce deal completion, outline vision...</p><p class="initiative-kpis">KPIs: Town hall conducted, FAQ published...</p></div>
            </div>
            <div class="roadmap-phase">
                <h2>Q2 2025: People & Process Alignment</h2>
                <div class="initiative-card status-inprogress"><h3>Harmonize HR Policies & Core Systems</h3><p class="initiative-owner">Owner: HR Leads (Acquirer & Target)</p><p>Review and align key HR policies, payroll, benefits...</p><p class="initiative-kpis">KPIs: Gap analysis complete, migration plan defined...</p></div>
                <div class="initiative-card status-planned"><h3>Streamline Core Sales & Marketing Process</h3><p class="initiative-owner">Owner: Sales & Marketing Ops Leads</p><p>Map funnels, design unified process, implement CRM changes...</p><p class="initiative-kpis">KPIs: Unified process documented, CRM configured...</p></div>
                <div class="initiative-card status-planned"><h3>Technology Stack Assessment (Phase 1 - Customer Facing)</h3><p class="initiative-owner">Owner: CTOs (Acquirer & Target)</p><p>Inventory core stacks, identify redundancies/integration points...</p><p class="initiative-kpis">KPIs: Assessment report complete, initial integration roadmap...</p></div>
                <div class="initiative-card status-planned"><h3>Financial Reporting Consolidation Plan</h3><p class="initiative-owner">Owner: CFOs (Acquirer & Target)</p><p>Define chart of accounts mapping, set reporting timelines...</p><p class="initiative-kpis">KPIs: Mapping complete, reporting calendar set...</p></div>
            </div>
            <div class="roadmap-phase">
                <h2>Q3 2025: Execution & Early Value Capture</h2>
                <div class="initiative-card status-planned"><h3>Launch First Joint Product Offering/Bundle</h3><p class="initiative-owner">Owner: Product Management Leads</p><p>Develop and launch bundled product targeting cross-sell opportunities...</p><p class="initiative-kpis">KPIs: Product bundle launched, $X initial revenue target...</p></div>
                <div class="initiative-card status-onhold"><h3>Consolidate Office Space (Location A - Feasibility)</h3><p class="initiative-owner">Owner: Facilities & Finance Leads</p><p>Evaluate and execute office space consolidation...</p><p class="initiative-kpis">KPIs: Feasibility study complete, decision made...</p></div>
                <div class="initiative-card status-inprogress"><h3>Cross-Training Program Launch (Sales & Support)</h3><p class="initiative-owner">Owner: HR / L&D Leads</p><p>Initiate cross-training on unified offerings, processes...</p><p class="initiative-kpis">KPIs: 50% of target staff completed initial training...</p></div>
                <div class="initiative-card status-planned"><h3>Implement Quick Win Cost Synergies</h3><p class="initiative-owner">Owner: Procurement & Ops Leads</p><p>Execute on achievable cost synergies (vendor contracts, licenses)...</p><p class="initiative-kpis">KPIs: $X cost savings realized in Q3.</p></div>
            </div>
            <div class="roadmap-phase">
                <h2>Q4 2025: Optimization & Scaled Synergies</h2>
                 <div class="initiative-card status-planned"><h3>Unified Brand Rollout & Marketing Campaign</h3><p class="initiative-owner">Owner: Marketing Leads</p><p>Finalize and launch unified brand identity and campaign...</p><p class="initiative-kpis">KPIs: New brand live, campaign launched...</p></div>
                <div class="initiative-card status-planned"><h3>Technology Stack Assessment (Phase 2 - Backend)</h3><p class="initiative-owner">Owner: CTOs</p><p>Address backend systems, data warehousing, cybersecurity...</p><p class="initiative-kpis">KPIs: Future state architecture defined...</p></div>
                <div class="initiative-card status-inprogress"><h3>Performance Management Cycle Alignment</h3><p class="initiative-owner">Owner: HR Leads</p><p>Implement first unified performance review cycle...</p><p class="initiative-kpis">KPIs: Cycle completed, employee feedback collected.</p></div>
                <div class="initiative-card status-planned"><h3>Supply Chain Optimization (Battery Supplier Diversification)</h3><p class="initiative-owner">Owner: Procurement & Ops</p><p>Identify and qualify alternative battery suppliers...</p><p class="initiative-kpis">KPIs: 1-2 alternative suppliers qualified...</p></div>
            </div>
            <div class="roadmap-phase">
                 <h2>Q1 2026: Future Growth & Continuous Improvement</h2>
                <div class="initiative-card status-planned"><h3>Explore New Market Segment (AI-Identified: B2B)</h3><p class="initiative-owner">Owner: Strategy & Innovation Team</p><p>Conduct deep-dive market research for B2B offering...</p><p class="initiative-kpis">KPIs: Feasibility study complete, Go/No-Go decision...</p></div>
                <div class="initiative-card status-planned"><h3>Post-Integration Review & Lessons Learned</h3><p class="initiative-owner">Owner: Integration Lead</p><p>Conduct comprehensive review, document lessons, update playbook...</p><p class="initiative-kpis">KPIs: Review complete, playbook updated.</p></div>
                <div class="initiative-card status-planned"><h3>Customer Feedback Loop Enhancement</h3><p class="initiative-owner">Owner: Customer Success & Product</p><p>Implement enhanced feedback mechanisms (surveys, advisory board)...</p><p class="initiative-kpis">KPIs: New feedback system live, CSAT target +5 points.</p></div>
            </div>
        </div>
    `,
    'documents-content': `
        <div class="content-header">
             <div class="content-header-left">
                 <button class="btn btn-back" onclick="history.back()"><i class="fas fa-chevron-left"></i> Back</button>
                 <h1 id="documents-content-deal-name">Documents Hub</h1>
             </div>
            <div class="actions">
                <input type="text" placeholder="Search documents..." style="padding:0.4rem 0.8rem; border-radius:4px; border:1px solid var(--border-color); font-size:0.9rem; width:250px;">
                <select style="padding:0.4rem 0.8rem; border-radius:4px; border:1px solid var(--border-color); font-size:0.9rem;"><option>Filter by Type</option><option>Financial</option><option>Legal</option><option>Product</option><option>HR</option><option>Strategy</option></select>
                <button class="btn btn-go-to-deal btn-small"><i class="fas fa-upload"></i> Upload Documents</button>
            </div>
        </div>
        <p style="font-size:0.9rem; color:var(--light-font);">Organize, review, and analyze all deal-related documents. Leverage AI for key insights extraction.</p>
        <table class="documents-table">
             <thead><tr><th><input type="checkbox" /></th><th>Name & Version</th><th>Type/Category</th><th>Uploaded By</th><th>Date</th><th>Size</th><th>AI Status</th><th>Actions</th></tr></thead>
            <tbody>
                <tr><td><input type="checkbox" /></td><td>Financial Statements Q4 2024_final_v2.pdf</td><td>Financial</td><td>Sarah Miller (Target)</td><td>Apr 15, 2025</td><td>2.3 MB</td><td><span class="ai-status-dot ai-status-analyzed"></span>Analyzed <i class="fas fa-lightbulb text-success" title="Insights Available"></i></td><td><button class="btn btn-secondary btn-small" title="View"><i class="fas fa-eye"></i></button> <button class="btn btn-secondary btn-small" title="Download"><i class="fas fa-download"></i></button> <button class="btn btn-secondary btn-small" title="AI Summary"><i class="fas fa-robot"></i></button></td></tr>
                <tr><td><input type="checkbox" /></td><td>Key Client Contracts Master Agreement_signed.docx</td><td>Legal / Commercial</td><td>Alex Chen (Acquirer)</td><td>Apr 20, 2025</td><td>850 KB</td><td><span class="ai-status-dot ai-status-analyzed"></span>Analyzed</td><td><button class="btn btn-secondary btn-small" title="View"><i class="fas fa-eye"></i></button> <button class="btn btn-secondary btn-small" title="Download"><i class="fas fa-download"></i></button> <button class="btn btn-secondary btn-small" title="AI Summary"><i class="fas fa-robot"></i></button></td></tr>
                <tr><td><input type="checkbox" /></td><td>Product Roadmap v3_internal_draft.pptx</td><td>Product / Strategy</td><td>John Doe (Target)</td><td>May 01, 2025</td><td>5.1 MB</td><td><span class="ai-status-dot ai-status-pending"></span>Pending Analysis</td><td><button class="btn btn-secondary btn-small" title="View"><i class="fas fa-eye"></i></button> <button class="btn btn-secondary btn-small" title="Download"><i class="fas fa-download"></i></button> <button class="btn btn-secondary btn-small" title="Analyze Now" disabled><i class="fas fa-robot"></i></button></td></tr>
                <tr><td><input type="checkbox" /></td><td>Employee Handbook 2024.pdf</td><td>HR</td><td>Sarah Miller (Target)</td><td>May 05, 2025</td><td>1.2 MB</td><td><span class="ai-status-dot ai-status-error"></span>Analysis Error <i class="fas fa-exclamation-triangle text-danger" title="Unsupported Format"></i></td><td><button class="btn btn-secondary btn-small" title="View"><i class="fas fa-eye"></i></button> <button class="btn btn-secondary btn-small" title="Download"><i class="fas fa-download"></i></button> <button class="btn btn-secondary btn-small" title="Retry Analysis"><i class="fas fa-sync-alt"></i></button></td></tr>
                <tr><td><input type="checkbox" /></td><td>Market Research - Competitor Landscape Q1 2025.xlsx</td><td>Strategy / Market</td><td>Alex Chen (Acquirer)</td><td>May 07, 2025</td><td>3.5 MB</td><td><span class="ai-status-dot ai-status-analyzed"></span>Analyzed <i class="fas fa-lightbulb text-success" title="Insights Available"></i></td><td><button class="btn btn-secondary btn-small" title="View"><i class="fas fa-eye"></i></button> <button class="btn btn-secondary btn-small" title="Download"><i class="fas fa-download"></i></button> <button class="btn btn-secondary btn-small" title="AI Summary"><i class="fas fa-robot"></i></button></td></tr>
            </tbody>
        </table>
         <p style="margin-top:1rem; font-size:0.8rem; color:var(--light-font);">Showing 1-5 of 27 documents. <a href="#">View All</a></p>
    `,
    'collaboration-content': `
        <div class="content-header">
             <div class="content-header-left">
                <button class="btn btn-back" onclick="history.back()"><i class="fas fa-chevron-left"></i> Back</button>
                <h1 id="collaboration-content-deal-name">Collaboration Hub</h1>
             </div>
             <div class="actions">
                <button class="btn btn-go-to-deal"><i class="fas fa-chalkboard-teacher"></i> New Whiteboard</button>
                <button class="btn btn-go-to-deal"><i class="fas fa-video"></i> Start Meeting</button>
            </div>
        </div>
        <p style="font-size:0.9rem; color:var(--light-font);">Central space for brainstorming, shared notes, and communication related to <strong id="collab-deal-name-placeholder">Target Alpha Inc.</strong></p>
        <div class="collaboration-container">
            <div class="collaboration-canvas-area"><p>[ Embedded Collaborative Whiteboard/Canvas Area ]<br/>(Imagine Miro/FigJam integration)</p></div>
            <div class="collaboration-chat-panel">
                <h3><i class="fas fa-comments"></i> Deal Discussion Stream</h3>
                <div class="chat-messages">
                    <div class="chat-message"><p><strong>Alex Chen:</strong> @Sarah Miller Quick question on the "Future-Proofing" section of Project...</p><small>May 08, 2025 - 11:30 AM</small></div>
                    <div class="chat-message"><p><strong>Sarah Miller:</strong> @Alex Chen Good point. Added notes to shared doc. See attached brief in Docs.</p><small>May 08, 2025 - 11:45 AM</small></div>
                     <div class="chat-message"><p><strong>AI Assistant <i class="fas fa-robot" style="color:var(--accent-color-ai)"></i>:</strong> New document "Competitive Brief - Trend X Response.pdf" uploaded by Sarah Miller.</p><small>May 08, 2025 - 11:46 AM</small></div>
                    <div class="chat-message"><p><strong>Jane Doe:</strong> Reviewing patent portfolio. Initial thoughts: strong coverage in Y, potential weakness in Z.</p><small>May 08, 2025 - 12:15 PM</small></div>
                </div>
                <div class="chat-input">
                    <textarea rows="2" placeholder="Type message or @mention..."></textarea>
                    <button class="btn btn-primary btn-small" title="Send"><i class="fas fa-paper-plane"></i></button>
                    <button class="btn btn-secondary btn-small" title="Attach"><i class="fas fa-paperclip"></i></button>
                </div>
            </div>
        </div>
    `,
    'tasks-content': `
        <div class="content-header">
             <div class="content-header-left">
                 <button class="btn btn-back" onclick="history.back()"><i class="fas fa-chevron-left"></i> Back</button>
                 <h1 id="tasks-content-deal-name">Task Board</h1>
            </div>
            <div class="actions">
                 <select style="padding:0.4rem 0.8rem; border-radius:4px; border:1px solid var(--border-color); font-size:0.9rem;"><option>Filter by Assignee</option><option>Alex Chen</option><option>Sarah Miller</option><option>Jane Doe</option></select>
                 <button class="btn btn-go-to-deal"><i class="fas fa-plus"></i> New Task</button>
            </div>
        </div>
         <p style="font-size:0.9rem; color:var(--light-font);">Manage and track all due diligence and integration tasks for <strong id="tasks-deal-name-placeholder">Target Alpha Inc.</strong></p>
        <div class="tasks-board">
            <div class="task-column">
                <h3><i class="fas fa-clipboard-list"></i> To Do (5)</h3>
                <div class="task-card task-priority-high"><h4>Finalize Financial Model v2</h4><p>Integrate Q1 actuals & synergies.</p><p>Due: May 12 <span class="task-assignee" title="Alex Chen">AC</span></p></div>
                <div class="task-card"><h4>Draft Risk Assessment Report</h4><p>Based on 6P findings.</p><p>Due: May 15 <span class="task-assignee" title="Jane Doe">JD</span></p></div>
                <div class="task-card task-priority-medium"><h4>Schedule Legal Review Call</h4><p>Coordinate with counsel.</p><p>Due: May 16 <span class="task-assignee" title="Alex Chen">AC</span></p></div>
            </div>
            <div class="task-column">
                <h3><i class="fas fa-tasks-alt"></i> In Progress (3)</h3>
                <div class="task-card task-priority-medium"><h4>Review Client Contracts</h4><p>Check change of control.</p><p>Due: May 10 <span class="task-assignee" title="Sarah Miller (Target)">SM</span></p></div>
                 <div class="task-card"><h4>Prep Tech Stack Inventory</h4><p>Document current systems.</p><p>Due: May 14 <span class="task-assignee" title="Tech Lead (Target)">TL</span></p></div>
            </div>
            <div class="task-column">
                <h3><i class="fas fa-clipboard-check"></i> In Review (1)</h3>
                 <div class="task-card"><h4>Market Sizing Analysis</h4><p>Submitted by Mark K.</p><p>Due: May 08 <span class="task-assignee" title="Mark K.">MK</span></p></div>
            </div>
            <div class="task-column">
                <h3><i class="fas fa-check-double"></i> Done (8)</h3>
                <div class="task-card" style="opacity:0.7;"><h4>Upload NDA Docs</h4><p>Completed: May 01 <span class="task-assignee" title="Alex Chen">AC</span></p></div>
                 <div class="task-card" style="opacity:0.7;"><h4>Initial Mgmt Call</h4><p>Completed: Apr 28 <span class="task-assignee" title="Alex Chen">AC</span></p></div>
            </div>
        </div>
    `,
    'team-content': `
        <div class="content-header">
             <div class="content-header-left">
                 <button class="btn btn-back" onclick="history.back()"><i class="fas fa-chevron-left"></i> Back</button>
                 <h1 id="team-content-deal-name">Deal Team & Permissions</h1>
             </div>
             <div class="actions">
                 <button class="btn btn-go-to-deal"><i class="fas fa-user-plus"></i> Invite Member</button>
            </div>
        </div>
        <p style="font-size:0.9rem; color:var(--light-font);">Manage access and roles for individuals involved in the <strong id="team-deal-name-placeholder">Target Alpha Inc.</strong> due diligence process.</p>
        <div class="team-grid">
            <div class="team-member-card"><span class="avatar-placeholder">AC</span><h3>Alex Chen</h3><p class="role">Acquirer Lead</p><p>alex.chen@acquirer.com</p><p><small><i class="fas fa-key"></i> Full Access, Admin</small></p><button class="btn btn-secondary btn-small" style="margin-top:0.5rem;">Edit Permissions</button></div>
            <div class="team-member-card"><span class="avatar-placeholder">SM</span><h3>Sarah Miller</h3><p class="role">Target CEO</p><p>sarah.miller@targetco.com</p><p><small><i class="fas fa-pencil-alt"></i> Contributor (Project, People)</small></p><button class="btn btn-secondary btn-small" style="margin-top:0.5rem;">Edit Permissions</button></div>
            <div class="team-member-card"><span class="avatar-placeholder">JD</span><h3>Jane Doe</h3><p class="role">Acquirer Analyst</p><p>jane.doe@acquirer.com</p><p><small><i class="fas fa-edit"></i> Editor (All Sections)</small></p><button class="btn btn-secondary btn-small" style="margin-top:0.5rem;">Edit Permissions</button></div>
            <div class="team-member-card"><span class="avatar-placeholder">TL</span><h3>Tech Lead (Target)</h3><p class="role">Target Technical Contact</p><p>tech.lead@targetco.com</p><p><small><i class="fas fa-pencil-alt"></i> Contributor (Product, Processes)</small></p><button class="btn btn-secondary btn-small" style="margin-top:0.5rem;">Edit Permissions</button></div>
            <div class="team-member-card"><span class="avatar-placeholder">LG</span><h3>Legal Counsel</h3><p class="role">Acquirer Legal</p><p>legal@acquirer.com</p><p><small><i class="fas fa-eye"></i> Viewer (Docs, Posture)</small></p><button class="btn btn-secondary btn-small" style="margin-top:0.5rem;">Edit Permissions</button></div>
        </div>
    `,
    'reports-content': `
        <div class="content-header">
             <div class="content-header-left">
                 <button class="btn btn-back" onclick="history.back()"><i class="fas fa-chevron-left"></i> Back</button>
                 <h1 id="reports-content-deal-name">Reporting Center</h1>
             </div>
             <div class="actions">
                 <button class="btn btn-go-to-deal"><i class="fas fa-history"></i> View Report Log</button>
            </div>
        </div>
        <p style="font-size:0.9rem; color:var(--light-font);">Generate, view, and export key reports for <strong id="reports-deal-name-placeholder">Target Alpha Inc.</strong></p>
        <h3>Available Report Templates</h3>
        <div class="reports-grid">
            <div class="report-card"><h3><i class="fas fa-file-invoice-dollar"></i> Due Diligence Summary</h3><p>Comprehensive overview of 6P findings, risks, opportunities. Customizable.</p><button class="btn btn-go-to-deal btn-small"><i class="fas fa-cogs"></i> Configure & Generate</button></div>
            <div class="report-card"><h3><i class="fas fa-shield-alt"></i> Risk Assessment Matrix</h3><p>Detailed matrix of risks, probability, impact, mitigations. Exportable.</p><button class="btn btn-go-to-deal btn-small"><i class="fas fa-cogs"></i> Configure & Generate</button></div>
            <div class="report-card"><h3><i class="fas fa-map-signs"></i> Transformation Masterplan</h3><p>The post-acquisition plan with initiatives, timelines, owners, KPIs.</p><button class="btn btn-go-to-deal btn-small"><i class="fas fa-cogs"></i> Configure & Generate</button></div>
             <div class="report-card"><h3><i class="fas fa-bullseye"></i> Project Pillar Deep Dive</h3><p>Specific detailed report on the Project (Core DNA) assessment.</p><button class="btn btn-go-to-deal btn-small"><i class="fas fa-cogs"></i> Configure & Generate</button></div>
             <div class="report-card"><h3><i class="fas fa-users"></i> People Pillar Deep Dive</h3><p>Detailed report on People (Social Architecture), covering culture, leadership, talent.</p><button class="btn btn-go-to-deal btn-small"><i class="fas fa-cogs"></i> Configure & Generate</button></div>
             <div class="report-card"><h3><i class="fas fa-chart-line"></i> Performance Snapshot</h3><p>Key financial and operational KPIs from the Performance pillar.</p><button class="btn btn-go-to-deal btn-small"><i class="fas fa-cogs"></i> Configure & Generate</button></div>
        </div>
        <div style="margin-top:2rem;">
            <h3><i class="fas fa-archive"></i> Recently Generated Reports</h3>
            <ul class="generated-reports-list">
                <li><span>DD Summary - Target Alpha Inc. - 2025-05-07_v1.pdf</span> <div><button class="btn btn-secondary btn-small" title="View"><i class="fas fa-eye"></i></button> <button class="btn btn-secondary btn-small" title="Download"><i class="fas fa-download"></i></button> <button class="btn btn-secondary btn-small" title="Share"><i class="fas fa-share-alt"></i></button></div></li>
                <li><span>Risk Matrix - Target Alpha Inc. - 2025-05-06_final.xlsx</span> <div><button class="btn btn-secondary btn-small" title="View"><i class="fas fa-eye"></i></button> <button class="btn btn-secondary btn-small" title="Download"><i class="fas fa-download"></i></button></div></li>
                <li><span>Transformation Plan Draft 1 - Target Alpha Inc. - 2025-05-05.pptx</span> <div><button class="btn btn-secondary btn-small" title="View"><i class="fas fa-eye"></i></button> <button class="btn btn-secondary btn-small" title="Download"><i class="fas fa-download"></i></button></div></li>
            </ul>
        </div>
    `
};
// --- End of Content Database ---

function navigateToSection(sectionId, isBackToDashboard = false) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active-page'));
    const targetPage = document.getElementById(sectionId);
    if (targetPage) {
        targetPage.classList.add('active-page');
    }
    if (appWrapper) appWrapper.scrollTop = 0;

    if (isBackToDashboard && mainAppLayout && dashboardPage) {
        mainAppLayout.classList.remove('active-page');
        dashboardPage.classList.add('active-page');
    }
}

function loadDealLayout(dealName) {
    // Only proceed if it's the detailed example deal
    if (dealName !== 'Target Alpha Inc.') {
        alert('Detailed view for ' + dealName + ' is not implemented in this mockup.');
        return;
    }

    currentDealNameGlobal = dealName;
    if(leftNavDealName) leftNavDealName.textContent = dealName;

    if (dashboardPage && mainAppLayout) {
        dashboardPage.classList.remove('active-page');
        mainAppLayout.classList.add('active-page');
    }
    // Load initial content for the deal (first P: Project)
    const initialButton = document.querySelector('#left-main-nav button[data-template="p-project-content"]');
     if (initialButton) {
         loadContent('p-project-content', initialButton);
     } else {
         console.error("Initial button for Project content not found.");
         // Load a default message if the specific content fails
         if (mainContentDisplay) {
             mainContentDisplay.innerHTML = `<p>Default content area. Select an item from the navigation.</p>`;
         }
     }
}

// New function to load deal layout AND navigate to a specific P page
function loadDealLayoutAndNavigateToP(dealName, pTemplateIdSuffix) {
     if (dealName !== 'Target Alpha Inc.') {
        alert('Detailed view for ' + dealName + ' is not implemented in this mockup.');
        return;
    }
    currentDealNameGlobal = dealName;
    if(leftNavDealName) leftNavDealName.textContent = dealName;

     if (dashboardPage && mainAppLayout) {
        dashboardPage.classList.remove('active-page');
        mainAppLayout.classList.add('active-page');
    }
    // Find the corresponding button in the left nav to pass for highlighting
     const targetButton = document.querySelector(`#left-main-nav button[data-template="${pTemplateIdSuffix}"]`);
     loadContent(pTemplateIdSuffix, targetButton);
}

// --- OPTIMIZATION: Modified loadContent function ---
function loadContent(templateIdSuffix, clickedButton) {
    if (!mainContentDisplay) return;

    // Retrieve content from the contentDB object
    const contentHtml = contentDB[templateIdSuffix];

    if (contentHtml) {
        mainContentDisplay.innerHTML = contentHtml;
        updateDynamicContent(templateIdSuffix); // Pass suffix for title logic

        // Update active state for left nav
        document.querySelectorAll('#left-main-nav button').forEach(btn => btn.classList.remove('active'));
        if (clickedButton) {
            clickedButton.classList.add('active');
        }

    } else {
         // Fallback if content is not found in DB
         mainContentDisplay.innerHTML = `<div class="content-header"><div class="content-header-left"><button class="btn btn-back" onclick="history.back()"><i class="fas fa-chevron-left"></i> Back</button><h1>${formatTitle(templateIdSuffix)}</h1></div></div><p>Content for ${formatTitle(templateIdSuffix)} not found or is under construction.</p>`;
         // Still update active state
         document.querySelectorAll('#left-main-nav button').forEach(btn => btn.classList.remove('active'));
         if (clickedButton) clickedButton.classList.add('active');
    }

    if (mainContentDisplay) mainContentDisplay.scrollTop = 0;
}
// --- End of Modified loadContent function ---


// Helper to update dynamic content after loading template
function updateDynamicContent(templateIdSuffix) {
     // Update Title in Header
     const headerTitle = mainContentDisplay.querySelector('.content-header h1');
     if (headerTitle && templateIdSuffix) {
         headerTitle.textContent = formatTitle(templateIdSuffix); // Use helper for title
     }
     // Update other placeholders if necessary
     mainContentDisplay.querySelectorAll('[id$="-deal-name-placeholder"]').forEach(el => {
        el.textContent = currentDealNameGlobal;
     });
     mainContentDisplay.querySelectorAll('.current-deal-breadcrumb').forEach(el => {
        el.textContent = currentDealNameGlobal;
    });
}

 // Helper to format template IDs into titles
function formatTitle(idSuffix) {
    if (!idSuffix) return 'Unknown Page';
    // Specific overrides for P-templates
    if (idSuffix === 'p-project-content') return 'Project (Core DNA)';
    if (idSuffix === 'p-people-content') return 'People (Social Architecture)';
    if (idSuffix === 'p-product-content') return 'Product (Innovation & IP)';
    if (idSuffix === 'p-processes-content') return 'Processes (Dynamic Work Graph)';
    if (idSuffix === 'p-performance-content') return 'Performance (Quest for Success)';
    if (idSuffix === 'p-posture-content') return 'Posture (Mindful Self-Regulation)';
    if (idSuffix === 'roadmap-content') return `${currentDealNameGlobal} - Transformation Roadmap`;
    if (idSuffix === 'documents-content') return `${currentDealNameGlobal} - Documents Hub`;
    if (idSuffix === 'collaboration-content') return `${currentDealNameGlobal} - Collaboration Hub`;
    if (idSuffix === 'tasks-content') return `${currentDealNameGlobal} - Task Board`;
    if (idSuffix === 'team-content') return `${currentDealNameGlobal} - Deal Team`;
    if (idSuffix === 'reports-content') return `${currentDealNameGlobal} - Reporting Center`;

    // General fallback formatting
     return idSuffix.replace('-content', '').replace(/-/g, ' ').replace(/\b(p |)/g, '').replace(/\b\w/g, l => l.toUpperCase());
}

// Initial Load
document.addEventListener('DOMContentLoaded', () => {
    navigateToSection('dashboard-page');
    // Automatically load the 'Project' content if the main app layout is the initial view (optional)
    // Alternatively, keep the dashboard as the primary view and let user actions load content.
    // Example: if (!dashboardPage.classList.contains('active-page')) { loadDealLayout('Target Alpha Inc.'); }
});
