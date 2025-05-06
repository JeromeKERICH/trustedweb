

function WhatsAppListCTA() {
  return (
    <section className="bg-teal-600 text-white py-12 px-4 md:px-[10%] max-w-5xl mx-auto rounded-2xl shadow-lg my-16 text-center">

      <div className="mb-6">
    
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Join the WhatsApp Clarity List
        </h2>
        <p className="text-lg md:text-xl text-teal-100 max-w-2xl mx-auto">
          Weekly tips, scam alerts & website insights, straight to your phone. No spam. Just clarity when you need it most.
        </p>
      </div>

      <a
        href="https://wa.me/254729353537?text=I'm%20interested%20in%20the%20Web%20Clarity%20List!"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-white text-teal-700 font-semibold py-3 px-8 rounded-full shadow hover:bg-gray-100 transition text-lg"
      >
        Join on WhatsApp →
      </a>

    </section>
  );
}

export default WhatsAppListCTA;
