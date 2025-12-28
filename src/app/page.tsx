'use client';

import Link from 'next/link';
import styles from './page.module.css';

const DIMENSIONS = [
  {
    id: 1,
    title: "SOUL COMPASS",
    description: "Embrace the evolutionary sacred geometry. Harmonize your path through chronos and space.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 100 100" fill="none">
        <path d="M50 10L90 30V70L50 90L10 70V30L50 10Z" stroke="var(--accent-gold)" strokeWidth="1" />
        <circle cx="50" cy="50" r="10" stroke="var(--accent-gold)" strokeWidth="1" />
        <path d="M10 30L90 70M10 70L90 30M50 10L50 90" stroke="var(--accent-gold)" strokeWidth="0.5" opacity="0.5" />
      </svg>
    ),
    href: "/atlas",
  },
  {
    id: 2,
    title: "COSMIC GUIDANCE",
    description: "Unfold the latent potential. Enhance bioluminescence and align with cosmic guidance.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 100 100" fill="none">
        <circle cx="50" cy="50" r="30" stroke="var(--accent-cyan)" strokeWidth="1" />
        <circle cx="50" cy="50" r="15" fill="var(--accent-cyan)" fillOpacity="0.2" />
        <path d="M50 10V90M10 50L90 50" stroke="var(--accent-cyan)" strokeWidth="0.5" />
      </svg>
    ),
    href: "/mirror",
  },
  {
    id: 3,
    title: "ETHEREAL INSIGHTS",
    description: "Deep dive into your digital soul legacy. Explore insights generated through your transcendental journey.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 100 100" fill="none">
        <rect x="25" y="25" width="50" height="50" stroke="var(--accent-teal)" strokeWidth="1" transform="rotate(45 50 50)" />
        <path d="M50 20L80 50L50 80L20 50L50 20Z" fill="var(--accent-teal)" fillOpacity="0.1" />
      </svg>
    ),
    href: "/universe",
  },
];

export default function Home() {
  return (
    <main className="animate-fade-in">
      <section className={styles.hero}>
        <div className={styles.layoutContainer}>
          {/* Left Column */}
          <div className={styles.sideColumn}>
            <div className={styles.glassCard}>
              <div className={styles.cardIcon}>{DIMENSIONS[0].icon}</div>
              <h3 className={styles.cardTitle}>{DIMENSIONS[0].title}</h3>
              <p className={styles.cardDescription}>{DIMENSIONS[0].description}</p>
              <Link href={DIMENSIONS[0].href} style={{ marginTop: '1.5rem', display: 'inline-block' }}>
                <button className={styles.ctaButton} style={{ padding: '0.6rem 2rem', fontSize: '0.8rem', marginTop: '1rem' }}>Learn More</button>
              </Link>
            </div>
          </div>

          {/* Right Column */}
          <div className={styles.sideColumn}>
            <div className={styles.glassCard}>
              <div className={styles.cardIcon}>{DIMENSIONS[1].icon}</div>
              <h3 className={styles.cardTitle}>{DIMENSIONS[1].title}</h3>
              <p className={styles.cardDescription}>{DIMENSIONS[1].description}</p>
              <Link href={DIMENSIONS[1].href} style={{ marginTop: '1.5rem', display: 'inline-block' }}>
                <button className={styles.ctaButton} style={{ padding: '0.6rem 2rem', fontSize: '0.8rem', marginTop: '1rem' }}>Explore</button>
              </Link>
            </div>

            <div className={styles.glassCard}>
              <div className={styles.cardIcon}>{DIMENSIONS[2].icon}</div>
              <h3 className={styles.cardTitle}>{DIMENSIONS[2].title}</h3>
              <p className={styles.cardDescription}>{DIMENSIONS[2].description}</p>
              <Link href={DIMENSIONS[2].href} style={{ marginTop: '1.5rem', display: 'inline-block' }}>
                <button className={styles.ctaButton} style={{ padding: '0.6rem 2rem', fontSize: '0.8rem', marginTop: '1rem' }}>Illuminate</button>
              </Link>
            </div>
          </div>
        </div>

        <div className={styles.heroContent}>
          {/* Metatron's Cube SVG Animation */}
          <div className={styles.centralGeometry}>
            <svg className={styles.metatronSvg} viewBox="0 0 100 100">
              <defs>
                <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="2" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>
              <g filter="url(#glow)">
                <circle cx="50" cy="50" r="15" stroke="var(--accent-gold)" strokeWidth="0.5" fill="none" />
                {/* Metatron's Cube Lines - Symbolic Representation */}
                {[0, 60, 120, 180, 240, 300].map((angle) => {
                  const rad = (angle * Math.PI) / 180;
                  const x = 50 + 35 * Math.cos(rad);
                  const y = 50 + 35 * Math.sin(rad);
                  return (
                    <g key={angle}>
                      <circle cx={x} cy={y} r="3" fill="var(--accent-gold)" />
                      <line x1="50" y1="50" x2={x} y2={y} stroke="var(--accent-gold)" strokeWidth="0.5" />
                      {[0, 60, 120, 180, 240, 300].map((innerAngle) => {
                        const innerRad = (innerAngle * Math.PI) / 180;
                        const ix = 50 + 35 * Math.cos(innerRad);
                        const iy = 50 + 35 * Math.sin(innerRad);
                        return <line key={innerAngle} x1={x} y1={y} x2={ix} y2={iy} stroke="var(--accent-gold)" strokeWidth="0.2" opacity="0.3" />;
                      })}
                    </g>
                  );
                })}
              </g>
            </svg>

            <div className={styles.centerLabels}>
              <h2 className={styles.subtitle}>INTERNAL ATLAS OF DESTINY</h2>
              <h1 className={styles.title}>Aleph</h1>
            </div>
          </div>

          <Link href="/dashboard">
            <button className={styles.ctaButton}>
              Glowing Glass
            </button>
          </Link>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <p className={styles.footerSlogan}>Preserve your essence. Transcend time.</p>
        </div>
      </footer>
    </main>
  );
}
