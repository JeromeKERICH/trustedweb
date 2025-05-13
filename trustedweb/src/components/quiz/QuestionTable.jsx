import { useEffect, useState } from "react";
import { supabase } from "../../utils/supabaseClient";

export default function QuestionTable({ onEdit }) {
  const [questions, setQuestions] = useState([]);

  const fetchQuestions = async () => {
    const { data, error } = await supabase
      .from("quiz_questions")
      .select("*")
      .order("created_at", { ascending: false });
    if (error) console.error(error);
    else setQuestions(data);
  };

  const deleteQuestion = async (id) => {
    if (!confirm("Delete this question?")) return;
    const { error } = await supabase.from("quiz_questions").delete().eq("id", id);
    if (error) console.error(error);
    else fetchQuestions();
  };

  useEffect(() => {
    fetchQuestions();
  }, []);

  return (
    <div className="bg-white shadow rounded p-4 mt-6">
      <h2 className="text-xl font-bold mb-4">Quiz Questions</h2>
      <table className="w-full border text-sm">
        <thead>
          <tr className="bg-gray-100">
            <th className="border px-2 py-1 text-left">Question</th>
            <th className="border px-2 py-1 text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {questions.map((q) => (
            <tr key={q.id}>
              <td className="border px-2 py-1">{q.question}</td>
              <td className="border px-2 py-1 text-center space-x-2">
                <button
                  className="text-blue-600 hover:underline text-sm"
                  onClick={() => onEdit(q)}
                >
                  Edit
                </button>
                <button
                  className="text-red-600 hover:underline text-sm"
                  onClick={() => deleteQuestion(q.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
          {questions.length === 0 && (
            <tr>
              <td className="border px-2 py-1 text-center" colSpan="2">
                No questions yet.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
