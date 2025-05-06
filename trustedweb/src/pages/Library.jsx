import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Library() {
  const [articles, setArticles] = useState([]);
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState('All');

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    try {
      const res = await axios.get('http://localhost:1337/api/articles?populate=*');
      const articlesData = res.data.data;

      // Extract unique categories
      const cats = ['All', ...new Set(articlesData.map(a => a.attributes.category))];

      setArticles(articlesData);
      setCategories(cats);
    } catch (error) {
      console.error('Error fetching articles:', error);
    }
  };

  const filteredArticles = activeCategory === 'All'
    ? articles
    : articles.filter(a => a.attributes.category === activeCategory);

  return (
    <section className="py-12 px-[4%] md:px-[10%] max-w-7xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">Web Clarity Library</h1>
      <p className="text-lg text-gray-600 mb-8 text-center">Everything you need to understand website building. No jargon, no scams. Just clarity.</p>

      {/* Category Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-1 rounded-full border ${
              activeCategory === cat ? 'bg-teal-600 text-white' : 'bg-gray-100 text-gray-600'
            } hover:bg-teal-500 hover:text-white transition text-sm`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredArticles.map(article => {
          const { title, excerpt, category, slug } = article.attributes;
          return (
            <div key={article.id} className="bg-white p-6 rounded shadow hover:shadow-md transition">
              {category && (
                <span className="inline-block bg-teal-100 text-teal-700 text-xs font-medium px-3 py-1 rounded-full mb-2">{category}</span>
              )}
              <h2 className="text-xl font-semibold mb-2 text-teal-700">{title}</h2>
              <p className="text-gray-600 text-sm mb-3">{excerpt}</p>
              <Link to={`/library/${slug}`} className="text-teal-600 hover:underline text-sm">Read more →</Link>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Library;
