import { PhoneCall, LayoutTemplate, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: <PhoneCall className="w-10 h-10 text-teal-600" />,
    title: 'Web Clarity Call',
    desc: 'A free 15-min session to answer your website questions and guide your next best step.',
    link: '#',
  },
  {
    icon: <LayoutTemplate className="w-10 h-10 text-teal-600" />,
    title: 'Website Planning Blueprint',
    desc: 'Get a personalized roadmap: recommended structure, tech stack, key features & checklist.',
    link: '/planning',
  },
  {
    icon: <ShieldCheck className="w-10 h-10 text-teal-600" />,
    title: 'Website Audit',
    desc: 'Already have a site? We’ll diagnose issues, check security, and optimize performance.',
    link: '/audit',
  },
];

function ServicesPreview() {
  return (
    <section className="bg-white py-6 md:py-10 px-[4%] md:px-[10%] max-w-7xl mx-auto">
      <div className="text-center mb-10">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Services that Bring Clarity</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Whether you’re just starting or fixing a mess, these services help you build smarter, safer, and stress-free.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {services.map((item) => (
          <a
            href={item.link}
            key={item.title}
            className="bg-gray-50 border border-gray-200 rounded-xl p-6 flex flex-col items-center text-center hover:shadow-md hover:bg-teal-50 transition h-full"
          >
            <div className="mb-4">{item.icon}</div>
            <h3 className="text-lg font-semibold text-teal-700 mb-2">{item.title}</h3>
            <p className="text-sm text-gray-600 mb-4">{item.desc}</p>
            <span className="text-teal-600 font-medium hover:underline mt-auto">Learn More →</span>
          </a>
        ))}
      </div>

      {/* CTA Button to services page */}
      <div className="text-center mt-10">
        <Link to="/services"
          className="inline-block bg-teal-600 text-white font-semibold py-3 px-6 rounded-lg shadow hover:bg-teal-700 transition"
        >
          See All Services
        </Link>
      </div>
    </section>
  );
}


export default ServicesPreview;