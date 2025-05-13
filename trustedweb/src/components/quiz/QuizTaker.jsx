import { useEffect, useState } from "react";
import { supabase } from "../../supabaseClient";

export default function QuizTaker() {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answersSelected, setAnswersSelected] = useState([]);
  const [result, setResult] = useState(null);

  const fetchQuestionsWithAnswers = async () => {
    const { data, error } = await supabase
      .from("quiz_questions")
      .select(`id, question, quiz_answers(id, answer, result_id)`);
    if (error) console.error(error);
    else setQuestions(data);
  };

  const calculateResult = async () => {
    const counts = {};

    answersSelected.forEach((ans) => {
      const resultId = ans.result_id;
      counts[resultId] = (counts[resultId] || 0) + 1;
    });

    const topResultId = Object.entries(counts).sort((a, b) => b[1] - a[1])[0]?.[0];
    if (!topResultId) return;

    const { data, error } = await supabase
      .from("quiz_results")
      .select("*")
      .eq("id", topResultId)
      .single();

    if (error) console.error(error);
    else setResult(data);
  };

  const handleAnswer = (answer) => {
    setAnswersSelected([...answersSelected, answer]);

    if (currentIndex + 1 < questions.length) {
      setCurrentIndex(currentIndex + 1);
    } else {
      calculateResult();
    }
  };

  const restartQuiz = () => {
    setCurrentIndex(0);
    setAnswersSelected([]);
    setResult(null);
  };

  useEffect(() => {
    fetchQuestionsWithAnswers();
  }, []);

  if (questions.length === 0) {
    return <p>Loading quiz...</p>;
  }

  if (result) {
    return (
      <div className="bg-white shadow rounded p-6 max-w-xl mx-auto mt-6 text-center">
        <h2 className="text-2xl font-bold mb-4">Your Recommended Website Type</h2>
        <h3 className="text-xl font-semibold text-blue-600">{result.name}</h3>
        <p className="mt-2 text-gray-700">{result.description}</p>
        <button
          className="mt-6 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          onClick={restartQuiz}
        >
          Take Quiz Again
        </button>
      </div>
    );
  }

  const currentQ = questions[currentIndex];

  return (
    <div className="bg-white shadow rounded p-6 max-w-xl mx-auto mt-6">
      <h2 className="text-xl font-bold mb-4">
        Question {currentIndex + 1} of {questions.length}
      </h2>
      <p className="mb-4 text-lg">{currentQ.question}</p>
      <div className="space-y-2">
        {currentQ.quiz_answers.map((ans) => (
          <button
            key={ans.id}
            onClick={() => handleAnswer(ans)}
            className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-left"
          >
            {ans.answer}
          </button>
        ))}
      </div>
    </div>
  );
}
