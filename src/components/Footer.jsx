import styles from './Footer.module.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <a href="#hero" className={styles.logo}>&lt;MB /&gt;</a>
        <p className={styles.copy}>
          Designed &amp; built by <span>Mahesh Bikkina</span> &copy; {year}
        </p>
        <p className={styles.built}>Built with React + Vite</p>
      </div>
    </footer>
  );
}
