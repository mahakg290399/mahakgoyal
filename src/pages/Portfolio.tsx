import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { ArrowUpRight, Check, Database, Github, Linkedin, Moon, MoveRight, Server, ShieldCheck, Sparkles, Sun, Workflow } from "lucide-react";

const metrics = [["5+", "years shipping data systems"], ["80%", "server cost reduction"], ["10M+", "records processed in 10 min"], ["100+", "compliance rules in production"]];
const impact = [
  { number: "01", title: "Modernise the legacy", text: "Replaced a 20-year-old trade monitoring platform with a custom AWS architecture built for change.", tags: ["AWS Glue", "Iceberg", "MWAA"] },
  { number: "02", title: "Make data move", text: "Designed resilient batch pipelines with idempotent recovery, reconciliation, and medallion data lake patterns.", tags: ["PySpark", "S3", "Step Functions"] },
  { number: "03", title: "Turn volume into signal", text: "Run 100+ compliance rules across 100K+ daily records to surface the alerts that matter.", tags: ["Data quality", "Python", "Athena"] },
  { number: "04", title: "Make compliance measurable", text: "Built best-sales-practice checks across 10M+ records in 10 minutes, replacing a proprietary vendor system with fail-safe, idempotent reprocessing.", tags: ["AWS Glue", "Step Functions", "Reconciliation"] },
  { number: "05", title: "Optimise the heavy lift", text: "Migrated a complex monthly job from AWS EMR to optimised PySpark on AWS Glue, cutting cost by 30% and startup time by 30 minutes.", tags: ["EMR → Glue", "PySpark", "Scala"] },
  { number: "06", title: "Unblock the lake", text: "Resolved an S3 bottleneck at the 5,500 requests-per-second limit by redesigning partitions and consolidating small files into larger, efficient objects.", tags: ["S3", "Partitioning", "Performance"] },
  { number: "07", title: "Ship serverless savings", text: "Architected event-driven Lambda and Python workflows that reduced server costs by 80% compared with the legacy system.", tags: ["Lambda", "Python", "Serverless"] },
];
const skills = ["Python", "PySpark", "SQL", "AWS Glue", "AWS Lambda", "AWS S3", "ETL/ELT Design", "Git", "Step Functions", "GitHub Copilot", "Claude Code", "AWS EMR", "CloudFormation", "Athena", "Scala", "Apache Iceberg", "MWAA", "Presto", "Hadoop", "Hive", "REST APIs", "DynamoDB", "Java", "CI/CD", "Microservices", "MongoDB", "Atlassian Suite", "SNS", "SQS", "ECS", "CloudFront", "Storage Gateway", "Flask", "Bitbucket", "Bamboo", "Jira", "Data Modeling", "Data Lake"];
const pipelineNodes = [{ label: "Sources", detail: "APIs · files · events", tone: "blue", icon: "◎" }, { label: "AWS Glue", detail: "batch + streaming", tone: "lime", icon: "✣" }, { label: "Lakehouse", detail: "S3 · Iceberg", tone: "violet", icon: "◈" }, { label: "Decisions", detail: "quality · alerts", tone: "orange", icon: "⌁" }];

function PipelineVisual() {
  return <div className="pipeline-visual" aria-label="Animated data pipeline from sources to decisions">
    <div className="pipeline-topline"><span><i className="live-dot" /> PIPELINE / LIVE</span><span>eu-west-1</span></div>
    <div className="pipeline-grid">{pipelineNodes.map((node, index) => <div className="pipeline-stage" key={node.label}>
      <div className={`pipeline-node ${node.tone}`}><span className="node-index">0{index + 1}</span><span className="node-icon">{node.icon}</span><strong>{node.label}</strong><small>{node.detail}</small></div>
      {index < pipelineNodes.length - 1 && <div className="pipeline-link"><span /></div>}
    </div>)}</div>
    <div className="pipeline-footer"><span>EVENT 8,492</span><span>LATENCY 00:02:41</span><span>STATUS <b>HEALTHY</b></span></div><div className="orbit orbit-one" /><div className="orbit orbit-two" />
  </div>;
}

const Portfolio = () => {
  const [lightMode, setLightMode] = useState(() => localStorage.getItem("portfolio-theme") === "light");
  const toggleTheme = () => setLightMode((mode) => {
    const nextMode = !mode;
    localStorage.setItem("portfolio-theme", nextMode ? "light" : "dark");
    return nextMode;
  });

  return <main className={lightMode ? "light" : ""}>
  <Helmet><title>Mahak Goyal — AWS Data Engineer</title><meta name="description" content="Mahak Goyal is an AWS certified data engineer building resilient, measurable data platforms with Python, PySpark and AWS." /><meta property="og:title" content="Mahak Goyal — AWS Data Engineer" /><meta property="og:description" content="Building the systems behind better decisions." /></Helmet>
  <nav className="site-nav shell"><a className="wordmark" href="#top"><span className="wordmark-mark">MG</span><span>MAHAK GOYAL<span className="wordmark-dot">.</span></span></a><div className="nav-links"><a href="#work">Work</a><a href="#stack">Stack</a><a href="#about">About</a><a href="#contact">Contact</a></div><div className="nav-actions"><a className="nav-status" href="mailto:mahakg290399@gmail.com"><i className="live-dot" /> Open to work</a><button className="theme-toggle" onClick={toggleTheme} aria-label={lightMode ? "Switch to dark mode" : "Switch to light mode"}>{lightMode ? <Moon size={15} /> : <Sun size={15} />}</button></div></nav>
  <section id="top" className="hero shell"><div className="hero-copy"><p className="eyebrow"><Sparkles size={14} /> AWS CERTIFIED DATA ENGINEER <span>/</span> INDIA</p><h1>Building the systems<br /><em>behind better</em> decisions.</h1><p className="hero-lede">I design cloud data platforms that turn high-volume, high-stakes information into something teams can trust — from first event to final insight.</p><div className="hero-actions"><a className="button button-primary" href="#work">See selected work <ArrowUpRight size={16} /></a><a className="button button-ghost" href="mailto:mahakg290399@gmail.com">Start a conversation <MoveRight size={16} /></a></div><div className="hero-note"><span>Currently</span> building compliance intelligence at Matrix-IFS <span className="slash">//</span> previously TCS</div></div><PipelineVisual /><div className="hero-scroll">SCROLL TO EXPLORE <span>↓</span></div></section>
  <section className="metrics-strip"><div className="shell metrics-grid">{metrics.map(([number, label]) => <div className="metric" key={number}><strong>{number}</strong><span>{label}</span></div>)}</div></section>
  <section id="work" className="section shell"><div className="section-heading"><div><p className="eyebrow">01 / SELECTED IMPACT</p><h2>Practical systems.<br /><em>Measurable outcomes.</em></h2></div><p>Good engineering has a receipt. These are a few ways I’ve made complex data work quieter, faster, and more useful.</p></div><div className="impact-grid">{impact.map((item) => <article className="impact-card" key={item.number}><span className="card-number">{item.number}</span><div className="impact-icon"><Workflow size={19} /></div><h3>{item.title}</h3><p>{item.text}</p><div className="tag-row">{item.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}</div><a href="#contact" className="card-link">Talk through the architecture <ArrowUpRight size={15} /></a></article>)}</div></section>
  <section id="stack" className="section section-tight shell"><div className="stack-panel"><div className="stack-intro"><p className="eyebrow">02 / THE TOOLKIT</p><h2>Cloud-native,<br /><em>not cloud-complicated.</em></h2><p>My sweet spot is the layer where reliable architecture meets pragmatic delivery.</p><div className="cert-row"><span><ShieldCheck size={16} /> AWS Certified</span><span><Check size={16} /> Data Engineer – Associate</span></div></div><div className="skill-cloud">{skills.map((skill, index) => <span className={index < 4 ? "skill-pill hot" : "skill-pill"} key={skill}>{skill}</span>)}<div className="stack-signal"><Database size={18} /><span>DESIGNED FOR<br /><b>TRUSTED DATA</b></span></div></div></div></section>
  <section id="about" className="section shell about-grid"><div><p className="eyebrow">03 / A LITTLE CONTEXT</p><h2>Engineer by trade.<br /><em>Curious by default.</em></h2></div><div className="about-copy"><p>My route into data started in electronics and communications, where I learned to think in systems. Today, I bring that same instinct to distributed pipelines, data quality, and the small details that keep production calm.</p><p>Across TCS and Matrix-IFS, I’ve moved from building features to owning outcomes: replacing vendor platforms, reducing cost, and creating foundations that let teams move with confidence.</p><div className="about-signature">MG <span>electronics → events → outcomes</span></div></div></section>
  <section id="contact" className="contact-section"><div className="shell contact-inner"><div><p className="eyebrow">04 / LET’S BUILD</p><h2>Have a hard data<br /><em>problem?</em></h2><p className="contact-lede">Tell me where the data gets stuck. I’ll bring the architecture, the questions, and a bias toward useful.</p></div><div className="contact-card"><span className="contact-label">DROP A LINE</span><a href="mailto:mahakg290399@gmail.com" className="contact-email">mahakg290399@gmail.com <ArrowUpRight size={22} /></a><div className="contact-links"><a href="https://www.linkedin.com/in/mahakdgoyal" target="_blank" rel="noreferrer"><Linkedin size={16} /> LinkedIn</a><a href="https://github.com/mahakg290399/mahakgoyal" target="_blank" rel="noreferrer"><Github size={16} /> Portfolio repo</a><a href="https://medium.com/@mahakgoyal290399" target="_blank" rel="noreferrer"><Server size={16} /> Medium</a></div></div></div></section>
  <footer className="shell site-footer"><span>© 2026 MAHAK GOYAL</span><span><Server size={14} /> DATA ENGINEERING / AWS / PYTHON</span><a href="#top">BACK TO TOP ↑</a></footer>
  </main>;
};

export default Portfolio;
