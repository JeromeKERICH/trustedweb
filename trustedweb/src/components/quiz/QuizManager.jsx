import ResultTable from "./ResultTable";
import QuestionTable from "./QuestionTable";
import QuestionForm from "./QuestionForm";
import { useState } from "react";

export default function QuizManager() {
  const [editingQuestion, setEditingQuestion] = useState(null);

  const refreshView = () => {
    setEditingQuestion(null);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Quiz Manager</h2>

      <ResultTable />

      <hr className="my-6" />

      <QuestionForm
        selectedQuestion={editingQuestion}
        onSaved={refreshView}
        onCancel={refreshView}
      />
      <QuestionTable onEdit={setEditingQuestion} />
    </div>
  );
}
