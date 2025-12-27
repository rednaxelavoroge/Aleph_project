'use client';

import Link from 'next/link';
import styles from './dashboard.module.css';

export default function Dashboard() {
    return (
        <main className={styles.pageWrapper}>
            {/* Sidebar */}
            <aside className={styles.sidebar}>
                <div className={styles.logoArea}>
                    <h2>Aleph</h2>
                </div>
                <nav className={styles.navMenu}>
                    <Link href="/dashboard" className={`${styles.navItem} ${styles.navItemActive}`}>
                        <span className={styles.navIcon}>📊</span> Dashboard
                    </Link>
                    <Link href="/atlas" className={styles.navItem}>
                        <span className={styles.navIcon}>🧘</span> Meditate
                    </Link>
                    <Link href="/mirror" className={styles.navItem}>
                        <span className={styles.navIcon}>📖</span> Journal
                    </Link>
                    <Link href="/universe" className={styles.navItem}>
                        <span className={styles.navIcon}>👤</span> Profile
                    </Link>
                </nav>
            </aside>

            {/* Main Content */}
            <section className={styles.mainContent}>
                {/* Central Tree Canvas */}
                <div className={styles.centerCanvas}>
                    <svg className={styles.treeSvg} viewBox="0 0 200 200">
                        <defs>
                            <linearGradient id="treeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="var(--accent-cyan)" />
                                <stop offset="100%" stopColor="var(--accent-gold)" />
                            </linearGradient>
                        </defs>
                        {/* Trunk */}
                        <path d="M100 180 Q105 140 100 100" stroke="url(#treeGrad)" strokeWidth="4" fill="none" opacity="0.8" />
                        {/* Branches - Symbolic representation */}
                        <path d="M100 140 Q130 110 160 120" stroke="var(--accent-cyan)" strokeWidth="2" fill="none" />
                        <path d="M100 140 Q70 110 40 120" stroke="var(--accent-cyan)" strokeWidth="2" fill="none" />
                        <path d="M100 110 Q140 80 150 50" stroke="var(--accent-gold)" strokeWidth="1.5" fill="none" />
                        <path d="M100 110 Q60 80 50 50" stroke="var(--accent-gold)" strokeWidth="1.5" fill="none" />
                        {/* Leaves / Glows */}
                        {[
                            { x: 160, y: 120 }, { x: 40, y: 120 }, { x: 150, y: 50 }, { x: 50, y: 50 },
                            { x: 100, y: 30 }, { x: 130, y: 80 }, { x: 70, y: 80 }
                        ].map((leaf, i) => (
                            <circle key={i} cx={leaf.x} cy={leaf.y} r="3" fill={i % 2 === 0 ? "var(--accent-cyan)" : "var(--accent-gold)"}>
                                <animate attributeName="r" values="3;5;3" dur={`${2 + i}s`} repeatCount="indefinite" />
                                <animate attributeName="opacity" values="0.4;1;0.4" dur={`${2 + i}s`} repeatCount="indefinite" />
                            </circle>
                        ))}
                    </svg>
                </div>

                {/* Status Column */}
                <div className={styles.statusColumn}>
                    {/* Soul Balance Gauge */}
                    <div className={styles.glassCard}>
                        <div className={styles.cardHeader}>
                            <h3 className={styles.cardTitle}>Soul Balance</h3>
                            <span style={{ opacity: 0.5 }}>⋮</span>
                        </div>
                        <div className={styles.gaugeContainer}>
                            <svg className={styles.circularProgress} width="200" height="200" viewBox="0 0 100 100">
                                <circle className={styles.progressBg} cx="50" cy="50" r="45" />
                                <circle
                                    className={styles.progressVal}
                                    cx="50"
                                    cy="50"
                                    r="45"
                                    strokeDasharray="212 282"
                                />
                            </svg>
                            <div className={styles.gaugeText}>
                                <span className={styles.gaugeVal}>75%</span>
                            </div>
                        </div>
                    </div>

                    {/* Good Deeds Checklist */}
                    <div className={styles.glassCard}>
                        <div className={styles.cardHeader}>
                            <h3 className={styles.cardTitle}>Good Deeds</h3>
                            <span style={{ color: 'var(--accent-cyan)' }}>❤️</span>
                        </div>
                        <div className={styles.deedsList}>
                            <div className={styles.deedItem}>
                                <div className={`${styles.checkIcon} ${styles.checked}`}>✓</div>
                                <span>Helped a stranger today</span>
                            </div>
                            <div className={styles.deedItem}>
                                <div className={styles.checkIcon}></div>
                                <span>Meditated for 15 minutes</span>
                            </div>
                            <div className={styles.deedItem}>
                                <div className={`${styles.checkIcon} ${styles.checked}`}>✓</div>
                                <span>Spoke kind words to a colleague</span>
                            </div>
                            <div className={styles.deedItem}>
                                <div className={styles.checkIcon}></div>
                                <span>Shared wisdom in a journal</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
