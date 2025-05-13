import { useEffect, useState } from "react";
import { supabase } from "../../utils/supabaseClient";

export default function DownloadTable({ onEdit }) {
  const [downloads, setDownloads] = useState([]);

  const fetchDownloads = async () => {
    const { data, error } = await supabase
      .from("downloads")
      .select("*, categories(name)")
      .order("created_at", { ascending: false });
    if (error) console.error(error);
    else setDownloads(data);
  };

  const deleteDownload = async (id) => {
    if (!confirm("Delete this download?")) return;
    const { error } = await supabase.from("downloads").delete().eq("id", id);
    if (error) console.error(error);
    else fetchDownloads();
  };

  useEffect(() => {
    fetchDownloads();
  }, []);

  return (
    <div className="bg-white shadow rounded p-4">
      <h2 className="text-xl font-bold mb-4">Downloads / Templates</h2>
      <table className="w-full border text-sm">
        <thead>
          <tr className="bg-gray-100">
            <th className="border px-2 py-1 text-left">Title</th>
            <th className="border px-2 py-1 text-left">Category</th>
            <th className="border px-2 py-1 text-left">File</th>
            <th className="border px-2 py-1">Actions</th>
          </tr>
        </thead>
        <tbody>
          {downloads.map((d) => (
            <tr key={d.id}>
              <td className="border px-2 py-1">{d.title}</td>
              <td className="border px-2 py-1">
                {d.categories ? d.categories.name : "Uncategorized"}
              </td>
              <td className="border px-2 py-1">
                <a
                  href={d.file_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline text-sm"
                >
                  Download
                </a>
              </td>
              <td className="border px-2 py-1 text-center space-x-2">
                <button
                  className="text-blue-600 hover:underline text-sm"
                  onClick={() => onEdit(d)}
                >
                  Edit
                </button>
                <button
                  className="text-red-600 hover:underline text-sm"
                  onClick={() => deleteDownload(d.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
          {downloads.length === 0 && (
            <tr>
              <td className="border px-2 py-1 text-center" colSpan="4">
                No downloads yet.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
