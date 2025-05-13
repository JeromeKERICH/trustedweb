import { useState } from "react";
import ArticleTable from "../components/articles/ArticleTable";
import ArticleForm from "../components/articles/ArticleForm";


export default function Articles() {
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [refreshKey, setRefreshKey] = useState(0);

  const refresh = () => {
    setRefreshKey((k) => k + 1);
    setSelectedArticle(null);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Articles Management</h1>
      <ArticleTable key={refreshKey} onEdit={setSelectedArticle} />
      <ArticleForm
        selectedArticle={selectedArticle}
        onSaved={refresh}
        onCancel={() => setSelectedArticle(null)}
      />
    </div>
  );
}
