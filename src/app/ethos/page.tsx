'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './ethos.module.css';

const INITIAL_DEEDS = [
    { id: 1, title: "Проявление терпения", type: "soul", completed: false },
    { id: 2, title: "Импульсивная трата", type: "ego", completed: false },
    { id: 3, title: "Бескорыстная помощь", type: "soul", completed: false },
    { id: 4, title: "Гордыня в споре", type: "ego", completed: false },
];

export default function EthosPage() {
    const [deeds, setDeeds] = useState(INITIAL_DEEDS);

    const toggleDeed = (id: number) => {
        setDeeds(deeds.map(d => d.id === id ? { ...d, completed: !d.completed } : d));
    };

    const soulCount = deeds.filter(d => d.completed && d.type === 'soul').length;
    const egoCount = deeds.filter(d => d.completed && d.type === 'ego').length;
    const balance = soulCount - egoCount;

    return (
        <main className={styles.pageWrapper}>
            <Link href="/dashboard" className="backLink" style={{ position: 'absolute', top: '2rem', left: '2rem', color: 'var(--text-dim)', textDecoration: 'none', fontSize: '0.8rem', letterSpacing: '0.2em' }}>
                ← NAVIGATION
            </Link>

            <div className={styles.header}>
                <h1>OS ETHOS</h1>
                <p className="humanist-serif">The Harmony of Intent and Action</p>
            </div>

            <div className={styles.visualizationArea}>
                <svg className={styles.treeSvg} viewBox="0 0 200 160">
                    <defs>
                        <linearGradient id="treeGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="var(--accent-cyan)" />
                            <stop offset="100%" stopColor="var(--bg-nebula)" />
                        </linearGradient>
                    </defs>

                    {/* Living Tree Structure */}
                    <path d="M100 150 Q105 120 100 80" stroke="url(#treeGrad)" strokeWidth="3" fill="none" />

                    {/* Animated Scales Beam atop the Tree */}
                    <g className={styles.beam} style={{ transform: `rotate(${balance * 5}deg)` }}>
                        <line x1="40" y1="80" x2="160" y2="80" stroke="var(--accent-gold)" strokeWidth="1" />
                        <circle cx="100" cy="80" r="3" fill="var(--accent-gold)" />

                        {/* Left Pan (Ego) */}
                        <g className={styles.pan} style={{ transform: `translate(40px, 80px) rotate(${-balance * 5}deg)` }}>
                            <path className={styles.panShape} d="M-20 0 Q0 30 20 0 Z" />
                            <text x="0" y="-10" textAnchor="middle" className={styles.label}>EGO</text>
                            {egoCount > 0 && <circle cx="0" cy="10" r="5" fill="var(--accent-amber)" />}
                        </g>

                        {/* Right Pan (Soul) */}
                        <g className={styles.pan} style={{ transform: `translate(160px, 80px) rotate(${-balance * 5}deg)` }}>
                            <path className={styles.panShape} d="M-20 0 Q0 30 20 0 Z" />
                            <text x="0" y="-10" textAnchor="middle" className={styles.label}>SOUL</text>
                            {soulCount > 0 && <circle cx="0" cy="10" r="5" fill="var(--accent-cyan)" />}
                        </g>
                    </g>
                </svg>
            </div>

            <div className={styles.balanceIndicator}>
                {balance === 0 ? "Seeking inner equilibrium..." :
                    balance > 0 ? "The Soul resonates through your actions." :
                        "The Ego seeks validation in the shadows."}
            </div>

            <div className={styles.deedsGrid}>
                {deeds.map(deed => (
                    <div
                        key={deed.id}
                        className={`${styles.deedCard} ${deed.completed ? styles.completed : ''}`}
                        onClick={() => toggleDeed(deed.id)}
                    >
                        <span style={{ color: deed.type === 'soul' ? 'var(--accent-cyan)' : 'var(--accent-amber)', fontSize: '0.8rem', letterSpacing: '0.1em' }}>
                            {deed.type.toUpperCase()}
                        </span>
                        <h3 className={styles.cardTitle}>{deed.title}</h3>
                        <div style={{ marginTop: 'auto', textAlign: 'right', fontSize: '1.5rem', opacity: 0.3 }}>
                            {deed.completed ? '✓' : '+'}
                        </div>
                    </div>
                ))}
            </div>

            <div style={{ marginTop: '6rem', textAlign: 'center' }}>
                <Link href="/universe" className="humanist-serif" style={{ color: 'var(--accent-gold)', textDecoration: 'none', fontSize: '1.2rem' }}>
                    Оставить свой след в вечности: Вселенная Алеф →
                </Link>
            </div>

            <footer style={{ marginTop: '5rem', opacity: 0.3, fontSize: '0.7rem', letterSpacing: '0.3em' }}>
                ALIBI OF THE SPIRIT • 2025
            </footer>
        </main>
    );
}
