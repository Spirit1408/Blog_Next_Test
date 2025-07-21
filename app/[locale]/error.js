'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import styles from './error.module.css';

const getErrorTranslations = (locale) => {
  const translations = {
    en: {
      title: "Something went wrong!",
      message: "An unexpected error occurred. Please try again later.",
      retry: "Try Again",
      backToHome: "Go Back Home"
    },
    uk: {
      title: "Щось пішло не так!",
      message: "Сталася неочікувана помилка. Будь ласка, спробуйте пізніше.",
      retry: "Спробувати знову",
      backToHome: "Повернутися на головну"
    }
  };
  
  return translations[locale] || translations.en;
};

export default function Error({ error, reset }) {
  const params = useParams();
  const locale = params?.locale || 'en';
  const translations = getErrorTranslations(locale);

  useEffect(() => {
    console.error('Application error:', error);
  }, [error]);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.errorIcon}>⚠️</div>
        <h1 className={styles.title}>{translations.title}</h1>
        <p className={styles.message}>{translations.message}</p>
        
        <div className={styles.actions}>
          <button onClick={reset} className={styles.retryButton}>
            {translations.retry}
          </button>
          <Link href={`/${locale}`} className={styles.homeLink}>
            {translations.backToHome}
          </Link>
        </div>
      </div>
    </div>
  );
}
