import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <section className="bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-16 md:py-24">
        <h1 className="text-1xl sm:text-4xl font-extrabold text-gray-900 leading-tight mb-6">
          BUILD WITH CLARITY.<br /> <span className="text-2xl sm:text-3xl md:text-4xl text-teal-600">NEVER GET SCAMMED AGAIN!!!   </span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Understand every step before you build. Empower yourself with the tools, knowledge, and confidence to work with any developer transparently.
        </p>
        <Link
          to="/tools"
          className="inline-block bg-teal-600 text-white font-semibold py-3 px-8 rounded-lg shadow hover:bg-teal-700 transition"
        >
          Get the Free Website Clarity Guide
        </Link>
      </div>
    </section>
  );
}

export default HeroSection;
