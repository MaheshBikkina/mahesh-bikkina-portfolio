import useFadeIn from '../hooks/useFadeIn';
import styles from './Projects.module.css';

const MINIMAL_PROJECTS = [
  {
    name: 'Tick-Tac-Toe',
    description:
      'A real-time community platform for developers to share ideas, ask questions, and collaborate. Features live notifications, markdown editor, and voting system.',
    tech: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
    live: 'https://devforum.demo',
    repo: 'https://github.com/yourusername/devforum',
  },
  
]

const PROJECTS = [
  {
    name: 'DevForum',
    description:
      'A real-time community platform for developers to share ideas, ask questions, and collaborate. Features live notifications, markdown editor, and voting system.',
    tech: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
    live: 'https://devforum.demo',
    repo: 'https://github.com/yourusername/devforum',
  },
  {
    name: 'Taskflow',
    description:
      'A drag-and-drop project management tool inspired by Trello. Supports boards, cards, labels, due dates, and team collaboration.',
    tech: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL'],
    live: 'https://taskflow.demo',
    repo: 'https://github.com/yourusername/taskflow',
  },
  {
    name: 'WeatherNow',
    description:
      'A beautiful weather app with animated backgrounds, hourly forecasts, and location auto-detection. Built with a focus on performance and offline support.',
    tech: ['React', 'PWA', 'OpenWeather API', 'CSS Animations'],
    live: 'https://weathernow.demo',
    repo: 'https://github.com/yourusername/weathernow',
  },
  {
    name: 'UI Component Kit',
    description:
      'An open-source React component library with 30+ accessible, composable components. Fully documented with Storybook and tested with Jest.',
    tech: ['React', 'TypeScript', 'Storybook', 'Rollup'],
    live: null,
    repo: 'https://github.com/yourusername/ui-kit',
  },
  {
    name: 'PortfolioGen',
    description:
      'A CLI tool that generates a customisable developer portfolio site from a YAML config file. Supports multiple themes and one-click Vercel deploy.',
    tech: ['Node.js', 'EJS', 'YAML', 'CLI'],
    live: null,
    repo: 'https://github.com/yourusername/portfolio-gen',
  },
];

function ExternalIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
      <polyline points="15 3 21 3 21 9"/>
      <line x1="10" y1="14" x2="21" y2="3"/>
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
    </svg>
  );
}

export default function Projects() {
  const ref = useFadeIn();

  return (
    <section id="projects" className={`section ${styles.bg}`}>
      <div className="container">
        <p className="section-label">Projects</p>
        <h2 className="section-title">Things I&apos;ve <span>built</span></h2>

        <div ref={ref} className={`fade-in ${styles.grid}`}>
          {PROJECTS.map((project) => (
            <div key={project.name} className={styles.card}>
              <div className={styles.cardTop}>
                <div className={styles.folderIcon}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>
                  </svg>
                </div>
                <div className={styles.links}>
                  {project.repo && (
                    <a href={project.repo} target="_blank" rel="noopener noreferrer" aria-label="GitHub repo" className={styles.iconLink}>
                      <GithubIcon />
                    </a>
                  )}
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer" aria-label="Live demo" className={styles.iconLink}>
                      <ExternalIcon />
                    </a>
                  )}
                </div>
              </div>

              <h3 className={styles.name}>{project.name}</h3>
              <p className={styles.description}>{project.description}</p>

              <div className={styles.tech}>
                {project.tech.map((t) => (
                  <span key={t} className={styles.techTag}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
