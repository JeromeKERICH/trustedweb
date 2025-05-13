import { useEffect, useState } from "react";
import { supabase } from "../../utils/supabaseClient";

export default function CategoryTable({ onEdit }) {
  const [categories, setCategories] = useState([]);

  const fetchCategories = async () => {
    const { data, error } = await supabase
      .from("categories")
      .select("*")
      .order("created_at", { ascending: false });
    if (error) console.error(error);
    else setCategories(data);
  };

  const deleteCategory = async (id) => {
    if (!confirm("Delete this category?")) return;
    const { error } = await supabase.from("categories").delete().eq("id", id);
    if (error) console.error(error);
    else fetchCategories();
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <div className="bg-white shadow rounded p-4">
      <h2 className="text-xl font-bold mb-4">Categories</h2>
      <table className="w-full border text-sm">
        <thead>
          <tr className="bg-gray-100">
            <th className="border px-2 py-1 text-left">Name</th>
            <th className="border px-2 py-1 text-left">Description</th>
            <th className="border px-2 py-1">Actions</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((cat) => (
            <tr key={cat.id}>
              <td className="border px-2 py-1">{cat.name}</td>
              <td className="border px-2 py-1">{cat.description}</td>
              <td className="border px-2 py-1 text-center space-x-2">
                <button
                  className="text-blue-600 hover:underline text-sm"
                  onClick={() => onEdit(cat)}
                >
                  Edit
                </button>
                <button
                  className="text-red-600 hover:underline text-sm"
                  onClick={() => deleteCategory(cat.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
          {categories.length === 0 && (
            <tr>
              <td className="border px-2 py-1 text-center" colSpan="3">
                No categories yet.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
