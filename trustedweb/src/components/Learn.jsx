import { Lightbulb, ShieldCheck, ClipboardList, Wallet } from 'lucide-react';

const benefits = [
  {
    icon: <Lightbulb className="w-8 h-8 text-teal-600" />,
    title: 'Understand the Tech',
    desc: 'Learn how domains, hosting, and site structure really work without the jargon.',
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-teal-600" />,
    title: 'Protect Your Investment',
    desc: 'Spot red flags, avoid scams, and know exactly what you’re paying for.',
  },
  {
    icon: <ClipboardList className="w-8 h-8 text-teal-600" />,
    title: 'Plan with Confidence',
    desc: 'Use clear templates, checklists, and guides to map out your website properly.',
  },
  {
    icon: <Wallet className="w-8 h-8 text-teal-600" />,
    title: 'Budget Smartly',
    desc: 'Understand real pricing benchmarks so you don’t overpay, or under-scope.',
  },

  {
    icon: <Lightbulb className="w-8 h-8 text-teal-600" />,
    title: 'Avoid Common Pitfalls',
    desc: 'Learn the most common mistakes and how to avoid them before they happen.',
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-teal-600" />,
    title: 'Communicate Effectively',
    desc: 'Get the right questions to ask and how to talk to developers like a pro.',
  }
];

function WhatYouWillLearnSection() {
  return (
    <section className="bg-gray-50 border-t border-gray-200 py-2.5 md:py-5 px-[4%] md:px-[10%]">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-teal-600 mb-6">The Powerhouse</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
          Whether you’re building your first website or planning a redesign, these lessons will give you clarity, confidence, and control.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((item) => (
            <div key={item.title} className="bg-white rounded-xl shadow-sm p-6 flex flex-col items-center text-center hover:shadow-md transition">
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


export default WhatYouWillLearnSection;