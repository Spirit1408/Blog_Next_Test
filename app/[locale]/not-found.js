import Link from 'next/link';
import { getTranslations } from '../../lib/translations';
import styles from './not-found.module.css';

export default async function NotFound() {
  const translations = await getTranslations('en');

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.errorCode}>404</div>
        
        <h1 className={styles.title}>{translations.notFound.title}</h1>
        
        <p className={styles.message}>{translations.notFound.message}</p>
        
        <Link href="/en" className={styles.homeLink}>
          {translations.notFound.backToHome}
        </Link>
      </div>
    </div>
  );
}
