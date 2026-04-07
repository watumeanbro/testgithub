import { useState, useEffect } from 'react';
import { Sparkles, ArrowRight, Zap, Shield, Rocket } from 'lucide-react';
import './App.css';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className={`app-container ${isLoaded ? 'loaded' : ''}`}>
      <div className="bg-orb"></div>
      
      <nav className="navbar">
        <div className="nav-logo">
          <Zap size={24} color="#8b5cf6" />
          <span>Nexus</span>
        </div>
        <div className="nav-links">
          <a href="#features" className="nav-link">Features</a>
          <a href="#about" className="nav-link">About</a>
          <a href="#pricing" className="nav-link">Pricing</a>
        </div>
        <div>
          <button className="btn-secondary" style={{ marginRight: '1rem', border: 'none', background: 'transparent' }}>
            Log in
          </button>
          <button className="btn-primary">Sign up</button>
        </div>
      </nav>

      <main>
        <section className="hero-section">
          <div className="badge">
            <Sparkles size={14} style={{ display: 'inline', marginRight: '6px', verticalAlign: 'text-top' }} />
            Introducing Nexus 2.0
          </div>
          <h1 className="hero-title">
            Build the future of <br />
            <span>digital experiences</span>
          </h1>
          <p className="hero-subtitle">
            Empower your team to create stunning, high-performance web applications with our intuitive platform. Next-generation tools for forward-thinking creators.
          </p>
          <div className="hero-cta">
            <button className="btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              Get Started Free <ArrowRight size={18} />
            </button>
            <button className="btn-secondary">View Documentation</button>
          </div>
        </section>

        <section className="features-section" id="features">
          <div className="feature-card">
            <div className="feature-icon-wrapper">
              <Zap size={28} />
            </div>
            <h3 className="feature-title">Lightning Fast</h3>
            <p className="feature-desc">
              Optimized for incredible performance. Your applications will load instantly and run smoother than ever before.
            </p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon-wrapper">
              <Shield size={28} />
            </div>
            <h3 className="feature-title">Enterprise Security</h3>
            <p className="feature-desc">
              Bank-grade security built directly into the core. Keep your users data safe with zero configuration required.
            </p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon-wrapper">
              <Rocket size={28} />
            </div>
            <h3 className="feature-title">Infinite Scalability</h3>
            <p className="feature-desc">
              From day one to millions of users, our infrastructure scales automatically to meet your demands seamlessly.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
