import { useState } from "react";
import CategoryTable from "../components/categories/CategoryTable";
import CategoryForm from "../components/categories/CategoryForm";

export default function Categories() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [refreshKey, setRefreshKey] = useState(0);

  const refresh = () => {
    setRefreshKey((k) => k + 1);
    setSelectedCategory(null);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Categories Management</h1>
      <CategoryTable key={refreshKey} onEdit={setSelectedCategory} />
      <CategoryForm
        selectedCategory={selectedCategory}
        onSaved={refresh}
        onCancel={() => setSelectedCategory(null)}
      />
    </div>
  );
}
