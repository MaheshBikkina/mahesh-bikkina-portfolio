import useFadeIn from '../hooks/useFadeIn';
import styles from './Experience.module.css';

const EXPERIENCE = [
  {
    company: 'Temenos',
    role: 'Associate Product Engineer',
    duration: '2023 – Present',
    description:
      'Leading UI development for multiple product initiatives — building user-agent interfaces with rich functionalities and banking application screens using Lit web components and React. Collaborating cross-functionally to ship production-grade features for core banking software.',
    tech: ['React', 'Lit', 'Web Components', 'JavaScript', 'TypeScript'],
  },
  {
    company: 'Temenos',
    role: 'Software Engineer',
    duration: '2021 – 2023',
    description:
      'Investigated and resolved complex UI bugs across the banking platform, ensuring stability and consistency for enterprise clients. Delivered end-to-end feature development — from design handoff to production release — working closely with product and QA teams.',
    tech: ['JavaScript', 'HTML', 'CSS', 'React', 'Git'],
  },
];

export default function Experience() {
  const ref = useFadeIn();

  return (
    <section id="experience" className="section">
      <div className="container">
        <p className="section-label">Experience</p>
        <h2 className="section-title">Where I&apos;ve <span>worked</span></h2>

        <div ref={ref} className={`fade-in ${styles.timeline}`}>
          {EXPERIENCE.map((item, i) => (
            <div key={i} className={styles.item}>
              <div className={styles.dot} />
              <div className={styles.card}>
                <div className={styles.header}>
                  <div>
                    <h3 className={styles.role}>{item.role}</h3>
                    <p className={styles.company}>{item.company}</p>
                  </div>
                  <span className={styles.duration}>{item.duration}</span>
                </div>
                <p className={styles.description}>{item.description}</p>
                <div className={styles.techList}>
                  {item.tech.map((t) => (
                    <span key={t} className={styles.techTag}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
