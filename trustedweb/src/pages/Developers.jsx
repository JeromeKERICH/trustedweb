import { useEffect } from "react";

function Developers() {
  useEffect(() => {
          window.scrollTo(0, 0);
      }, []);
  return (
    <section className="py-12 px-[4%] md:px-[10%] max-w-7xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">For Developers</h1>
      <p className="text-lg text-gray-600 mb-8 text-center">
        Build client trust. Deliver with clarity. These resources help you become the kind of developer clients recommend and respect.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* Resource 1 — Onboarding Templates */}
        <div className="bg-white p-6 rounded shadow hover:shadow-md transition flex flex-col">
          <h2 className="text-xl font-semibold mb-2 text-teal-700">Client Onboarding Templates</h2>
          <p className="text-gray-600 text-sm flex-grow mb-3">
            Streamline your process with ready-to-use intake forms, project briefs, and communication templates.
          </p>
          <ul className="text-gray-500 text-sm list-disc list-inside mb-3">
            <li>Discovery questionnaire</li>
            <li>Project brief template</li>
            <li>Welcome email script</li>
          </ul>
          <a href="#" className="inline-block mt-auto bg-teal-600 text-white text-sm font-medium py-2 px-4 rounded hover:bg-teal-700 transition text-center">
            Get Templates
          </a>
        </div>

        {/* Resource 2 — Contracts & Boundaries Checklist */}
        <div className="bg-white p-6 rounded shadow hover:shadow-md transition flex flex-col">
          <h2 className="text-xl font-semibold mb-2 text-teal-700">Contracts & Boundaries Checklist</h2>
          <p className="text-gray-600 text-sm flex-grow mb-3">
            Protect yourself and your clients with clear contracts, scope guidelines, and payment terms.
          </p>
          <ul className="text-gray-500 text-sm list-disc list-inside mb-3">
            <li>Scope clarity checklist</li>
            <li>Sample contract clauses</li>
            <li>Payment milestones guide</li>
          </ul>
          <a href="#" className="inline-block mt-auto bg-teal-600 text-white text-sm font-medium py-2 px-4 rounded hover:bg-teal-700 transition text-center">
            Download Checklist
          </a>
        </div>

        {/* Resource 3 — Tech Explanation Templates */}
        <div className="bg-white p-6 rounded shadow hover:shadow-md transition flex flex-col">
          <h2 className="text-xl font-semibold mb-2 text-teal-700">Tech Explanation Templates</h2>
          <p className="text-gray-600 text-sm flex-grow mb-3">
            Communicate complex tech in simple language clients understand (and appreciate).
          </p>
          <ul className="text-gray-500 text-sm list-disc list-inside mb-3">
            <li>Hosting vs domain explainer</li>
            <li>Frontend vs backend visual</li>
            <li>Stack recommendation template</li>
          </ul>
          <a href="#" className="inline-block mt-auto bg-teal-600 text-white text-sm font-medium py-2 px-4 rounded hover:bg-teal-700 transition text-center">
            Access Templates
          </a>
        </div>

        {/* Resource 4 — Conflict Resolution Tips */}
        <div className="bg-white p-6 rounded shadow hover:shadow-md transition flex flex-col">
          <h2 className="text-xl font-semibold mb-2 text-teal-700">Conflict Resolution Tips</h2>
          <p className="text-gray-600 text-sm flex-grow mb-3">
            Avoid burnout and bad reviews by handling tricky client situations with confidence and fairness.
          </p>
          <ul className="text-gray-500 text-sm list-disc list-inside mb-3">
            <li>Scope creep scripts</li>
            <li>Revision limit guide</li>
            <li>Difficult client responses</li>
          </ul>
          <a href="#" className="inline-block mt-auto bg-teal-600 text-white text-sm font-medium py-2 px-4 rounded hover:bg-teal-700 transition text-center">
            Learn More
          </a>
        </div>

      </div>
    </section>
  );
}


export default Developers;