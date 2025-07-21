import { getTranslations } from '../../../lib/translations';
import styles from './page.module.css';

export async function generateStaticParams() {
  return [
    { locale: 'en' },
    { locale: 'uk' }
  ];
}

export async function generateMetadata({ params }) {
  const { locale } = params;
  const translations = await getTranslations(locale);
  
  return {
    title: `${translations.about.title} - ${translations.header.logo}`,
    description: translations.about.content.substring(0, 160),
  };
}

export default async function AboutPage({ params }) {
  const { locale } = params;
  const translations = await getTranslations(locale);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>{translations.about.title}</h1>
        
        <div className={styles.section}>
          <p className={styles.description}>
            {translations.about.content}
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.subtitle}>{translations.about.features}</h2>
          
          <ul className={styles.featuresList}>
            <li className={styles.feature}>{translations.about.feature1}</li>
            <li className={styles.feature}>{translations.about.feature2}</li>
            <li className={styles.feature}>{translations.about.feature3}</li>
            <li className={styles.feature}>{translations.about.feature4}</li>
            <li className={styles.feature}>{translations.about.feature5}</li>
          </ul>
        </div>

        <div className={styles.techStack}>
          <h2 className={styles.subtitle}>Tech Stack</h2>
          
          <div className={styles.technologies}>
            <span className={styles.tech}>Next.js 15</span>
            <span className={styles.tech}>React 19</span>
            <span className={styles.tech}>CSS Modules</span>
            <span className={styles.tech}>JSONPlaceholder API</span>
          </div>
        </div>
      </div>
    </div>
  );
}
