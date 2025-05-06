export default function StorySection() {
    return (
      <section className="bg-white py-12 md:py-20 border-t border-gray-200 px-[4%] md:px-[10%]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-1 lg:grid-cols-2 gap-12 items-center">
  
          {/* Video block */}
          <div className="w-full">
            <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-xl shadow-lg border border-gray-200">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
                title="My Story Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
  
          {/* Text content */}
          <div className="text-start md:text-left">
            <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900 mb-6 text-center">
              I’ve been there.
            </h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Years ago, I made the same mistakes many business owners do when building their first website. I hired the wrong people, misunderstood the jargon, and wasted thousands on a project that didn’t serve my business. 
            </p>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              That frustration pushed me to learn exactly how websites work, so today, I make sure you never have to feel lost again.
            </p>
          </div>
  
        </div>
      </section>
    );
  }
  