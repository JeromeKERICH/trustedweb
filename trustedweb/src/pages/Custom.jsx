import { Link } from 'react-router-dom';
import { useEffect } from 'react';

function CustomDevelopment() {

    useEffect(() => {
            window.scrollTo(0, 0);
        }, []);
  return (
    <section className="py-16 px-4 md:px-[10%] max-w-6xl mx-auto">

      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight mb-4">
          Custom Web Development
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
          Build a website tailored exactly to your business with full transparency, smart tech choices, and zero shortcuts.
        </p>
      </div>



{/* CTA */}
      <div className="bg-teal-600 text-white rounded-2xl p-8 text-center shadow-lg mb-16">
        <p className="text-xl font-medium mb-2">Custom projects start at</p>
        <p className="text-5xl font-bold mb-2">$1,500 USD</p>
        <p className="text-sm mb-4">Final pricing depends on project scope</p>
        <Link
          to="/contact"
          className="inline-block bg-white text-teal-700 font-semibold py-3 px-6 rounded-full hover:bg-gray-100 transition"
        >
          Request a Discovery Call
        </Link>
        <p className="text-xs mt-3 opacity-80">We only take 2 custom projects per month</p>
      </div>
      {/* Sections */}
      <div className="grid md:grid-cols-3 gap-8 mb-16">

        <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200 shadow-sm">
          <h2 className="text-xl font-semibold text-teal-700 mb-3">Ideal For</h2>
          <ul className="space-y-2 text-gray-700 text-base leading-relaxed">
            <li>• Established businesses needing custom features</li>
            <li>• Founders ready to scale beyond DIY sites</li>
            <li>• Projects where clarity & control matter most</li>
          </ul>
        </div>

        <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200 shadow-sm">
          <h2 className="text-xl font-semibold text-teal-700 mb-3">What’s Included</h2>
          <ul className="space-y-2 text-gray-700 text-base leading-relaxed">
            <li>• Custom frontend & backend (no templates)</li>
            <li>• Responsive, fast-loading design</li>
            <li>• Admin dashboard (optional)</li>
            <li>• Tech stack recommendations</li>
            <li>• 30-day post-launch support</li>
          </ul>
        </div>

        <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200 shadow-sm">
          <h2 className="text-xl font-semibold text-teal-700 mb-3">We Prioritize</h2>
          <ul className="space-y-2 text-gray-700 text-base leading-relaxed">
            <li>• Clear communication (no tech overwhelm)</li>
            <li>• Transparent timelines & pricing</li>
            <li>• Scalability (build once, grow easily)</li>
            <li>• Ownership — you control your site, not me</li>
          </ul>
        </div>

      </div>

      {/* How it works section */}
      <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm mb-16">
        <h2 className="text-2xl font-semibold text-teal-700 mb-6 text-center">How We Work Together</h2>
        <ol className="space-y-4 text-gray-700 text-base leading-relaxed list-decimal list-inside max-w-3xl mx-auto">
          <li><span className="font-semibold">Clarity Call:</span> We discuss your vision, goals, and must-haves.</li>
          <li><span className="font-semibold">Website Blueprint:</span> You receive a full scope, timeline & quote.</li>
          <li><span className="font-semibold">Development:</span> We build in weekly transparent milestones.</li>
          <li><span className="font-semibold">Launch & Support:</span> Smooth handover + 30-day support. </li>
        </ol>
      </div>

      

    </section>
  );
}


export default CustomDevelopment;