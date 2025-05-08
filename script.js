let currentDealNameGlobal = 'Target Alpha Inc.';
const mainAppLayout = document.getElementById('main-app-layout');
const dashboardPage = document.getElementById('dashboard-page');
const mainContentDisplay = document.getElementById('main-content-display');
const leftNavDealName = document.getElementById('left-nav-deal-name');
const appWrapper = document.getElementById('app-wrapper');

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
                    <textarea id="vision-statement" rows="5" placeholder="Describe the company's long-term vision...">To be the undisputed global leader in urban resilience software solutions, empowering cities and citizens with seamless, eco-friendly, and accessible services for a greener future.</textarea>
                    <button class="comment-btn-inline" title="Comments"><i class="fas fa-comment-dots"></i></button>
                </div>
                <div class="ai-assist-panel">
                    <h4><i class="fas fa-lightbulb"></i> AI Insights & Suggestions</h4>
                    <p><em>Document Scan ('Annual Report 2024', pg. 5):</em> "Our vision is to revolutionize urban transport..." - <a href="#">View Source</a></p>
                    <p><strong>Suggestion:</strong> Add quantifiable aspects (e.g., "serving X million people").</p>
                    <button class="btn btn-ai btn-secondary btn-small">Apply Suggestion</button>
                </div>
            </div>
             <div class="assessment-item">
                <label for="vision-clarity">Clarity & Communication of Vision</label>
                <div class="input-area">
                    <textarea id="vision-clarity" rows="4" placeholder="How clearly is the vision communicated...?">The vision is consistently referenced... 75% understanding rate...</textarea>
                    <button class="comment-btn-inline" title="Comments"><i class="fas fa-comment-dots"></i></button>
                </div>
            </div>
        </div>
        <div class="assessment-section">
            <h2><i class="fas fa-flag-checkered p-icon" style="color:var(--p-project-color);"></i>Mission Assessment</h2>
             <div class="assessment-item">
                <label for="mission-statement">Company's Core Mission</label>
                <div class="input-area">
                    <textarea id="mission-statement" rows="5" placeholder="What is the company's core purpose...?">Our mission is to design, develop, and deploy innovative and affordable services...</textarea>
                    <button class="comment-btn-inline" title="Comments"><i class="fas fa-comment-dots"></i></button>
                </div>
                 <div class="ai-assist-panel">
                    <h4><i class="fas fa-lightbulb"></i> AI Insights & Suggestions</h4>
                    <p><em>Comparison:</em> Competitor X emphasizes "data-driven optimization". Is this relevant?</p>
                </div>
            </div>
            <div class="assessment-item">
                <label for="mission-alignment">Alignment of Mission with Daily Operations</label>
                <div class="input-area">
                    <textarea id="mission-alignment" rows="4" placeholder="How well do daily activities align...?">Product development prioritizes affordability... Market expansion focuses on green cities...</textarea>
                    <button class="comment-btn-inline" title="Comments"><i class="fas fa-comment-dots"></i></button>
                </div>
            </div>
        </div>
        <div class="assessment-section">
             <h2><i class="fas fa-sitemap p-icon" style="color:var(--p-project-color);"></i>Strategy Clarity</h2>
             <div class="assessment-item">
                <label for="strategy-main">Main Strategic Pillars (3-5 Years)</label>
                <div class="input-area">
                    <textarea id="strategy-main" rows="6" placeholder="Outline key strategic pillars...">1. Technology Leadership... 2. Geographic Expansion... 3. Partnership Ecosystem... 4. Operational Excellence... 5. Enhanced Rider Experience...</textarea>
                    <button class="comment-btn-inline" title="Comments"><i class="fas fa-comment-dots"></i></button>
                </div>
            </div>
             <div class="assessment-item">
                <label for="strategy-competitive">Competitive Differentiation & Market Positioning</label>
                <div class="input-area">
                    <textarea id="strategy-competitive" rows="5" placeholder="How does the strategy differentiate...?">Differentiation via hardware durability and flexible city partnerships... Positioned as premium, reliable operator...</textarea>
                    <button class="comment-btn-inline" title="Comments"><i class="fas fa-comment-dots"></i></button>
                </div>
                 <div class="ai-assist-panel">
                    <h4><i class="fas fa-lightbulb"></i> AI Insights & Suggestions</h4>
                    <p><em>Market Trend:</em> Growing B2B demand. Strategy impact?</p>
                    <p><em>Risk Identified:</em> Single battery supplier dependency. <span class="text-warning">Mitigation needed.</span></p>
                </div>
            </div>
        </div>
        <div class="assessment-section">
            <h2><i class="fas fa-user-shield p-icon" style="color:var(--p-project-color);"></i>Future-Proofing Against Client Needs</h2>
             <div class="assessment-item">
                <label for="future-client-trends">Anticipated Client Needs & Market Trends (Next 5 Years)</label>
                <div class="input-area">
                    <textarea id="future-client-trends" rows="5" placeholder="Anticipated shifts...?">1. Cities: Data transparency, smart city integration... 2. End-Users: Personalization, varied vehicles... 3. Regulatory: Sidewalk rules, data privacy... 4. Technological: Battery density, autonomous tech...</textarea>
                    <button class="comment-btn-inline" title="Comments"><i class="fas fa-comment-dots"></i></button>
                </div>
            </div>
            <div class="assessment-item">
                <label for="future-proofing-strategy">Strategies to Adapt & Address Future Needs</label>
                <div class="input-area">
                    <textarea id="future-proofing-strategy" rows="5" placeholder="How is the company adapting...?">R&D includes UrbanPulse platform... Exploring modular designs... Active in regulatory discussions... Battery swapping pilot...</textarea>
                    <button class="comment-btn-inline" title="Comments"><i class="fas fa-comment-dots"></i></button>
                </div>
            </div>
        </div>
        <div class="assessment-section">
            <h2><i class="fas fa-rocket p-icon" style="color:var(--p-project-color);"></i>Innovation Outlook</h2>
            <div class="assessment-item">
                <label for="innovation-culture">Culture of Innovation & R&D Pipeline</label>
                <div class="input-area">
                    <textarea id="innovation-culture" rows="5" placeholder="Describe innovation culture and pipeline...">'Innovation Fridays'... Formal R&D process (12% revenue)... Pipeline: Smart helmet, anti-theft, solid-state battery eval, AI demand prediction...</textarea>
                    <button class="comment-btn-inline" title="Comments"><i class="fas fa-comment-dots"></i></button>
                </div>
                 <div class="ai-assist-panel">
                    <h4><i class="fas fa-lightbulb"></i> AI Insights & Suggestions</h4>
                    <p><em>Patent Analysis:</em> 3 BMS granted, 2 rebalancing pending. <span class="text-success">Strength.</span> Potential overlap with Competitor Y - legal review needed.</p>
                    <p><em>Employee Survey Snippet:</em> "More resources needed for blue-sky hardware projects." Score: 3.8/5.</p>
                </div>
            </div>
             <div class="assessment-item">
                <label for="innovation-ip">Intellectual Property & Competitive Edge from Innovation</label>
                <div class="input-area">
                    <textarea id="innovation-ip" rows="4" placeholder="Status of IP...?">Key patents secure BMS & algorithms... Trade secrets for efficiency... Est. 12-18 month lead...</textarea>
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
                <textarea rows="4" placeholder="Describe the company's approach to continuous learning... Formal training? Mentorship? Budget?"></textarea>
                 <div class="ai-assist-panel"><h4><i class="fas fa-lightbulb"></i> AI Suggestion</h4><p>Check 'HR Policies.pdf' for L&D budget allocation. Current budget appears to be X% of payroll.</p></div>
            </div>
            <div class="assessment-item">
                <label>Adaptability & Resilience</label>
                <textarea rows="4" placeholder="Assess the organization's ability to adapt to change... How is resilience fostered? Example of recent adaptation?"></textarea>
            </div>
        </div>
         <div class="assessment-section">
            <h2><i class="fas fa-users-cog p-icon" style="color:var(--p-people-color);"></i>Leadership Principles</h2>
            <div class="assessment-item">
                <label>Leadership Style & Effectiveness</label>
                <textarea rows="4" placeholder="Analyze the predominant leadership style(s)... Effectiveness in setting direction, motivating teams...?"></textarea>
                 <div class="ai-assist-panel"><h4><i class="fas fa-lightbulb"></i> AI Insight</h4><p>Employee survey comments mention 'approachable leadership' but also 'siloed decision making between Dept A and B'.</p></div>
            </div>
             <div class="assessment-item">
                <label>Succession Planning & Bench Strength</label>
                <textarea rows="4" placeholder="Evaluate approach to succession planning for key roles... Bench strength? How are future leaders identified/developed?"></textarea>
            </div>
        </div>
         <div class="assessment-section">
             <h2><i class="fas fa-user-graduate p-icon" style="color:var(--p-people-color);"></i>Talent Development Systems</h2>
             <div class="assessment-item">
                <label>Talent Acquisition & Onboarding</label>
                <textarea rows="4" placeholder="Assess effectiveness of hiring and onboarding... Time-to-hire? Quality of hires? Employer brand perception?"></textarea>
             </div>
              <div class="assessment-item">
                <label>Performance Management & Rewards</label>
                <textarea rows="4" placeholder="Analyze performance management system... How are high performers identified/rewarded? Fairness perception?"></textarea>
                 <div class="ai-assist-panel"><h4><i class="fas fa-lightbulb"></i> AI Insight</h4><p>Analysis of 'Compensation Bands.xlsx' suggests potential discrepancy in pay for similar roles across departments. <span class="text-warning">Review needed.</span></p></div>
             </div>
              <div class="assessment-item">
                <label>Employee Engagement & Retention</label>
                <textarea rows="4" placeholder="Evaluate engagement levels (e.g., survey results, eNPS) and retention rates... Main drivers of engagement/attrition?"></textarea>
                 <div class="ai-assist-panel"><h4><i class="fas fa-lightbulb"></i> AI Insight</h4><p>Exit interview summaries highlight 'lack of career growth opportunities' as a key reason for voluntary attrition in engineering dept.</p></div>
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
                <textarea rows="4" placeholder="Assess core architecture... Monolithic/microservices? Scalability for growth? Bottlenecks?"></textarea>
                 <div class="ai-assist-panel"><h4><i class="fas fa-lightbulb"></i> AI Insight</h4><p>Code analysis report (placeholder) flags high cyclomatic complexity in Module Z suggesting refactoring need. Tech debt estimated at X story points.</p></div>
            </div>
            <div class="assessment-item">
                <label>Technology Stack & Modernity</label>
                <textarea rows="4" placeholder="Evaluate tech stack (languages, frameworks, DBs, cloud)... Modern? Supported? Legacy dependencies?"></textarea>
            </div>
             <div class="assessment-item">
                <label>Security Posture (Product-Level)</label>
                <textarea rows="4" placeholder="Assess product security practices... Secure coding? Vulnerability scanning? Pen testing frequency? Sensitive data handling?"></textarea>
                  <div class="ai-assist-panel"><h4><i class="fas fa-lightbulb"></i> AI Insight</h4><p>Last pen test report ('PenTest_Report_Q4_2024.pdf') identified 2 high, 5 medium vulnerabilities. Remediation status unclear.</p></div>
            </div>
        </div>
        <div class="assessment-section">
             <h2><i class="fas fa-code-branch p-icon" style="color:var(--p-product-color);"></i>Development Methodologies</h2>
             <div class="assessment-item">
                <label>SDLC Process & Agility</label>
                <textarea rows="4" placeholder="Describe SDLC... Agile (Scrum/Kanban)? Waterfall? Hybrid? Effectiveness? Release cadence?"></textarea>
             </div>
             <div class="assessment-item">
                <label>Code Quality & Testing Practices</label>
                <textarea rows="4" placeholder="Evaluate code reviews, automated testing (unit, integration, E2E), test coverage, CI/CD pipeline maturity."></textarea>
                  <div class="ai-assist-panel"><h4><i class="fas fa-lightbulb"></i> AI Suggestion</h4><p>Check DevOps tool logs for build success rates (avg 92%) and test coverage reports (avg 65% unit test coverage).</p></div>
            </div>
        </div>
        <div class="assessment-section">
            <h2><i class="fas fa-clipboard-check p-icon" style="color:var(--p-product-color);"></i>Quality Assurance Processes</h2>
             <div class="assessment-item">
                <label>QA Team Structure & Process</label>
                <textarea rows="4" placeholder="Describe QA team role, structure (embedded/separate)... Manual vs. automated focus? Test plan creation/execution?"></textarea>
            </div>
             <div class="assessment-item">
                <label>Bug Tracking & Resolution</label>
                <textarea rows="4" placeholder="Analyze bug tracking/prioritization/resolution process... Tools? Avg time-to-resolution for critical bugs?"></textarea>
            </div>
        </div>
         <div class="assessment-section">
            <h2><i class="fas fa-lightbulb p-icon" style="color:var(--p-product-color);"></i>Intellectual Property (IP)</h2>
             <div class="assessment-item">
                <label>Patents, Trademarks, Trade Secrets</label>
                <textarea rows="4" placeholder="Inventory key IP assets... Strength/defensibility? (Referencing Project page IP assessment)"></textarea>
                 <div class="ai-assist-panel"><h4><i class="fas fa-lightbulb"></i> AI Insight</h4><p>Cross-reference patent list with competitor filings - potential overlap identified in Area X. Freedom-to-operate analysis recommended.</p></div>
            </div>
             <div class="assessment-item">
                <label>Open Source Software (OSS) Usage & Compliance</label>
                <textarea rows="4" placeholder="Assess policies and practices for using OSS components. Are licenses tracked? Any compliance risks (e.g., GPL copyleft issues)?"></textarea>
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
                <textarea rows="4" placeholder="Analyze key operational processes (e.g., order-to-cash, support ticket resolution, fleet deployment)... Identify bottlenecks, waste (wait times, rework, handoffs), and opportunities using Lean/VSM principles."></textarea>
             </div>
              <div class="assessment-item">
                <label>Cross-Functional Collaboration & Handoffs</label>
                <textarea rows="4" placeholder="Evaluate how effectively different departments (e.g., Sales-Ops, Product-Support) collaborate on key processes... Are handoffs smooth, documented, and measured?"></textarea>
                 <div class="ai-assist-panel"><h4><i class="fas fa-lightbulb"></i> AI Suggestion</h4><p>Review process maps (if available). Consider workshop or interviews focused on major cross-functional process handoffs.</p></div>
            </div>
        </div>
         <div class="assessment-section">
            <h2><i class="fas fa-robot p-icon" style="color:var(--p-processes-color);"></i>AI & Automation Adoption</h2>
            <div class="assessment-item">
                <label>Current Use of Automation/AI in Core Processes</label>
                <textarea rows="4" placeholder="Inventory existing automation tools (RPA, scripts) and AI applications (chatbots, predictive analytics)... Assess effectiveness, ROI, and maintenance overhead."></textarea>
            </div>
             <div class="assessment-item">
                <label>Potential for Further Automation/AI (Impact/Feasibility)</label>
                <textarea rows="4" placeholder="Identify high-potential areas for introducing/expanding automation & AI... Prioritize based on potential impact (cost, speed, quality) and feasibility."></textarea>
                 <div class="ai-assist-panel"><h4><i class="fas fa-lightbulb"></i> AI Insight</h4><p>Process mining analysis (placeholder) suggests high manual effort & variability in invoice processing (avg 3 days cycle time). High potential candidate for RPA/AI document processing.</p></div>
            </div>
        </div>
        <div class="assessment-section">
            <h2><i class="fas fa-chart-pie p-icon" style="color:var(--p-processes-color);"></i>Resource Allocation</h2>
            <div class="assessment-item">
                <label>Alignment of Resources (Financial, Human) with Strategy</label>
                <textarea rows="4" placeholder="Assess how financial and human resources are allocated across departments, projects, strategic initiatives... Does allocation align with stated strategic priorities (from Project P)? Evidence of resource shifting towards priorities?"></textarea>
            </div>
             <div class="assessment-item">
                <label>Budgeting, Planning & Forecasting Process Agility</label>
                <textarea rows="4" placeholder="Evaluate the budgeting/planning process... Is it agile? How frequently are forecasts updated? How are resource trade-offs made when priorities shift?"></textarea>
                 <div class="ai-assist-panel"><h4><i class="fas fa-lightbulb"></i> AI Suggestion</h4><p>Compare initial budgets vs. actual spend for strategic initiatives over last 2 years.</p></div>
            </div>
        </div>
        <div class="assessment-section">
             <h2><i class="fas fa-book-reader p-icon" style="color:var(--p-processes-color);"></i>Organizational Learning Capabilities</h2>
            <div class="assessment-item">
                <label>Knowledge Management & Sharing Practices</label>
                <textarea rows="4" placeholder="Assess how institutional knowledge is captured, stored, accessed, and shared... Effectiveness of tools (wikis, etc.)? Culture of sharing vs. hoarding?"></textarea>
            </div>
             <div class="assessment-item">
                <label>Feedback Loops & Continuous Improvement Culture</label>
                <textarea rows="4" placeholder="Evaluate mechanisms for collecting feedback (customer, employee, operational)... How is it analyzed and incorporated into process improvements or strategic adjustments? Is there evidence of a continuous improvement mindset (e.g., post-mortems, Kaizen events)?"></textarea>
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
                <textarea rows="4" placeholder="Does the company use OKRs, Balanced Scorecard, other? How effectively are high-level goals cascaded down to teams/individuals? Is alignment visible?"></textarea>
             </div>
              <div class="assessment-item">
                <label>Key Performance Indicators (KPIs) - Financial & Operational</label>
                <textarea rows="4" placeholder="Identify key financial KPIs (Rev Growth, EBITDA Margin, CAC, LTV, Burn Rate...) and operational KPIs (Uptime, CSAT, Feature Adoption, Cycle Time...). Are they relevant, tracked consistently, visualized effectively (dashboards)?"></textarea>
                <div class="ai-assist-panel"><h4><i class="fas fa-lightbulb"></i> AI Insight</h4><p>Analysis of 'Board Deck Q1.pptx' shows focus on Revenue Growth & User Count. Suggest adding operational efficiency KPIs (e.g., cost per ride, vehicle utilization) for a balanced view.</p></div>
             </div>
        </div>
         <div class="assessment-section">
             <h2><i class="fas fa-hand-holding-usd p-icon" style="color:var(--p-performance-color);"></i>Financial Discipline & Performance</h2>
             <div class="assessment-item">
                <label>Historical Financial Performance Analysis (3-5 Years)</label>
                <textarea rows="4" placeholder="Analyze trends in Revenue, Gross Margin, EBITDA, Net Income, Cash Flow... Compare against budget, forecasts, and industry benchmarks. Key drivers/detractors?"></textarea>
                 <div class="ai-assist-panel"><h4><i class="fas fa-lightbulb"></i> AI Suggestion</h4><p>Upload historical financial statements (.xlsx, .csv) for automated trend analysis, ratio calculation, and benchmarking (if industry data available).</p></div>
            </div>
             <div class="assessment-item">
                <label>Working Capital Management</label>
                <textarea rows="4" placeholder="Evaluate management of receivables (DSO), payables (DPO), and inventory (if applicable). Assess cash conversion cycle efficiency."></textarea>
            </div>
             <div class="assessment-item">
                <label>Unit Economics & Cohort Analysis</label>
                <textarea rows="4" placeholder="Analyze CAC, LTV, contribution margin per user/unit... Assess profitability by customer cohort, product line, or geography. Payback period analysis."></textarea>
            </div>
              <div class="assessment-item">
                <label>Capital Structure & Funding History</label>
                <textarea rows="4" placeholder="Review current capital structure (debt, equity). Analyze past funding rounds, valuations, and key investors. Assess future funding needs."></textarea>
            </div>
        </div>
        <div class="assessment-section">
            <h2><i class="fas fa-brain p-icon" style="color:var(--p-performance-color);"></i>AI-Enabled Execution & Data Usage</h2> <div class="assessment-item">
                <label>Use of Data/AI in Decision Making & Operations</label>
                <textarea rows="4" placeholder="Assess current use of data analytics & AI to inform decisions (pricing, churn prediction, fleet allocation...) and optimize operations (predictive maintenance, fraud detection...). Examples? Impact?"></textarea>
            </div>
             <div class="assessment-item">
                <label>Data Infrastructure, Quality & Analytics Capabilities</label>
                <textarea rows="4" placeholder="Evaluate data infrastructure (warehouse, lake), data quality processes, and in-house analytics capabilities (tools like Tableau/PowerBI, data science talent). Accessibility of data for decision-makers?"></textarea>
                <div class="ai-assist-panel"><h4><i class="fas fa-lightbulb"></i> AI Suggestion</h4><p>Identify key data sources required for proposed synergy KPIs. Assess availability and quality.</p></div>
            </div>
        </div>
        <div class="assessment-section">
            <h2><i class="fas fa-network-wired p-icon" style="color:var(--p-performance-color);"></i>Ecosystem Leverage</h2>
            <div class="assessment-item">
                <label>Strategic Partnership Value & Management</label>
                <textarea rows="4" placeholder="Analyze existing strategic partnerships... Contribution to revenue, innovation, market access? How are partnerships managed and measured?"></textarea>
            </div>
            <div class="assessment-item">
                <label>Market Position, Brand Strength & Network Effects</label>
                <textarea rows="4" placeholder="Evaluate position within its market ecosystem... Market share trends? Brand reputation/sentiment? Evidence of network effects? Influence in the industry?"></textarea>
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
                <textarea rows="4" placeholder="Identify key regulations (GDPR, CCPA, Data Localization, Safety Standards...). Assess policies, procedures, controls, training programs for compliance. Review past violations/audits. Data privacy practices?"></textarea>
                 <div class="ai-assist-panel"><h4><i class="fas fa-lightbulb"></i> AI Suggestion</h4><p>Scan 'Compliance Manual.pdf' and 'Data Privacy Policy.docx' for GDPR readiness checklist completion and policy adherence statements.</p></div>
            </div>
             <div class="assessment-item">
                <label>Contractual Compliance Management</label>
                <textarea rows="4" placeholder="Evaluate processes for managing and ensuring compliance with key customer (SLAs, data use), supplier (quality, payment), and partner contracts. Is there a contract management system?"></textarea>
            </div>
        </div>
        <div class="assessment-section">
            <h2><i class="fas fa-exclamation-triangle p-icon" style="color:var(--p-posture-color);"></i>Risk Management Framework</h2>
             <div class="assessment-item">
                <label>Risk Identification, Assessment & Prioritization Process</label>
                <textarea rows="4" placeholder="Formal process for identifying, assessing (likelihood, impact), and prioritizing key business risks (strategic, operational, financial, compliance, cyber, ESG)? Is there a risk committee?"></textarea>
            </div>
            <div class="assessment-item">
                <label>Risk Mitigation Strategies & Internal Controls</label>
                <textarea rows="4" placeholder="Evaluate effectiveness of existing mitigation strategies and internal controls for top risks. Is there a documented risk register? How often is it updated/reviewed? Control testing?"></textarea>
                 <div class="ai-assist-panel"><h4><i class="fas fa-lightbulb"></i> AI Insight</h4><p>Review 'Internal Audit Report Q4 2024' for findings related to control weaknesses. Finding X related to user data access controls needs follow-up.</p></div>
            </div>
            <div class="assessment-item">
                <label>Business Continuity & Disaster Recovery (BCP/DR)</label>
                <textarea rows="4" placeholder="Assess BCP/DR plans' comprehensiveness for critical operations (tech, supply chain, personnel). Have plans been tested recently? RTO/RPO targets defined and achievable?"></textarea>
            </div>
             <div class="assessment-item">
                <label>Cybersecurity Posture & Incident Response</label>
                <textarea rows="4" placeholder="Evaluate overall cybersecurity posture (tools, policies, training). Assess incident response plan's readiness and effectiveness. History of breaches?"></textarea>
            </div>
        </div>
         <div class="assessment-section">
            <h2><i class="fas fa-gavel p-icon" style="color:var(--p-posture-color);"></i>Audit & Accountability Processes</h2>
             <div class="assessment-item">
                <label>Internal & External Audit Functions</label>
                <textarea rows="4" placeholder="Describe scope, frequency, independence, and effectiveness of internal/external audits. How are findings tracked/remediated? Relationship with audit committee?"></textarea>
            </div>
            <div class="assessment-item">
                <label>Governance Structure & Board Oversight Effectiveness</label>
                <textarea rows="4" placeholder="Evaluate governance structure (board composition, independence, committees, charters). How effectively does the board provide oversight on strategy, risk, compliance, and executive performance?"></textarea>
            </div>
             <div class="assessment-item">
                <label>Ethical Culture, Code of Conduct & Whistleblower Mechanisms</label>
                <textarea rows="4" placeholder="Assess code of conduct policies and ethics training. Are there effective, confidential mechanisms for reporting concerns? How are reports handled? Evidence of ethical culture reinforcement?"></textarea>
            </div>
        </div>
    `,
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
