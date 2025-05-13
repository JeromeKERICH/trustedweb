import { useEffect, useState } from 'react';
import { supabase } from '../utils/supabaseClient';

export default function LibraryPage() {
  const [resources, setResources] = useState([]);

  const fetchResources = async () => {
    const { data } = await supabase
      .from('resources')
      .select('*')
      .eq('published', true)
      .order('published_at', { ascending: false });

    setResources(data);
  };

  useEffect(() => {
    fetchResources();
  }, []);

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Web Clarity Library</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {resources.map(resource => (
          <div key={resource.id} className="bg-white rounded shadow overflow-hidden hover:shadow-lg transition">
            {resource.image_url && (
              <img src={resource.image_url} alt={resource.title} className="w-full h-48 object-cover"/>
            )}
            <div className="p-4">
              <h2 className="text-lg font-semibold mb-2">{resource.title}</h2>
              <p className="text-sm text-gray-500 mb-2">By {resource.author} | {new Date(resource.published_at).toLocaleDateString()}</p>
              <p className="text-gray-700 text-sm">{resource.content.slice(0, 120)}...</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
