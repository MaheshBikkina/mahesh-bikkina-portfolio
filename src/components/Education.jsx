import useFadeIn from '../hooks/useFadeIn';
import styles from './Education.module.css';

const EDUCATION = [
  {
    degree: 'B.Tech',
    institution: 'Raghu Engineering College (Autonomous)',
    year: '2021',
    note: 'Bachelor of Technology',
  },
  {
    degree: 'Frontend Development Bootcamp',
    institution: 'NxtWave — CCBP 4.0',
    year: '2021',
    note: 'Intensive frontend programme — CCBPian',
  },
];

export default function Education() {
  const ref = useFadeIn();

  return (
    <section id="education" className="section">
      <div className="container">
        <p className="section-label">Education</p>
        <h2 className="section-title">My <span>background</span></h2>

        <div ref={ref} className={`fade-in ${styles.grid}`}>
          {EDUCATION.map((item) => (
            <div key={item.degree} className={styles.card}>
              <div className={styles.icon} aria-hidden>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                  <path d="M6 12v5c3 3 9 3 12 0v-5"/>
                </svg>
              </div>
              <div>
                <h3 className={styles.degree}>{item.degree}</h3>
                <p className={styles.institution}>{item.institution}</p>
                {item.note && <p className={styles.note}>{item.note}</p>}
              </div>
              <span className={styles.year}>{item.year}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
