import { Link } from 'react-router-dom';
import { useEffect } from 'react';

function WebsitePlanningBlueprint() {

    useEffect(() => {
            window.scrollTo(0, 0);
        }, []);

        
  return (
    <section className="py-16 px-4 md:px-[10%] max-w-5xl mx-auto">

      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight mb-4">
          Website Planning Blueprint
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
          A crystal-clear roadmap for your website. Avoid wasted time, confusion, and costly mistakes.
        </p>
      </div>

      {/* What's included */}
      <div className="grid md:grid-cols-2 gap-8 mb-16">

        <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200 shadow-sm">
          <h2 className="text-2xl font-semibold text-teal-700 mb-4">What's Included</h2>
          <ul className="space-y-3 text-gray-700 text-base leading-relaxed list-disc list-inside mb-3">
            <li>Custom website structure tailored to your business</li>
            <li>Recommended tech stack (explained simply)</li>
            <li>User journey flow diagrams</li>
            <li>Clear content checklist</li>
            <li>Estimated timeline + budget overview</li>
          </ul>
        </div>

        <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200 shadow-sm">
          <h2 className="text-2xl font-semibold text-teal-700 mb-4">Why You Need It</h2>
          <ul className="space-y-3 text-gray-700 text-base leading-relaxed list-disc list-inside mb-3">
            <li>Gain full clarity before building</li>
            <li>Communicate clearly with any developer</li>
            <li>Avoid scope creep & costly revisions</li>
            <li>Confidently plan with realistic expectations</li>
            <li>Save thousands by doing it right the first time</li>
          </ul>
        </div>

      </div>

      {/* Pricing box */}
      <div className="bg-teal-600 text-white rounded-2xl p-8 text-center shadow-lg mb-16">
        <p className="text-xl font-medium mb-2">One-time Investment</p>
        <p className="text-5xl font-bold mb-2">$249 USD</p>
        <p className="text-sm mb-4">Delivered within 3 business days after clarity call</p>
        <Link
          to="/contact"
          className="inline-block bg-white text-teal-700 font-semibold py-3 px-6 rounded-full hover:bg-gray-100 transition"
        >
          Book Your Planning Session
        </Link>
        <p className="text-xs mt-3 opacity-80">Includes a free 30-min clarity call</p>
      </div>

      {/* Optional Guarantee or Testimonial section (optional later) */}
    </section>
  );
}

export default WebsitePlanningBlueprint