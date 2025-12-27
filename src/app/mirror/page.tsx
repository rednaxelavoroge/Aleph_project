'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './mirror.module.css';

export default function MirrorPage() {
    const [entry, setEntry] = useState('');

    return (
        <main className={styles.container}>
            <div className={styles.sparks} />

            <header className={styles.header}>
                <Link href="/dashboard" className={styles.backLink}>
                    ←
                </Link>
                <h1>Polishing the Mirror</h1>
            </header>

            <div className={styles.canvasWrapper}>
                {/* Decorative Prompts */}
                <div className={styles.prompts}>
                    <span className={`${styles.prompt} ${styles.prompt1}`}>What gave you peace?</span>
                    <span className={`${styles.prompt} ${styles.prompt2}`}>What gave you peace?</span>
                    <span className={`${styles.prompt} ${styles.prompt3}`}>A moment of gratitude...</span>
                </div>

                <textarea
                    className={styles.canvas}
                    placeholder="Reflect on your journey..."
                    value={entry}
                    onChange={(e) => setEntry(e.target.value)}
                />
            </div>

            <button className={styles.sendButton}>
                Send to Universe
            </button>

            <div className={styles.footerHint}>
                ✦ THE TALE OF YOUR ESSENCE ✦
            </div>

            <Link href="/ethos" className="backLink" style={{ marginTop: '3rem', color: 'var(--text-dim)', textDecoration: 'none', fontSize: '0.8rem', letterSpacing: '0.2em' }}>
                CONTINUE TO ETHOS →
            </Link>
        </main>
    );
}
