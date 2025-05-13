import { Link } from 'react-router-dom';
import { useEffect } from 'react';

function MonthlyWorkshop() {

    useEffect(() => {
            window.scrollTo(0, 0);
        }, []);
  return (
    <section className="py-16 px-4 md:px-[10%] max-w-6xl mx-auto">

      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight mb-4">
          Monthly Website Clarity Workshop
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
          A live, interactive workshop where founders & creators learn how to plan, budget, and build smarter without getting lost in tech jargon.
        </p>
      </div>

       <div className="bg-teal-600 text-white rounded-2xl p-8 text-center shadow-lg mb-16">
        <p className="text-2xl md:text-4xl font-bold mb-2">First Saturday of every month</p>
        <p className="text-lg mb-4">1 PM EST · Online (via Zoom)</p>
        <p className="text-3xl text font-bold mb-2">$49 USD</p>
        <p className="text-sm mb-4">Limited to 30 participants per month</p>
        <Link
          to="/contact"
          className="inline-block bg-white text-teal-700 font-semibold py-3 px-6 rounded-full hover:bg-gray-100 transition"
        >
          Reserve Your Spot
        </Link>
        <p className="text-xs mt-3 opacity-80">Spots fill fast, first come, first served</p>
      </div>

      {/* Workshop benefits */}
      <div className="grid md:grid-cols-2 gap-8 mb-16">

        <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200 shadow-sm">
          <h2 className="text-2xl font-semibold text-teal-700 mb-4">Why Join?</h2>
          <ul className="space-y-3 text-gray-700 text-base leading-relaxed">
            <li>• Understand websites without tech overwhelm</li>
            <li>• Ask your burning questions live</li>
            <li>• Get unbiased clarity (no upsell traps)</li>
            <li>• Network with other smart founders</li>
          </ul>
        </div>

        <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200 shadow-sm">
          <h2 className="text-2xl font-semibold text-teal-700 mb-4">We’ll Cover Topics Like:</h2>
          <ul className="space-y-3 text-gray-700 text-base leading-relaxed">
            <li>• Choosing the right website type for your business</li>
            <li>• Budgeting realistically (and avoiding overpaying)</li>
            <li>• Must-know tech terms (demystified)</li>
            <li>• How to hire the right developer</li>
            <li>• Website planning templates walkthrough</li>
          </ul>
        </div>

      </div>

      {/* What’s included section */}
      <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm mb-16">
        <h2 className="text-2xl font-semibold text-teal-700 mb-6 text-center">What You Get</h2>
        <ul className="space-y-4 text-gray-700 text-base leading-relaxed max-w-3xl mx-auto list-disc list-inside">
          <li>90-min interactive live Zoom session</li>
          <li>Website Clarity Workshop Workbook (PDF)</li>
          <li>Replay recording (lifetime access)</li>
          <li>Bonus: Website Planning Checklist</li>
        </ul>
      </div>

      {/* Pricing box */}
     

      {/* Testimonial preview (optional later) */}
      {/* <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 text-center shadow-sm">
        <p className="italic text-gray-700 max-w-2xl mx-auto">“This workshop helped me save $2,000 on my website build because I knew what to ask before hiring!” — Jane D., Founder</p>
      </div> */}

    </section>
  );
}


export default  MonthlyWorkshop;