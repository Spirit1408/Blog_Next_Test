'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import styles from './Header.module.css';

export default function Header({ locale, translations }) {
  const router = useRouter();
  const pathname = usePathname();

  const getLocalizedPath = (path, newLocale) => {
    return `/${newLocale}${path === '/' ? '' : path}`;
  };

  const currentPath = pathname.replace(`/${locale}`, '') || '/';

  const handleLanguageChange = (newLocale) => {
    const newPath = getLocalizedPath(currentPath, newLocale);
    router.push(newPath);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href={`/${locale}`} className={styles.logo}>
          {translations.header.logo}
        </Link>
        
        <nav className={styles.nav}>
          <Link 
            href={`/${locale}`} 
            className={`${styles.navLink} ${currentPath === '/' ? styles.active : ''}`}
          >
            {translations.header.home}
          </Link>
          <Link 
            href={`/${locale}/about`} 
            className={`${styles.navLink} ${currentPath === '/about' ? styles.active : ''}`}
          >
            {translations.header.about}
          </Link>
          
          <div className={styles.languageSelector}>
            <button
              onClick={() => handleLanguageChange('en')}
              className={`${styles.langButton} ${locale === 'en' ? styles.active : ''}`}
            >
              EN
            </button>
            <button
              onClick={() => handleLanguageChange('uk')}
              className={`${styles.langButton} ${locale === 'uk' ? styles.active : ''}`}
            >
              UK
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}
