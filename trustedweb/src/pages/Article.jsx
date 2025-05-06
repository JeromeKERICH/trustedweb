import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

function ArticlePage() {
  const { slug } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchArticle();
  }, []);

  const fetchArticle = async () => {
    try {
      const res = await axios.get(`http://localhost:1337/api/articles?filters[slug][$eq]=${slug}&populate=*`);
      setArticle(res.data.data[0]);
    } catch (error) {
      console.error('Error fetching article:', error);
    }
  };

  if (!article) {
    return <p className="text-center py-20">Loading article...</p>;
  }

  const { title, content, coverImage, publishedAt } = article.attributes;

  const formattedDate = publishedAt ? new Date(publishedAt).toLocaleDateString() : null;
  const imageUrl = coverImage?.data ? `http://localhost:1337${coverImage.data.attributes.url}` : null;

  return (
    <section className="py-12 px-[4%] md:px-[10%] max-w-3xl mx-auto">
      <Link to="/library" className="text-teal-600 hover:underline text-sm mb-4 inline-block">← Back to Library</Link>

      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{title}</h1>
      {formattedDate && (
        <p className="text-sm text-gray-500 mb-6">Published on {formattedDate}</p>
      )}

      {imageUrl && (
        <img src={imageUrl} alt={title} className="w-full rounded mb-8 shadow" />
      )}

      <article
        className="prose prose-lg prose-teal max-w-none text-gray-800 leading-relaxed"
        dangerouslySetInnerHTML={{ __html: content }}
      ></article>
    </section>
  );
}

export default ArticlePage;
