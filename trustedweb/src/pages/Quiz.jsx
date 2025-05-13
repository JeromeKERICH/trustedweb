import { useState } from "react";
import ResultTable from "../components/quiz/ResultTable";
import ResultForm from "../components/quiz/ResultForm";

export default function QuizPage() {
  const [selectedResult, setSelectedResult] = useState(null);
  const [refreshFlag, setRefreshFlag] = useState(false);

  const handleEdit = (result) => {
    setSelectedResult(result);
  };

  const handleSaved = () => {
    setSelectedResult(null);
    setRefreshFlag(!refreshFlag); // Trigger refresh
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Website Type Quiz Manager</h1>

      <ResultForm
        selectedResult={selectedResult}
        onSaved={handleSaved}
        onCancel={() => setSelectedResult(null)}
      />
      <ResultTable
        key={refreshFlag} // Force refresh on save
        onEdit={handleEdit}
      />
    </div>
  );
}
