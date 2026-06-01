import './App.css'

const metrics = [
  { label: 'Years in Operations', value: '15+' },
  { label: 'Current Role', value: 'Data Scientist' },
  { label: 'Primary Strength', value: 'Ops + AI' },
  { label: 'Location', value: 'Ontario, Canada' },
]

const highlights = [
  {
    title: 'CAVIA Enterprise Assistant',
    category: 'AI DELIVERY',
    summary:
      'Led production readiness for an AWS-based retrieval assistant, strengthening logging, monitoring, documentation, and stakeholder communication.',
    impact: 'Cloud delivery across API Gateway, Lambda, OpenSearch, and SageMaker',
  },
  {
    title: 'Operational Analytics',
    category: 'DATA SCIENCE',
    summary:
      'Delivered analytics, reporting, validation, and dashboards that improved visibility, trend analysis, and decision support.',
    impact: 'Work spanning requirements, modeling, validation, and reporting',
  },
  {
    title: 'Network Operations Leadership',
    category: 'OPERATIONS',
    summary:
      'Managed incident, problem, and change workflows in 24/7 telecom and data-centre environments while mentoring teams and protecting uptime.',
    impact: 'Experience across NOC, escalation, change windows, and service assurance',
  },
]

const careerTimeline = [
  {
    years: '2023 - Present',
    role: 'Data Scientist, Emerging Technologies and Innovation',
    company: 'Government of Canada',
    details:
      'Led production delivery of CAVIA and implemented cloud components across API Gateway, Lambda, OpenSearch, SageMaker endpoints, and CI/CD pipelines.',
  },
  {
    years: '2021 - 2023',
    role: 'Data Scientist, Operational Workload Development',
    company: 'Government of Canada',
    details:
      'Built analytics and reporting solutions end-to-end, including data preparation, model development, validation, reporting, and stakeholder communication.',
  },
  {
    years: '2020 - 2021',
    role: 'Data Officer',
    company: 'Government of Canada',
    details:
      'Performed testing, validation, issue analysis, and anomaly review across 50+ source systems feeding enterprise data warehouse and reporting environments.',
  },
  {
    years: '2008 - 2019',
    role: 'Network Operations and Core Network Leadership',
    company: 'Huawei Technologies',
    details:
      'Led and supported NOC and core network operations, incident response, deployments, acceptance testing, configuration, troubleshooting, and mentorship across telecom environments.',
  },
]

const skillGroups = [
  {
    title: 'Operations',
    skills: ['NOC operations', 'Incident management', 'Change coordination', 'SLA oversight'],
  },
  {
    title: 'Data & AI',
    skills: ['Data analysis', 'Reporting', 'Model development', 'AWS AI services'],
  },
  {
    title: 'Cloud & Delivery',
    skills: ['API Gateway', 'Lambda', 'OpenSearch', 'CI/CD'],
  },
  {
    title: 'Telecom Systems',
    skills: ['Core network support', 'Subscriber database', 'Interconnection', 'Configuration integrity'],
  },
]

const education = [
  'Leadership Principles Certificate - Harvard Business School Online, 2024',
  'M.Sc., Engineering Management - Ahmadu Bello University, 2017',
  'B.Eng., Mechanical Engineering - University of Nigeria Nsukka, 2005',
]

const certifications = [
  'ITIL',
  'HCNA',
  'Microsoft Certified: Azure AI Engineer Associate',
  'Microsoft Certified: Azure AI Fundamentals',
  'IBM Data Science Professional Certificate',
  'Oracle Autonomous Database Cloud Certified Specialist',
]

function App() {
  return (
    <div className="page">
      <header className="nav">
        <div className="brand">Michael Obi</div>
        <nav className="nav-links" aria-label="Section links">
          <a href="#about">About</a>
          <a href="#highlights">Highlights</a>
          <a href="#work">Work</a>
          <a href="#experience">Experience</a>
          <a href="#skills">Skills</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section className="hero">
          <p className="eyebrow">Network Operations - Incident & Change Management - Data Science - AI Engineering</p>
          <h1>
            I build reliable systems, lead operational delivery, and turn complex technical work into clear outcomes.
          </h1>
          <p className="intro">
            Operations-focused technology professional with deep experience in telecom network operations, data-centre
            service oversight, enterprise data work, and AWS-based AI delivery.
          </p>
          <div className="actions">
            <a className="btn-solid" href="mailto:Obimichael2@gmail.com">
              Get In Touch
            </a>
            <a className="btn-ghost" href="#experience">
              View Experience
            </a>
            <a
              className="btn-ghost"
              href="https://www.linkedin.com/in/michael-obi-30109617/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>

          <div className="metrics" aria-label="Profile metrics">
            {metrics.map((metric) => (
              <article key={metric.label} className="metric">
                <h2>{metric.value}</h2>
                <p>{metric.label}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="about" className="card">
          <h2>Background</h2>
          <p>
            I bring together operational discipline, technical troubleshooting, documentation, stakeholder
            communication, and delivery ownership. My background spans telecom service assurance, cloud-based AI
            delivery, analytics, and reporting across enterprise environments.
          </p>
        </section>

        <section id="highlights" className="card">
          <h2>Selected Highlights</h2>
          <div className="grid three">
            {highlights.map((project) => (
              <article key={project.title} className="project-card">
                <p className="project-category">{project.category}</p>
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
                <p className="impact">{project.impact}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="work" className="card">
          <h2>Core Strengths</h2>
          <div className="chips">
            {certifications.map((item) => (
              <span key={item} className="chip">
                {item}
              </span>
            ))}
          </div>
        </section>

        <section id="experience" className="card">
          <h2>Career</h2>
          <div className="timeline">
            {careerTimeline.map((item) => (
              <article key={`${item.years}-${item.role}`} className="timeline-item">
                <p className="years">{item.years}</p>
                <h3>{item.role}</h3>
                <p className="company">{item.company}</p>
                <p>{item.details}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="card">
          <h2>Technical Stack</h2>
          <div className="grid two">
            {skillGroups.map((group) => (
              <article key={group.title}>
                <h3>{group.title}</h3>
                <div className="chips">
                  {group.skills.map((skill) => (
                    <span key={skill} className="chip">
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="education" className="card">
          <h2>Education & Certifications</h2>
          <div className="grid two">
            <article>
              <h3>Education</h3>
              <div className="chips">
                {education.map((item) => (
                  <span key={item} className="chip">
                    {item}
                  </span>
                ))}
              </div>
            </article>
            <article>
              <h3>Certifications</h3>
              <div className="chips">
                {certifications.map((item) => (
                  <span key={item} className="chip">
                    {item}
                  </span>
                ))}
              </div>
            </article>
          </div>
        </section>

        <section id="contact" className="card contact">
          <h2>Let's Build Something</h2>
          <p>
            Open to discussions around operations leadership, data science, AI delivery, and enterprise technology
            support.
          </p>
          <div className="actions">
            <a className="btn-solid" href="mailto:Obimichael2@gmail.com">
              Obimichael2@gmail.com
            </a>
            <a
              className="btn-ghost"
              href="https://www.linkedin.com/in/michael-obi-30109617/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">&copy; {new Date().getFullYear()} Michael Obi. Built with purpose.</footer>
    </div>
  )
}

export default App
