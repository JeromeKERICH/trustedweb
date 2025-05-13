import { useState, useEffect } from "react";
import { supabase } from "../../utils/supabaseClient";

export default function DownloadForm({ selectedDownload, onSaved, onCancel }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [file, setFile] = useState(null);
  const [fileUrl, setFileUrl] = useState("");
  const [categories, setCategories] = useState([]);

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
    if (selectedDownload) {
      setTitle(selectedDownload.title);
      setDescription(selectedDownload.description || "");
      setCategoryId(selectedDownload.category_id || "");
      setFileUrl(selectedDownload.file_url);
    } else {
      setTitle("");
      setDescription("");
      setCategoryId("");
      setFile(null);
      setFileUrl("");
    }
  }, [selectedDownload]);

  const uploadFile = async (file) => {
    const filePath = `${Date.now()}-${file.name}`;
    const { error } = await supabase.storage
      .from("downloads")
      .upload(filePath, file, { upsert: false });

    if (error) {
      alert("File upload error: " + error.message);
      return null;
    }
    const { data: publicUrl } = supabase.storage
      .from("downloads")
      .getPublicUrl(filePath);
    return publicUrl.publicUrl;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let finalFileUrl = fileUrl;

    if (file) {
      const uploadedUrl = await uploadFile(file);
      if (!uploadedUrl) return;
      finalFileUrl = uploadedUrl;
    }

    const values = {
      title,
      description,
      category_id: categoryId || null,
      file_url: finalFileUrl,
    };

    let result;
    if (selectedDownload) {
      result = await supabase
        .from("downloads")
        .update(values)
        .eq("id", selectedDownload.id);
    } else {
      result = await supabase.from("downloads").insert([values]);
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
        {selectedDownload ? "Edit Download" : "New Download"}
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
        <textarea
          className="w-full border p-2 rounded h-24"
          placeholder="Description (optional)"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
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
        <input
          className="w-full border p-2 rounded"
          type="file"
          accept=".pdf,.doc,.docx,.xls,.xlsx"
          onChange={(e) => setFile(e.target.files[0])}
        />
        {fileUrl && (
          <a
            href={fileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline text-sm"
          >
            Current file
          </a>
        )}
        <div className="flex gap-2">
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            type="submit"
          >
            {selectedDownload ? "Update" : "Create"}
          </button>
          {selectedDownload && (
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
