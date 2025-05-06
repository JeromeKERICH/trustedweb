import { Link } from 'react-router-dom';
import { useEffect } from 'react';

function PreWebsiteCoaching() {

    useEffect(() => {
            window.scrollTo(0, 0);
        }, []);

  return (
    <section className="py-16 px-4 md:px-[10%] max-w-6xl mx-auto">

      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight mb-4">
          Pre-Website Clarity Coaching
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
          Before you spend $1,000s building a website, let's make sure you know exactly what you need, why you need it, and how to get it with full confidence.
        </p>
      </div>

      {/* Benefits grid */}
      <div className="grid md:grid-cols-2 gap-8 mb-16">

        <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200 shadow-sm">
          <h2 className="text-2xl font-semibold text-teal-700 mb-4">Perfect For You If:</h2>
          <ul className="space-y-3 text-gray-700 text-base leading-relaxed list-disc list-inside">
            <li>You're unsure what type of website you need</li>
            <li>You're comparing developer quotes & confused</li>
            <li>You’ve been burned before by vague promises</li>
            <li>You want to budget smartly & avoid tech traps</li>
          </ul>
        </div>

        <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200 shadow-sm">
          <h2 className="text-2xl font-semibold text-teal-700 mb-4">We’ll Clarify Together:</h2>
          <ul className="space-y-3 text-gray-700 text-base leading-relaxed list-disc list-inside">
            <li>Website purpose & best-fit tech stack</li>
            <li>Must-have features vs. nice-to-have</li>
            <li>Realistic timelines & budgets</li>
            <li>How to spot red flags when hiring devs</li>
            <li>Your website content & user journey</li>
          </ul>
        </div>

      </div>

      {/* Process Section */}
      <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm mb-16">
        <h2 className="text-2xl font-semibold text-teal-700 mb-6 text-center">What You Get</h2>
        <ul className="space-y-4 text-gray-700 text-base leading-relaxed max-w-3xl mx-auto list-disc list-inside">
          <li>60-min private Zoom session (recorded)</li>
          <li>Custom Website Planning Blueprint PDF</li>
          <li>Clarity on exact tech/tools you need (and don't)</li>
          <li>1 week of follow-up Q&A via email/WhatsApp</li>
        </ul>
      </div>

      {/* Pricing box */}
      <div className="bg-teal-600 text-white rounded-2xl p-8 text-center shadow-lg mb-16">
        <p className="text-xl font-medium mb-2">One-time Coaching Session</p>
        <p className="text-5xl font-bold mb-2">$199 USD</p>
        <p className="text-sm mb-4">Includes PDF Blueprint + 7-day support</p>
        <Link
          to="/contact"
          className="inline-block bg-white text-teal-700 font-semibold py-3 px-6 rounded-full hover:bg-gray-100 transition"
        >
          Book Your Clarity Session
        </Link>
        <p className="text-xs mt-3 opacity-80">Limited slots available per month</p>
      </div>

    </section>
  );
}

export default PreWebsiteCoaching;