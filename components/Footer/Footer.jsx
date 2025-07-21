import styles from './Footer.module.css';

export default function Footer({ translations }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.text}>
          © {currentYear} {translations.footer.author}. {translations.footer.rights}
        </p>
      </div>
    </footer>
  );
}
