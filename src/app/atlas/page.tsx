'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './atlas.module.css';

const QUESTIONS = [
    {
        id: 1,
        text: "Which celestial element resonates with your current path?",
        options: ["Deep Ocean (Stillness)", "Celestial Wind (Growth)", "Sacred Soil (Rootedness)", "Astral Fire (Transformation)"],
    },
    {
        id: 2,
        text: "Where do you seek the most illumination?",
        options: ["Origins (Past)", "Presence (Now)", "Horizon (Future)", "Bonds (Unity)"],
    },
    {
        id: 3,
        text: "Which geometry describes your soul's current shape?",
        options: ["The Circle (Wholeness)", "The Line (direction)", "The Spiral (Evolution)", "The Void (Potential)"],
    },
];

export default function AtlasPage() {
    const [currentStep, setCurrentStep] = useState(0);
    const [isFinished, setIsFinished] = useState(false);

    const handleNext = () => {
        if (currentStep < QUESTIONS.length - 1) {
            setCurrentStep(currentStep + 1);
        } else {
            setIsFinished(true);
        }
    };

    const progress = ((currentStep + (isFinished ? 1 : 0)) / QUESTIONS.length) * 100;

    return (
        <main className={styles.container}>
            <Link href="/dashboard" className={styles.backLink}>← Return to Sanctuary</Link>

            <header className={styles.header}>
                <h1>Soul Compass</h1>
                <p>Chart your resonance across the celestial dimensions.</p>
            </header>

            <div className={styles.diagnosticBox}>
                {!isFinished ? (
                    <div className="animate-fade-in" key={currentStep}>
                        <h2 className={styles.question}>{QUESTIONS[currentStep].text}</h2>
                        <div className={styles.options}>
                            {QUESTIONS[currentStep].options.map((option, idx) => (
                                <button
                                    key={idx}
                                    className={styles.optionButton}
                                    onClick={handleNext}
                                >
                                    {option}
                                </button>
                            ))}
                        </div>
                        <div className={styles.progress}>
                            <div className={styles.progressBar} style={{ width: `${progress}%` }}></div>
                        </div>
                    </div>
                ) : (
                    <div className="animate-fade-in">
                        <h2 className={styles.question}>Your Resonance is Aligned</h2>
                        <p style={{ textAlign: 'center', color: 'var(--text-secondary)', fontSize: '1.2rem', lineHeight: '1.8', marginBottom: '3rem' }}>
                            Your current frequency indicates a deep resonance with the <span style={{ color: 'var(--accent-cyan)' }}>Celestial Wind</span>.
                            You are in a phase of expansive growth and ethereal transformation.
                        </p>
                        <div style={{ textAlign: 'center' }}>
                            <Link href="/mirror">
                                <button className={styles.optionButton} style={{ display: 'inline-block', width: 'auto', padding: '1.2rem 4rem', textAlign: 'center' }}>
                                    Begin Mirror Practice
                                </button>
                            </Link>
                        </div>
                    </div>
                )}
            </div>

            <footer style={{ marginTop: '4rem', opacity: 0.2, fontSize: '0.7rem', letterSpacing: '0.4em', textTransform: 'uppercase' }}>
                Geometry of Soul • Aleph Archive
            </footer>
        </main>
    );
}
