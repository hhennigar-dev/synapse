import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { caseStudies } from '../data/caseStudies';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';

export default function CaseStudy() {
  const { id } = useParams<{ id: string }>();
  const study = caseStudies.find(cs => cs.id === id);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [id]);

  if (!study) {
    return (
      <div className="wrap" style={{ paddingTop: '150px', minHeight: '60vh' }}>
        <h2>Case Study Not Found</h2>
        <Link to="/" className="btn-primary mt-6 inline-flex">Return Home</Link>
      </div>
    );
  }

  return (
    <div className="case-study-page">
      <div className="cs-hero">
        <div className="hero-ambient"></div>
        <div className="wrap sr">
          <Link to="/#case-studies" className="back-link"><ArrowLeft size={16} /> Back to all work</Link>
          <div className="cs-industry mt-8">{study.industry}</div>
          <h1 className="title mt-4">{study.client}</h1>
          <p className="sub text-lg mt-4 max-w-2xl">{study.brief}</p>
        </div>
      </div>

      <div className="wrap cs-content-grid sr stag">
        <div className="cs-main-content">
          <div dangerouslySetInnerHTML={{ __html: study.content }} className="prose" />
          
          <div className="cs-testimonial-box mt-12">
            <div className="t-stars mb-4 text-amber-500 flex gap-1">
              {[...Array(5)].map((_, idx) => (
                <svg key={idx} width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
              ))}
            </div>
            <p className="text-lg italic text-white/80 mb-6">"{study.testimonial.quote}"</p>
            <div className="t-auth">
              <div className="t-av">{study.testimonial.author.split(' ').map(n => n[0]).join('')}</div>
              <div>
                <div className="t-name">{study.testimonial.author}</div>
                <div className="t-role">{study.testimonial.role}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="cs-sidebar">
          <div className="cs-sidebar-box">
            <h3>The DOE Framework</h3>
            <div className="doe-mini">
              <h4><span>D</span> Directive</h4>
              <p>{study.solution.directive}</p>
            </div>
            <div className="doe-mini">
              <h4><span>O</span> Orchestration</h4>
              <p>{study.solution.orchestration}</p>
            </div>
            <div className="doe-mini">
              <h4><span>E</span> Execution</h4>
              <p>{study.solution.execution}</p>
            </div>
          </div>

          <div className="cs-sidebar-box bg-blue-900/20 border-blue-500/30">
            <h3 className="text-blue-400">Key Results</h3>
            <ul className="results-list">
              {study.results.map((res, i) => (
                <li key={i}><CheckCircle2 size={18} className="text-teal-400 shrink-0" /> <span>{res}</span></li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
