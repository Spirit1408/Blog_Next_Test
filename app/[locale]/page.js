import Link from 'next/link';
import { getTranslations, fetchPosts } from '../../lib/translations';
import styles from './page.module.css';

export default async function HomePage({ params }) {
  const { locale } = params;
  const translations = await getTranslations(locale);
  
  let posts = [];
  let error = null;

  try {
    posts = await fetchPosts();
  } catch (err) {
    error = err.message;
  }

  if (error) {
    return (
      <div className={styles.container}>
        <h1 className={styles.title}>{translations.home.title}</h1>
        
        <div className={styles.error}>
          <p>{translations.home.error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{translations.home.title}</h1>
      
      {posts.length === 0 ? (
        <p className={styles.noPosts}>{translations.home.noPosts}</p>
      ) : (
        <div className={styles.postsGrid}>
          {posts.map((post) => (
            <article key={post.id} className={styles.postCard}>
              <h2 className={styles.postTitle}>{post.title}</h2>
              
              <p className={styles.postExcerpt}>
                {post.body.substring(0, 150)}...
              </p>
              
              <Link 
                href={`/${locale}/posts/${post.id}`}
                className={styles.readMoreLink}
              >
                {translations.home.readMore}
              </Link>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
