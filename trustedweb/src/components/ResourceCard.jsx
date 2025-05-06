// src/components/ResourceCard.jsx
import React from 'react';

const fallbackImage = '/path/to/default/image.jpg'; // Replace with the actual path to your fallback image

const ResourceCard = ({ article }) => {
  const { Title, Excerpt, coverImage } = article;

  const imageUrl = coverImage?.data?.attributes?.url
  ? `http://localhost:1337${coverImage.data.attributes.url}`
  : fallbackImage;

  return (
    <section className="py-6 md:py-10 px-[4%] md:px-[10%] max-w-7xl mx-auto">
    <div className="rounded-lg overflow-hidden shadow hover:shadow-lg transition">
      <img src={imageUrl} alt={Title} className="w-full h-30 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{Title}</h3>
        <p className="text-gray-600 text-sm mb-4">{Excerpt}</p>
        <a href="#" className="text-teal-600 hover:underline">
          Read More →
        </a>
      </div>
    </div>
    </section>
  );
};

export default ResourceCard;
