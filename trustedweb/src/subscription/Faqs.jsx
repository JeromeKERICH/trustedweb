import { useState } from "react";

export default function FaqSection() {
  const faqs = [
    {
      question: "Will I get spam if I subscribe?",
      answer:
        "Nope. You’ll only receive 1–2 clarity-packed emails per month no salesy nonsense or junk.",
    },
    {
      question: "Can I unsubscribe anytime?",
      answer:
        "Absolutely. Every email includes a clear unsubscribe link. One click and you're out no hard feelings.",
    },
    {
      question: "Is this only for beginners?",
      answer:
        "Not at all. Whether you're building your first website or refining your fifth, the insights and tools apply at all levels.",
    },
    {
      question: "What if I already have a developer?",
      answer:
        "Even better. You'll learn how to communicate clearly, ask sharper questions, and get the most from your developer relationship.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="w-full bg-white py-16 px-4 md:px-20 border-t border-gray-100">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4 text-center">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Everything you might wonder about subscribing, using our resources, or working with us, answered clearly.
        </p>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-xl shadow-sm mb-4">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-4 md:p-6 text-left focus:outline-none"
              >
                <span className="text-gray-800 font-medium text-base md:text-lg">
                  {faq.question}
                </span>
                <span className="text-teal-600 text-xl md:text-2xl">
                  {activeIndex === index ? "−" : "+"}
                </span>
              </button>
              {activeIndex === index && (
                <div className="px-4 md:px-6 pb-4 text-gray-600 text-sm md:text-base">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
