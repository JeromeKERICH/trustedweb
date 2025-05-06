import { Link } from 'react-router-dom';
import { useEffect } from 'react';

function WebsiteAudit() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
  return (
    <section className="py-16 px-4 md:px-[10%] max-w-5xl mx-auto">

      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight mb-4">
          Website Audit & Tech Check
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
          Get a clear diagnosis of what’s slowing your site down, breaking your flow, or hurting conversions with simple, actionable fixes.
        </p>
      </div>

      {/* What's included */}
      <div className="grid md:grid-cols-2 gap-8 mb-16">

        <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200 shadow-sm">
          <h2 className="text-2xl font-semibold text-teal-700 mb-4">We Check For</h2>
          <ul className="space-y-3 text-gray-700 text-base leading-relaxed">
            <li>• Site speed & performance issues</li>
            <li>• Mobile responsiveness problems</li>
            <li>• Broken links & technical errors</li>
            <li>• SEO basics (metadata, alt text, etc.)</li>
            <li>• Security vulnerabilities</li>
            <li>• User experience pain points</li>
          </ul>
        </div>

        <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200 shadow-sm">
          <h2 className="text-2xl font-semibold text-teal-700 mb-4">What You Get</h2>
          <ul className="space-y-3 text-gray-700 text-base leading-relaxed">
            <li>• A clear, non-techie report of all findings</li>
            <li>• Step-by-step recommendations to fix issues</li>
            <li>• Priority list (what’s urgent vs nice-to-have)</li>
            <li>• 15-min follow-up call to explain everything</li>
            <li>• Peace of mind before investing more</li>
          </ul>
        </div>

      </div>

      {/* Pricing box */}
      <div className="bg-teal-600 text-white rounded-2xl p-8 text-center shadow-lg mb-16">
        <p className="text-xl font-medium mb-2">One-time Investment</p>
        <p className="text-5xl font-bold mb-2">$149 USD</p>
        <p className="text-sm mb-4">Delivered within 2 business days</p>
        <Link
          to="/contact"
          className="inline-block bg-white text-teal-700 font-semibold py-3 px-6 rounded-full hover:bg-gray-100 transition"
        >
          Book Your Website Audit
        </Link>
        <p className="text-xs mt-3 opacity-80">Includes a 15-min follow-up call</p>
      </div>

    </section>
  );
}


export default WebsiteAudit;