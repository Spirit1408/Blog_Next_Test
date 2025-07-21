import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getTranslations, fetchPost, fetchPosts } from '../../../../lib/translations';
import styles from './page.module.css';

export async function generateStaticParams({ params }) {
  const { locale } = params;
  
  try {
    const posts = await fetchPosts();
    
    return posts.map((post) => ({
      locale,
      id: post.id.toString(),
    }));
  } catch (error) {
    console.error('Error generating static params:', error);
    return [];
  }
}

export async function generateMetadata({ params }) {
  const { locale, id } = params;
  const translations = await getTranslations(locale);
  
  try {
    const post = await fetchPost(id);
    return {
      title: `${post.title} - ${translations.header.logo}`,
      description: post.body.substring(0, 160),
    };
  } catch (error) {
    return {
      title: `${translations.post.notFound} - ${translations.header.logo}`,
      description: translations.post.notFound,
    };
  }
}

export default async function PostPage({ params }) {
  const { locale, id } = params;
  const translations = await getTranslations(locale);
  
  let post = null;
  let error = null;

  try {
    post = await fetchPost(id);
    
    if (!post || !post.id) {
      notFound();
    }
  } catch (err) {
    error = err.message;
  }

  if (error) {
    return (
      <div className={styles.container}>
        <div className={styles.error}>
          <h1>{translations.post.error}</h1>
          
          <p>{error}</p>
          
          <Link href={`/${locale}`} className={styles.backLink}>
            {translations.post.backToHome}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <Link href={`/${locale}`} className={styles.backLink}>
        {translations.post.backToHome}
      </Link>
      
      <article className={styles.article}>
        <h1 className={styles.title}>{post.title}</h1>
        
        <div className={styles.content}>
          <p>{post.body}</p>
        </div>
      </article>
    </div>
  );
}
