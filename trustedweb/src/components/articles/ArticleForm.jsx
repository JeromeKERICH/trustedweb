import { useState, useEffect } from "react";
import { supabase } from "../../utils/supabaseClient";

export default function ArticleForm({ selectedArticle, onSaved, onCancel }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [categories, setCategories] = useState([]);

  // Fetch categories from Supabase
  const fetchCategories = async () => {
    const { data, error } = await supabase
      .from("categories")
      .select("*")
      .order("name", { ascending: true });
    if (error) console.error(error);
    else setCategories(data);
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    if (selectedArticle) {
      setTitle(selectedArticle.title);
      setContent(selectedArticle.content || "");
      setCategoryId(selectedArticle.category_id || "");
    } else {
      setTitle("");
      setContent("");
      setCategoryId("");
    }
  }, [selectedArticle]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const values = {
      title,
      content,
      category_id: categoryId || null,
      updated_at: new Date(),
    };

    let result;
    if (selectedArticle) {
      result = await supabase
        .from("articles")
        .update(values)
        .eq("id", selectedArticle.id);
    } else {
      result = await supabase.from("articles").insert([values]);
    }

    if (result.error) {
      alert(result.error.message);
    } else {
      onSaved();
    }
  };

  return (
    <div className="bg-white shadow rounded p-4 mt-4">
      <h2 className="text-xl font-bold mb-4">
        {selectedArticle ? "Edit Article" : "New Article"}
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          className="w-full border p-2 rounded"
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <select
          className="w-full border p-2 rounded"
          value={categoryId}
          onChange={(e) => setCategoryId(e.target.value)}
        >
          <option value="">Select Category</option>
          {categories.map((cat) => (
            <option key={cat.id} value={cat.id}>
              {cat.name}
            </option>
          ))}
        </select>
        <textarea
          className="w-full border p-2 rounded h-32"
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        <div className="flex gap-2">
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            type="submit"
          >
            {selectedArticle ? "Update" : "Create"}
          </button>
          {selectedArticle && (
            <button
              type="button"
              onClick={onCancel}
              className="bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400"
            >
              Cancel
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
