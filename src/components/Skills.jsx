import useFadeIn from '../hooks/useFadeIn';
import styles from './Skills.module.css';

const SKILL_GROUPS = [
  {
    category: 'Languages',
    skills: ['HTML5', 'CSS3', 'JavaScript (ES2022+)', 'TypeScript'],
  },
  {
    category: 'Frameworks & Libraries',
    skills: ['React', 'Angular', 'Next.js', 'Vue.js', 'Lit', 'Tailwind CSS'],
  },
  {
    category: 'Tools & Platforms',
    skills: ['Git & GitHub', 'Git Bash', 'VS Code', 'Figma', 'Jira', 'Vite', 'Webpack'],
  },
  {
    category: 'Practices',
    skills: [
      'REST APIs', 'Responsive Design', 'Accessibility (a11y)',
      'Performance Optimization', 'Component Architecture',
      'State Management', 'Code Splitting', 'Lazy Loading',
    ],
  },
  {
    category: 'Testing',
    skills: ['Jest', 'React Testing Library', 'Cypress'],
  },
  {
    category: 'UI Libraries',
    skills: ['Redux Toolkit', 'React Router', 'Framer Motion', 'Recharts', 'DnD Kit', 'Material UI'],
  },
];

export default function Skills() {
  const ref = useFadeIn();

  return (
    <section id="skills" className={`section ${styles.bg}`}>
      <div className="container">
        <p className="section-label">Skills</p>
        <h2 className="section-title">What I work <span>with</span></h2>

        <div ref={ref} className={`fade-in ${styles.grid}`}>
          {SKILL_GROUPS.map(({ category, skills }) => (
            <div key={category} className={styles.group}>
              <h3 className={styles.category}>{category}</h3>
              <div className={styles.tags}>
                {skills.map((skill) => (
                  <span key={skill} className={styles.tag}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
