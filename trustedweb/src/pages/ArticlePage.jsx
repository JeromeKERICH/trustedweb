// ArticlePage.jsx
import { useEffect, useState } from 'react';

const fetchArticleBySlug = async (slug) => {
  try {
    const res = await fetch(`http://localhost:1337/api/articles?filters[slug][$eq]=${slug}&populate=*`);
    if (!res.ok) {
      throw new Error('Failed to fetch article');
    }
    const data = await res.json();
    
    // Check if data exists and has articles
    if (data && data.data && data.data.length > 0) {
      return data.data[0]; // return the first article
    } else {
      console.error('No article found with the given slug');
      return null;
    }
  } catch (error) {
    console.error('Error fetching article:', error);
    return null;
  }
};

const ArticlePage = ({ match }) => {
  const [article, setArticle] = useState(null);

  useEffect(() => {
    const { slug } = match.params;
    fetchArticleBySlug(slug).then(fetchedArticle => {
      if (fetchedArticle) {
        setArticle(fetchedArticle);
      } else {
        console.error('Article not found');
      }
    });
  }, [match.params.slug]);

  if (!article) return <div>Loading...</div>;

  return (
    <div>
      <h1>{article.title}</h1>
      {/* Render the article content */}
    </div>
  );
};

export default ArticlePage;
