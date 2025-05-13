import { useState, useEffect } from "react";
import { supabase } from "../../utils/supabaseClient";

export default function CategoryForm({ selectedCategory, onSaved, onCancel }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (selectedCategory) {
      setName(selectedCategory.name);
      setDescription(selectedCategory.description || "");
    } else {
      setName("");
      setDescription("");
    }
  }, [selectedCategory]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const values = { name, description };
    let result;
    if (selectedCategory) {
      result = await supabase
        .from("categories")
        .update(values)
        .eq("id", selectedCategory.id);
    } else {
      result = await supabase.from("categories").insert([values]);
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
        {selectedCategory ? "Edit Category" : "New Category"}
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          className="w-full border p-2 rounded"
          type="text"
          placeholder="Category Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <textarea
          className="w-full border p-2 rounded h-24"
          placeholder="Description (optional)"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <div className="flex gap-2">
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            type="submit"
          >
            {selectedCategory ? "Update" : "Create"}
          </button>
          {selectedCategory && (
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
