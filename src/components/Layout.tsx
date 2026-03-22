import React, { useEffect } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Network, ArrowRight } from 'lucide-react';
import AnimatedLogo from './AnimatedLogo';

export default function Layout() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }
  }, [pathname, hash]);

  useEffect(() => {
    const cursor = document.querySelector('.cursor') as HTMLElement;
    const cursorRing = document.querySelector('.cursor-ring') as HTMLElement;
    const scrollProg = document.getElementById('scrollProg');

    const moveCursor = (e: MouseEvent) => {
      if (cursor) cursor.style.transform = `translate(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%))`;
      if (cursorRing) cursorRing.style.transform = `translate(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%))`;
    };

    const updateScroll = () => {
      if (scrollProg) {
        const scrollPx = document.documentElement.scrollTop;
        const winHeightPx = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = winHeightPx > 0 ? `${(scrollPx / winHeightPx) * 100}%` : '0%';
        scrollProg.style.width = scrolled;
      }

      const reveals = document.querySelectorAll('.sr, .stag, .bc');
      reveals.forEach((el) => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;
        const elementVisible = 100;
        if (elementTop < windowHeight - elementVisible) {
          el.classList.add('in');
        }
      });
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('scroll', updateScroll);
    updateScroll();

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('scroll', updateScroll);
    };
  }, [pathname]);

  return (
    <>
      <div className="cursor"></div>
      <div className="cursor-ring"></div>
      <div className="scroll-prog" id="scrollProg"></div>

      <nav>
        <Link to="/" className="nav-logo">
          <AnimatedLogo isNav={true} />
        </Link>
        <ul className="nav-links">
          <li><Link to="/#problem">The Shift</Link></li>
          <li><Link to="/#services">Services</Link></li>
          <li><Link to="/#how-it-works">DOE Framework</Link></li>
          <li><Link to="/#case-studies">Client Work</Link></li>
        </ul>
        <a href="#contact" className="nav-cta">Book a Consultation</a>
      </nav>

      <main>
        <Outlet />
      </main>

      <footer id="contact" className="premium-footer">
        <div className="footer-bg-grid"></div>
        <div className="footer-glow"></div>
        <div className="wrap relative z-10">
          <div className="footer-cta sr">
            <h2>Ready to scale your operations?</h2>
            <p>Stop wasting human capital on robotic tasks. Let's build your autonomous workforce today.</p>
            <a href="mailto:hello@synapse.ai" className="btn-primary mt-6">
              Schedule a Strategy Call <ArrowRight size={18} />
            </a>
          </div>
          
          <div className="footer-grid sr">
            <div className="footer-brand">
              <AnimatedLogo />
              <p>Building the future of work through deterministic Agentic Workflows. We turn probabilistic models into reliable business engines.</p>
            </div>
            <div className="footer-links">
              <h4>Solutions</h4>
              <ul>
                <li><Link to="/#services">Lead Generation</Link></li>
                <li><Link to="/#services">Client Onboarding</Link></li>
                <li><Link to="/#services">Back-office Workflows</Link></li>
                <li><Link to="/#services">Custom AI Agents</Link></li>
              </ul>
            </div>
            <div className="footer-links">
              <h4>Company</h4>
              <ul>
                <li><Link to="/#how-it-works">Our Framework</Link></li>
                <li><Link to="/#case-studies">Case Studies</Link></li>
                <li><a href="#contact">Contact Us</a></li>
                <li><a href="#">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} Synapse. Built by Hunter Hennigar. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
