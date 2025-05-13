import { useEffect, useState } from "react";
import { supabase } from "../../utils/supabaseClient";

export default function QuestionForm({ selectedQuestion, onSaved, onCancel }) {
  const [questionText, setQuestionText] = useState("");
  const [questionId, setQuestionId] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [resultsOptions, setResultsOptions] = useState([]);

  const [newAnswer, setNewAnswer] = useState("");
  const [newResultId, setNewResultId] = useState("");

  useEffect(() => {
    fetchResultsOptions();
    if (selectedQuestion) {
      setQuestionText(selectedQuestion.question);
      setQuestionId(selectedQuestion.id);
      fetchAnswers(selectedQuestion.id);
    } else {
      setQuestionText("");
      setQuestionId(null);
      setAnswers([]);
    }
  }, [selectedQuestion]);

  const fetchResultsOptions = async () => {
    const { data, error } = await supabase.from("quiz_results").select("*");
    if (error) console.error(error);
    else setResultsOptions(data);
  };

  const fetchAnswers = async (qId) => {
    const { data, error } = await supabase
      .from("quiz_answers")
      .select("*")
      .eq("question_id", qId);
    if (error) console.error(error);
    else setAnswers(data);
  };

  const handleSaveQuestion = async (e) => {
    e.preventDefault();
    if (!questionText.trim()) {
      alert("Enter a question");
      return;
    }

    let result;
    if (selectedQuestion) {
      result = await supabase
        .from("quiz_questions")
        .update({ question: questionText })
        .eq("id", selectedQuestion.id);
    } else {
      result = await supabase.from("quiz_questions").insert([{ question: questionText }]);
    }

    if (result.error) {
      alert(result.error.message);
    } else {
      onSaved();
    }
  };

  const addAnswer = async () => {
    if (!questionId && !selectedQuestion) {
      alert("Please save the question first");
      return;
    }
    if (!newAnswer.trim() || !newResultId) {
      alert("Answer text + result required");
      return;
    }

    const qId = questionId || selectedQuestion.id;

    const { error } = await supabase.from("quiz_answers").insert([
      {
        question_id: qId,
        answer: newAnswer,
        result_id: newResultId,
      },
    ]);

    if (error) {
      alert(error.message);
    } else {
      setNewAnswer("");
      setNewResultId("");
      fetchAnswers(qId);
    }
  };

  const deleteAnswer = async (id) => {
    const { error } = await supabase.from("quiz_answers").delete().eq("id", id);
    if (error) console.error(error);
    else fetchAnswers(selectedQuestion.id);
  };

  return (
    <div className="bg-white shadow rounded p-4 mt-4">
      <h2 className="text-xl font-bold mb-4">
        {selectedQuestion ? "Edit Question" : "New Question"}
      </h2>

      <form onSubmit={handleSaveQuestion} className="space-y-4">
        <input
          className="w-full border p-2 rounded"
          type="text"
          placeholder="Enter quiz question"
          value={questionText}
          onChange={(e) => setQuestionText(e.target.value)}
          required
        />

        <div className="flex gap-2">
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            type="submit"
          >
            {selectedQuestion ? "Update Question" : "Create Question"}
          </button>
          {selectedQuestion && (
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

      {selectedQuestion && (
        <div className="mt-6">
          <h3 className="font-semibold text-lg mb-2">Manage Answers</h3>
          <div className="flex items-center gap-2 mb-2">
            <input
              className="border p-2 rounded flex-1"
              placeholder="Answer text"
              value={newAnswer}
              onChange={(e) => setNewAnswer(e.target.value)}
            />
            <select
              className="border p-2 rounded"
              value={newResultId}
              onChange={(e) => setNewResultId(e.target.value)}
            >
              <option value="">Select Result</option>
              {resultsOptions.map((r) => (
                <option key={r.id} value={r.id}>
                  {r.name}
                </option>
              ))}
            </select>
            <button
              className="bg-green-600 text-white px-3 py-2 rounded hover:bg-green-700"
              onClick={addAnswer}
            >
              + Add
            </button>
          </div>

          <ul className="space-y-2">
            {answers.map((a) => (
              <li key={a.id} className="border p-2 rounded flex justify-between items-center">
                <div>
                  <span className="font-medium">{a.answer}</span>  
                </div>
                <button
                  className="text-red-600 text-sm hover:underline"
                  onClick={() => deleteAnswer(a.id)}
                >
                  Delete
                </button>
              </li>
            ))}
            {answers.length === 0 && <p className="text-sm text-gray-500">No answers yet.</p>}
          </ul>
        </div>
      )}
    </div>
  );
}
