import { Link } from "react-router-dom";
import { useEffect } from "react";


function Services() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
      <section className="py-12 px-[4%] md:px-[10%] max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">Our Services</h1>
        <p className="text-lg text-gray-600 mb-8 text-center">
          Get clarity, avoid scams, and build a website that actually works for your business, with expert guidance at every step.
        </p>
  
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  
          {/* Service 1 — Web Clarity Call */}
          <div className="bg-white p-6 rounded shadow hover:shadow-md transition flex flex-col">
            <h2 className="text-xl font-semibold mb-2 text-teal-700">Web Clarity Call</h2>
            <p className="text-gray-600 text-sm flex-grow mb-3">
              A 15-minute clarity session to answer your burning questions, review proposals, and help you avoid common traps.
            </p>
            <ul className="text-gray-500 text-sm list-disc list-inside mb-3">
              <li>Free or low-cost consult</li>
              <li>Ask anything, no jargon</li>
              <li>Walk away with confidence</li>
            </ul>
            <a href="#" className="inline-block mt-auto bg-teal-600 text-white text-sm font-medium py-2 px-4 rounded hover:bg-teal-700 transition text-center">
              Book a Call
            </a>
          </div>
  
          {/* Service 2 — Website Planning Blueprint */}
          <div className="bg-white p-6 rounded shadow hover:shadow-md transition flex flex-col">
            <h2 className="text-xl font-semibold mb-2 text-teal-700">Website Planning Blueprint</h2>
            <p className="text-gray-600 text-sm flex-grow mb-3">
              A custom deliverable that outlines your website’s structure, recommended tech stack, must-haves, and next steps.
            </p>
            <ul className="text-gray-500 text-sm list-disc list-inside mb-3">
              <li>Detailed project blueprint</li>
              <li>Clear scope & features</li>
              <li>Developer-ready checklist</li>
            </ul>
            <Link to="/planning" className="inline-block mt-auto bg-teal-600 text-white text-sm font-medium py-2 px-4 rounded hover:bg-teal-700 transition text-center">
              Get Your Blueprint
            </Link>
          </div>
  
          {/* Service 3 — Website Audit */}
          <div className="bg-white p-6 rounded shadow hover:shadow-md transition flex flex-col">
            <h2 className="text-xl font-semibold mb-2 text-teal-700">Website Audit</h2>
            <p className="text-gray-600 text-sm flex-grow mb-3">
              Already have a site but facing issues? I’ll audit the tech, performance & usability — and show you exactly what to fix.
            </p>
            <ul className="text-gray-500 text-sm list-disc list-inside mb-3">
              <li>Detailed audit report</li>
              <li>Prioritized fixes</li>
              <li>Clarity on next steps</li>
            </ul>
            <Link to="/audit" className="inline-block mt-auto bg-teal-600 text-white text-sm font-medium py-2 px-4 rounded hover:bg-teal-700 transition text-center">
              Request Audit
            </Link>
          </div>

          <div className="bg-white p-6 rounded shadow hover:shadow-md transition flex flex-col">
            <h2 className="text-xl font-semibold mb-2 text-teal-700">Custom Development</h2>
            <p className="text-gray-600 text-sm flex-grow mb-3">
              Need a custom solution? I can help you build a website that meets your unique needs and goals.
            </p>
            <ul className="text-gray-500 text-sm list-disc list-inside mb-3">
              <li>Tailored development</li>
              <li>Responsive design</li>
              <li>Ongoing support</li>
            </ul>
            <Link to="/custom" className="inline-block mt-auto bg-teal-600 text-white text-sm font-medium py-2 px-4 rounded hover:bg-teal-700 transition text-center">
              Get Started
            </Link>
            </div>

            <div className="bg-white p-6 rounded shadow hover:shadow-md transition flex flex-col">
                <h2 className="text-xl font-semibold mb-2 text-teal-700">Pre-Website Coaching</h2>
                <p className="text-gray-600 text-sm flex-grow mb-3">
                    Not sure where to start? I’ll guide you through the essentials of planning your online presence before building a website.
                </p>
                <ul className="text-gray-500 text-sm list-disc list-inside mb-3">
                    <li>Define your goals</li>
                    <li>Understand your audience</li>
                    <li>Set a clear strategy</li>
                </ul>
                <Link to="/coaching" className="inline-block mt-auto bg-teal-600 text-white text-sm font-medium py-2 px-4 rounded hover:bg-teal-700 transition text-center">
                    Learn More
                </Link>
            </div>

            <div className="bg-white p-6 rounded shadow hover:shadow-md transition flex flex-col">
                <h2 className="text-xl font-semibold mb-2 text-teal-700">Monthly Workshop</h2>
                <p className="text-gray-600 text-sm flex-grow mb-3">
                    Join our monthly workshop to stay updated on the latest web trends, tools, and strategies to grow your online presence.
                </p>
                <ul className="text-gray-500 text-sm list-disc list-inside mb-3">
                    <li>Interactive sessions</li>
                    <li>Expert insights</li>
                    <li>Actionable takeaways</li>
                </ul>
                <Link to="/training" className="inline-block mt-auto bg-teal-600 text-white text-sm font-medium py-2 px-4 rounded hover:bg-teal-700 transition text-center">
                    Reserve Your Spot
                </Link>
            </div>
            
        </div>
      </section>
    );
  }

  export default Services