import { useEffect, useState } from "react";
import { supabase } from "../../utils/supabaseClient";

export default function ResultTable({ onEdit }) {
  const [results, setResults] = useState([]);

  const fetchResults = async () => {
    const { data, error } = await supabase
      .from("quiz_results")
      .select("*")
      .order("created_at", { ascending: false });
    if (error) console.error(error);
    else setResults(data);
  };

  const deleteResult = async (id) => {
    if (!confirm("Delete this result?")) return;
    const { error } = await supabase.from("quiz_results").delete().eq("id", id);
    if (error) console.error(error);
    else fetchResults();
  };

  useEffect(() => {
    fetchResults();
  }, []);

  return (
    <div className="bg-white shadow rounded p-4 mt-6">
      <h2 className="text-xl font-bold mb-4">Quiz Results (Website Types)</h2>
      <table className="w-full border text-sm">
        <thead>
          <tr className="bg-gray-100">
            <th className="border px-2 py-1 text-left">Name</th>
            <th className="border px-2 py-1 text-left">Description</th>
            <th className="border px-2 py-1 text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {results.map((r) => (
            <tr key={r.id}>
              <td className="border px-2 py-1 font-medium">{r.name}</td>
              <td className="border px-2 py-1">{r.description}</td>
              <td className="border px-2 py-1 text-center space-x-2">
                <button
                  className="text-blue-600 hover:underline text-sm"
                  onClick={() => onEdit(r)}
                >
                  Edit
                </button>
                <button
                  className="text-red-600 hover:underline text-sm"
                  onClick={() => deleteResult(r.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
          {results.length === 0 && (
            <tr>
              <td className="border px-2 py-1 text-center" colSpan="3">
                No results yet.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
