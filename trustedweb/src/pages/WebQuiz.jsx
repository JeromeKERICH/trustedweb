import { useState, useEffect } from 'react';



function WebsiteTypeQuiz() {

    useEffect(() => {
            window.scrollTo(0, 0);
        }, []);
  const questions = [
    {
      question: "What’s the main purpose of your website?",
      options: ["Showcase my services", "Sell products online", "Share content/blog", "Build a community"]
    },
    {
      question: "How often will you update content?",
      options: ["Rarely", "Monthly", "Weekly", "Daily"]
    },
    {
      question: "What’s your top priority?",
      options: ["Attract clients", "Process sales", "Share knowledge", "Engage followers"]
    }
  ];

  const outcomes = {
    showcase: "A Professional Services Website — Best for coaches, consultants, freelancers.",
    ecommerce: "An Ecommerce Store — Perfect for selling products online with checkout features.",
    blog: "A Content-Focused Blog — Ideal for sharing articles, tutorials, and thought leadership.",
    community: "A Community Platform — Great for forums, memberships, or interactive user groups."
  };

  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [result, setResult] = useState("");

  const handleAnswer = (option) => {
    const updatedAnswers = [...answers, option];
    setAnswers(updatedAnswers);

    if (step + 1 < questions.length) {
      setStep(step + 1);
    } else {
      calculateResult(updatedAnswers);
    }
  };

  const calculateResult = (answers) => {
    const combined = answers.join(" ").toLowerCase();

    if (combined.includes("sell") || combined.includes("product") || combined.includes("sales")) {
      setResult(outcomes.ecommerce);
    } else if (combined.includes("blog") || combined.includes("share") || combined.includes("knowledge")) {
      setResult(outcomes.blog);
    } else if (combined.includes("community") || combined.includes("engage") || combined.includes("followers")) {
      setResult(outcomes.community);
    } else {
      setResult(outcomes.showcase);
    }
  };

  const restartQuiz = () => {
    setStep(0);
    setAnswers([]);
    setResult("");
  };

  return (
    <section className="py-12 px-[4%] md:px-[10%] max-w-3xl mx-auto">
      <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">What Kind of Website Do You Really Need?</h1>

      {!result ? (
        <div className="bg-white p-6 rounded shadow text-center">
          <h2 className="text-xl font-semibold mb-4 text-teal-700">{questions[step].question}</h2>
          <div className="space-y-3">
            {questions[step].options.map((option, idx) => (
              <button
                key={idx}
                onClick={() => handleAnswer(option)}
                className="w-full bg-teal-600 text-white py-2 rounded hover:bg-teal-700 transition"
              >
                {option}
              </button>
            ))}
          </div>
          <p className="text-gray-500 text-xs mt-4">Step {step + 1} of {questions.length}</p>
        </div>
      ) : (
        <div className="bg-white p-6 rounded shadow text-center">
          <h2 className="text-2xl font-semibold text-teal-700 mb-3">Your Ideal Website Type:</h2>
          <p className="text-lg text-gray-700 mb-4">{result}</p>

          <button onClick={restartQuiz} className="bg-teal-600 text-white py-2 px-4 rounded hover:bg-teal-700 transition">
            Retake Quiz
          </button>
        </div>
      )}
    </section>
  );
}

export default WebsiteTypeQuiz;