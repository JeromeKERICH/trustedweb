// src/components/LibraryPreview.jsx
import React, { useEffect, useState } from 'react';
import { fetchArticles } from '../api/strapi';
import ResourceCard from './ResourceCard';

const LibraryPreview = () => {
  const [articles, setArticles] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const getArticles = async () => {
      const data = await fetchArticles();
      setArticles(data);
    };
    getArticles();
  }, []);

  const displayedArticles = showAll ? articles : articles.slice(0, 3);

  return (
    <section className="py-10 px-4 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">Web Clarity Library</h2>
      <div className="grid gap-6 md:grid-cols-3 sm:grid-cols-2 grid-cols-1c">
        {displayedArticles.map(article => (
          <ResourceCard key={article.id} article={article} />
        ))}
      </div>
      {articles.length > 3 && (
        <button
          onClick={() => setShowAll(!showAll)}
          className="mt-6 inline-block text-center bg-teal-600 text-white px-4 py-2 rounded transition"
        >
          {showAll ? 'Show Less' : 'Show All'}
        </button>
      )}
    </section>
  );
};

export default LibraryPreview;
