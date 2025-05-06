import { useState } from 'react';
import { useEffect } from 'react';




function WebsiteBudgetEstimator() {
    useEffect(() => {
            window.scrollTo(0, 0);
        }, []);
  const features = [
    { name: "Basic Website (5 pages)", cost: 800 },
    { name: "Custom Design", cost: 500 },
    { name: "Ecommerce Functionality", cost: 1200 },
    { name: "Blog / Resource Hub", cost: 400 },
    { name: "Appointment Booking System", cost: 600 },
    { name: "SEO Optimization Package", cost: 300 },
    { name: "Ongoing Maintenance (12 months)", cost: 500 }
  ];

  const [selected, setSelected] = useState([]);

  const toggleFeature = (feature) => {
    if (selected.includes(feature)) {
      setSelected(selected.filter(f => f !== feature));
    } else {
      setSelected([...selected, feature]);
    }
  };

  const totalCost = selected.reduce((acc, curr) => acc + curr.cost, 0);

  return (
    <section className="py-12 px-[4%] md:px-[10%] max-w-4xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">Website Budget Estimator</h1>
      <p className="text-lg text-gray-600 mb-6 text-center">
        Select the features you need and get an instant estimated budget. No surprises — just clarity.
      </p>

      <div className="bg-white p-6 rounded shadow space-y-4">

        {features.map((feature, idx) => (
          <div
            key={idx}
            onClick={() => toggleFeature(feature)}
            className={`flex items-center justify-between p-3 rounded cursor-pointer border ${
              selected.includes(feature) ? 'bg-teal-100 border-teal-400' : 'hover:bg-gray-50 border-gray-200'
            }`}
          >
            <span className="text-gray-800">{feature.name}</span>
            <span className="font-semibold text-teal-700">${feature.cost}</span>
          </div>
        ))}

        <div className="border-t pt-4 mt-4 text-center">
          <p className="text-xl font-semibold text-gray-800 mb-1">Estimated Total:</p>
          <p className="text-3xl font-bold text-teal-700">${totalCost}</p>
          <p className="text-gray-500 text-sm mt-1">* This is a rough estimate. Actual quotes may vary.</p>
        </div>

      </div>

      {/* Optional Reset button */}
      {selected.length > 0 && (
        <button
          onClick={() => setSelected([])}
          className="mt-6 block mx-auto bg-teal-600 text-white py-2 px-4 rounded hover:bg-teal-700 transition"
        >
          Reset Selections
        </button>
      )}
    </section>
  );
}

export default WebsiteBudgetEstimator;