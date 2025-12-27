'use client';

import Link from 'next/link';
import styles from './universe.module.css';

export default function UniversePage() {
    return (
        <main className={styles.pageWrapper}>
            <div className={styles.background} />

            <div className={styles.content}>
                {/* Top Nav Pill */}
                <nav className={styles.topNav}>
                    <Link href="/" className={styles.navLink}>About</Link>
                    <Link href="/dashboard" className={styles.navLink}>Explore</Link>
                    <Link href="/mirror" className={styles.navLink}>Connect</Link>
                    <Link href="#" className={styles.navLink}>Settings</Link>
                </nav>

                <header className={styles.header}>
                    <h1>Digital Soul Legacy</h1>
                    <p>Preserve Your Essence. Transcend Time.</p>
                </header>

                {/* Brain / Soul Network Visualization */}
                <div className={styles.visualArea}>
                    <svg className={styles.brainSvg} viewBox="0 0 400 200">
                        <defs>
                            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                                <feGaussianBlur stdDeviation="3" result="blur" />
                                <feComposite in="SourceGraphic" in2="blur" operator="over" />
                            </filter>
                            <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="var(--accent-cyan)" />
                                <stop offset="50%" stopColor="var(--accent-gold)" />
                                <stop offset="100%" stopColor="var(--accent-cyan)" />
                            </linearGradient>
                        </defs>
                        <g filter="url(#glow)">
                            {/* Two brain hemispheres symbolic network */}
                            <path d="M120 100 Q140 40 180 50 T220 100 Q200 160 160 150 T120 100" stroke="var(--accent-cyan)" strokeWidth="0.5" fill="none" opacity="0.3" />
                            <circle cx="120" cy="100" r="2" fill="var(--accent-cyan)" />
                            <circle cx="280" cy="100" r="2" fill="var(--accent-cyan)" />

                            {/* Neural connection lines */}
                            <path className={styles.connectionLine} d="M120 100 C160 80, 240 120, 280 100" stroke="url(#lineGrad)" strokeWidth="0.5" fill="none" />
                            <path className={styles.connectionLine} d="M120 100 C160 120, 240 80, 280 100" stroke="url(#lineGrad)" strokeWidth="0.5" fill="none" opacity="0.5" />

                            {/* Brain nodes */}
                            {[...Array(20)].map((_, i) => (
                                <circle
                                    key={i}
                                    cx={100 + Math.random() * 200}
                                    cy={50 + Math.random() * 100}
                                    r="1"
                                    fill="var(--accent-cyan)"
                                    opacity={Math.random()}
                                >
                                    <animate attributeName="opacity" values="0.2;1;0.2" dur={`${2 + Math.random() * 3}s`} repeatCount="indefinite" />
                                </circle>
                            ))}
                        </g>
                    </svg>
                </div>

                <div className={styles.actionGrid}>
                    <div className={styles.legacyCard}>
                        <span className={styles.cardIcon}>⏳</span>
                        <h2 className={styles.cardTitle}>Time Capsule</h2>
                    </div>
                    <div className={styles.legacyCard}>
                        <span className={styles.cardIcon}>🧠</span>
                        <h2 className={styles.cardTitle}>AI Avatar</h2>
                    </div>
                </div>

                <Link href="/dashboard" style={{ marginTop: '5rem', color: 'var(--text-dim)', textDecoration: 'none', textTransform: 'uppercase', letterSpacing: '0.2em', fontSize: '0.8rem' }}>
                    ← Back to Sanctuary
                </Link>
            </div>
        </main>
    );
}
