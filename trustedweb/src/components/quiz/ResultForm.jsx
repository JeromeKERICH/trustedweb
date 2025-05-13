import { useEffect, useState } from "react";
import { supabase } from "../../utils/supabaseClient";

export default function ResultForm({ selectedResult, onSaved, onCancel }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (selectedResult) {
      setName(selectedResult.name);
      setDescription(selectedResult.description || "");
    } else {
      setName("");
      setDescription("");
    }
  }, [selectedResult]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const values = { name, description };

    let result;
    if (selectedResult) {
      result = await supabase
        .from("quiz_results")
        .update(values)
        .eq("id", selectedResult.id);
    } else {
      result = await supabase.from("quiz_results").insert([values]);
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
        {selectedResult ? "Edit Result" : "New Result"}
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          className="w-full border p-2 rounded"
          type="text"
          placeholder="Result Name (e.g., Portfolio)"
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
            {selectedResult ? "Update" : "Create"}
          </button>
          {selectedResult && (
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
