export async function getTranslations(locale) {
  try {
    const translations = await import(`../locales/${locale}.json`);
    return translations.default;
  } catch (error) {
    const fallback = await import('../locales/en.json');
    return fallback.default;
  }
}

export async function fetchPosts() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (!response.ok) {
      throw new Error('Failed to fetch posts');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching posts:', error);
    throw error;
  }
}

export async function fetchPost(id) {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    if (!response.ok) {
      throw new Error('Failed to fetch post');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching post:', error);
    throw error;
  }
}
