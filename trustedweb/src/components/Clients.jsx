import { Quote } from 'lucide-react';

const stories = [
  {
    title: 'How Sarah avoided a $3k scam',
    excerpt: 'By asking 3 key questions from our guide, Sarah realized the agency was overcharging and under-delivering.',
    link: '#',
  },
  {
    title: 'Turning Mark’s $1500 mess into a business tool',
    excerpt: 'We rebuilt Mark’s broken site into a streamlined platform that now brings in consistent leads.',
    link: '#',
  },
  {
    title: 'Lisa launched her site confidently — with no tech overwhelm',
    excerpt: 'Using the Website Planning Blueprint, Lisa skipped confusion and hired the right developer from day one.',
    link: '#',
  },
];

function ClientSuccessStoriesPreview() {
  return (
    <section className="bg-gray-50 border-t border-gray-200 py-6 md:py-10 px-[4%] md:px-[10%] max-w-7xl mx-auto">
      <div className="text-center mb-10">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Client Success Stories</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Real people. Real clarity. See how others avoided scams, fixed issues, and built websites that work.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {stories.map((story) => (
          <a
            href={story.link}
            key={story.title}
            className="bg-white border border-gray-200 rounded-xl p-6 flex flex-col hover:shadow-md hover:bg-teal-50 transition h-full"
          >
            <Quote className="w-8 h-8 text-teal-600 mb-4" />
            <h3 className="text-lg font-semibold text-teal-700 mb-2">{story.title}</h3>
            <p className="text-sm text-gray-600 mb-4">{story.excerpt}</p>
            <span className="text-teal-600 font-medium hover:underline mt-auto">Read Full Story →</span>
          </a>
        ))}
      </div>
    </section>
  );
}


export default ClientSuccessStoriesPreview;