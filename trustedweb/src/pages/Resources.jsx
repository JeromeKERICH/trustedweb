import { useEffect, useState } from "react";
import { supabase } from "../utils/supabaseClient";
import { Link } from "react-router-dom";

export default function Resources() {
  const [articles, setArticles] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    fetchCategories();
    fetchArticles();
  }, []);

  const fetchCategories = async () => {
    const { data, error } = await supabase.from("categories").select("*");
    if (error) console.error("Category fetch error:", error);
    else setCategories(data);
  };

  const fetchArticles = async () => {
    const { data, error } = await supabase
      .from("articles")
      .select("*, categories(name)") // removed 'icon' to prevent 400 error
      .order("created_at", { ascending: false });

    if (error) console.error("Article fetch error:", error);
    else setArticles(data);
  };

  const filteredArticles = selectedCategory
    ? articles.filter((a) => a.category_id === selectedCategory)
    : articles;

  return (
    <section className="bg-gray-50 border-t border-gray-200 py-5 px-[4%] md:px-[10%]">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-teal-600 mb-6">
          Resources Hub
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
          Explore bite-sized insights to help you plan smarter, budget better, and avoid the usual website headaches.
        </p>

        {/* Category filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`px-4 py-2 rounded-full border ${
              selectedCategory === null
                ? "bg-teal-600 text-white"
                : "bg-white text-gray-700 hover:bg-gray-100"
            }`}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-full border ${
                selectedCategory === cat.id
                  ? "bg-teal-600 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Article cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article) => (
            <div
              key={article.id}
              className="bg-white rounded-xl shadow-sm p-6 text-left hover:shadow-md transition"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                {article.title}
              </h3>
              <p className="text-sm text-gray-600 mb-2">
                {article.categories?.name} •{" "}
                {new Date(article.created_at).toLocaleDateString()}
              </p>
              <p className="text-sm text-gray-700">
                {article.summary || article.content?.slice(0, 120)}...
              </p>

              <Link
                to={`/resources/${article.slug}`}
                className="text-sm text-teal-600 mt-3 inline-block hover:underline"
              >
                Read More →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
