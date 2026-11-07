import React from 'react';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowDown, ArrowUpRight, Github, Linkedin, Mail, Download, Briefcase, Phone,
  Code2, Sparkles, Menu, X, ExternalLink, Heart, GraduationCap,
  Trophy, Terminal, Layers3, Cpu
} from 'lucide-react';

const projects = [
  {
    name: 'LegalLens',
    category: 'AI · LegalTech · Full Stack',
    status: 'In progress',
    description: 'An AI-assisted packaged-commodity compliance platform designed to help inspect product declarations against Legal Metrology requirements.',
    stack: ['React', 'JavaScript', 'AI/ML', 'FastAPI'],
    contribution: 'Frontend and full-stack implementation. Compliance automation features are being developed.',
    repo: 'https://github.com/25cs3019-hub',
    accent: 'lilac',
    icon: '⚖️'
  },
  {
    name: 'SiteFlow',
    category: 'ConstructionTech · AI',
    status: 'In progress',
    description: 'A planning-to-execution bridge for construction projects, connecting project plans with execution visibility and risk insights.',
    stack: ['React', 'FastAPI', 'Python', 'ML'],
    contribution: 'Project development and technical implementation across the application workflow.',
    repo: 'https://github.com/25cs3019-hub/siteflow',
    accent: 'peach',
    icon: '🏗️'
  },
  {
    name: 'TwinFlow',
    category: 'Digital Twin · Industrial AI',
    status: 'In progress',
    description: 'An oilfield production digital-twin concept focused on monitoring production indicators and exploring predictive optimization.',
    stack: ['Python', 'LSTM', 'PINN', 'FastAPI', 'React'],
    contribution: 'AI/ML and application development.',
    repo: 'https://github.com/sparkssilent8-wq/TwinFlow',
    accent: 'mint',
    icon: '🛢️'
  },
  {
    name: 'SakhiSetu',
    category: 'AI · Social Impact',
    status: 'In progress',
    description: 'A consent-based early-warning and human-support platform that coordinates support while keeping people and privacy at the centre.',
    stack: ['Python', 'FastAPI', 'PostgreSQL', 'AI/ML'],
    contribution: 'Database and AI/ML development. The platform is designed around consent and human support.',
    repo: '',
    accent: 'rose',
    icon: '🤝'
  },
  {
    name: 'RoadSOS',
    category: 'Web Development',
    status: 'Status to update',
    description: 'A roadside emergency assistance project. Add a concise explanation of its implemented features and your exact contribution.',
    stack: ['Add your technologies'],
    contribution: 'Update this description with your verified individual contribution.',
    repo: '',
    accent: 'peach',
    icon: '🚘'
  },
  {
    name: 'Weather App',
    category: 'Frontend · API Integration',
    status: 'Status to update',
    description: 'A weather application that presents weather information using an external API.',
    stack: ['HTML', 'CSS', 'JavaScript', 'API'],
    contribution: 'Update this description with the features you implemented.',
    repo: '',
    accent: 'sky',
    icon: '⛅'
  },
  {
    name: 'RiskLens',
    category: 'AI · FinTech · Risk Intelligence',
    status: 'Project',
    description: 'An AI-powered merchant risk intelligence project focused on identifying and assessing potential business risks.',
    stack: ['AI/ML', 'Python'],
    contribution: 'Explore the project implementation and source code on GitHub.',
    repo: 'https://github.com/25cs3019-hub/RiskLens',
    accent: 'lilac',
    icon: '🛡️'
  },
  {
    name: 'Smart Hospital',
    category: 'Healthcare · Web Application',
    status: 'Project',
    description: 'A Streamlit-based smart hospital application with dedicated application pages, models and database components.',
    stack: ['Python', 'Streamlit'],
    contribution: 'Explore the project implementation and source code on GitHub.',
    repo: 'https://github.com/25cs3019-hub/smart-hospital-streamlit',
    accent: 'mint',
    icon: '🏥'
  },
];

const skillGroups = [
  { title: 'Programming', icon: Code2, items: ['C++', 'Python', 'C', 'JavaScript'] },
  { title: 'Frontend', icon: Layers3, items: ['HTML', 'CSS', 'React', 'Tailwind CSS'] },
  { title: 'Backend & Data', icon: Terminal, items: ['FastAPI', 'REST APIs', 'PostgreSQL'] },
  { title: 'AI & Tools', icon: Cpu, items: ['Machine Learning', 'Git', 'GitHub', 'VS Code'] }
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const nav = [['Home', '#home'], ['About', '#about'], ['Projects', '#projects'], ['Skills', '#skills'], ['Experience', '#experience'], ['Journey', '#journey'], ['Contact', '#contact']];
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="brand" href="#home"><span className="brand-mark">✳</span> Gitanjali</a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen ? <X /> : <Menu />}</button>
        <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
          {nav.map(([label, href]) => <a key={label} href={href} onClick={closeMenu}>{label}</a>)}
        </nav>
        <a className="resume-button" href="/resume.pdf" download>Resume <Download size={15} /></a>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <motion.div className="eyebrow" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .5 }}>
              <span className="status-dot" /> B.Tech Computer Science · RGIPT
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .08, duration: .65 }}>
              Hi, I'm <span>Gitanjali</span><span className="heart">♡</span><br />
              I build. Code. <em>Innovate.</em>
            </motion.h1>
            <motion.p className="hero-intro" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .25 }}>
              A Computer Science student who loves turning curious ideas into useful technology — one thoughtful commit at a time.
            </motion.p>
            <div className="hero-actions">
              <a className="button primary" href="#projects">Explore my work <ArrowUpRight size={17} /></a>
              <a className="button secondary" href="#contact">Let's connect <Mail size={16} /></a>
            </div>
            <div className="quick-stats">
              <div><strong>06</strong><span>Projects showcased</span></div>
              <div><strong>2029</strong><span>Graduation year</span></div>
              <div><strong>∞</strong><span>Ideas to build</span></div>
            </div>
          </div>
          <motion.div className="hero-art" initial={{ opacity: 0, scale: .96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .8 }}>
            <img src="/images/gitanjali-coding-hero.png" alt="Illustration of a happy girl coding at a cozy, warmly lit desk" />
            <div className="floating-note note-one"><Sparkles size={15} /> Keep learning, keep building</div>
            <div className="floating-note note-two"><Heart size={15} fill="currentColor" /> Code with joy</div>
          </motion.div>
          <a className="scroll-cue" href="#about"><ArrowDown size={16} /> Scroll to explore</a>
        </section>

        <section className="about section-wrap" id="about">
          <div className="section-kicker">A LITTLE ABOUT ME</div>
          <div className="about-grid">
            <h2>Curious mind.<br /><em>Builder's heart.</em></h2>
            <div className="about-text">
              <p>I'm a B.Tech Computer Science student at Rajiv Gandhi Institute of Petroleum Technology (RGIPT), interested in software engineering, problem solving and applied AI.</p>
              <p>I enjoy collaborating on practical projects, learning by building, and exploring how technology can solve meaningful real-world problems.</p>
              <a className="text-link" href="#projects">See what I'm building <ArrowUpRight size={16} /></a>
            </div>
          </div>
        </section>

        <section className="projects section-wrap" id="projects">
          <div className="section-heading">
            <div><div className="section-kicker">SELECTED WORK</div><h2>Things I've <em>built</em></h2></div>
            <p>A mix of experiments, collaborative builds and ongoing ideas. Project status is shown transparently.</p>
          </div>
          <div className="project-grid">
            {projects.map((project, i) => (
              <motion.article className={`project-card ${project.accent}`} key={project.name} initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: (i % 2) * .08 }}>
                <div className="project-top"><span className="project-emoji">{project.icon}</span><span className="project-status">{project.status}</span></div>
                <div className="project-category">{project.category}</div>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <div className="stack-list">{project.stack.map(item => <span key={item}>{item}</span>)}</div>
                <div className="contribution"><strong>My contribution</strong><br />{project.contribution}</div>
                {project.repo ? <a className="project-link" href={project.repo} target="_blank" rel="noreferrer">View repository <ExternalLink size={14} /></a> : <span className="project-link muted-link">Repository link to add</span>}
              </motion.article>
            ))}
          </div>
        </section>

        <section className="skills section-wrap" id="skills">
          <div className="section-kicker">MY TOOLKIT</div>
          <div className="section-heading"><h2>Skills I'm <em>growing</em></h2><p>A snapshot of the tools and technologies I've worked with. I'll keep this list honest and updated.</p></div>
          <div className="skills-grid">
            {skillGroups.map(group => <div className="skill-card" key={group.title}><div className="skill-title"><group.icon size={19} /> {group.title}</div><div className="skill-pills">{group.items.map(item => <span key={item}>{item}</span>)}</div></div>)}
          </div>
        </section>

        <section className="journey section-wrap" id="journey">
          <div className="section-kicker">MY JOURNEY</div>
          <h2>Learning, building, <em>leveling up.</em></h2>
          <div className="journey-card">
            <div className="journey-icon"><GraduationCap size={25} /></div>
            <div><span className="timeline-date">2025 — 2029</span><h3>B.Tech · Computer Science & Engineering</h3><p>Rajiv Gandhi Institute of Petroleum Technology (RGIPT), India</p></div>
          </div>
          <div className="journey-card">
            <div className="journey-icon"><Trophy size={25} /></div>
            <div><span className="timeline-date">Hackathons & collaborative builds</span><h3>Building beyond the classroom</h3><p>Participated in student hackathons and team projects. Add verified event names, roles and results here.</p></div>
          </div>
        </section>

        <section className="journey section-wrap" id="experience">
          <div className="section-kicker">PROFESSIONAL EXPERIENCE</div>
          <h2>Where I'm <em>growing.</em></h2>

          <div className="journey-card">
            <div className="journey-icon"><Briefcase size={22} /></div>
            <div>
              <div className="timeline-date">SEPTEMBER 2026 – MARCH 2027 · 6 MONTHS</div>
              <h3>AI Engineering Intern · GD AI Solutions</h3>
              <p>
                Working on the CRM Cab Web Application, contributing to
                frontend UI development and building React components.
              </p>
              <a
                className="project-link"
                href="https://github.com/projectsgdaisolutions/crm-cab-webapp"
                target="_blank"
                rel="noreferrer"
              >
                View CRM Cab Webapp <ExternalLink size={13} />
              </a>
              <div className="stack-list">
                <span>React.js</span>
                <span>Frontend Development</span>
                <span>UI Components</span>
              </div>
            </div>
          </div>
        </section>

        <section className="contact section-wrap" id="contact">
          <div className="contact-card">
            <div className="section-kicker">HAVE A PROJECT IN MIND?</div>
            <h2>Let's build something<br /><em>meaningful.</em></h2>
            <p>I'm open to learning opportunities, collaborations, internships and conversations about technology.</p>
            <a className="button primary" href="mailto:g78595604@gmail.com">Say hello <Mail size={16} /></a>
            <div className="social-links">
              <a href="https://github.com/g78595604-netizen" target="_blank" rel="noreferrer"><Github size={18} /> GitHub</a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer"><Linkedin size={18} /> LinkedIn</a>
              <a href="mailto:g78595604@gmail.com"><Mail size={18} /> Email</a>
              <a href="tel:+917897540955"><Phone size={18} /> Call me</a>
            </div>
          </div>
        </section>
      </main>
      <footer><a className="brand" href="#home"><span className="brand-mark">✳</span> Gitanjali</a><span>Made with <Heart size={13} fill="currentColor" /> and lots of curiosity.</span><a href="#home">Back to top ↑</a></footer>
    </div>
  );
}

export default App;