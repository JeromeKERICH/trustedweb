import { useEffect, useState } from "react";
import { supabase } from "../../utils/supabaseClient";

export default function ArticleTable({ onEdit }) {
  const [articles, setArticles] = useState([]);

  const fetchArticles = async () => {
    const { data, error } = await supabase
      .from("articles")
      .select("*")
      .order("created_at", { ascending: false });
    if (error) console.error(error);
    else setArticles(data);
  };

  const deleteArticle = async (id) => {
    if (!confirm("Delete this article?")) return;
    const { error } = await supabase.from("articles").delete().eq("id", id);
    if (error) console.error(error);
    else fetchArticles();
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  return (
    <div className="bg-white shadow rounded p-4">
      <h2 className="text-xl font-bold mb-4">Articles</h2>
      <table className="w-full border text-sm">
        <thead>
          <tr className="bg-gray-100">
            <th className="border px-2 py-1 text-left">Title</th>
            <th className="border px-2 py-1 text-left">Category</th>
            <th className="border px-2 py-1">Actions</th>
          </tr>
        </thead>
        <tbody>
          {articles.map((a) => (
            <tr key={a.id}>
              <td className="border px-2 py-1">{a.title}</td>
              <td className="border px-2 py-1">
                    {a.categories ? a.categories.name : "Uncategorized"}
                </td>
            
            
              <td className="border px-2 py-1 text-center space-x-2">
                <button
                  className="text-blue-600 hover:underline text-sm"
                  onClick={() => onEdit(a)}
                >
                  Edit
                </button>
                <button
                  className="text-red-600 hover:underline text-sm"
                  onClick={() => deleteArticle(a.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
          {articles.length === 0 && (
            <tr>
              <td className="border px-2 py-1 text-center" colSpan="3">
                No articles yet.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
