import useFadeIn from '../hooks/useFadeIn';
import styles from './About.module.css';

const STATS = [
  { value: '4+', label: 'Years of experience' },
  { value: '2',  label: 'Roles at Temenos' },
  { value: 'Lit + React', label: 'Core libraries' },
];

export default function About() {
  const ref = useFadeIn();

  return (
    <section id="about" className="section">
      <div className="container">
        <p className="section-label">About</p>
        <h2 className="section-title">A little bit <span>about me</span></h2>

        <div ref={ref} className={`fade-in ${styles.grid}`}>
          <div className={styles.avatarWrap}>
            <div className={styles.avatar}>MB</div>
            <div className={styles.avatarGlow} aria-hidden />
          </div>

          <div className={styles.content}>
            <p className={styles.bio}>
              Hi, I&apos;m <strong>Mahesh Bikkina</strong> — a frontend engineer at{' '}
              <strong>Temenos</strong> with 4+ years of experience building enterprise-grade
              banking software. I started my career triaging and resolving complex UI bugs,
              then grew into delivering full feature development across product cycles.
            </p>
            <p className={styles.bio}>
              In recent years I&apos;ve led UI development for multiple internal projects,
              building intelligent user-agent interfaces and banking screens using the{' '}
              <strong>Lit</strong> web-components library and <strong>React</strong>. I enjoy
              working at the intersection of clean architecture and great user experience —
              turning complex financial workflows into intuitive, accessible UIs.
            </p>

            <div className={styles.stats}>
              {STATS.map(({ value, label }) => (
                <div key={label} className={styles.stat}>
                  <span className={styles.statValue}>{value}</span>
                  <span className={styles.statLabel}>{label}</span>
                </div>
              ))}
            </div>

            <a href="#contact" className={`btn btn-primary ${styles.cta}`}>
              Get in touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
