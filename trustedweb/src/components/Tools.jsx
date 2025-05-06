import { HelpCircle, Calculator, CheckSquare, MessageCircleIcon} from 'lucide-react';
import { Link } from 'react-router-dom';

const tools = [
  {
    icon: <HelpCircle className="w-10 h-10 text-teal-600" />,
    title: 'Website Type Quiz',
    desc: 'Unsure what kind of site you need? Take our quiz and get clarity in 3 minutes. Get a personalized report with the best options for your needs.',
    link: '/webquiz',
  },    
  {
    icon: <Calculator className="w-10 h-10 text-teal-600" />,
    title: 'Budget Estimator',
    desc: 'Find out what you should realistically expect to pay based on your needs. Do not waste time with lowball estimates.',
    link: '/calculator',
  },
  {
    icon: <CheckSquare className="w-10 h-10 text-teal-600" />,
    title: 'Planning Checklist',
    desc: 'Download our free website planning checklist to organize your ideas clearly. It will help you get the most out of your website.',
    link: '#',
  },


  {
    icon: <MessageCircleIcon className="w-10 h-10 text-teal-600" />,
    title: 'Web Copy',
    desc: 'Understand the basics of writing web copy that converts. It is not just about having a website but a powerhouse that brings money.',
    link: '#',
  }
  
];

function InteractiveToolsPreview() {
  return (
    <section className="bg-gray-50 border-t border-gray-200 py-6 md:py-10 px-[4%] md:px-[10%] max-w-7xl mx-auto">
      <div className="text-center mb-10">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Interactive Tools to Guide You</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Use these smart tools to clarify what you need, budget confidently, and plan your website the right way, before hiring anyone.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {tools.map((item) => (
          <a
            href={item.link}
            key={item.title}
            className="bg-white border border-gray-200 rounded-xl p-6 flex flex-col items-center text-center hover:shadow-md hover:bg-teal-50 transition h-full"
          >
            <div className="mb-4">{item.icon}</div>
            <h3 className="text-lg font-semibold text-teal-700 mb-2">{item.title}</h3>
            <p className="text-sm text-gray-600 mb-4">{item.desc}</p>
            <span className="text-teal-600 font-medium hover:underline mt-auto">Try it →</span>
          </a>
        ))}
      </div>

      {/* CTA Button to full tools page */}
      <div className="text-center mt-10">
        <Link to="/tools"
          className="inline-block bg-teal-600 text-white font-semibold py-3 px-6 rounded-lg shadow hover:bg-teal-700 transition"
        >
          Explore All Tools
        </Link>
      </div>
    </section>
  );
}


export default InteractiveToolsPreview;