import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { caseStudies } from '../data/caseStudies';
import { ArrowRight, Bot, Zap, ShieldCheck, BarChart3, Users, CheckCircle2, XCircle } from 'lucide-react';

export default function Home() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [hash]);

  return (
    <>
      <section className="hero">
        <div className="hero-ambient"></div>
        <div className="hero-dots"></div>
        <div className="hero-ring"></div>
        <div className="hero-ring-2"></div>
        
        <div className="hero-inner wrap">
          <div className="hero-badge">
            <div className="badge-dot"><span></span></div>
            Next-Generation Agentic Workflows
          </div>
          <h1>Automate 90% of <br/><em>10,000 Roles.</em></h1>
          <p className="hero-sub">Move beyond simple chatbots. We build self-annealing Agentic Workflows that provide massive horizontal leverage for your business.</p>
          <div className="hero-btns">
            <a href="#case-studies" className="btn-primary">Explore Client Work</a>
            <a href="#services" className="btn-outline">View Our Services</a>
          </div>
          
          <div className="hero-metrics">
            <div className="metric">
              <div className="metric-val">97<span className="ac">%</span></div>
              <div className="metric-lbl">Task Reliability</div>
            </div>
            <div className="metric">
              <div className="metric-val">10<span className="ac">x</span></div>
              <div className="metric-lbl">Speed Improvement</div>
            </div>
            <div className="metric">
              <div className="metric-val">24<span className="ac">/</span>7</div>
              <div className="metric-lbl">Autonomous Execution</div>
            </div>
          </div>
        </div>
      </section>

      {/* EDUCATION SECTION (NEW) */}
      <section id="education" className="edu-sec wrap sr stag">
        <div className="edu-grid">
          <div className="edu-sticky">
            <div className="kicker">The Paradigm Shift</div>
            <h2 className="title">What is an <em>Agentic Workflow?</em></h2>
            <p className="sub">Traditional automation is rigid. If an API changes or a data format is slightly off, the entire system breaks. Agentic Workflows are different.</p>
          </div>
          <div className="edu-content">
            <div className="edu-block">
              <h3>01. Reasoning Engines</h3>
              <p>We use frontier models (like Gemini 3.1 Pro and OpenAI o3-mini) not just to generate text, but to <strong>reason</strong>. They act as the brain of the operation, understanding context and making routing decisions dynamically.</p>
            </div>
            <div className="edu-block">
              <h3>02. Tool Use</h3>
              <p>Agents are equipped with deterministic tools—Python scripts, API connectors, and headless browsers. They know exactly when and how to use them to manipulate your existing software stack.</p>
            </div>
            <div className="edu-block">
              <h3>03. Self-Correction</h3>
              <p>When an agent encounters an error (like a rate limit or a missing field), it doesn't just crash. It reads the error, reflects on the problem, and tries an alternative path to achieve the goal.</p>
            </div>
            <div className="edu-block">
              <h3>04. Infinite ROI</h3>
              <p>By decoupling execution from human labor, your business can scale operations infinitely. Handle 10x the volume without adding a single administrative hire.</p>
            </div>
          </div>
        </div>
      </section>

      {/* BENTO PROBLEM SECTION */}
      <section id="problem" className="prob-sec wrap sr stag">
        <div className="prob-hdr">
          <div>
            <div className="kicker">The Knowledge Ladder</div>
            <h2 className="title">From static docs to <br/><em>autonomous action.</em></h2>
          </div>
          <p className="sub">Most companies use AI as a glorified copy-paste tool. We build systems that actually execute work, turning probabilistic models into reliable, deterministic engines.</p>
        </div>
        
        <div className="bento">
          <div className="bc b1">
            <div className="bico">
              <Users className="text-blue-500" size={24} />
            </div>
            <div className="btag">Scale Across Departments</div>
            <h3 className="btitle">Automate 90% of repetitive tasks.</h3>
            <p className="bbody">Instead of trying to replace one person entirely, Agentic Workflows automate the repetitive, multi-step cognitive tasks across your entire organization.</p>
            <div className="bot">
              <div className="bstat">90<sub>%</sub></div>
              <div className="bstat-lbl">Agentic Task Potential</div>
              <div className="mini-bars">
                <div className="mb"><div className="mbf" style={{'--h': '40%'} as React.CSSProperties}></div></div>
                <div className="mb"><div className="mbf" style={{'--h': '60%'} as React.CSSProperties}></div></div>
                <div className="mb"><div className="mbf tl" style={{'--h': '90%'} as React.CSSProperties}></div></div>
              </div>
            </div>
          </div>
          
          <div className="bc b2">
            <div className="btag">Self-Correcting</div>
            <h3 className="btitle">Systems that heal themselves.</h3>
            <p className="bbody">Traditional automations break at the first API hiccup. Our agents reflect on errors, diagnose the root cause, and dynamically adjust their approach to ensure the task gets completed.</p>
          </div>
          
          <div className="bc b3">
            <div className="btag">Cost Economics</div>
            <h3 className="btitle">Radically cost-effective.</h3>
            <p className="bbody">The cost of intelligence has plummeted. What used to require a $100k/yr employee can now be executed by an agent working 24/7 for a fraction of the cost.</p>
          </div>
          
          <div className="bc b4">
            <h3 className="btitle">10x</h3>
            <p className="bbody">Faster execution by pushing math and sorting to deterministic scripts.</p>
          </div>
          
          <div className="bc b5">
            <div className="btag">Compound Reliability</div>
            <h3 className="btitle">Guaranteeing 99%+ reliability.</h3>
            <p className="bbody">Raw LLMs suffer from compound probabilities—a 5-step task at 90% accuracy yields a 59% success rate. We wrap AI in deterministic frameworks to guarantee 99%+ reliability.</p>
          </div>
          
          <div className="bc b6">
            <div className="btag">Cloud Deployment</div>
            <h3 className="btitle">Event-driven & Scheduled.</h3>
            <p className="bbody">Move from the IDE to the cloud. We deploy your workflows as serverless functions triggered by webhooks or cron schedules, running flawlessly while you sleep.</p>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION (REDESIGNED) */}
      <section id="services" className="services-sec">
        <div className="wrap sr stag">
          <div className="kicker">Core Capabilities</div>
          <h2 className="title">What we <em>build.</em></h2>
          <p className="sub">We identify the highest-leverage bottlenecks in your business and replace them with tireless, autonomous systems.</p>
          
          <div className="services-list mt-12">
            <div className="service-row">
              <div className="sr-content">
                <h3>Outbound Lead Generation</h3>
                <p>Agents that scrape, enrich, qualify, and draft hyper-personalized outreach to thousands of prospects daily without human intervention.</p>
              </div>
              <div className="sr-visual"><Zap size={40} className="text-amber-500" /></div>
            </div>
            <div className="service-row">
              <div className="sr-content">
                <h3>Client Onboarding</h3>
                <p>Zero-touch workflows that provision folders, create CRM records, send welcome packets, and set up project boards the second a contract is signed.</p>
              </div>
              <div className="sr-visual"><Bot size={40} className="text-blue-500" /></div>
            </div>
            <div className="service-row">
              <div className="sr-content">
                <h3>Financial Reconciliation</h3>
                <p>Deterministic scripts that pull from multiple bank APIs, match ledgers, flag anomalies, and generate executive reports in minutes.</p>
              </div>
              <div className="sr-visual"><BarChart3 size={40} className="text-teal-500" /></div>
            </div>
            <div className="service-row">
              <div className="sr-content">
                <h3>Customer Support Triage</h3>
                <p>Intelligent routing agents that read incoming tickets, solve Tier 1 issues instantly, and escalate complex problems with full context.</p>
              </div>
              <div className="sr-visual"><ShieldCheck size={40} className="text-purple-500" /></div>
            </div>
          </div>
        </div>
      </section>

      {/* INTEGRATIONS SECTION */}
      <section className="integ-sec">
        <div className="wrap sr stag text-center">
          <div className="kicker">Ecosystem</div>
          <h2 className="title">We integrate with the tools you <em>already use.</em></h2>
        </div>
        <div className="integ-marquee">
          {/* Duplicated for infinite scroll effect */}
          {[...Array(2)].map((_, i) => (
            <React.Fragment key={i}>
              <div className="integ-item">Salesforce</div>
              <div className="integ-item">HubSpot</div>
              <div className="integ-item">Stripe</div>
              <div className="integ-item">QuickBooks</div>
              <div className="integ-item">Slack</div>
              <div className="integ-item">Zendesk</div>
              <div className="integ-item">Shopify</div>
              <div className="integ-item">Airtable</div>
              <div className="integ-item">Notion</div>
              <div className="integ-item">Google Workspace</div>
            </React.Fragment>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS (MIGRATION TO AUTONOMY) */}
      <section id="how-it-works" className="how-sec">
        <div className="wrap sr stag">
          <div className="kicker">The Process</div>
          <h2 className="title">From Manual Operations to <br/><em>Agentic Autonomy.</em></h2>
          <p className="sub">We follow a structured migration path to turn your manual bottlenecks into highly leveraged, autonomous systems.</p>
          
          <div className="flow-wrap steps-5">
            <div className="fi">
              <div className="fi-n">01</div>
              <div className="fi-t">The Opportunity Audit</div>
              <p className="fi-d">We identify "Horizontal Leverage" points—tasks where an agent can automate 90% of a role rather than trying to replace 100% of a person.</p>
            </div>
            <div className="fi">
              <div className="fi-n">02</div>
              <div className="fi-t">Infrastructure Setup</div>
              <p className="fi-d">We establish the "Command Center" using professional IDEs (like Anti-gravity or VS Code) and secure environment variables to ensure enterprise-grade security.</p>
            </div>
            <div className="fi">
              <div className="fi-n">03</div>
              <div className="fi-t">Injecting the "Brain"</div>
              <p className="fi-d">We install a proprietary Operating System (system.md) that teaches the AI how to reason, self-heal (self-anneal), and execute code deterministically.</p>
            </div>
            <div className="fi">
              <div className="fi-n">04</div>
              <div className="fi-t">Scripting & Directives</div>
              <p className="fi-d">We translate your existing SOPs into clear /directives and /executions (Python scripts) so the agent never "hallucinates" your business logic.</p>
            </div>
            <div className="fi">
              <div className="fi-n">05</div>
              <div className="fi-t">Cloud Deployment</div>
              <p className="fi-d">Once battle-tested on your machine, we move the agents to the cloud (using Modal or Cron triggers) so they work flawlessly while you sleep.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CASE STUDIES (BRIEF) */}
      <section id="case-studies" className="cs-sec">
        <div className="wrap sr stag">
          <div className="kicker">Client Work</div>
          <h2 className="title">Agentic Workflows in <em>Action.</em></h2>
          <p className="sub">Real implementations of the DOE framework driving massive horizontal leverage for our partners.</p>
          
          <div className="cs-grid-brief mt-12">
            {caseStudies.map((cs) => (
              <div key={cs.id} className="cs-card-brief">
                <div className="cs-meta">
                  <div className="cs-industry">{cs.industry}</div>
                  <h3 className="cs-client">{cs.client}</h3>
                  <p className="cs-challenge">{cs.brief}</p>
                </div>
                <Link to={`/case-study/${cs.id}`} className="cs-link">
                  Read Full Case Study <ArrowRight size={16} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="test-sec">
        <div className="wrap sr stag">
          <div className="kicker">Real Impact</div>
          <h2 className="title">What our partners say.</h2>
          
          <div className="test-grid">
            {caseStudies.map((cs, i) => (
              <div key={i} className="tc">
                <div className="t-stars">
                  {[...Array(5)].map((_, idx) => (
                    <svg key={idx} width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                  ))}
                </div>
                <p className="t-txt">"{cs.testimonial.quote}"</p>
                <div className="t-auth">
                  <div className="t-av">{cs.testimonial.author.split(' ').map(n => n[0]).join('')}</div>
                  <div>
                    <div className="t-name">{cs.testimonial.author}</div>
                    <div className="t-role">{cs.testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ECONOMICS SECTION */}
      <section className="econ-sec">
        <div className="wrap sr stag">
          <div className="kicker">The ROI</div>
          <h2 className="title">The Economics of <em>Agentic Workflows.</em></h2>
          <p className="sub">Why scaling with compute is fundamentally superior to scaling with headcount.</p>
          
          <div className="econ-grid">
            <div className="econ-card human">
              <h3>Human Labor</h3>
              <ul className="econ-list">
                <li><XCircle size={20} className="text-red-500" /> Works 40 hours a week (at best).</li>
                <li><XCircle size={20} className="text-red-500" /> Prone to typos, fatigue, and burnout.</li>
                <li><XCircle size={20} className="text-red-500" /> Requires benefits, office space, and HR overhead.</li>
                <li><XCircle size={20} className="text-red-500" /> Takes weeks to train and onboard.</li>
                <li><XCircle size={20} className="text-red-500" /> Costs scale linearly with output.</li>
              </ul>
            </div>
            <div className="econ-card agent">
              <h3>Agentic Workflow</h3>
              <ul className="econ-list">
                <li><CheckCircle2 size={20} className="text-blue-500" /> Runs 24/7/365 without interruption.</li>
                <li><CheckCircle2 size={20} className="text-blue-500" /> Executes the exact SOP flawlessly every time.</li>
                <li><CheckCircle2 size={20} className="text-blue-500" /> Zero HR overhead, zero office space.</li>
                <li><CheckCircle2 size={20} className="text-blue-500" /> Instantly deployed and updated.</li>
                <li><CheckCircle2 size={20} className="text-blue-500" /> Costs scale logarithmically. 10x output for 1.1x cost.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ SECTION (NEW) */}
      <section className="faq-sec wrap sr stag">
        <div className="kicker">FAQ</div>
        <h2 className="title">Common <em>Questions.</em></h2>
        <div className="faq-list mt-10">
          <div className="faq-item">
            <h4>How is this different from Zapier or Make?</h4>
            <p>Zapier is rigid. If an API changes or a data format is slightly off, the Zap breaks. Agentic Workflows use LLMs as orchestrators to handle ambiguity, fix errors on the fly, and make routing decisions that traditional iPaaS platforms can't.</p>
          </div>
          <div className="faq-item">
            <h4>Do I need technical knowledge to use this?</h4>
            <p>Not at all. We handle the entire build, deployment, and maintenance. You simply provide the SOP (Standard Operating Procedure) of how the task is currently done by a human, and we translate that into an autonomous workflow.</p>
          </div>
          <div className="faq-item">
            <h4>How long does it take to implement?</h4>
            <p>Most workflows are designed, built, and deployed within 2 to 4 weeks, depending on the complexity of the APIs and the reasoning required by the agent.</p>
          </div>
        </div>
      </section>
    </>
  );
}
